<?php /* Template Name: Page - Landing */ ?>
<?php get_header(); ?>

<?php if (have_posts()): while (have_posts()) : the_post(); ?>
	<div class="homepage-content">
		<div class="homepage-lgo-wrp"><img class="homepage-lgotxt" src="<?php echo get_template_directory_uri(); ?>/lib/asset/img/FluxLogo-Text.svg" /><?php the_title(); ?></div>
		<h1 class="homepage-txt-wrp"><?php the_field("page_intro") ?></h1>
		<a href="#" class="btn-hex bgc-orng brd-orng" id="btn-cta">Join Now</a>
	</div>
	<div class="homepage-signup">
		<h1><?php the_field('form_intro') ?></h1>
		<?php the_field('form_text'); ?>
		<form class="site-form-wrp" id="formContact">
			<input class="site-input" id="name" name="Name" type="text" placeholder="Name">
			<input class="site-input" id="email" name="Email" type="email" placeholder="Email">
			<textarea class="site-input site-input-textarea" id="message" name="Message" rows="2" placeholder="Message"></textarea>
			<button type="submit" class="site-submit">Send</button>
		</form>
	</div>

	<?php the_content(); ?>
<?php endwhile; endif; ?>

<?php get_footer(); ?>
