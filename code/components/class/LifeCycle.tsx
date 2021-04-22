import React from "react";

interface IImageLoaderProps {
  url: string;
}

export class ImageLoader extends React.Component<IImageLoaderProps> {
  constructor(props: IImageLoaderProps) {
    super(props);
    this.state = {
      status: []
    };
  }

  updateState(currentStatus: string) {
    this.setState({
      status: [...this.state.status, currentStatus]
    });
  }

  onImageLoadStart() {
    this.updateState("Image loading started!");
  }

  onImageLoaded() {
    this.updateState("Image loaded successfully!");
  }

  onLoadingError() {
    this.updateState("Image loaded successfully!");
  }

  /**
   * @description
   * - will be triggered when the state has updated
   */
  componentDidUpdate() {
    // each time when the stage get updated
    console.log(this.state);
  }

  /**
   * @description
   * - will be triggered only one time
   * - when the components gets loaded/mounted in the page
   */
  componentDidMount() {
    this.updateState("Component Mounted!");
  }

  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <img
          width="100px"
          src={this.props.url}
          alt="dynamic"
          onLoadStart={() => this.onImageLoadStart()}
          onLoad={() => this.onImageLoaded()}
          onError={() => this.onLoadingError()}
        />
        <p>{this.state.status.join("\n")}</p>
      </div>
    );
  }
}
