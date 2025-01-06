<?php

ob_start();
include('projects.php');
$html = ob_get_contents();

file_put_contents('projects.html', $html);

ob_end_clean();

echo "HTML file created: projects.html";
