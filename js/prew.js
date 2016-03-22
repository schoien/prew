var prew = {
	defaultPath: 'design/',
	defaultRep: 1,
	defaultMoleculesPath: 'design/molecules.html',
	defaultBuild: 'none',

	load:	function(){	
		var organisms = $(location).attr('search');
		if(organisms === ''){organisms = this.defaultBuild;}
		organisms = organisms.replace('?', '');
		var organismsArray = organisms.split(':');
		var i = 0;
		this.contentLoop(organismsArray,i);
	},

	contentLoop: function(organismsArray,i){
		if (i < organismsArray.length){	
			$.get(this.defaultPath+organismsArray[i]+'.html', function(data){			
		   	$('body').append(data);
		   	i +=1;
		   	if (i === organismsArray.length){
			   	prew.getMolecules();
			   	/* Scripts run after page is bulidt */
		   	}
		   	prew.contentLoop(organismsArray,i);
		   });
		}
	},
	
	getMolecules: function(){
		var moleculeHolders = $.find('molecule');
		$.get(prew.defaultMoleculesPath, function(data){
			data = $(data);
			for(var i=0; i < moleculeHolders.length; i++){
				var molecule = $.grep(data, function(e) { return $(e).attr('data-molecule') === $(moleculeHolders[i]).attr('data-molecule'); });
				var nrOf = $(moleculeHolders[i]).attr('data-nr');
				var out = molecule;
				if (nrOf === undefined ){nrOf = 1;}
				if (nrOf >1){out = prew.multiplyMolecule(molecule, nrOf);}
				$(moleculeHolders[i]).replaceWith(out);
			}
		});
	},
	
	multiplyMolecule: function(molecule, nr){
		var returnValue = "";
		molecule = $(molecule).prop('outerHTML');
		for(var n=0; n<nr; n++){
			returnValue += molecule;
		}
		returnValue = $.parseHTML(returnValue);
		return(returnValue);
	}
};