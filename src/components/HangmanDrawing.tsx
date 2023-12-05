const HEAD = (
  <div
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      //right: "-30px",
      marginLeft:"185px"
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "110px",
      marginLeft:"210px"
    //   right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      marginLeft:"215px",
    //   right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      marginLeft:"130px",
    //   right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "200px",
      marginLeft:"210px",
    //   right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "200px",
      marginLeft:"120px",
      //right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  cntFalse: number;
};

export function HangmanDrawing({ cntFalse }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative",left:'40%' }}>
      {BODY_PARTS.slice(0, cntFalse)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          marginLeft:"210px",
          //right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "170px",
          background: "black",
          marginLeft: "45px",
        }}
      />
      <div
        style={{
          height: "300px",
          width: "10px",
          background: "black",
          marginLeft: "45px",
        }}
      />
      <div style={{ height: "10px", width: "100px", background: "black" }} />
    </div>
  );
}
