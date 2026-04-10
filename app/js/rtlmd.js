(function(){

	var initUrl = 'https://rtlmd.productivity.directory/initcontent.md';

	$(document).ready(function(){
		if(localStorage!='' && localStorage['content']!=null){
			$('textarea').val(localStorage['content']);
		}else{
			$.get(initUrl)
			.done(function( data ) {
				$('textarea').val(data);
			});
		}


		$('textarea').autogrow();

	   	var content = $('textarea').val();

	    $('#output').html(marked(content));

		setInterval(function(){
			var content = $('textarea').val();
			localStorage['content'] = content;
	    	$('#output').html(marked(content));
		}, 3000);

		$('#download-pdf').on('click', function() {
			var output = document.getElementById('output');

			// Create a clone to style for PDF without affecting the page
			var clone = output.cloneNode(true);
			clone.style.direction = 'rtl';
			clone.style.fontFamily = "'Open Sans', 'Droid Arabic Naskh', serif";
			clone.style.padding = '1em';

			// Ensure code/pre blocks stay LTR in the PDF
			var codeBlocks = clone.querySelectorAll('code, pre');
			for (var i = 0; i < codeBlocks.length; i++) {
				codeBlocks[i].style.direction = 'ltr';
				codeBlocks[i].style.textAlign = 'left';
			}

			var opt = {
				margin:       10,
				filename:     'rtlmd-export.pdf',
				image:        { type: 'jpeg', quality: 0.98 },
				html2canvas:  { scale: 2, useCORS: true },
				jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
			};

			html2pdf().set(opt).from(clone).save();
		});
	});

}());


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-55991804-1', 'auto');
ga('send', 'pageview');
