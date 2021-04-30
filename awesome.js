
$(document).ready(function()
{
	$(".about").click(function()
	{
		location.href = "home.html"
	})

	$(".mumma").mouseenter(function()
	{
		$(".mumma").css('background-image','url(mummahover.jpg)')
	})

	$(".mumma").mouseleave(function()
	{
		$(".mumma").css('background-image','url(mumma.jpg)')
	})

	$(".pita").mouseenter(function()
	{
		$(".pita").css('background-image','url(dadhover.jpg)')
	})

	$(".pita").mouseleave(function()
	{
		$(".pita").css('background-image','url(dad.jpg)')
	})

	$(".me").mouseenter(function()
	{
		$(".me").css('background-image','url(selfhover.jpg)')
	})

	$(".me").mouseleave(function()
	{
		$(".me").css('background-image','url(self.jpg)')
	})

	$(".sid").mouseenter(function()
	{
		$(".sid").css('background-image','url(brohover.jpg)')
	})

	$(".sid").mouseleave(function()
	{
		$(".sid").css('background-image','url(bro.jpg)')
	})

	$(".nishu").mouseenter(function()
	{
		$(".nishu").css('background-image','url(sisthover.jpg)')
	})

	$(".nishu").mouseleave(function()
	{
		$(".nishu").css('background-image','url(sist.jpg)')
	})

	$(".mys").mouseenter(function()
	{
		$(".mys").css('background-image','url(Block2.jpg)')
	})

	$(".mys").mouseleave(function()
	{
		$(".mys").css('background-image','url(Block.jpg)')
	})

	$(".dinner").addClass("hidden")

	$(".phone").click(function()
	{
		$(".dinner").removeClass("hidden")
		$(".dinner").addClass("box")

		setTimeout(function()
		{
			$(".dinner").removeClass("box")
			$(".dinner").addClass("hidden")
		}, 6000);
	})

	$(".ig").click(function()
	{
		location.href = "https://www.instagram.com/lakhani.twinkle/"
	})

	$(".email").click(function()
	{
		window.location.href = "mailto:twinkle14081997@gmail.com?subject=Subject&body=message%20goes%20here"
	})

	// Redirect
	$(".mumma").click(function()
	{
		location.href="mother.html"
	})

	$(".pita").click(function()
	{
		location.href="father.html"
	})

	$(".me").click(function()
	{
		location.href="self.html"
	})

	$(".sid").click(function()
	{
		location.href="brother.html"
	})

	$(".nishu").click(function()
	{
		location.href="sister.html"
	})

	$(".mys").click(function()
	{
		location.href="mystery.html"
	})
})
