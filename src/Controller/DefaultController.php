<?php

namespace App\Controller;

use App\Entity\Review;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * Class DefaultController
 * @package App\Controller
 */
class DefaultController extends AbstractController {

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index() {
        $doctrine = $this->getDoctrine();
        $reviewRepo = $doctrine->getRepository(Review::class);
        return $this->render('default/index.html.twig', ['reviews' => $reviewRepo->findAll()]);
    }
}