<?php /* Template Name: Page - Landing */ ?>
<?php get_header(); ?>

<?php if (have_posts()): while (have_posts()) : the_post(); ?>
	<div class="homepage-content">
		<div class="homepage-lgo-wrp"><img class="homepage-lgotxt" src="<?php echo get_template_directory_uri(); ?>/lib/asset/img/FluxLogo-Text.svg" /><?php the_title(); ?></div>
	</div>

	<?php the_content(); ?>
<?php endwhile; endif; ?>

<?php get_footer(); ?>
