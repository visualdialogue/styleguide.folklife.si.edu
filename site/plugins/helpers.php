<? class LJH {

	/***********
	* Converts rgb to hex for quick styleguide creation
	* from http://stackoverflow.com/a/32962720 
	************/
	public static function rgbToHex ($R, $G, $B) {

		$R = dechex($R);
		if (strlen($R)<2)
		$R = '0'.$R;

		$G = dechex($G);
		if (strlen($G)<2)
		$G = '0'.$G;

		$B = dechex($B);
		if (strlen($B)<2)
		$B = '0'.$B;

		return '#' . $R . $G . $B;
	}
}