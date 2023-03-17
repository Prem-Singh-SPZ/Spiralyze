<?php

// WS Child Functions

// Tour Exit Model Start
function hook_css() {
  include( get_stylesheet_directory() .'/tour_exit_model_0001a.php');
}
add_action('wp_head', 'hook_css');
// Tour Exit Model END
/* Paycor Custom Functionality */
function enqueue_styles() {
   wp_enqueue_style( 'paycor-style', get_stylesheet_directory_uri().'/style.css?'.time(), [], '1.0.5.3.6');
   // wp_enqueue_script('paycor-scripts', get_stylesheet_directory_uri() .'/js/paycor.js', array('jquery'), filemtime(), true);
   wp_enqueue_script('paycor-scripts', get_stylesheet_directory_uri() .'/js/paycor2.js', array('jquery'), filemtime(get_stylesheet_directory() .'/js/paycor2.js'), true);
   if (is_page( '7geese' ) ):
      wp_enqueue_script('seven-geese', get_stylesheet_directory_uri() .'/js/seven-geese.js', array('jquery'), null, true);
   endif;
   if (is_page( 'newton-software' ) ):
      wp_enqueue_script('newton-software', get_stylesheet_directory_uri() .'/js/newton-software.js', array('jquery'), null, true);
   endif;
   if (is_page( 'ximble' ) ):
      wp_enqueue_script('ximble', get_stylesheet_directory_uri() .'/js/ximble.js', array('jquery'), null, true);
   endif;
   if (is_page( 'recruiting-software' ) ):
      wp_enqueue_script('recruiting-software', get_stylesheet_directory_uri() .'/js/recruiting-software.js', array('jquery'), null, true);
   endif;
}
add_action( 'wp_enqueue_scripts', 'enqueue_styles' );

/* resource pages Model */
function add_theme_scripts() {
    // wp_enqueue_style( 'wp-model-upgrade-style', get_stylesheet_directory_uri() . '/assets/css/wp-model-upgrade.css', array(), '1.1', 'all');
    // wp_enqueue_script( 'wp-model-upgrade-script', get_stylesheet_directory_uri() . '/js/wp-model-upgrade.js', array ('jquery'), 1.1, true);
     wp_enqueue_style( 'sticky-nav-7010-style', get_stylesheet_directory_uri() . '/assets/css/product-pages-sticky-nav-with-email-field-7010.css', array(), '1.1', 'all');
    wp_enqueue_script( 'sticky-nav-7010-script', get_stylesheet_directory_uri() . '/js/product-pages-sticky-nav-with-email-field-7010-2022.js', array ('jquery'), 1.1, true);
    wp_enqueue_style( 'hcm-software-product-pages-style', get_stylesheet_directory_uri() . '/assets/css/hcm-software-product-pages.css', array(), '1.1', 'all');
    wp_enqueue_script( 'hcm-software-product-pages-script', get_stylesheet_directory_uri() . '/js/hcm-software-product-pages.js', array ('jquery'), 1.1, true);
}
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );

/* Extend Life of Preview Link */

add_filter( 'ppp_nonce_life', 'my_nonce_life' );
function my_nonce_life() {
    return 60 * 60 * 24 * 14; // 14 days
}

/* Multiple Featured Images */

add_filter( 'kdmfi_featured_images', function( $featured_images ) {
   $args = array(
     'id' => 'featured-image-2',
     'desc' => 'Second Featured Image',
     'label_name' => 'Featured Image 2',
     'label_set' => 'Set featured image 2',
     'label_remove' => 'Remove featured image 2',
     'label_use' => 'Set featured image 2',
     'post_type' => array( 'news_press' ),
   );

   $featured_images[] = $args;

   return $featured_images;
 });


/**** Download functionality *****/
add_action("wp_ajax_inc_download_counter", "inc_download_counter");
add_action("wp_ajax_nopriv_inc_download_counter", "inc_download_counter");
function inc_download_counter(){
    if(isset($_POST['postid']) && !empty($_POST['postid'])){

          $get_count = get_post_meta($_POST['postid'],"spz_download_counter",true);
          $count_new = !empty($get_count) ? $get_count+1 : 1;
          update_post_meta($_POST['postid'],"spz_download_counter",$count_new);

          $hero_section  =   get_field('hero_section',$_POST['postid']);
          $show_downloads   =   '';

          $start_download_range = 0;
          if($hero_section['starting_download_range'] != ''){
                $start_download_range = $hero_section['starting_download_range'];
          }

          $new_count = $start_download_range+$count_new;
          if($new_count >= 100){
              $show_downloads   =   ''.number_format($new_count).' And Counting...!';
         }
          echo $show_downloads;
    }
    die();
}

/**** For Clear form submit cout on filed value change *****/
add_filter('acf/save_post', 'my_compare_acf_fields', 1);
function my_compare_acf_fields($post_id) {
  global $post;

        $hero_obj  =   get_field_object('hero_section',$post_id);
        if($hero_obj){

              $hero_key = $hero_obj['key'];
              $range_key = '';
              $new_value = '';
              $old_value = '';

              if( have_rows('hero_section', $post_id) ):
                  while( have_rows('hero_section', $post_id) ): the_row();

                    $select_obj = get_sub_field_object('starting_download_range');
                    if($select_obj){
                      $range_key = $select_obj['key'];
                      $old_value = $select_obj['value'];
                    }

                 endwhile;
              endif;

              if(isset($_POST['acf'][$hero_key][$range_key])){
                  $new_value = $_POST['acf'][$hero_key][$range_key];
              }

              if($new_value != $old_value){
                    update_post_meta($post_id,"spz_download_counter",0);
               }
      }

}

add_action( 'acf/input/admin_footer', 'wd_acf_color_palette' );
function wd_acf_color_palette() { ?>
<script type="text/javascript">
(function($) {
     acf.add_filter('color_picker_args', function( args, $field ){
          // add the hexadecimal codes here for the colors you want to appear as swatches
          args.palettes = ['#58595b','#949698','#f6f6f6','#ffffff','#f06f1f','#fce2d2','#59a545','#deedda','#0c9ed9','#ceecf8','#1071a1','#cfe2ec','#193d6a','#563684','#ddd6e6']
          return args;
     });
})(jQuery);
</script>
<?php }

function wd_admin_style() {
     wp_enqueue_style( 'admin-styles', get_stylesheet_directory_uri().'/assets/css/admin.css' );
}
add_action( 'admin_enqueue_scripts', 'wd_admin_style' );


/**
 * Add a sidebar.
 */
function wpb_widgets_init() {

    register_sidebar( array(
        'name' => __( 'Footer 1 SPZ', 'wpb' ),
        'id' => 'footer-1-spz',
        'description' => __( 'Widgets in this area will appear below the footer', 'wpb' ),
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget' => '</aside>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ) );

    register_sidebar( array(
        'name' =>__( 'Footer 2 SPZ', 'wpb'),
        'id' => 'footer-2-spz',
        'description' => __( 'Widgets in this area will appear below the footer', 'wpb' ),
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget' => '</aside>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ) );
    register_sidebar( array(
        'name' => __( 'Footer 3 SPZ', 'wpb' ),
        'id' => 'footer-3-spz',
        'description' => __( 'Widgets in this area will appear below the footer', 'wpb' ),
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget' => '</aside>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ) );
    }

add_action( 'widgets_init', 'wpb_widgets_init' );

function add_calculator_new_scripts() {
    if (get_page_by_path('plans-pricing/small-business')->ID == get_the_ID()) {
      wp_enqueue_style( 'small-business', get_stylesheet_directory_uri() . '/assets/css/small-business.css', array(), filemtime(get_stylesheet_directory() . '/assets/css/small-business.css'));
      wp_enqueue_script( 'small-business', get_stylesheet_directory_uri() . '/js/small-business.js', array('jquery'), filemtime(get_stylesheet_directory() . '/js/small-business.js'), true);
    }
    if (get_page_by_path('plans-pricing/mid-market')->ID == get_the_ID()) {
      wp_enqueue_style( 'mid-market', get_stylesheet_directory_uri() . '/assets/css/mid-market.css', array(), filemtime(get_stylesheet_directory() . '/assets/css/mid-market.css'));
      wp_enqueue_script( 'mid-market', get_stylesheet_directory_uri() . '/js/mid-market.js', array('jquery'), filemtime(get_stylesheet_directory() . '/js/mid-market.js'), true);
    }
}
add_action( 'wp_enqueue_scripts', 'add_calculator_new_scripts' );


function paycor_small_business_calculator() {
  return file_get_contents(get_stylesheet_directory() . '/inc/small-business-bundle-template.php');
}
add_shortcode('paycor_small_business_calculator','paycor_small_business_calculator');

function paycor_mid_market_calculator() {
  return file_get_contents(get_stylesheet_directory() . '/inc/mid-market-bundle-template.php');
}
add_shortcode('paycor_mid_market_calculator','paycor_mid_market_calculator');

// Short Code For Recent 3 Post | Resource Center START

function talent_post() {
  $datas = get_posts(array(
    'post_type' => 'article',
    'numberposts' => 3,
    'orderby'   => 'term_id',
    'order' => 'DESC',
    'tax_query' => array(
      array(
        'taxonomy' => 'topic',
        'field' => 'term_id',
        'terms' => 24
      )
    )
  ));

  $html = '<div class="latest_post">';
  if ($datas) {
    foreach ( $datas as $post ) :
      setup_postdata( $post );
      $html .= '<div class="col-md-6 col-lg-4 archive-default-container">
                  <div class="card-link archive-view archive-default archive-article talent-management">
                      <div class="archive-featured-image">
                      </div>
                      <div class="archive-body">
                          <p class="post-label"><span>Article </span></p>
                          <div class="title-excerpt">
                              <p class="archive-duration">'._ws_get_duration($post->ID).'</p>
                              <h3 class="post-title">
                                <a class="post-link"
                                  href="'.get_the_permalink($post->ID).'">
                                    '.get_the_title($post->ID).'
                                </a>
                              </h3>
                          </div>
                          <div class="recent_post_content">
                            <p>'.get_the_excerpt($post->ID).'</p>
                          </div>
                          <div class="wp-block">
                              <a class="button-arrow has-navy-color" href="'.get_the_permalink($post->ID).'">Read Now</a>
                          </div>
                      </div>
                  </div>
                </div>';
    endforeach;
    wp_reset_postdata();
    $html .= '</div>';
    return $html;
  }
}
add_shortcode('talent_post','talent_post');

function workforce_post() {
  $datas = get_posts(array(
    'post_type' => 'article',
    'numberposts' => 3,
    'orderby'   => 'term_id',
    'order' => 'DESC',
    'tax_query' => array(
      array(
        'taxonomy' => 'topic',
        'field' => 'term_id',
        'terms' => 23
      )
    )
  ));

  $html = '<div class="latest_post">';
  if ($datas) {
    foreach ( $datas as $post ) :
      setup_postdata( $post );
      $html .= '<div class="col-md-6 col-lg-4 archive-default-container">
                  <div class="card-link archive-view archive-default archive-article workforce-management">
                      <div class="archive-featured-image">
                      </div>
                      <div class="archive-body">
                          <p class="post-label"><span>Article </span></p>
                          <div class="title-excerpt">
                              <p class="archive-duration">'._ws_get_duration($post->ID).'</p>
                              <h3 class="post-title">
                                <a class="post-link"
                                  href="'.get_the_permalink($post->ID).'">
                                    '.get_the_title($post->ID).'
                                </a>
                              </h3>
                          </div>
                          <div class="recent_post_content">
                            <p>'.get_the_excerpt($post->ID).'</p>
                          </div>
                          <div class="wp-block">
                            <a class="button-arrow has-navy-color" href="'.get_the_permalink($post->ID).'">Read Now</a>
                          </div>
                      </div>
                  </div>
                </div>';
            endforeach;
    wp_reset_postdata();
    $html .= '</div>';
    return $html;
  }
}
add_shortcode('workforce_post','workforce_post');

function employee_experience_post() {
  $datas = get_posts(array(
    'post_type' => 'article',
    'numberposts' => 3,
    'orderby'   => 'term_id',
    'order' => 'DESC',
    'tax_query' => array(
      array(
        'taxonomy' => 'topic',
        'field' => 'term_id',
        'terms' => 21
      )
    )
  ));

  $html = '<div class="latest_post">';
  if ($datas) {
    foreach ( $datas as $post ) :
      setup_postdata( $post );
      $html .= '<div class="col-md-6 col-lg-4 archive-default-container">
                  <div class="card-link archive-view archive-default archive-article employee-experience-management">
                      <div class="archive-featured-image">
                      </div>
                      <div class="archive-body">
                          <p class="post-label"><span>Article </span></p>
                          <div class="title-excerpt">
                              <p class="archive-duration">'._ws_get_duration($post->ID).'</p>
                              <h3 class="post-title">
                                <a class="post-link"
                                  href="'.get_the_permalink($post->ID).'">
                                    '.get_the_title($post->ID).'
                                </a>
                              </h3>
                          </div>
                          <div class="recent_post_content">
                            <p>'.get_the_excerpt($post->ID).'</p>
                          </div>
                          <div class="wp-block">
                              <a class="button-arrow has-navy-color" href="'.get_the_permalink($post->ID).'">Read Now</a>
                          </div>
                      </div>
                  </div>
                </div>';
    endforeach;
    wp_reset_postdata();
    $html .= '</div>';
    return $html;
  }
}
add_shortcode('employee_experience_post','employee_experience_post');

function benefits_administration_post() {
  $datas = get_posts(array(
    'post_type' => 'article',
    'numberposts' => 3,
    'orderby'   => 'term_id',
    'order' => 'DESC',
    'tax_query' => array(
      array(
        'taxonomy' => 'topic',
        'field' => 'term_id',
        'terms' => 25
      )
    )
  ));

  $html = '<div class="latest_post">';
  if ($datas) {
    foreach ( $datas as $post ) :
      setup_postdata( $post );
      $html .= '<div class="col-md-6 col-lg-4 archive-default-container">
                  <div class="card-link archive-view archive-default archive-article benefits-management">
                      <div class="archive-featured-image">
                      </div>
                      <div class="archive-body">
                          <p class="post-label"><span>Article </span></p>
                          <div class="title-excerpt">
                              <p class="archive-duration">'._ws_get_duration($post->ID).'</p>
                              <h3 class="post-title">
                                <a class="post-link"
                                  href="'.get_the_permalink($post->ID).'">
                                    '.get_the_title($post->ID).'
                                </a>
                              </h3>
                          </div>
                          <div class="recent_post_content">
                            <p>'.get_the_excerpt($post->ID).'</p>
                          </div>
                          <div class="wp-block">
                              <a class="button-arrow has-navy-color" href="'.get_the_permalink($post->ID).'">Read Now</a>
                          </div>
                      </div>
                  </div>
                </div>';
    endforeach;
    wp_reset_postdata();
    $html .= '</div>';
    return $html;
  }
}
add_shortcode('benefits_administration_post','benefits_administration_post');

// Short Code For Recent 3 Post | Resource Center END

$understrap_includes = array(
    '/ACF.php'                  // ACF.
);

foreach ( $understrap_includes as $file ) {
    require_once get_stylesheet_directory() . '/inc' . $file;
}

/*if ( !function_exists('scripts_and_css') ) {
  function scripts_and_css() {
      if(is_page(15580) || is_page(15610) || is_page(15614) || is_page(15621) || is_page(15625) || is_page(15628) || is_page(18044) 
      || is_page(15634) || is_page(15639) || is_page(15642) || is_page(15649) || is_page(15653) || is_page(15656)
      || is_page(15659) || is_page(15672) || is_page(15677) || is_page(15685) || is_page(17380) || is_page(15049))
      {

          wp_enqueue_style('temp-1', get_stylesheet_directory_uri() . '/assets/css/hcm-software_who-we-serve.css?'.time(), '', null);
          wp_enqueue_script('temp-1', get_stylesheet_directory_uri() . '/js/hcm-software_and_who-we-serve.js?'.time(), null);
          //wp_dequeue_style( 'layout', get_template_directory_uri().'/css/layout.css', '', null );
      }
  }
}
add_action('wp_enqueue_scripts', 'scripts_and_css');*/
add_theme_support( 'custom-logo' );

add_shortcode("show_custom_features_table", "call_custom_features_table");
function call_custom_features_table(){

  $f_plan = get_field('first_plan', get_the_ID());
  $s_plan = get_field('second_plan', get_the_ID());
  $t_plan = get_field('third_plan', get_the_ID());
  $fo_plan = get_field('fourth_plan', get_the_ID());

  $f_btn_href = '';
  if(!empty($f_plan['pricing_btn']['btn_link'])){
    $f_btn_href = 'href="'.$f_plan['pricing_btn']['btn_link'].'"';
  }
  $s_btn_href = '';
  if(!empty($s_plan['pricing_btn']['btn_link'])){
    $s_btn_href = 'href="'.$s_plan['pricing_btn']['btn_link'].'"';
  }
  $t_btn_href = '';
  if(!empty($t_plan['pricing_btn']['btn_link'])){
    $t_btn_href = 'href="'.$t_plan['pricing_btn']['btn_link'].'"';
  }
  $fo_btn_href = '';
  if(!empty($fo_plan['pricing_btn']['btn_link'])){
    $fo_btn_href = 'href="'.$fo_plan['pricing_btn']['btn_link'].'"';
  }

  $features = get_field('feature_pricing_list');

  $all_services = array();
  $f_plan_choices = array();
  $s_plan_choices = array();
  $t_plan_choices = array();
  $fo_plan_choices = array();

  if( have_rows('feature_pricing_list') ):
    $i = 0;
    // Loop through rows.
    while( have_rows('feature_pricing_list') ) : the_row();

        // Load sub field value.

        $all_services[$i]['service_name'] = get_sub_field('service_name');
        $all_services[$i]['info_tooltip'] = get_sub_field('info_tooltip');
        $all_services[$i]['tooltip_menu'] = get_sub_field('tooltip_menu');
        $all_services[$i]['is_submenu'] = get_sub_field('is_submenu');

        if(get_sub_field('features_type') == 'checkbox'){

          $f_plan_choices[$i]['first_plan'] = (get_sub_field('first_plan')['checkmark'] == 'yes') ? '<figure class="wp-block-image chk" data-id="'.$i.'"><img decoding="async" src="https://paycorws.wpengine.com/wp-content/uploads/2022/04/pricing-point.png" alt="right" class="wp-image-13558"></figure>' : '<div class="blank chk" data-id="'.$i.'">&nbsp;</div>';
          $s_plan_choices[$i]['second_plan'] = (get_sub_field('second_plan')['checkmark'] == 'yes') ? '<figure class="wp-block-image chk" data-id="'.$i.'"><img decoding="async" src="https://paycorws.wpengine.com/wp-content/uploads/2022/04/pricing-point.png" alt="right" class="wp-image-13558"></figure>' : '<div class="blank chk" data-id="'.$i.'">&nbsp;</div>';
          $t_plan_choices[$i]['third_plan'] = (get_sub_field('third_plan')['checkmark'] == 'yes') ? '<figure class="wp-block-image chk" data-id="'.$i.'"><img decoding="async" src="https://paycorws.wpengine.com/wp-content/uploads/2022/04/pricing-point.png" alt="right" class="wp-image-13558"></figure>' : '<div class="blank chk" data-id="'.$i.'">&nbsp;</div>';
          $fo_plan_choices[$i]['fourth_plan'] = (get_sub_field('fourth_plan')['checkmark'] == 'yes') ? '<figure class="wp-block-image chk" data-id="'.$i.'"><img decoding="async" src="https://paycorws.wpengine.com/wp-content/uploads/2022/04/pricing-point.png" alt="right" class="wp-image-13558"></figure>' : '<div class="blank chk" data-id="'.$i.'">&nbsp;</div>';
        } else {
          $f_plan_choices[$i]['first_plan']   = !empty(get_sub_field('first_plan')['text']) ? "<div class='has_txt chk' data-id='".$i."'>".get_sub_field('first_plan')['text']."</div>" : '<div class="blank chk" data-id="'.$i.'">&nbsp;</div>';
          $s_plan_choices[$i]['second_plan']  = !empty(get_sub_field('second_plan')['text']) ? "<div class='has_txt chk' data-id='".$i."'>".get_sub_field('second_plan')['text']."</div>" : '<div class="blank chk" data-id="'.$i.'">&nbsp;</div>';;
          $t_plan_choices[$i]['third_plan']   = !empty(get_sub_field('third_plan')['text']) ? "<div class='has_txt chk' data-id='".$i."'>".get_sub_field('third_plan')['text']."</div>" : '<div class="blank chk" data-id="'.$i.'">&nbsp;</div>';;
          $fo_plan_choices[$i]['fourth_plan'] = !empty(get_sub_field('fourth_plan')['text']) ? "<div class='has_txt chk' data-id='".$i."'>".get_sub_field('fourth_plan')['text']."</div>" : '<div class="blank chk" data-id="'.$i.'">&nbsp;</div>';;
        }
    $i++;
    endwhile;
endif;

  $show_html = '<section class="pricing_table_main">
      <div class="container section-container">
        <div class="section-inner">
          <div class="pricing_row_main">
            <div class="wp-block-ws-layout-column col-3">
                <div class="is-layout-flex pricing_list_inner_row">
                    <ul>';
                      if(!empty($all_services)){

                        foreach($all_services as $s_key => $s_service){

                            $tooltip_htm = '';
                            if($s_service['info_tooltip']){
                              $tooltip_htm = '<span class="info_tooltip"><img decoding="async" src="https://paycorws.wpengine.com/wp-content/uploads/2022/04/icon-info.png" alt="Info Icon" title="Info Icon" class="info_icon info_default"><img decoding="async" src="https://paycorws.wpengine.com/wp-content/uploads/2022/04/icon-info-hover.png" alt="Info Icon" title="Info Icon" class="info_icon info_hover">';
                              
                              if(!empty($s_service['tooltip_menu'])){

                                $tooltip_htm .= '<ul>';
                                foreach($s_service['tooltip_menu'] as $t_menu){ $tooltip_htm .= '<li>'.$t_menu['menu_item_text'].'</li>'; }
                                $tooltip_htm .= '</ul>';

                              }

                            }
                            if($s_service['is_submenu']){
                              $show_html .= "<ul class='small_ul'>";
                            }
                           $show_html .= '<li data-id="'.$s_key.'">'.$s_service['service_name'].$tooltip_htm.' </li>';
                            if($s_service['is_submenu']){
                              $show_html .= "</ul>";
                            }
                          }
                        
                      }

                      $show_html .= '
                    </ul>
                </div>
            </div>
            <div class="wp-block-ws-layout-column col-8">
               <div class="wp-block-ws-layout-row row pricing_row_inner">
                  <div class="wp-block-ws-layout-column col-3 pricing_table1">
                      <div class="is-layout-flex pricing_table_inner_col">
                          <p class="has-text-align-center fee_waived has-text-color">
                            <strong></strong>
                            <strong>'.$f_plan['free_description'].'</strong>
                          </p>
                          <div class="is-layout-flow wp-block-group pricing_table_upper">
                              <h3 class="has-text-align-center pricing_table_heading has-text-color">'.$f_plan['heading'].'</h3>
                              <p class="has-text-align-center pricing_table_sub_text has-text-color">'.$f_plan['description'].'</p>
                          </div>
                          <div class="is-layout-flow wp-block-group pricing_table_bottom">
                              '.$f_plan['price_description'].'
                              <p class="pricing_table_month has-text-color">'.$f_plan['month_description'].'</p>
                              <div class="is-layout-flex wp-container-4 wp-block-buttons">
                                  <div class="wp-block-button pricing_btn">
                                      <a '.$f_btn_href.' class="wp-block-button__link wp-element-button" rel="Complete">'.$f_plan['pricing_btn']['btn_text'].'</a>
                                  </div>
                              </div>
                              '.$f_plan['free_offer'].'
                          </div>
                          <div class="is-layout-flow wp-block-group pricing_table_check">';
                          if(!empty($f_plan_choices)){
                            $targeted_f = count($f_plan_choices)-1;
                               for($i=$targeted_f; $i>=0; $i--){
                                  if($f_plan_choices[$i]['first_plan'] == '<div class="blank chk" data-id="'.$i.'">&nbsp;</div>'){
                                      unset($f_plan_choices[$i]);
                                  } else {
                                     break;
                                  }
                                }
                               foreach($f_plan_choices as $single){
                                  $show_html .= $single['first_plan'];
                              }
                          }                            
                          $show_html .= '</div>
                          <div class="is-layout-flow wp-block-group pricing_bottom_info">
                              <div class="is-layout-flex wp-container-7 wp-block-buttons">
                                <div class="wp-block-button pricing_btn">
                                   <a '.$f_btn_href.' class="wp-block-button__link wp-element-button" rel="Complete">'.$f_plan['pricing_btn']['btn_text'].'</a>
                                </div>
                              </div>
                              '.$f_plan['free_offer'].'
                          </div>
                      </div>
                  </div>
                  <div class="wp-block-ws-layout-column col-3 pricing_table2">
                      <div class="is-layout-flex pricing_table_inner_col most_popular_inner">
                          <p class="has-text-align-center most_popular">'.$s_plan['most_popular'].'</p>
                          <p class="has-text-align-center fee_waived has-text-color">
                            <strong></strong>
                            <strong>'.$s_plan['free_description'].'</strong>
                          </p>
                          <div class="is-layout-flow wp-block-group pricing_table_upper">
                              <h3 class="has-text-align-center pricing_table_heading has-text-color">'.$s_plan['heading'].'</h3>
                              <p class="has-text-align-center pricing_table_sub_text has-text-color">'.$s_plan['description'].'</p>
                          </div>
                          <div class="is-layout-flow wp-block-group pricing_table_bottom">
                              '.$s_plan['price_description'].'
                              <p class="pricing_table_month has-text-color">'.$s_plan['month_description'].'</p>
                              <div class="is-layout-flex wp-container-4 wp-block-buttons">
                                  <div class="wp-block-button pricing_btn">
                                      <a '.$s_btn_href.' class="wp-block-button__link wp-element-button" rel="Complete">'.$s_plan['pricing_btn']['btn_text'].'</a>
                                  </div>
                              </div>
                              '.$s_plan['free_offer'].'
                          </div>
                          <div class="is-layout-flow wp-block-group pricing_table_check">';
                              if(!empty($s_plan_choices)){
                                $targeted_s = count($s_plan_choices)-1;
                                for($i=$targeted_s; $i>=0; $i--){
                                  if($s_plan_choices[$i]['second_plan'] == '<div class="blank chk" data-id="'.$i.'">&nbsp;</div>'){
                                      unset($s_plan_choices[$i]);
                                  } else {
                                     break;
                                  }
                                }
                                   foreach($s_plan_choices as $single){
                                      $show_html .= $single['second_plan'];
                                  }
                              }
                          $show_html .= '</div>
                          <div class="is-layout-flow wp-block-group pricing_bottom_info">
                              <div class="is-layout-flex wp-container-7 wp-block-buttons">
                                <div class="wp-block-button pricing_btn">
                                  <a '.$s_btn_href.' class="wp-block-button__link wp-element-button" rel="Complete">'.$s_plan['pricing_btn']['btn_text'].'</a>
                                </div>
                              </div>
                              '.$s_plan['free_offer'].'
                          </div>
                      </div>
                  </div>
                  <div class="wp-block-ws-layout-column col-3 pricing_table3">
                      <div class="is-layout-flex pricing_table_inner_col">
                          <p class="has-text-align-center fee_waived has-text-color">
                            <strong></strong>
                            <strong>'.$t_plan['free_description'].'</strong>
                          </p>
                          <div class="is-layout-flow wp-block-group pricing_table_upper">
                              <h3 class="has-text-align-center pricing_table_heading has-text-color">'.$t_plan['heading'].'</h3>
                              <p class="has-text-align-center pricing_table_sub_text has-text-color">'.$t_plan['description'].'</p>
                          </div>
                          <div class="is-layout-flow wp-block-group pricing_table_bottom">
                              '.$t_plan['price_description'].'
                              <p class="pricing_table_month has-text-color">'.$t_plan['month_description'].'</p>
                              <div class="is-layout-flex wp-container-4 wp-block-buttons">
                                  <div class="wp-block-button pricing_btn">
                                      <a '.$t_btn_href.' class="wp-block-button__link wp-element-button" rel="Complete">'.$t_plan['pricing_btn']['btn_text'].'</a>
                                  </div>
                              </div>
                              '.$t_plan['free_offer'].'
                          </div>
                          <div class="is-layout-flow wp-block-group pricing_table_check">';
                          if(!empty($t_plan_choices)){
                            $targeted_t = count($t_plan_choices)-1;
                            for($i=$targeted_t; $i>=0; $i--){

                                  if($t_plan_choices[$i]['third_plan'] == '<div class="blank chk" data-id="'.$i.'">&nbsp;</div>'){
                                      unset($t_plan_choices[$i]);
                                  } else {
                                     break;
                                  }
                                }
                               foreach($t_plan_choices as $single){
                                  $show_html .= $single['third_plan'];
                              }
                          }                            
                          $show_html .= '</div>
                          <div class="is-layout-flow wp-block-group pricing_bottom_info">
                              <div class="is-layout-flex wp-container-7 wp-block-buttons">
                                <div class="wp-block-button pricing_btn">
                                  <a '.$t_btn_href.' class="wp-block-button__link wp-element-button" rel="Complete">'.$t_plan['pricing_btn']['btn_text'].'</a>
                                </div>
                              </div>
                              '.$t_plan['free_offer'].'
                          </div>
                      </div>
                  </div>
                  <div class="wp-block-ws-layout-column col-3 pricing_table4">
                      <div class="is-layout-flex pricing_table_inner_col">
                          <p class="has-text-align-center fee_waived has-text-color">
                            <strong></strong>
                            <strong>'.$fo_plan['free_description'].'</strong>
                          </p>
                          <div class="is-layout-flow wp-block-group pricing_table_upper">
                              <h3 class="has-text-align-center pricing_table_heading has-text-color">'.$fo_plan['heading'].'</h3>
                              <p class="has-text-align-center pricing_table_sub_text has-text-color">'.$fo_plan['description'].'</p>
                          </div>
                          <div class="is-layout-flow wp-block-group pricing_table_bottom">
                              '.$fo_plan['price_description'].'
                              <p class="pricing_table_month has-text-color">'.$fo_plan['month_description'].'</p>
                              <div class="is-layout-flex wp-container-4 wp-block-buttons">
                                  <div class="wp-block-button pricing_btn">
                                     <a '.$fo_btn_href.' class="wp-block-button__link wp-element-button" rel="Complete">'.$fo_plan['pricing_btn']['btn_text'].'</a>
                                  </div>
                              </div>
                              '.$fo_plan['free_offer'].'
                          </div>
                          <div class="is-layout-flow wp-block-group pricing_table_check">';
                          if(!empty($fo_plan_choices)){
                            $targeted_fo = count($fo_plan_choices)-1;
                               for($i=$targeted_fo; $i>=0; $i--){
                                  if($fo_plan_choices[$i]['fourth_plan'] == '<div class="blank chk" data-id="'.$i.'">&nbsp;</div>'){
                                      unset($fo_plan_choices[$i]);
                                  } else {
                                     break;
                                  }
                                }
                               foreach($fo_plan_choices as $single){
                                  $show_html .= $single['fourth_plan'];
                              }
                          }                            
                          $show_html .= '</div>
                          <div class="is-layout-flow wp-block-group pricing_bottom_info">
                              <div class="is-layout-flex wp-container-7 wp-block-buttons">
                                <div class="wp-block-button pricing_btn">
                                  <a '.$fo_btn_href.' class="wp-block-button__link wp-element-button" rel="Complete">'.$fo_plan['pricing_btn']['btn_text'].'</a>
                                </div>
                              </div>
                              '.$fo_plan['free_offer'].'
                          </div>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
  </section>';

  return $show_html;

}