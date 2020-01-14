/**
 * Internal dependencies
 */
import { registerBlocks } from '../';

describe( 'registerBlocks', () => {
	const Edit = () => {};

	it( 'should not register any block if there is no Block Lab block passed', () => {
		registerBlocks( {}, {}, Edit );
		expect( global.wp.blocks.registerBlockType ).toHaveBeenCalledTimes( 0 );
	} );

	it( 'should register a single block', () => {
		const blockName = 'test_post';
		const blockLabBlocks = {};
		blockLabBlocks[ blockName ] = {
			title: 'example-post',
			category: 'widget',
			keywords: [ 'foobaz', 'example' ],
		};

		registerBlocks( {}, blockLabBlocks, Edit );
		expect( global.wp.blocks.registerBlockType ).toHaveBeenCalledWith(
			blockName,
			expect.objectContaining( {
				title: expect.any( String ),
				category: expect.any( String ),
				icon: expect.any( String ),
				keywords: expect.any( Array ),
				attributes: expect.any( Object ),
				edit: expect.any( Function ),
				save: expect.any( Function ),
			} )
		);
	} );

	it( 'should register two blocks', () => {
		registerBlocks(
			{},
			{
				test_text: {
					title: 'example-post',
					category: 'widget',
					keywords: [ 'foobaz', 'example' ],
				},
				test_email: {
					title: 'example-email',
					category: 'widget',
					keywords: [ 'example-keyword', 'another' ],
				},
			},
			Edit
		);

		expect( global.wp.blocks.registerBlockType ).toHaveBeenNthCalledWith(
			2,
			expect.any( String ),
			expect.objectContaining( {
				title: expect.any( String ),
				category: expect.any( String ),
				icon: expect.any( String ),
				keywords: expect.any( Array ),
				attributes: expect.any( Object ),
				edit: expect.any( Function ),
				save: expect.any( Function ),
			} )
		);
	} );
} );