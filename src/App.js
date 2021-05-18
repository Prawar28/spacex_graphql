import './App.css';
import { useQuery, gql } from '@apollo/client';
import DataTable from 'react-data-table-component';

const GET_LAUNCH = gql`
  query {
    launches(limit: 10) {
      details
      id
    }
  }
`;


function App() {

  const { loading, error, data } = useQuery(GET_LAUNCH);
  
  if (loading) return <p>Loading...</p>;

  var columns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
      width: '120px'
    },
    {
      name: "Details",
      selector: "details",
      sortable: true,
      
    }
  ]

  console.log(data);
  return (
    <div className="App">
      <h1>Hello there</h1>
      <DataTable 
        title="Launches"
        columns={columns}
        data={data.launches}
      />
    </div>
  );
}

export default App;
