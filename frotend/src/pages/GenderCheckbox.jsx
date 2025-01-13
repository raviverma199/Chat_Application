const GenderCheckbox = ({ onCheckBoxChange, selectGender }) => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectGender === "male"}
            onChange={() => {
              onCheckBoxChange("male");
            }}
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectGender === "female"}
            onChange={() => {
              onCheckBoxChange("female");
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
