import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { COLOURS } from '../constants/colours';

interface AlreadyHaveAccountProps {
    text: string;
    route: string;
    linkText: string;
}

const AlreadyHAveAnAccount = ({
    text,
    route,
    linkText
}: AlreadyHaveAccountProps): JSX.Element => {
    return (
        <Text
            textAlign={'center'}
            mt='1.5rem'
            fontSize={'1.5rem'}
            color={COLOURS.grey}
        >
            {text}{' '}
            <Text as='span' color='btnblue' cursor={'pointer'}>
                <Link className='page-link' to={route}>
                    {linkText}
                </Link>
            </Text>
        </Text>
    );
};

export default AlreadyHAveAnAccount;
