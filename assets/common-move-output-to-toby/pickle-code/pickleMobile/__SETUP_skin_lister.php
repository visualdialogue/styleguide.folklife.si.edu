<?php
function GetDirArray($dir){
	$Adirs = array ();
	$handle=@opendir($dir);
	if($dir){
		while (false !== ($entry = @readdir($handle))){
			if($entry != '.' && $entry != '..' && substr ($entry, 0, 1 ) != "..") {
				$path = $dir.'/'.str_replace("\\", "/", $entry);
				if(is_dir($path)) {
						$Adirs[] = $entry;
				}
			}
		}
		@closedir($handle);
	}
	return $Adirs;
}

header('Content-type: text/xml');
//header("Content-type: text/plain");
print ("<list>".implode(GetDirArray('skins'), "|")."</list>");
?>