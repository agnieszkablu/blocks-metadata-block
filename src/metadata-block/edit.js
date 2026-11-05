import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import './editor.scss';

export default function Edit() {

	const postType = useSelect( ( select ) => select( 'core/editor' ).getCurrentPostType() );
	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
	const subtitleValue = meta?._blocks_course_post_subtitle || '';
	const onSubtitleChange = ( value ) => setMeta( { ...meta, _blocks_course_post_subtitle: value } );
	return (
		<div { ...useBlockProps() }>
			{ subtitleValue || subtitleValue.length === 0 && (
				<TextControl
					label={ __( 'Post Subtitle', 'blocks-metadata-block' ) }
					value={ subtitleValue }
					onChange={ onSubtitleChange }
				/>
			) }
		</div>
	);
}
