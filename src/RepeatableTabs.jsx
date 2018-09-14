import React from "react";
import PropTypes from "prop-types";

const styles = {
  div: { display: "flex", marginBottom: 20 },
  line: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderBottom: "1px solid black"
  },
  tab: {
    position: "relative",
    width: 80,
    fontSize: 11
  }
};

const propTypes = {
  marginBottom: PropTypes.number,
  onClickTab: PropTypes.func
};

const defaultProps = {
  marginBottom: 20
};

class RepeatableTabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTabIndex: 0,
      activeCopyIdx: null
    };
    this.onClickTab = this.onClickTab.bind(this);
  }

  onClickTab(tabIndex, copyIdx) {
    this.setState({
      activeTabIndex: tabIndex,
      activeCopyIdx: copyIdx
    });
    this.props.onClickTab(tabIndex);
  }

  renderChildrenWithTabsApiAsProps() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.onClickTab,
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
        <div style={styles.div}>{this.renderChildrenWithTabsApiAsProps()}</div>
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
    <div style={styles.tab}>
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
      {props.isActive ? (
        <div style={styles.line} isActive={props.isActive} />
      ) : null}
    </div>
  );
};
export default RepeatableTabs;
