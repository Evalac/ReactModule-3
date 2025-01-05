import { Component } from 'react';

import { Controls } from './Controls/Controls';
import { Progress } from './Progress/Progress';
import { Publication } from './Publication/Publication';

class Reader extends Component {
  state = { activeIdx: 0 };

  componentDidMount() {
    const LS_Value = JSON.parse(localStorage.getItem('reader_item_idx'));

    if (LS_Value) {
      this.setState({ activeIdx: LS_Value });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'reader_item_idx',
      JSON.stringify(this.state.activeIdx)
    );
  }

  changeIdx = value => {
    this.setState(state => ({ activeIdx: state.activeIdx + value }));
  };

  render() {
    const publication = this.props.content[this.state.activeIdx];

    return (
      <div>
        <Controls
          activeIdx={this.state.activeIdx}
          content={this.props.content}
          changeIdx={this.changeIdx}
        />

        <Progress
          current={this.state.activeIdx + 1}
          total={this.props.content.length}
        />

        <Publication title={publication.title} text={publication.text} />
      </div>
    );
  }
}

export { Reader };
