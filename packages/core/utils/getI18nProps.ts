import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface IOptions {
  locale?: string;
  additionalNamespaces?: string[];
}

export const getI18nProps = async ({
  locale,
  additionalNamespaces,
}: IOptions) => {
  const _locale = locale || 'en';
  return await serverSideTranslations(
    _locale,
    ['common', ...(additionalNamespaces || [])]
    // nextI18NextConfig
  );
};

export default getI18nProps;
