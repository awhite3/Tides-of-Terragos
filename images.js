window.onload = function()
{
    var images = document.getElementsByTagName('img');
    for(var i = 0; i < images.length; i++)
    {
        images.item(i).addEventListener("click", enlargePicture);
    }
}

/*push*/
function enlargePicture()
{
    anyAreBig = false;
    var images = document.getElementsByTagName('img');
    for(var i = 0; i < images.length; i++)
    {
        if(images.item(i).width == 500){
            anyAreBig = true;
        }
    }


    if(this.width == 500){

        var images = document.getElementsByTagName('img');
        for(var i = 0; i < images.length; i++)
        {
            images.item(i).width = 280;
        } 

    } else if(this.width == 280 && anyAreBig){

        var images = document.getElementsByTagName('img');
        for(var i = 0; i < images.length; i++)
        {
            images.item(i).width = 280;
        } 
        this.width = 500;

    } else {
        this.width = 500;
    }
}
