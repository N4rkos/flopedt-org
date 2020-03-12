<?php

namespace App\Controller;

use App\Service\AuthorsService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContributorsController extends AbstractController
{

    public function index(AuthorsService $authorsService)
    {
        $authors = $authorsService->getAuthors();
        return $this->render('contributors/index.html.twig', [
            'contributors' => $authors,
        ]);
    }
}
