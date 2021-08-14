const TransactionsTable = ({ transactions, page, setPage, sortData }) => {

  const head = transactions.length ? Object.keys(transactions[0]).filter((key) => !key.startsWith('_')) : [];

  const data = transactions?.map((transaction) => Object.keys(transaction)
      .filter((key) => !key.startsWith('_'))
      .map((key) => transaction[key])
  );

  return (
    <div style={{ margin: '5rem' }}>
      <table className="table table-striped table-bordered caption-top">
        <caption>Wallet Transactions</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            {head?.map((h) => {
              if (h === 'date') {
                return (<th style={{ cursor: 'pointer' }} onClick={() => sortData('sortByDate')} key={h} scope="col">{h}</th>)
              }
              if (h === 'amount') {
                return (<th style={{ cursor: 'pointer' }} onClick={() => sortData('sortByAmount')} key={h} scope="col">{h}</th>)
              }
              return (<th key={h} scope="col">{h}</th>)
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((d, i) => (
            <tr key={i}>
              <th key={`row-${i}`} scope="row">{i+1}</th>
              {d?.map((val, j) => (
                <td key={`${val}-${i}-${j}`}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!(page === 0 && data?.length < 10) && (<nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li onClick={() => setPage(page-1)} style={{ cursor: 'pointer' }} className={`page-item page-link ${page === 0 ? 'disabled' : ''}`}>Previous</li>
          <li onClick={() => setPage(page+1)} style={{ cursor: 'pointer' }} className={`page-item page-link ${(page >= 0 && data.length < 10) ? 'disabled' : ''}`}>Next</li>
        </ul>
      </nav>)}
    </div>
  );
}

export default TransactionsTable;
