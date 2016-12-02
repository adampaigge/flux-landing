<?php /* Template Name: Page - Landing */ ?>
<?php get_header(); ?>

<?php if (have_posts()): while (have_posts()) : the_post(); ?>
	<div class="homepage-block-wrp homepage-block-content-wrp">
		<div class="homepage-lgo-wrp"><img class="homepage-lgotxt" src="<?php echo get_template_directory_uri(); ?>/lib/asset/img/FluxLogo-Text.svg" /><?php the_title(); ?></div>
		<h1 class="homepage-txt-wrp"><?php the_field("page_intro") ?></h1>
		<a href="#" class="btn-hex bgc-orng brd-orng blend-multiply" id="btn-cta">Join Now</a>
	</div>
	<div class="homepage-block-wrp homepage-block-signup-wrp">
		<div class="homepage-signup-inr homepage-signup-form-wrp">
			<h1><?php the_field('form_intro') ?></h1>
			<?php the_field('form_text'); ?>
			<form class="site-form-wrp" id="formContact">
				<input class="site-input" id="name" name="Name" type="text" placeholder="Name">
				<input class="site-input" id="email" name="Email" type="email" placeholder="Email">
				<textarea class="site-input site-input-textarea" id="message" name="Message" rows="2" placeholder="Message"></textarea>
				<button type="submit" class="site-submit">Send</button>
			</form>
		</div>
		<div class="homepage-signup-inr homepage-signup-rsp homepage-signup-rsp-success">
			<h1><?php the_field('success_intro') ?></h1>
			<?php the_field('success_text'); ?>
		</div>
		<div class="homepage-signup-inr homepage-signup-rsp homepage-signup-rsp-fail">
			<h1><?php the_field('fail_intro') ?></h1>
			<?php the_field('fail_text'); ?>
		</div>
	</div>

	<?php the_content(); ?>
<?php endwhile; endif; ?>

<?php get_footer(); ?>
