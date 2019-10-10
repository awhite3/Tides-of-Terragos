window.onload = function()
{
    var images = document.getElementsByTagName('img');
    for(var i = 0; i < images.length; i++)
    {
        images.item(i).addEventListener("click", enlargePicture);
    }

}

function enlargePicture()
{
    if(this.width == 500){
        this.width = 280;    
    } else {
        this.width = 500;
    }
}