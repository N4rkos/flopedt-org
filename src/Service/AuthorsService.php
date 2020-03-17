<?php


namespace App\Service;


/**
 * Class AuthorsService contient les fonctions associées à la récupération des auteurs depuis le fichier AUTHORS.txt
 * stocker sur le git.
 * @package App\Service
 * @see https://framagit.org/flopedt/FlOpEDT/-/blob/master/AUTHORS
 */
class AuthorsService
{
    private const AUTHORS_SECTION_SEPARATORS = "#";
    private const AUTHORS_SECTION_ITEM = "-";
    private const REPLACEMENT_CHAR = "";
    private const URL_TO_AUTHORS = 'https://flopedt.iut-blagnac.fr/static/AUTHORS';

    /**
     * Récupère le contenu du fichier AUTHORS sur le serveur et retourne un tableau formatté.
     * @return array les auteurs
     */
    public function getAuthors() : array
    {
        $data = file_get_contents(self::URL_TO_AUTHORS);
        $data = explode("\n", $data);
        return $this->_buildAuthors($data);
    }

    /**
     * Construit le tableau des auteurs
     * @param array $data
     * @return array
     */
    private function _buildAuthors(array $data) : array {
        $currentSec = "";
        $results = [];
        foreach ($data as $line) {
            if (strpos($line, self::AUTHORS_SECTION_SEPARATORS) === 0) {
                $sec = str_replace(self::AUTHORS_SECTION_SEPARATORS, self::REPLACEMENT_CHAR, $line);
                $currentSec = $sec;
                $results[$sec] = [];
            }else if (strpos($line, self::AUTHORS_SECTION_ITEM) === 0) {
                $line = str_replace(self::AUTHORS_SECTION_ITEM, self::REPLACEMENT_CHAR, $line);
                $results[$currentSec][] = $line;
            }
        }
        return $results;
    }
}