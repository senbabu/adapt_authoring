// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
define(function(require) {

	var EditorModel = require('editorGlobal/models/editorModel');

	var EditorArticleModel = EditorModel.extend({

		urlRoot: '/api/content/article',
		initialize: function() {},
		_parent:'contentObjects',
        _siblings:'articles',
        _children: 'blocks'
	});

	return EditorArticleModel;

});
