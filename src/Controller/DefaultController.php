<?php

namespace App\Controller;

use App\Entity\Review;
use App\Service\ContactService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class DefaultController
 * @package App\Controller
 */
class DefaultController extends AbstractController
{

    /**
     * @return Response
     */
    public function index()
    {
        $doctrine = $this->getDoctrine();
        $reviewRepo = $doctrine->getRepository(Review::class);
        return $this->render('default/index.html.twig', ['reviews' => $reviewRepo->findAll()]);
    }

    /**
     * Route appelé par le script AJAX permettant de réaliser une demande de contact.
     * @param Request $request
     * @param ContactService $contactService
     * @return Response la réponse récupéré en ajax (un tableau)
     */
    public function contact(Request $request, ContactService $contactService)
    {
        if ($request->isXmlHttpRequest()) {
            $contactName = $_POST['contact__name'];
            $contactMail = $_POST['contact__mail'];
            $contactMessage = nl2br($_POST['contact__message']);
            $data = $contactService->sendMailToFlopAdmins($contactMail, $contactName, $contactMessage);
            return new Response(json_encode($data));
        }
    }
}