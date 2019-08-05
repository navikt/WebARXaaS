import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Alert from 'react-bootstrap/Alert';
import NavFrontendSpinner from 'nav-frontend-spinner';
import DatasetTable from './DatasetTable/DatasetTable';
import ExportAttribute from './ExportAttributeTypeButton/ExportAttributeTypeButton';
import ImportAttribute from './ImportAttributeTypeButton/ImportAttributeTypeButton';
import './__css__/DatasetTableWrapper.css';


const useStyles = makeStyles({
  paper: {
    padding: ' 1em 0 2em 0',
  },
});


const DatasetTableWrapper = (props) => {
  const classes = useStyles();
  const {
    loadingDataset, setAttributes, dataset, attributes, fileName,
  } = props;

  let content = '';

  if (loadingDataset) {
    content = (
      <div className="dataset-table-wrapper">
        <NavFrontendSpinner transparent />
      </div>
    );
  } else if (dataset.length > 1) {
    content = (
      <div className="dataset-table-wrapper">
        <Paper className={classes.paper} elevation={3}>
          <Alert variant="info">
          Previewing first 100 of
            {' '}
            {dataset.length}
            {' '}
          rows in
            {' '}
            {fileName}
          </Alert>
          <ImportAttribute
            setAttributes={setAttributes}
          />
          <ExportAttribute
            attributes={attributes}
            fileName={fileName}
          />
          <DatasetTable
            setAttributes={setAttributes}
            dataset={dataset}
            attributes={attributes}
          />
        </Paper>
      </div>
    );
  }

  return content;
};

export default DatasetTableWrapper;
