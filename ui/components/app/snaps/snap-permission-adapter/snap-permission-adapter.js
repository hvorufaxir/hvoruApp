
import React from 'react';
import PropTypes from 'prop-types';

export default function SnapPermissionAdapter({ snapId, permissions, showOptions, targetSubjectsMetadata, revoked, approved }) {
  return permissions.map((permission) => (
    <SnapPermissionCell
      snapId={snapId}
      showOptions={showOptions}
      connectionSubjectMetadata={targetSubjectsMetadata[permission.connection]}
      permission={permission}
      key={`permissionCellDisplay_${snapId}_${permission.connection}`}
    />
  ));
}
