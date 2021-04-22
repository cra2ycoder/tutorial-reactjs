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

  updateState() {
    this.setState({
      status: [...this.state.status]
    });
  }

  onImageLoaded() {
    this.state.status.push("Image loaded successfully!");
    this.updateState();
  }

  onLoadingError() {
    this.state.status.push("Image loaded successfully!");
    this.updateState();
  }

  componentDidUpdate() {
    // each time when the stage get updated
    console.log(this.state);
  }

  componentDidMount() {
    this.state.status.push("Component Mounted!");
    this.updateState();

    this.state.status.push("Image started loading...");
    this.updateState();
  }

  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <img
          width="100px"
          src={this.props.url}
          alt="dynamic"
          onLoad={() => this.onImageLoaded()}
          onError={() => this.onLoadingError()}
        />
        <p>{this.state.status.join("\n")}</p>
      </div>
    );
  }
}
