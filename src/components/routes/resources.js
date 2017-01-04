import React from 'react';
import Table from '../tables/table';
import * as Material from 'react-icons/lib/md';
import  { Tabs, Tab } from 'react-bootstrap-tabs';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Workspaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Name', dataIndex: 'name', key: ['name'], className: 'name' },
        { title: 'Status', dataIndex: 'status', key: ['status'], className: 'status' },
        { title: 'Type', dataIndex: 'type', key: ['type'], className: 'type' },
        { title: 'Memory', dataIndex: 'memory', key: ['resourcesId', 'memory'], className: 'size' },
        { title: 'CPUs', dataIndex: 'cpus', key: ['resourcesId', 'cpu'], className: 'size' },
        { title: 'Engine', dataIndex: 'engine', key: ['engine'], className: 'engine' },
      ],
    };
  }

  render() {
    const { userName, projectId } = this.props.params;
    const { workspaces, models, jobs } = this.props;
    const data = workspaces.concat(models, jobs);
    return (
      <div>
        <div className="table-toolbar">
          <Material.MdPlayArrow/>
          <Material.MdPause/>
          <Material.MdDeleteForever/>
          <Link to={`${userName}/projects/${projectId}/resources/new`}>
            <Material.MdAddCircleOutline/>
          </Link>
        </div>
        <Table
          columns={this.state.columns}
          data={data}
        />
        {tabPane}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  workspaces: state.workspaces,
  models: state.models,
  jobs: state.jobs,
});

export default connect(mapStateToProps)(Workspaces);
