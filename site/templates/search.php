<?php snippet('header'); ?><div id="navspacer" class="navspacer"></div><div class="container first-container"><div class="search-message"><div class="tag">Showing 798 Results For</div><?php snippet('svg-thin-hr'); ?><div class="search-query-title"><?php echo $query; ?></div></div></div><!-- Filter--><div class="filter-outside"></div><div class="highlight-bar"><div class="container"><div class="row"><div class="col-sm-12"><div class="filter-by-title">Filter By	</div></div></div><ul class="row dropdown-wrapper"><li class="dropdown filter-dropdown col-sm-2"><label for="genre" class="filter-label">Genre</label><select id="ddl" name="genre" runat="server" onchange="javascript:document.location.href = this.value;"><option value="">World</option><option value="">American Folk</option><option value="">Latin</option><option value="">Children's</option><option value="">Blues</option></select></li><li class="dropdown filter-dropdown col-sm-2"><label for="artist" class="filter-label">Artist</label><select id="ddl" name="artist" runat="server" onchange="javascript:document.location.href = this.value;"><option value="">Various Artists</option><option value="">Pete Seeger</option><option value="">Ella Jenkins</option><option value="">The New Lost City Ramblers</option><option value="">Woody Guthrie</option></select></li><li class="dropdown filter-dropdown col-sm-2"><label for="country" class="filter-label">Country</label><select id="ddl" name="country" runat="server" onchange="javascript:document.location.href = this.value;"><option value="">United States</option><option value="">United Kingdom</option><option value="">Canada</option><option value="">USSR</option><option value="">Russia</option></select></li><li class="dropdown filter-dropdown col-sm-2"><label for="culture" class="filter-label">Culture</label><select id="ddl" name="culture" runat="server" onchange="javascript:document.location.href = this.value;"><option value="">Anglo-American</option><option value="">African American</option><option value="">Jewish</option><option value="">African Caribbean</option><option value="">Scottish</option></select></li><li class="dropdown filter-dropdown col-sm-2"><label for="instruments" class="filter-label">Instruments</label><select id="ddl" name="instruments" runat="server" onchange="javascript:document.location.href = this.value;"><option value="">Guitar</option><option value="">Vocals</option><option value="">Banjo</option><option value="">Fiddle</option><option value="">Piano</option></select></li><li class="dropdown filter-dropdown col-sm-2"><label for="language" class="filter-label">Language</label><select id="ddl" name="language" runat="server" onchange="javascript:document.location.href = this.value;"><option value="">English</option><option value="">French</option><option value="">Spanish</option><option value="">Yiddish</option><option value="">Hebrew</option></select></li><li class="dropdown filter-dropdown col-sm-2"><label for="decade" class="filter-label">Decade</label><select id="ddl" name="decade" runat="server" onchange="javascript:document.location.href = this.value;"><option value="">1960s</option><option value="">1950s</option><option value="">1970s</option><option value="">1990s</option><option value="">1980s</option></select></li><li class="dropdown filter-dropdown col-sm-2"><label for="label" class="filter-label">Label</label><select id="ddl" name="label" runat="server" onchange="javascript:document.location.href = this.value;"><option value="">Folkways Records</option><option value="">Smithsonian Folkways Recordings</option><option value="">Monitor Records</option><option value="">Arhoolie Records</option><option value="">Cook Records</option></select></li><li class="dropdown filter-dropdown col-sm-2"><label for="format" class="filter-label">Format</label><select id="ddl" name="format" runat="server" onchange="javascript:document.location.href = this.value;"><option value="">Digital Download</option><option value="">Custom CD</option><option value="">Custom Cassette</option><option value="">CD</option><option value="">LP</option></select></li><li class="dropdown filter-dropdown col-sm-2"><label for="grade-level" class="filter-label">Grade Level</label><select id="ddl" name="grade-level" runat="server" onchange="javascript:document.location.href = this.value;"><option value="">3-5</option><option value="">9-12</option><option value="">3-5|6-8</option><option value="">6-8|9-12</option><option value="">6-8</option></select></li><li class="dropdown filter-dropdown col-sm-2"><label for="sub-region" class="filter-label">Sub Region</label><select id="ddl" name="sub-region" runat="server" onchange="javascript:document.location.href = this.value;"><option value="">Northern America</option><option value="">Caribbean</option><option value="">Northern Europe</option><option value="">Southern America</option><option value="">Central America</option></select></li></ul><ul class="row dropdown-wrapper filter-more-band"><li class="col-sm-2"><!-- inside so 100% width takes bootstrap padding into account--><div class="dropdown"> <div class="first-level-dropdown-title">Culture Group</div><ul class="first-level-dropdown"><li>African American</li><li>Anglo-American</li><li>European American</li><li>African Brazilian</li><li>Cajun</li><li>Hispanic</li><li>Gullah</li><li>American</li><li>Maroon</li><li>Pikilio</li><li>African</li><li>Creole</li><li>African Caribbean</li><li>Jewish</li><li>Yoruba</li><li>Zulu</li><li>Wolof</li><li>Bantu</li><li>Irish</li><li>Kpelle</li><li>Scottish</li><li>Baule</li><li>Lucumi</li><li>Muslim</li><li>Pende</li><li>Tutsi</li><li>Apache</li><li>Bahamian</li><li>Basa</li><li>Czech-American</li><li>Ewe</li><li>Igbo</li><li>Japanese-American</li><li>Luhya</li><li>Mahafaly</li><li>Mbala</li><li>Mexican-American</li><li>Puerto Rican</li><li>Shona</li><li>Swazi</li></ul></div></li><li class="col-sm-2"><div class="dropdown"><div class="first-level-dropdown-title">Language</div><ul class="first-level-dropdown"><li>English</li><li>Spanish</li><li>Portuguese</li><li>French</li><li>Yiddish</li><li>Russian</li><li>Afrikaans</li><li>Arabic</li><li>Shona</li><li>Wolof</li><li>Chinese</li><li>German</li><li>Haitian French Creole</li><li>Hebrew</li><li>Italian</li><li>Luhya</li><li>Swahili</li><li>Zulu</li><li>Cree</li><li>French Creole</li><li>Ga</li><li>Indonesian</li><li>Korean</li><li>Tai</li><li>Yoruba</li><li>Albanian</li><li>Bantu</li><li>Gaelic-Scots</li><li>Georgian</li><li>Greek</li><li>Hebrew</li><li>Hindi</li><li>Inuktitut, Eastern Canadian</li><li>Inuktitut, Western Canadian</li><li>Inupiatun, North Alaskan</li><li>Lingala</li><li>Michif</li><li>Nootka</li><li>Pashto</li><li>Persian</li></ul></div></li><li class="col-sm-2"><div class="dropdown"><div class="first-level-dropdown-title">Instrument</div><ul class="first-level-dropdown"><li>Guitar</li><li>Vocals</li><li>Piano</li><li>Harmonica</li><li>Bass</li><li>Drum</li><li>Drums</li><li>Trumpet</li><li>Banjo</li><li>Trombone</li><li>Clarinet</li><li>Saxophone</li><li>Fiddle</li><li>Mandolin</li><li>Kazoo</li><li>Organ</li><li>Violin</li><li>Accordion</li><li>Tuba</li><li>Saxophone, tenor</li><li>Cornet</li><li>Viola</li><li>Washboard</li><li>Washboard band music</li><li>Tambourine</li><li>Agogo</li><li>Organ</li><li>Pandeiro</li><li>Atabaque</li><li>Gunga</li><li>Medio</li><li>Reco-reco</li><li>Maraca</li><li>Vocals, group</li><li>Drum kit</li><li>Bones</li><li>Flute</li><li>Ukulele</li><li>Bass guitar</li><li>Cowbells</li></ul></div></li><li class="col-sm-2"><div class="dropdown"><div class="first-level-dropdown-title">Format</div><ul class="first-level-dropdown"><li>Digital Download</li><li>Custom CD</li><li>Custom Cassette</li><li>CD</li><li>LP</li><li>7-inch</li><li>Box Set</li><li>DVD</li></ul></div></li><li class="col-sm-2"><div class="dropdown"><div class="first-level-dropdown-title">Decade</div><ul class="first-level-dropdown"><li>1990s</li><li>1960s</li><li>1950s</li><li>1970s</li><li>1980s</li><li>2000s</li><li>2010s</li></ul></div></li><li class="col-sm-2"><div class="dropdown"><div class="first-level-dropdown-title">Grade Level</div><ul class="first-level-dropdown"><li>K-2</li><li>6-8</li><li>9-12</li><li>3-5|6-8</li><li>6-8|9-12</li><li>3-5|6-8|9-12</li><li>K-2|3-5|6-8|9-12</li><li>1-2</li><li>3-5</li><li>3-5|5-6</li><li>3-5|9-12</li><li>3-6</li><li>3-8</li><li>4-5|6-8|9-12</li><li>4-8</li><li>5-6|7-8</li><li>5-6|7-12</li><li>7-12</li></ul></div></li></ul><ul class="row dropdown-wrapper visible-xs"><li class="col-sm-2"><div class="filter-button filter-more-button">More</div></li></ul></div></div><div class="container"><section class="first-section"><ul class="row"><?php foreach($pages->find('explore')->children()->find('sounds')->children()->visible() as $card): ?><?php snippet('card-album', array('card' => $card )); ?><?php endforeach; ?></ul></section></div><?php snippet('footer'); ?>