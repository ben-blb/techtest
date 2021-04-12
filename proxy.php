<?php
$contents = file_get_contents("https://torre.bio/api/bios/".$_GET['user']);
if($contents !== false){
    echo $contents;
}
?>