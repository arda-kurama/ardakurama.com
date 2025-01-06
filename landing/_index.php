<?php

ob_start();
include('index.php');
$html = ob_get_contents();

file_put_contents('index.html', $html);

ob_end_clean();

echo "HTML file created: index.html";
