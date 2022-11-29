{
    if (this.state.filter === "all") {
        return true;
    } else if (this.state.filter === "completed") {
        if (item.completed === true) {
            return true;
        } else {
            return false;
        }
    } else if (this.state.filter === "uncompleted") {
        if (item.completed === false) {
            return true;
        } else {
            return false;
        }
    }
}