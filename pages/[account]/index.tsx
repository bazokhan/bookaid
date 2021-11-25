import { useAccountByID } from 'hooks/useAccounts';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

// type FormValues = {
//   amount: number,
//   date?: Date,
//   categoryID?: number,
//   categoryName?: string,
//   categoryType?: string,
//   payerID?: number,
//   payerName?: string,
//   payerType?: string,
//   payeeID?: number,
//   payeeName?: string,
//   payeeType?: string,
//   userID: number
// };

const Account = () => {
  const { query } = useRouter();
  const { account, loading, error } = useAccountByID({
    accountID: Number(query.account)
  });
  console.log(account, loading, error);

  const { register, handleSubmit } = useForm();

  const onSubmit = useCallback(async values => {
    console.log(values);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="amount">amount: </label>
        <input
          type="number"
          {...register('amount')}
          placeholder="enter amount"
        />
        <input type="date" {...register('date')} placeholder="enter date" />
        <label htmlFor="category">
          category
          <select {...register('category')}>
            {['a', 'b'].map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="payee">
          payee
          <select {...register('payee')}>
            {['a', 'b'].map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add</button>
        <button type="reset">Cancel</button>
      </form>
    </div>
  );
};

export default Account;
