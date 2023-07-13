import styled from 'styled-components';
import {useTranslation} from "next-i18next";
import getI18nProps from '../utils/getI18nProps';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
    const {t} = useTranslation();
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.styled-components file.
     */
    return (
        <StyledPage>
            <p>{t('Welcome')}</p>
        </StyledPage>
    );
}

export async function getServerSideProps({locale}) {
    return {
        props: {
            ...(await getI18nProps({locale})),
        },
    };
}

export default Index;
