<?php 

/**
 * Get video from Client Account via api
 *
 */

function _getVideos($videos) {
	
    require_once(__DIR__ . '/../../../../config/folklife.si.edu/vimeo-config.php'); // get api creds
    require_once(__DIR__ . '/resources/vimeo.php-1.2.3/src/Vimeo/Vimeo.php'); // vimeo api php library

    // echo '<pre>';
    // print_r($past_event_video);
    // echo '<pre>';

    // cache handling, from http://christianvarga.com/a-very-simple-twitter-cache/
    // error_reporting( 0 ); // don't let any php errors ruin the feed
    $cache_file = dirname(__FILE__  ).'/cache/'.'vimeo-cache.php';
    $modified = filemtime( $cache_file );
    $now = time();
    $interval = 900; // fifteen minutes
    // $interval = 1;
    // check for cache
    if ( !$modified || ( ( $now - $modified ) > $interval ) ) {

        // get it fresh
        $lib = new \Vimeo\Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);
        // $response = $lib->request('/users/bostondesigncenter/videos/', array('per_page' => 25), 'GET');

        // for each video, call API
        foreach($videos as $index => $video_data) {

            // get id
            $vimeo_video_link = $video_data['past_event_video'];

            // get vimeo id from url, from http://stackoverflow.com/a/10489007
            $vimeo_video_id = (int) substr(parse_url($vimeo_video_link, PHP_URL_PATH), 1);

            $single_video = $lib->request("/videos/$vimeo_video_id", array('per_page' => 1), 'GET');
            // $response = serialize($response);

            $response[$index] = $single_video;

            // throw the id in there for later use with vimeo js api
            $response[$index]['body']['id'] = $vimeo_video_id;

            if ( $response ) {
              file_put_contents($cache_file, serialize($response)); // serialize b/c array data
            }

        }

    }

    // get new or cached vimeo data
    $response = unserialize(file_get_contents( $cache_file )); // unserialize b/c was array data

    // echo '<pre>';
    // print_r($response);
    // echo '</pre>';

    return $response;

}

/**
 * The {{ vimeo:pastEvents }} tag
 * Gets all {{ events }} listed in past-events page and grabs Vimeo data for them and displays with html
 * 
 * @return string|array
 */
function videos()
{

    // get video from past-events page via Statamic API and unique page ID
    $pastEvents = \Statamic\API\Page::whereuri('/past-events');

    $pastEventListing = $pastEvents->get('events');

    // echo '<pre>';
    // // print_r($response['body']);
    // print_r($pastEventListing);
    // echo '<pre>';

    // get video data from Vimeo
    $response = $this->_getVideos($pastEventListing);

    // initialize html for return
    // $html = '';

    // loop through response to get video links and titles
    foreach($response as $index => $video_data) {
        $iframe = $video_data['body']['embed']['html'];
        $video_id = $video_data['body']['id'];
        // $iframe_with_api = preg_replace('/src="(.*?)"/', 'src="${1}&api=1" id="test-video"', $iframe);
        $iframe_with_api = preg_replace('/src="(.*?)"/', 'src="${1}&player_id=test-video&api=1" id="test-video"', $iframe);

        // data prep for modal
        $thumbnail = $video_data['body']['pictures']['sizes'][2]['link']; // get link to thumbnail image that is 295x166 px
        $title = $video_data['body']['name'];
        $description = $video_data['body']['description'];

        // $html .= "<div class='past-event video-gallery__item block $stripes' data-iframe='$iframe_with_api' data-video-id='$video_id' data-title='$title' data-description='$description'>" . 
        //                  "<div class='block__inner'>" .
        //                  "<a data-remodal-target='modal'>" .
        //                  "<div class='video-gallery__thumbnail__wrapper'>" . 
        //                  "<img class='video-gallery__thumbnail' src='$thumbnail' alt='$title' />" .
        //                  "<div class='video-gallery__play-button' ></div>" .
        //                  "</div><div class='past-event__title'>$title</div></a></div></div>";

        // make object of all videos and their data
        $videos[$index]['stripes'] = $stripes;
        $videos[$index]['video_iframe'] = htmlspecialchars($iframe_with_api);
        $videos[$index]['video_id'] = $video_id;
        $videos[$index]['title'] = $title;
        $videos[$index]['description'] = $description;
        $videos[$index]['thumbnail'] = $thumbnail;
               
    }
    // // return $html;
    // echo '<pre>';
    // print_r($videos);
    // echo '</pre>';

    // return $html;

  // return 'hello from the plugin!!!';
    return $this->parseLoop($videos);
}