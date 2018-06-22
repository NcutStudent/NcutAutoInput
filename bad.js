function main_function(level) {
    level = level % 5;
    level = Math.max(0, level);
    index = (5 - level) * 2 - 1;
    n_index = level * 2 + 1;
    title = document.getElementsByTagName("title")[0];
 
    cols = document.getElementsByClassName("col-sm-12 answer");
    if(document.getElementsByClassName("group-description jumbotron")[0].textContent.split("課程名稱").length != 1) {
        for(i = 0; i < cols.length; i++) {
            cols[i].getElementsByClassName("radio")[1].click();
        }
    } else {
        for(i = 0; i < cols.length - 1; i++) {
            cols[i].getElementsByClassName("radio")[index].click();
        }
  
        if(title.text.split("甲").length == 2) {
            cols[7].getElementsByClassName("radio")[n_index].click();
        }
  
        else {
            cols[9].getElementsByClassName("radio")[n_index].click();
        }
    }
    
};

main_function(1);
