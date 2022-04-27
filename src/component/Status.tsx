function Status({ status }: any) {
  return <p className="pt-6">{status !== "None" && <>Status : {status}</>}</p>;
}

export default Status;
