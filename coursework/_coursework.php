<?php

ob_start();
include('coursework.php');
$html = ob_get_contents();

file_put_contents('coursework.html', $html);

ob_end_clean();

echo "HTML file created: coursework.html";
