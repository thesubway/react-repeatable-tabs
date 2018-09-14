# react-repeatable-tabs

## Installation:

```shell
npm install --save react-repeatable-tabs
```

## Example:

```javascript
import RepeatableTabs, { Tab } from "react-repeatable-tabs";

/*
ExampleClass has 4 tabs.
According to this example:
Tab 0 will show tab element 0.
Tab 1 will show tab element 1.
Tab 2 will show tab element 1.
Tab 3 will show tab element 0.
*/
class ExampleClass extends Component {
  handleTabClick() {}
  render() {
    return (
      <div>
        <RepeatableTabs onClickTab={this.handleTabClick.bind(this)}>
          <Tab name={"Tab 0"}>
            <div>This is the 0th tab element</div>
          </Tab>
          <Tab name={"Tab 1"}>
            <div>This is tab element 1</div>
          </Tab>
          <Tab name={"Tab 2"} copyIdx={1} />
          <Tab name={"Tab 3"} copyIdx={0} />
        </RepeatableTabs>
      </div>
    );
  }
}
```
