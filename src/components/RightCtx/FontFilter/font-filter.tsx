import React from 'react';
import Style from './font-filter.less';
class FontFilter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    var {
      filter,
      value,
      color = '#000001',
      filterColor = '#ff0000',
    } = this.props;
    filter = filter || '';
    value = value || '';
    return (
      <>
        {value
          ? value.split(filter).map((item: any, index: any) => (
              <React.Fragment key={index}>
                <span style={{ color }} className={Style['tk-value']}>
                  {item}
                </span>
                <span
                  style={{ color: filterColor }}
                  r-if={value.split(filter).length != index + 1}
                  className={Style['tk-filter']}
                >
                  {filter}
                </span>
              </React.Fragment>
            ))
          : ''}
      </>
    );
  }
}
export default FontFilter;
