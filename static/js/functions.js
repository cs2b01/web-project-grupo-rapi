//common
function alertfill()
{
	document.getElementById("fillspaces").style.display="block";
}

//login-1.html
function validate(e,p)
{
	var visible=document.getElementById("notvalidaccount").style.display;
	var email=e;
	var contraseña=p;

	if(email=="cliente@gmail.com"&&contraseña=="compronachos")
	{
		visible="none";
		window.open("index-1.html","_self");
		
	}
	else
	{
		visible="block";
	}
	document.getElementById("notvalidaccount").style.display=visible;
}
function goindex()
{
	var email=document.form.login.value;
	var contraseña=document.form.password.value;
	if(email==""||contraseña=="")
	{
		alertfill();
		document.getElementById("notvalidaccount").style.display="none";
	}
	else
	{
		document.getElementById("fillspaces").style.display="none";
		validate(email,contraseña);
	}
}
function recover()
{
	window.open("forgot-1.html","_self");
}
function register()
{
	window.open("register-1.html","_self");
}

//register-1.html
function gologin()
{
	window.open("login-1.html","_self");
}
function compare()
{
	var visible=document.getElementById("unequalpassword").style.display;
	var password=document.form.password1.value;
	var passwordcheck=document.form.password2.value;
	if(password!=passwordcheck)
	{
		visible="block";
	}
	else
	{
		visible="none";
	}
	document.getElementById("unequalpassword").style.display=visible;

}
function workercode()
{
	var visible=document.getElementById("validworker").style.display;
	var selected=document.getElementById("categoría").value;

	if(selected=="deliver"||selected=="admin")
	{
		visible="block";
	}
	else
	{
		visible="none";
	}
	document.getElementById("validworker").style.display=visible;
}
function endregister()
{
	var email=document.form.email.value;
	var contraseña=document.form.password1.value;
	var verifcontraseña=document.form.password2.value;
	var categoría=document.form.categoría.value;
	var optionsvisible=document.getElementById("validworker").style.display;
	var code=document.form.validworker.value;
	var accept=document.getElementById("accept").checked;

	if(email==""||contraseña==""||verifcontraseña=="")
	{
		alertfill();
	}
	else
	{
		if(contraseña!=verifcontraseña)
		{
			alert("Las contraseñas no coinciden");
		}
		else
		{
			if(categoría=="")
			{
				alert("Por favor, elija una categría.");
			}
			else
			{
				if(optionsvisible=="block"&&code=="")
				{
					alertfill();
				}
				else
				{
					if(accept==false)
					{
						alert("Por favor, acepte los términos para poder continuar.");
					}
					else
					{
						window.open("index-1.html","_self");
					}
				}
			}
		}
	}
}