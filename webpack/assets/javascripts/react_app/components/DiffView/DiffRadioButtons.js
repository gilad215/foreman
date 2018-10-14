import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ButtonGroup, Button } from 'patternfly-react';

const btnClass = (stateView, btnView) =>
  classNames('diff-button', { active: stateView === btnView });

const radioButton = (stateView, btnView, changeState) => (
  <Button
    className={btnClass(stateView, btnView)}
    id={`${btnView}-btn`}
    onClick={() => changeState(btnView)}
    bsStyle={stateView === btnView ? 'primary' : 'default'}
  >
    {btnView}
  </Button>
);

const DiffRadioButtons = ({ stateView, changeState }) => (
  <div id="diff-radio-buttons">
    <ButtonGroup>
      {radioButton(stateView, 'split', changeState)}
      {radioButton(stateView, 'unified', changeState)}
    </ButtonGroup>
  </div>
);

DiffRadioButtons.propTypes = {
  stateView: PropTypes.string.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default DiffRadioButtons;
