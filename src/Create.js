const Create = () => {
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                />
                <label>Blog body:</label>
                <textarea
                    type="text"
                    required
                ></textarea>
                <label>Blog Author:</label>
                <select>
                    <option value="Vladimir">Vladimir</option>
                    <option value="Briana">Briana</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create;