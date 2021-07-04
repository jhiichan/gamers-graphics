if (document.images)
{
	image1 = new Image;
	image2 = new Image;
	image3 = new Image;
	image4 = new Image;
	image5 = new Image;
	image6 = new Image;
	image7 = new Image;
	image8 = new Image;
	image9 = new Image;
	image10 = new Image;
	image1.src = "../../images/navbars/home-active.jpg";
	image2.src = "../../images/navbars/home-hover.jpg";
	image3.src = "../../images/navbars/top-active.jpg";
	image4.src = "../../images/navbars/top-hover.jpg";
	image5.src = "../../images/navbars/shop-active.jpg";
	image6.src = "../../images/navbars/shop-hover.jpg";
	image7.src = "../../images/navbars/minig-active.jpg";
	image8.src = "../../images/navbars/minig-hover.jpg";
	image9.src = "../../images/navbars/about-active.jpg";
	image10.src = "../../images/navbars/about-hover.jpg";
}

function chgImg(name, image)
{
	if (document.images)
	{
	document[name].src = eval(image+".src");
	}
}