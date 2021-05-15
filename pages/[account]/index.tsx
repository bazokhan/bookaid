import { useAccountByID } from 'hooks/useAccounts';
import { withApollo } from 'lib/WithApollo';
import { useRouter } from 'next/router';

const Account = () => {
  const { query } = useRouter();
  const { account, loading, error } = useAccountByID({
    accountID: Number(query.account)
  });
  console.log(account, loading, error);
  return <div>Hello from account</div>;
};

export default withApollo({ ssr: false })(Account);
