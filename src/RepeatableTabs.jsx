import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  marginBottom: PropTypes.number,
  handleTabClick: PropTypes.func
};

const defaultProps = {
  marginBottom: 0
};

class RepeatableTabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTabIndex: 0,
      activeCopyIdx: null
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tabIndex, copyIdx) {
    this.setState({
      activeTabIndex: tabIndex,
      activeCopyIdx: copyIdx
    });
    this.props.handleTabClick(tabIndex);
  }

  renderChildrenWithTabsApiAsProps() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex
      });
    });
  }

  renderActiveTabContent() {
    const { children } = this.props;
    const tabIdxShown =
      this.state.activeCopyIdx != null
        ? this.state.activeCopyIdx
        : this.state.activeTabIndex;
    return children[tabIdxShown].props.children;
  }

  render() {
    return (
      <div className="tabs">
        <StyledDiv marginBottom={this.props.marginBottom}>
          {this.renderChildrenWithTabsApiAsProps()}
        </StyledDiv>
        <div className="tabs-active-content">
          {this.renderActiveTabContent()}
        </div>
      </div>
    );
  }
}

RepeatableTabs.propTypes = propTypes;
RepeatableTabs.defaultProps = defaultProps;

export const Tab = props => {
  return (
    <StyledTab>
      <div
        onClick={event => {
          event.preventDefault();
          props.onClick(props.tabIndex, props.copyIdx);
        }}
      >
        {props.name}
        {/* i is the icon */}
        <i />
      </div>
      {props.isActive ? <StyledLine isActive={props.isActive} /> : null}
    </StyledTab>
  );
};
export default RepeatableTabs;
