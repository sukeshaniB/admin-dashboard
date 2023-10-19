import {
	Flex,
	useColorModeValue
} from '@chakra-ui/react';

//import { SearchBar } from 'components/navbar/searchBar/SearchBar';
import {SearchBar} from './searchBar/SearchBar'
import PropTypes from 'prop-types';
import React from 'react';

export default function HeaderLinks(props) {
	const { secondary } = props;
	let menuBg = useColorModeValue('white', 'navy.800');
	
	const shadow = useColorModeValue(
		'14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
		'14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
	);
	return (
		<Flex
			w={{ sm: '100%', md: 'auto' }}
			alignItems="center"
			flexDirection="row"
			bg={menuBg}
			flexWrap={secondary ? { base: 'wrap', md: 'nowrap' } : 'unset'}
			p="10px"
			borderRadius="30px"
			boxShadow={shadow}>
			<SearchBar mb={secondary ? { base: '10px', md: 'unset' } : 'unset'} me="200px" borderRadius="350px" />

		</Flex>
	);
}

HeaderLinks.propTypes = {
	variant: PropTypes.string,
	fixed: PropTypes.bool,
	secondary: PropTypes.bool,
	onOpen: PropTypes.func
};
