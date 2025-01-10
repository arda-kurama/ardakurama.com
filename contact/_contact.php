<?php

ob_start();
include('contact.php');
$html = ob_get_contents();

file_put_contents('contact.html', $html);

ob_end_clean();

echo "HTML file created: contact.html";
