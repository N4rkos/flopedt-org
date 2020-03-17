<?php


namespace App\Service;


use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class ContactService
{

    private const MAIL_TEMPLATE_FOR_ADMINS = 'emails/contact.html.twig';
    private const MAIL_TEMPLATE_COPY = 'emails/contact.html.twig';
    private const CHARSET = 'utf-8';

    protected $mailer;
    private $templating;

    public function __construct(\Swift_Mailer $mailer, \Twig_Environment $templating)
    {
        $this->mailer = $mailer;
        $this->templating = $templating;
    }

    /**
     * Envoi un mail aux administrateurs FlopEDT lorsque qu'une demande de contact est émise.
     * @param string $fromMail
     * @param string $fromName
     * @param string $message
     * @return array
     */
    public function sendMailToFlopAdmins(string $fromMail, string $fromName, string $message): array
    {
        if ($this->_isNotEmpty($fromName, $fromMail, $message)) {
            try {
                $message = (new \Swift_Message('Contact Email'))
                    ->setFrom(['contact@flopedt.org' => 'FlOpEDT.org'])
                    ->setTo('flopedt@gmail.com')
                    ->setSubject('FlOpEDT : ' . $fromName . ' vous a contacté.')
                    ->setBody(
                        $this->templating->render(
                            self::MAIL_TEMPLATE_FOR_ADMINS,
                            [
                                'message' => $message,
                                'contactName' => $fromName,
                                'contactMail' => $fromMail,
                            ]
                        ),
                        'text/html'
                    )->setCharset(self::CHARSET);
                $this->mailer->send($message);
                return $this->_checkStatus(false, "Votre demande de contact à bien été prise en compte");
            } catch (LoaderError $e) {
                return $this->_checkStatus(true, "Erreur : TWIG Loader");
            } catch (RuntimeError $e) {
                return $this->_checkStatus(true, "Erreur : TWIG Runtime");
            } catch (SyntaxError $e) {
                return $this->_checkStatus(true, "Erreur : TWIG Syntax");
            }
        } else {
            return $this->_checkStatus(true, "Les champs ne peuvent pas être vides.");
        }
    }

    /**
     * @param bool $isError
     * @param string $payload
     * @return array
     */
    private function _checkStatus(bool $isError, string $payload = "Un problème est survenu lors de la demande de contact. Veuillez réessayer"): array
    {
        return $isError ? ['response' => "ERROR", 'payload' => $payload] : ['response' => "SUCCESS", 'payload' => $payload];
    }

    /**
     * Vérifie si les champs du formulaire de contact sont biens remplis.
     * @param string $name
     * @param string $email
     * @param string $message
     * @return bool
     */
    private function _isNotEmpty(string $name, string $email, string $message): bool
    {
        return !empty($name) && !empty($email) && !empty($message);
    }
}