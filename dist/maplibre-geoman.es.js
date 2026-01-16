import gl from "maplibre-gl";
const Lm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mLYpUHOwgopChOtlFRRxrFYpQIdQKrTqYXPoHTRqSFBdHwbXg4M9i1cHFWVcHV0EQ/AFxdnBSdJESv0sKLWK847iH97735e47QGhWmWaFEoCm22YmlRRz+VWx5xUhmmGMIi4zy5iTpDR8x9c9Any/i/Ms/7o/R79asBgQEIkTzDBt4g3imU3b4LxPHGVlWSU+J54w6YLEj1xXPH7jXHJZ4JlRM5uZJ44Si6UuVrqYlU2NeJo4pmo65Qs5j1XOW5y1ap2178lfGCnoK8tcpzWCFBaxBAkiFNRRQRU24rTrpFjI0HnSxz/s+iVyKeSqgJFjATVokF0/+B/87q1VnJr0kiJJIPziOB9jQM8u0Go4zvex47ROgOAzcKV3/LUmMPtJeqOjxY6AgW3g4rqjKXvA5Q4w9GTIpuxKQVpCsQi8n9E35YHBW6Bvzetb+xynD0CWepW+AQ4OgfESZa/7vLu3u2//1rT79wN2rHKoBaSKHQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+gEBAUlKJesuC4AABWbSURBVHja7Z3fcxTHEce/t1ohYekA2QaBDBgocGLHNmW7Kg4pV9l5SeUleci/4b9H/0aeU3mJXXEF5yEmEOw4hgKFH7JBtpEQwhLS3eVhunV9w+7tHWh3e2Z7q64OyZJ18+Mz3+7pme4W7Bn6tBdXWwD4lYj3FMA0gCkAswCOAJihrw8AOAfgdwDOAmgDmKDf3YunB6ADYB3AdQB/BnANwEMAWwA2ANwH8Ii+3gSwA6BLv8vvvfWPD/VslPOflnVBLhQQYKQCiEl6zQCYB/AigGMA3gBwGMB+guQQgFfpfZKg2sunC2AbwCqA/9H7FoCfAKwA+ArAtwB+BHCPoNmmFwOzw6AAgMFigIyrFhMChgMERJu+PkJQHCNI5un7qfi9F+i9VUJf88TeBvCY3js06TcIih8Jkq9IUTZIde6R2myI3zNVMUBGAiOlST1NrwMAjgM4BeAtAUKbIJklxZim35WAJSXB4UPSlROcINkkRXlEcKwLcP4NYAnAHQJlk17bUlUMlIYDkgHGPpr8BwEcJWVYAPA2AXKcwGAza0ooRiL6s1Vx//Yy3rtCUbaEebVOYCwBuAJgmZTmOwBrBNETA6XBgAwBYw7ACYLhbYLjRYLlIP3MpOest2oAYhxgep5zvk0QrBEUPxIkVwia2wAeGCgNBGQEME4DeIcAOUHm1bRwztMaVWIv1WVHOOubZGbdJkAuAbhpoDQIELErlRSAcZq+nhNqMeEpReh91vOUpSNU5QGBcbMAlG5Tdr1aDYGjRROdYxZFYOzzHO4Y+8o3w3YIgCJQOLbSaYKatBoAR0JKsB/Ay2Q+nRkRjKaYoL0RQblBZtj3cPGWbQDdmCFpRQyGVI0DcFuybwL4FVx0+6SBMRYot+Ci9p8DuAq3dfwwdjVpRQxHCheoO0xKcY7geJNgaRsYY4GyTlBcJUiukbKswAUqd2KEpBUhHBM06WfgotznAVwgQE6TmbWffiYxMEYCpUsA/ETm1U0C5CKAy3DR+g36mU5MkLQiAsM3qeYJjg/pfZ6+P4X+wUEDYzxQOmRSPYSLyF8G8Cm934vR5GpFBEeWSXWB4DiGwXNSMDieCRJg8LzXtwTHxVhNrlZEcMzCRb59k+owgZOaauypmuwQCCsZJtcy3HZw8JCkEcHxCoB3AXxkJlUli2oqVHmGFqIZsRDdZUjai6vBBhXTwOHgo+gMx2/ofcEzqQyMvYfEP7YzhcGjOCBINgBshwpJGigciYBjwYPjFQFHYnCUDgovQKzi/rMsIAkuqJgGCscU+kfSz5NZxXDMmr9ROSS8YPmQsLrwUfqt0CBpBQrHS+SE/xzArwmSBYNDjfP+iJTjMoC/A/ianPgf4LaBg4GkFRAcLbjI9xyA1wH8Fu6G31m4yLjtVOmC5DFc5P063A3GvwD4D9yxlScIZHcrCQgO9jmOknK8Re9Hvd0Tg6N+5z0tGKtJAC1xDcEAeU44UuGQnyez6iz6x0ZsG1cfJBPon6A+65nCuwuadkiSQODIinMcMTiCgeTIsM0UzZCkyjvZh0PGOV4wOILwbydorBbQP67Cz24wMeO/GSAF6iE71o9z2G5VWJDIhc536u8A2Ggvrqp02lPFcEzBHV+wOEeckPBu1xYrSHtxVd1R+UQhHGxaHYA7bHghy7kzOIL0SfzNlgs0xge0+iOpwo7kTpyHCwaew2BaT4MjfCXxx3eFlKSrzR9RoyCe33EsZ4Wxs1XhQ5LkWAjHeONFk4okiuBIPL+DbwIexuCRdXvCh2SiYKwTLZAkSuDgSHnuqmJwRAlJnrWgJtKuxcSSAaU8v8Oe+CDJ8kdkALjZCuKZVi+jn7dqYGcDcWY19EsX5L3kz8YGiL9jyWmZXtZiaqVKVpFZuIyHfgfFYlrllSfojdFPdZZXqMIf4QVyDS5Dyjr6JRt6jQMk4wj7GfSPrquR2D2Cwi9BwAEyruxUpPI8ieROntbSC89rYp+luXAHlGurvbjaqiuAmNa8erANegIuV+5JuIyHIZtWWdnT/SI2G/DS4xT0Eacz4qPiecV7QuwzGR9p0xx4By5TCt8dqU1FagEkQz1O02uOvhdivMNP18n1N7LKoN2HuzwkA2S9HLOKt0NfR7+Sblb5t0mEm0aV2+rPh9t1q0haY4f46nEi0F2rvITPsoJTViHNFfTTdfZG6KcryC8gKitghZpvOGtO1K4ilQMygnqEMqhFJQOWMFgD0C/FvAWvDPOQnZ4HBJQsQX0VT9dQDLmUQ968qFVFUiUrRWjqIZ3tvFoaS/S1rCK74znrow42A8WmyAO4JNJchfc6ATKs5kkSCCSqVKRSQCJQDz+J8yMUly3z65Dv7nCNuhpSv3VF32yLv79GCnWL/nZW1Sz2VbRfMFOnIqmCFSIU9cjKSbsEV3WpsPDlOED4j/i9ngcM1xfMUjEG5Qypi8xRDOWQqFGRyjpJRM33w12a+RDAH+HO4cyhX15Zs0nVwWDOp4tk3txCTRVhCyr3noSLK8g7NbN4uq67tofLVT+gfv4TXJmFu3A1SirLq1W1giRkNx8lxzIE9fDriy8D+ALAJzR4XIqsllLJ9Hd6BMq25xc9FDtn/Nn44tmkYkh8FXkbwH8hEs/FaGLxsYJpsfuye3JT6UCxv8G1xLlozCcEyTKZW9vsY9QV8c0AhQOUm56pt4N+5vtp6DzO45/wXqA5M00K3qnKzKoEkIwj7bLBE8rh4AyBN5BdA6MDRak0BShyQ+GugGMD7tTsGfQzUmqFJGtBXYNLhF2Js55W2FiWzOMkmUep8YlSOLq0+t4H8E8AnwH4BoFUUVr/+FCvvbjKO2eP4M42bdFnfw3ABwDeo3HYr9Tc8k3ya7RjV5mzXvrkzEjEcIpeB5WaV9LneEjK8RmAfwD4EoMFK1Xnl2U1wWDJtC+pLZ9R2x5KE1GpmXVQzJtKEzykFa8E83B5Wo8rdc6lWbJBPsc1Uo5lAKu0CgdTyTXD5OLP/Q21ja+5tqHvZLBvebwFd4btB1KRbhUTt8qVoE2QtBWrh5++/yKZVWuhwZEBCgc416hNmTUFlapILXOnKvtfVoSSW4xanXJ/K3clZDhyIFlB9o5cB/puL9Y2f0r9IxnZ2Y8oVQ/2O4ZOnBjqfgtIhi0EmvwRX0WOoMLs8GlFELL/8QY1cEqZgkjTaikA02OvTcmsBWxS0QLG92L4mP9VuMOapQcNkwro5+uiL8LdX9CWW5cd1ydwRxtuwB0fuS9NjhjUI2N3S8Z5rlPbdytAKVkU/DIYfAemkpwFpQGSUd+j0oY9w2q6AXfQ7xLc2ard7c+Y4PAgkdvZt6jtuydnlZlZuQttmWZW2QriS+M8dAUHffW4icGTo1HCkQFJXvs1pRuqxVSvwsRi+/Yw9CWgzlIPjSto0/ugVTCXggSEG8WX8aehKzBYpB69mNUjwx8JQUUYkmkMJvcI1sSqvEGmHtGrSKULbimAZMQ/KpPEMdVjGy6qvESvRqnHEBXh/lhD/1CgFkgy51RZjnpSMnwyp9Nh6Ip/8Gnd7+CyjzRVPfJU5Ar1zSYqvKCkbU6V7YNwinttDro8cvEjXLCMt3UbpR4ZKsLbvpyuiFOk1t0nWVZJ6XdZkhIbw///FP00mZrMK44kf0sTYRM6zyHVsXBsop/wTp4k0GRmyVzFKGtuVXWaV5NzzubVFlwE+Su4Y+2aTAkNpuc99LNBbinqmxaeznYflpM+RFG0rJJsSqzDS2rQRPMqw8xiX4TzCWty1CudU0lD54LMUsLJ3Uw9rH8aD0hIK6RKhW1aHzVRQeS9D78EgT3WR40HRB7zXjH/o9AP4Qwujdzha6KJxSskV31qamBwlL6SfdT1+tAAacAE6JrvUeiLdJvcP4lNAnusjwwQe+wxQOyxxwCxp+qnZYDY4NuT3TeVnXkyQHROAG2HKLX1T2WnZg0QXYqh8Ri+iifnNqjWGiIGSEmQZF7kqiKdfkDzQvNtUAPEBl+FeaU1XVN0gGhLhKw9mbYW51xjuqZK51RSUUO0HekIoRyDBgXRmq6psiMwScl0azwUWGs6/QAddG2VwCo9RJmU3JDMY+UKQNGeM7juvtFYrqKWY/hlNlrrpZu8rPOaS1JX2Tey9LK2chWVz6lSAMm5dKMtjaVMp881uCebamYNqWWvqVxF7pwq67JbUlGDNtGvSqrFWfdrcJ+Azsq7VTvmM9QX2mrZS+f8Cc2p0hfcJLYGPYOjLmtwz9GuTaNURKjHPuoD7g9ttewrX3CrUpANhY66v2K+02AV0d4XtZnsZQOiOTuGv2qeplejVCRDPZ7qByWLRS1zqTRAAsnSZyoSRh/Ulg0zqYh8rVn6ilbPJGYVobYlAahHbfMoqZN8xSpyEv1t3yghEXDwtu5J5epRiyVSlYJoztLnq8gZAGfhIsi79yBigkT4HXzs/wi1+Yxi9ahlDpUKSEDZwmVk/RSACwDOwwXLZiP0R2R7F6itF6jt2tpbazb+pMIVQHO2cDY3+J7IeQAfAXiXJtALACZiUBFqAyvHArXxI2qzvBujqa21zZ+0xhVgjuzfnpLB8CeOVL/d08jtxdVOqDl8BRxDFwKF6lGbBVKlgoRQ0SnP9DgNF1WeClVJPDgOUptCMCVrrXhVuoKsf3yo115czasJOKtsxeLPMUE7OfMAzgF4Da48MuBKI2+1F1c7CCAjvOeQMxwL1KZz1MYZMQ7aqoHl1kysou+TihuaWVUW+kp7ye3PMwA+APA+gF/AHQEP4oJVxgWoY9SG96lNZyC2s6G3VF5tVXerPKXp1yW/A711yRmSabgt0PcA/B7AHwD8EsBxYZKojJOIOAebjMfps/+B2vIetW0aOpPDSd/jDmqq216Fky7NrG0yUZbo9aqYaD1lgySd9qPIrve+DHerbbu9uNrVYHIJ1WAVzNqtmifl0HpJTKqHnC9rqLiWfVrzivAzAC9Bb9odhmQ/nk40x6bLfTIBngDYoYWgclAEGPy59hEERzJ2q2aUmlXqLI7KAPFURNqUGp31PJ+kDeAVz66/DuAWOfEbVYOSA8YM3Db6SbgIub9bNaEcDt85H/BZq1x80pobzrsSh6ArJpIHSUvY85z04QaASwBuAridBwovEnsIBYaAcQJuG/cdcsRPoZ9CVHsCuDznfBM11ElMa+gAua/9Je2qvAz92Q1bos/YD2kTLKcJkCxQtmlguwQLxgXGA0ICO4F+fi8fjNP09RxBLe+Wa47jqHDOawEksJhIHiS+E+xPTgZliUB5SO3jK8d8TVQCM46C8c7UNL0O0N8+lQHGDClLijDKGKhxzutUkDz78qByMyvPL8kzb5Zo9WMT4Z5QlG0MJtPrFQDJGwSTAsp59DOyvE2AZIHRQlhpVVWFA1IlnXCWBnsf+kkCEAAkLRq0LFBepV069rX4mMQG3HmiUe5V+1kO2+jnFH4D/ZxeR2mBCRkMVc55bYAMiYmcFLZ9L6CBzQNlFm4Le4vMybcIDD50599r6OWolMxEz2lSOWUq+xbT4m+HCIY657xuBZGO2G2y2eVVz8kABzgLlCka3IO0EcHm1QaZRY9HVBAZpGQzi2Mycss25Az1/pyo1TmvFRChIk9ot+cmvU4EqiJ5oMidpin084TN0YTvjDD4/P+Y8pxtP+N6yHdVWD14PtTunNetILGqiA8KPFh4kCUw4+5iIRIoiubCbSg4q1db3EFcx/VV5AF9T9sp371QlUS8UmGKDXtNCuVIEF/h0cJ5UOf5tlThyhGTihSpC2BVrdSqR60K0kAVsScw9agdkBBWEHuaPfa1A2IqYuqhVT20KIipiKmH2jFXAYipiKmHRvXQpCCmIqYeKsdaDSCmIqYe2tRDm4KYiph6qBtjVYCMoCJdgyR4OLqhqIdGBclbYW7BHRXXVFfEnmczrXZoLG+FYCGoAyRDRW7AZQ65D+AnuBOw9oT5dGgM79OY3tCsHkD9Z7GKVOQR3LHnz9G/Mcf5nEK4Y23PoGm1BeB7AFdpTJcgcu1q/OAqs4jQShJkh9oz8oJ3lcZ2C0BXaxLwRHnHDpNkc9jDdMyDMpnVAuKVb5NOnTns4TvmA2OouYSEagURppY57HE65l3t9VXSADrYHHZzzE1BnsFhvwm9RXjsCdgxDwqQHKm+Ri8ztcwxN0CEw85JxW5mrUimIuaYN1ZBLDZijrkBsgedb5DUrh6dmBaxoAApiI2Yw67HtMo1g0NSjyAVpCA2UpTr1p5yAeFT2Pdi2UhJAx8M3kK8iH5cZIL+HVP2wVBMq8dwpR4u05gMbMWHph6h+iC+w75CA/IpvQ8rKWBPOXAUjkWIcAQLiICkcNUySCrxO+T2+0Uai29pbDqhwhE0IDHbvYE9WQFcLjcXvD8YNCDerpYFEOszrbKOAAUVEIxVQaSpZWe16jWt/IWpEzocUQBSIPVmall/GyAjntWqrRBkhOpRqNgxqEdUCjLCsXi7gbh3plVU0fJhTxrhIGZJ/2G4moBc+swCiM8OSKN2DWPyQfJMraf25U1Fnsu0ii5a3hhAMkytvMiuQfLsfkd00fJGASIgGbbamT/yfH5HVNHypvkgRfay+SN704/RRMsbpyCeP7Jj/khpfkcU0fJGAuKZWuaPlON3dGKGI3pAzB8xv8N8EPNHzO8wBTF/xPwOA8T8EfM7DJAA/JGm3h/hAGvj/Y7GAjKifd1poNPeE+rReL+j0YAU+CPLaGaWRpklZrnpfkfTFSTPH/kEwBc0QZrktEuzc5n64JMm+x3ySdHQZ/3jQ7324qqcGJxHK4Xb+uVt3wnEu/070kLRVDgaDUiOaZHCJZ07TO8MSYwFeoY55U01Nc3EyvFHRnFOe5HBMdJmRZPVo/GACEiGraSxQeLDkeeUd5sOhwEymtN+NzJzQ5qVd80pNx/keZx2floAjiP8pNhZO1Z/NafcAHnW1ZXhiGFnq0kqaSZWyU57oX0e2EQa2c8y9TBAxoUk9J2tkdtjcBgg40ASw86W7VgZIKVCMqrN3lMOh+1YmZNeDiRDdrYA4BUAs6IfW8rhsB0rA6SUyebvbOVB0lL6mSUctmNlgOy5imAIJNpiJMNiHQNwmHoYIGVDoi1GMrLfZHCYk16G0645RmKxDgNEHSRaYiQW6zBAVEGiKUZisQ4DRCUkGmIkFuswJ121415njMRiHQaI+mecGMleQlIEh8U6DBA1KoKKIRkLDlMPA6RJkBgcBohBYnAYIAbJeJAYHAaIQWJwGCAGyXiQGBwGiEGSA4nBYYAYJDmQGBwGiEGSAwkMDgPEIBkOicFhgBgkGZDM0L83DA4DxCDpP1xi4Sh9/R2ASwaHAdJkSPjuRgJgEv167QBwFcDfAPwLdhuw1sfug9QAiXDCH8Pd+Psa7v7GHXpdpu/do58xOGp6/g9eQPkxBqxc0wAAAABJRU5ErkJggg==";
let Su;
try {
  Su = "free";
} catch {
  Su = process.env.VITE_GEOMAN_VERSION || null;
}
const ut = "gm", ae = `_${ut}`, at = Su === "pro", Wf = {
  draw: {
    marker: {
      type: "draw",
      eventType: "toggle",
      targetMode: "marker",
      settings: {
        exclusive: !0
      }
    },
    circle_marker: {
      type: "draw",
      eventType: "toggle",
      targetMode: "circle_marker",
      settings: {
        exclusive: !0
      }
    },
    text_marker: {
      type: "draw",
      eventType: "toggle",
      targetMode: "text_marker",
      settings: {
        exclusive: !0
      }
    },
    circle: {
      type: "draw",
      eventType: "toggle",
      targetMode: "circle",
      settings: {
        exclusive: !0
      }
    },
    ellipse: {
      type: "draw",
      eventType: "toggle",
      targetMode: "ellipse",
      settings: {
        exclusive: !0
      }
    },
    line: {
      type: "draw",
      eventType: "toggle",
      targetMode: "line",
      settings: {
        exclusive: !0
      }
    },
    rectangle: {
      type: "draw",
      eventType: "toggle",
      targetMode: "rectangle",
      settings: {
        exclusive: !0
      }
    },
    polygon: {
      type: "draw",
      eventType: "toggle",
      targetMode: "polygon",
      settings: {
        exclusive: !0
      }
    },
    freehand: {
      type: "draw",
      eventType: "toggle",
      targetMode: "freehand",
      settings: {
        exclusive: !0
      }
    },
    custom_shape: {
      type: "draw",
      eventType: "toggle",
      targetMode: "custom_shape",
      settings: {
        exclusive: !0
      }
    }
  },
  edit: {
    drag: {
      type: "edit",
      eventType: "toggle",
      targetMode: "drag",
      settings: {
        exclusive: !0
      }
    },
    change: {
      type: "edit",
      eventType: "toggle",
      targetMode: "change",
      settings: {
        exclusive: !0
      }
    },
    rotate: {
      type: "edit",
      eventType: "toggle",
      targetMode: "rotate",
      settings: {
        exclusive: !0
      }
    },
    scale: {
      type: "edit",
      eventType: "toggle",
      targetMode: "scale",
      settings: {
        exclusive: !0
      }
    },
    copy: {
      type: "edit",
      eventType: "toggle",
      targetMode: "copy",
      settings: {
        exclusive: !0
      }
    },
    cut: {
      type: "edit",
      eventType: "toggle",
      targetMode: "cut",
      settings: {
        exclusive: !0
      }
    },
    split: {
      type: "edit",
      eventType: "toggle",
      targetMode: "split",
      settings: {
        exclusive: !0
      }
    },
    union: {
      type: "edit",
      eventType: "toggle",
      targetMode: "union",
      settings: {
        exclusive: !0
      }
    },
    difference: {
      type: "edit",
      eventType: "toggle",
      targetMode: "difference",
      settings: {
        exclusive: !0
      }
    },
    line_simplification: {
      type: "edit",
      eventType: "toggle",
      targetMode: "line_simplification",
      settings: {
        exclusive: !0
      }
    },
    lasso: {
      type: "edit",
      eventType: "toggle",
      targetMode: "lasso",
      settings: {
        exclusive: !0
      }
    },
    delete: {
      type: "edit",
      eventType: "toggle",
      targetMode: "delete",
      settings: {
        exclusive: !0
      }
    }
  },
  helper: {
    shape_markers: {
      type: "helper",
      eventType: "toggle",
      targetMode: "shape_markers",
      settings: {
        exclusive: !1,
        enabledBy: ["drag", "change", "rotate", "scale", "line_simplification"]
      }
    },
    snapping: {
      type: "helper",
      eventType: "toggle",
      targetMode: "snapping",
      settings: {
        exclusive: !1
      }
    },
    pin: {
      type: "helper",
      eventType: "toggle",
      targetMode: "pin",
      settings: {
        exclusive: !1
      }
    },
    snap_guides: {
      type: "helper",
      eventType: "toggle",
      targetMode: "snap_guides",
      settings: {
        exclusive: !1
      }
    },
    measurements: {
      type: "helper",
      eventType: "toggle",
      targetMode: "measurements",
      settings: {
        exclusive: !1
      }
    },
    auto_trace: {
      type: "helper",
      eventType: "toggle",
      targetMode: "auto_trace",
      settings: {
        exclusive: !1
      }
    },
    geofencing: {
      type: "helper",
      eventType: "toggle",
      targetMode: "geofencing",
      settings: {
        exclusive: !1
      }
    },
    zoom_to_features: {
      type: "helper",
      eventType: "click",
      targetMode: "zoom_to_features",
      settings: {
        exclusive: !1
      }
    },
    click_to_edit: {
      type: "helper",
      eventType: "toggle",
      targetMode: "click_to_edit",
      settings: {
        exclusive: !1
      }
    }
  }
}, Cm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="m22.775 29.562 6.75-6.75-5.625-5.625-3.6 3.6-3.15-3.15 3.6-3.6-5.626-5.55-6.75 6.75zm25.95 26.101 6.75-6.825-5.624-5.625-3.6 3.6-3.15-3.15 3.6-3.6-5.55-5.55-6.75 6.75zm.6-46.126 5.25 5.25ZM16.7 59.039H5v-11.7l14.55-14.551L2 15.237l13.05-13.2 17.7 17.624L46.1 6.312q.676-.676 1.5-.976.826-.3 1.65-.3.826 0 1.65.3.826.3 1.5.976l5.326 5.325q.675.675.975 1.5.3.825.3 1.65t-.3 1.65q-.3.825-.975 1.5l-13.35 13.35L62 48.913l-13.125 13.05-17.551-17.55Zm-7.2-4.5h5.25l29.476-29.552-5.25-5.25L9.5 49.288Zm32.1-32.178-2.625-2.625 5.25 5.25Z"/>
</svg>`, jf = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="none" d="M0 0h24v24H0Z"/>
    <circle cx="32" cy="32" r="26" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="7"/>
    <circle cx="32" cy="32" r="5" fill="currentColor"/>
</svg>`, Nm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="none" d="M0 0h24v24H0Z"/>
    <circle cx="32" cy="32" r="26" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="7"/>
    <path stroke="currentColor" stroke-dasharray="3" stroke-width="4" d="M6 32h52M32 6v52"/>
</svg>`, Pm = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 64 64"
   version="1.1"
   id="svg2"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs2" />
  <path
     fill="none"
     d="M 0,0 H 24 V 24 H 0 Z"
     id="path1"
     style="display:inline" />
  <ellipse
     cx="32"
     cy="32"
     fill="currentColor"
     fill-opacity="0.15"
     stroke="currentColor"
     stroke-width="7"
     id="circle1"
     rx="26.787416"
     ry="15.158148" />
  <path
     stroke="currentColor"
     stroke-dasharray="3"
     stroke-width="4"
     d="M 6.4966994,32 H 58 M 32,18.552705 v 30.15073"
     id="path2"
     style="stroke-width:3;stroke-dasharray:3;stroke-dashoffset:0" />
</svg>
`, Om = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path
            fill="currentColor"
            d="M32 61.4 19.85 49.42l3.28-3.235 6.634 6.542V34.205H10.98l6.26 6.174-3.279 3.234L2.185 32l11.852-11.686 3.28 3.234-6.336 6.247h18.783V11.273l-6.261 6.174-3.28-3.234L32 2.6l11.777 11.613-3.28 3.234-6.26-6.174v18.522h18.782l-6.26-6.174 3.279-3.234L61.815 32 50.038 43.613l-3.28-3.234 6.261-6.174H34.236v18.522l6.634-6.542 3.28 3.234z"
    />
</svg>
`, Rm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <line x1="8" y1="50" x2="24" y2="20" stroke="currentColor" stroke-width="8"/>
    <line x1="24" y1="20" x2="40" y2="54" stroke="currentColor" stroke-width="8"/>
    <line x1="40" y1="54" x2="54" y2="10" stroke="currentColor" stroke-width="8"/>
    <circle cx="8" cy="50" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="24" cy="20" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="40" cy="54" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="54" cy="10" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
</svg>
`, Dm = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
    <path d="M32 62.81s23.107-21.898 23.107-38.512a23.107 23.107 0 0 0-46.214 0C8.893 40.912 32 62.809 32 62.809m0-26.958a11.554 11.554 0 1 1 0-23.107 11.554 11.554 0 0 1 0 23.107"/>
</svg>
`, Fm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <!-- Polygon -->
    <polygon points="8,28 40,6 55,35 51,55 18,54" fill="none" stroke="currentColor" stroke-width="8"/>

    <!-- Vertex Circles -->
    <circle cx="9" cy="28" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="40" cy="8" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="55" cy="35" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="50" cy="55" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="18" cy="54" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
</svg>
`, Gm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <!-- Rectangle -->
    <polygon points="10,10 54,10 54,54 10,54" fill="none" stroke="currentColor" stroke-width="8"/>

    <!-- Vertex Circles -->
    <circle cx="10" cy="10" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="54" cy="10" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="54" cy="54" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="10" cy="54" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
</svg>
`, Bm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M39.063 42.14 22.288 28.12 7.96 44.603l11.338 9.854h9.059zm-3.498 12.317h25.941v5.465h-44.25L4.377 48.726a5.465 5.465 0 0 1-.542-7.711L34.311 5.958a5.465 5.465 0 0 1 7.712-.538l16.496 14.343a5.465 5.465 0 0 1 .541 7.709z"/>
</svg>`, Um = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M58.709 17.724c-.3-.6-.601-.901-.902-1.502l-.3-.601c-.301-.601-.602-.902-.902-1.503l-.3-.601c-.301-.601-.602-.902-1.203-1.503l-.6-.901 8.414-9.317-13.825.3-13.824.301 1.502 13.524 1.503 13.524 9.617-10.819v.3l.3.602c.301.3.301.6.602.6l.3.602c0 .6 0 .901.3 1.202.903 2.104 1.804 4.208 2.105 6.311.6 4.208 0 8.716-1.804 12.623l-.6 1.202-.301.3-.902 1.503-.3.601c-.601.601-1.202 1.503-1.804 2.104-1.502 1.503-3.305 3.005-5.109 3.907-1.803 1.202-3.907 1.803-6.311 2.404-2.104.301-4.508.601-6.612.301-2.404-.3-4.508-.902-6.612-1.503-2.103-.901-3.907-2.104-5.71-3.606l-1.202-1.202-.601-.902-.601-.601c-.3-.3-.601-.601-.601-.902l-.902-1.202-.3-.3-.602-1.203c0-.3-.3-.3-.3-.6l-.902-1.503-.3-.601-.902-2.705q-.901-3.607-.901-7.213V27.04c0-.601 0-.901.3-1.202l.3-1.803.602-1.803c.901-2.405 2.103-4.509 3.606-6.612q2.254-3.156 5.41-5.41c.6-.3.901-1.202.3-1.803-.3-.3-.6-.601-.901-.601h-.601l-.3.3c-2.706 1.202-4.81 3.006-6.913 4.809-2.104 2.104-3.607 4.508-5.11 7.213-2.704 5.41-3.606 11.42-2.404 17.431.3 1.503.601 2.705.902 4.207l.902 2.405c.3.3.6.6.6 1.202l.602 1.202c0 .3.3.601.3.601l.902 1.503c.3.601.6.901.901 1.503l.301.6c.3.301.601.902.902 1.203l2.103 1.803c2.104 2.104 4.809 3.907 7.514 5.41q4.057 2.254 9.016 2.705c1.503.3 3.005.3 4.508.3 1.803 0 3.306 0 4.809-.3 3.005-.602 6.311-1.503 9.016-3.006l.6-.3c.602-.3.903-.601 1.504-.902l2.103-1.202c.601-.3.902-.601 1.203-.902l.6-.6a3.622 3.622 0 0 0 1.503-1.504l.3-.3c.902-.902 2.105-2.104 2.706-3.005l1.803-2.705 1.202-1.804c3.005-5.71 4.208-12.322 3.306-18.633-.601-3.306-1.503-6.612-3.005-9.317z"/>
</svg>
`, zm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path stroke="currentColor"
          stroke-width="3.8"
          d="m2.155 32.345 42.35-29.82M18.963 60.919l42.35-29.82M31.443 2.332l29.82 42.35M2.207 19.515l29.82 42.35"/>
</svg>
`, qm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="none" d="M0 0h24v24H0Z"/>
    <path fill="currentColor"
          d="M6.962 3.385h50.076a3.577 3.577 0 0 1 3.577 3.577v50.076a3.577 3.577 0 0 1-3.577 3.577H6.962a3.577 3.577 0 0 1-3.577-3.577V6.962a3.577 3.577 0 0 1 3.577-3.577Zm3.577 7.154v42.922h42.922V10.539Zm7.154 7.154h28.614v7.153H17.693Zm0 14.307h28.614v7.154H17.693Z"/>
</svg>
`, Ym = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M16.862 2.13 7.297 21.17a2.091 2.091 0 0 0-.193 1.288l4.107 24.166-7.618 13.15 3.619 2.096 7.997-13.804a2.091 2.091 0 0 0 .252-1.397l-4.119-24.235 9.256-18.428Zm40.876.255-1.25 2.49 2.668 1.341 1.25-2.49zm-2.593 5.16-2.68 5.337 2.668 1.341 2.682-5.338zm-4.022 8.007-2.682 5.338 2.67 1.34 2.681-5.337zm-18.67 5.83.055 6.984-11.118.087.056 7.242 11.12-.088.054 6.985 10.521-10.688zm18.927 2.817-2.945.5 1.001 5.89 2.945-.5zm1.502 8.835-2.945.5 1.001 5.89 2.945-.5zm1.502 8.834-2.945.5.74 4.355-.24.413 2.585 1.499.51-.881a1.494 1.494 0 0 0 .18-1zm-3.943 7.854-2.994 5.17 2.584 1.496 2.994-5.169zm-4.492 7.754-1.497 2.584 2.584 1.497 1.498-2.584z"/>
</svg>
`, Hm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M41.687.926a2.173 2.173 0 0 0-.433.045c-4.075.232-7.358 3.618-7.358 7.747 0 .084.01.164.012.246l-12.987 4.261a7.842 7.842 0 0 0-6.126-3.563 2.173 2.173 0 0 0-.424-.043 2.173 2.173 0 0 0-.435.044c-4.073.232-7.358 3.618-7.358 7.747 0 3.143 1.901 5.869 4.604 7.097L8.377 35.11a2.173 2.173 0 0 0-.028.007C4.274 35.35.99 38.736.99 42.865c0 4.277 3.514 7.791 7.791 7.791 2.497 0 4.727-1.201 6.157-3.048l12.887 6.235a7.67 7.67 0 0 0-.139 1.44c0 4.277 3.515 7.791 7.792 7.791 4.278 0 7.793-3.514 7.793-7.792a7.67 7.67 0 0 0-1.885-5.027l.508-1.05-3.263-1.579 4.505-29.969.888-.29-.368-1.122a7.78 7.78 0 0 0 2.28-1.018l.447 1.364 4.72-1.547-.774-2.359-2.522.826a7.73 7.73 0 0 0 1.672-4.793c0-4.132-3.288-7.52-7.368-7.748a2.173 2.173 0 0 0-.424-.044zm0 4.346a3.414 3.414 0 0 1 3.447 3.446 3.415 3.415 0 0 1-3.446 3.447 3.414 3.414 0 0 1-3.446-3.447 3.414 3.414 0 0 1 3.445-3.446zm20.076 3.725a1.242 1.242 0 0 0-.382.062l-1.612.528.578 1.76-.293 1.94 2.456.37.486-3.234a1.242 1.242 0 0 0-1.233-1.426Zm-4.354 1.364-4.72 1.548.775 2.36 4.719-1.548-.774-2.36zm-22.153 2.732a7.877 7.877 0 0 0 3.735 2.922l-.062.408-.397.13.26.793-4.255 28.298-3.818-1.847-1.082 2.235 3.718 1.798a7.841 7.841 0 0 0-3.543 2.147l-13.272-6.42c.02-.23.035-.458.035-.692 0-2.888-1.609-5.408-3.969-6.745l2.912-11.012c3.74-.562 6.645-3.81 6.645-7.698l-.001-.02 13.094-4.297zm-20.885.87a3.414 3.414 0 0 1 3.445 3.447 3.414 3.414 0 0 1-3.445 3.447 3.414 3.414 0 0 1-3.447-3.447 3.414 3.414 0 0 1 3.446-3.446zm45.314 1.78-.738 4.912 2.456.37.738-4.912zM36.172 17.33l-1.793.588a1.242 1.242 0 0 0-.813.862l-.788 2.978 2.401.634.615-2.325 1.15-.377-.773-2.36zm22.405 5.781-.737 4.913 2.455.368.739-4.91zm-26.432 1.048-1.27 4.802 2.401.634 1.27-4.802zm25.325 6.32-.739 4.913 2.457.368.738-4.911-2.456-.37zm-27.23.882-1.27 4.802 2.402.634 1.27-4.801zm26.124 6.486-.739 4.91 2.455.37.74-4.912-2.457-.368zm-28.027.717-1.27 4.803 2.4.634 1.27-4.802-2.401-.634zm-19.555.856a3.414 3.414 0 0 1 3.446 3.446 3.414 3.414 0 0 1-3.446 3.447 3.414 3.414 0 0 1-3.445-3.447 3.414 3.414 0 0 1 3.445-3.446zm46.473 5.795-.739 4.91 2.456.37.74-4.911zm-11.124 5.072-1.082 2.236 4.47 2.164 1.083-2.237zm-8.651 1.55a3.414 3.414 0 0 1 3.445 3.446 3.414 3.414 0 0 1-3.445 3.447 3.414 3.414 0 0 1-3.447-3.447 3.414 3.414 0 0 1 3.446-3.446zm18.669.745-.358 2.378-2.953-1.428-1.083 2.236 4.472 2.163.541-1.117 1.228.183.608-4.046-2.455-.37z"/>
</svg>
`, Jm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <circle cx="49.754" cy="50.219" r="10.098" fill="none" stroke="currentColor" stroke-width="5.1"/>
    <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4.491"
          d="M44.516 26.657H17.842l6.669-11.55 6.668-11.55 6.669 11.55Z"/>
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="6"
          stroke-width="4.683" d="M4.481 40.605h20.761v19.093H4.481z"/>
</svg>
`, $m = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path stroke="currentColor" fill="currentColor" stroke-width="2"
          d="M44.095 2.247a2.285 2.285 0 0 0-.135.04L12.025 12.762a2.285 2.285 0 0 0-1.497 1.588l-7.772 29.4a2.285 2.285 0 0 0 1.213 2.641L35.397 61.6a2.285 2.285 0 0 0 2.873-.754l22.64-32.582a2.285 2.285 0 0 0 .05-2.534L46.6 3.23a2.285 2.285 0 0 0-2.504-.982ZM43.7 7.182l12.203 19.12-5.167 1.76 1.052 3.09 2.031-.693L38.07 53.122l.01-1.375-3.262-.023-.034 4.5-27.13-13.127 6.975-26.38Zm3.946 21.932-6.18 2.105 1.052 3.09 6.18-2.105zm-9.27 3.157-2.329.793a1.632 1.632 0 0 0-1.105 1.534l-.03 4.068 3.265.024.02-2.91 1.232-.419zm-3.488 9.66-.047 6.529 3.264.023.048-6.528z"/>
</svg>
`, Vm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="m41.478 7.967-.033 3.069c1.887.02 3.772.337 5.561.933l.97-2.913a21.337 21.337 0 0 0-6.498-1.09Zm-3.294.215a21.567 21.567 0 0 0-6.298 1.915l1.332 2.766a18.518 18.518 0 0 1 5.401-1.641zm12.836 2.155-1.402 2.73a18.497 18.497 0 0 1 4.572 3.312l2.16-2.179a21.548 21.548 0 0 0-5.331-3.863ZM22.783 13.06c-11.848 0-21.486 9.638-21.486 21.486 0 11.849 9.638 21.486 21.486 21.486a21.37 21.37 0 0 0 14.288-5.466c.003 0 .006 0 .009.002.04-.036.078-.075.117-.11l.077-.072a21.285 21.285 0 0 0 1.51-1.532 22.128 22.128 0 0 0 .867-1.025 19.557 19.557 0 0 1-.88-.095c-.196-.025-.389-.058-.582-.09-.097-.015-.194-.028-.29-.045a18.378 18.378 0 0 1-1.576-.359l-.118-.03c-7.753-2.172-13.422-9.271-13.422-17.728a18.34 18.34 0 0 1 5.867-13.478c.1-.093.199-.185.3-.276.153-.136.31-.268.467-.4.097-.08.193-.163.291-.242.255-.203.514-.402.78-.592a21.534 21.534 0 0 0-1.76-.592l-.018-.005c-.176-.05-.355-.095-.533-.141-.132-.035-.263-.073-.397-.105-.213-.051-.43-.095-.646-.14-.077-.016-.153-.035-.231-.05H26.9a21.37 21.37 0 0 0-4.118-.4Zm35.728 3.64-2.472 1.82a18.424 18.424 0 0 1 2.61 5.004l2.907-.986a21.474 21.474 0 0 0-3.045-5.839Zm3.864 9.034-3.022.534c.328 1.86.37 3.772.118 5.642l3.042.409a21.448 21.448 0 0 0-.138-6.585zm-3.496 8.943a18.539 18.539 0 0 1-2.416 5.104l2.543 1.72a21.586 21.586 0 0 0 2.815-5.952zM54.703 42a18.288 18.288 0 0 1-4.428 3.492l1.505 2.675a21.348 21.348 0 0 0 5.173-4.08zm-6.995 4.69a18.512 18.512 0 0 1-5.526 1.158l.163 3.065a21.56 21.56 0 0 0 6.444-1.35z"/>
</svg>
`, Xm = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
    <path d="M44.698 2.661a1.644 1.644 0 0 1 2.328 0l9.866 9.866a1.644 1.644 0 0 1 0 2.329L24.004 47.744a1.644 1.644 0 0 1-.552.362L7.008 54.683a1.644 1.644 0 0 1-2.138-2.138l6.578-16.444a1.644 1.644 0 0 1 .362-.552zm-3.089 7.742 7.542 7.541 4.252-4.252-7.541-7.541zm5.216 9.866-7.54-7.54-21.378 21.376v.964h1.644a1.644 1.644 0 0 1 1.645 1.644v1.645h1.644a1.644 1.644 0 0 1 1.645 1.644v1.644h.963zM14.724 37.29l-.35.348L9.35 50.204l12.566-5.025.349-.35a1.644 1.644 0 0 1-1.07-1.538v-1.645h-1.644a1.644 1.644 0 0 1-1.644-1.644v-1.644h-1.644a1.644 1.644 0 0 1-1.54-1.07"/>
    <path stroke="currentColor" stroke-width="5.107"
          d="M6.298 59.53c3.44-1.692 6.88-3.384 10.558-4.319s7.594-1.111 11.719-.298c4.125.814 8.459 2.617 13.483 2.655 5.023.038 10.737-1.689 16.45-3.415"/>
</svg>
`, Wm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M31.226 17.87c-4.69 0-8.532 3.832-8.532 8.508 0 1.812.58 3.495 1.558 4.88l5.932 10.255c.831 1.085 1.383.879 2.074-.058l6.543-11.135c.132-.24.236-.493.327-.753a8.396 8.396 0 0 0 .628-3.19c0-4.675-3.841-8.506-8.53-8.506zm0 3.987a4.5 4.5 0 0 1 4.532 4.52 4.5 4.5 0 0 1-4.532 4.521 4.5 4.5 0 0 1-4.534-4.52 4.5 4.5 0 0 1 4.533-4.52z"/>
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="6"
          stroke-width="5" d="M8.97 53.509 4.423 19.145 35.698 4.199l23.88 25.127L43.06 59.801Z"/>
</svg>
`, jm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <ellipse cx="4.907" cy="-32.051" fill="none" stroke="currentColor" stroke-dasharray="13.7543, 6.87718"
             stroke-width="5.489" rx="20.4" ry="13.713" transform="matrix(-.71127 .70292 -.86047 -.5095 0 0)"/>
    <path fill="currentColor"
          d="M34.597 25.275a1.934 1.934 0 0 0-2.04 2.165l2.922 31.37c.188 1.523 1.989 2.235 3.165 1.249l6.169-5.004 2.765 4.79c1.59 2.756 4.115 3.431 6.87 1.841 2.756-1.59 3.433-4.114 1.841-6.87l-2.755-4.773 7.31-2.803c1.443-.525 1.728-2.44.503-3.365L35.64 25.66a1.93 1.93 0 0 0-1.042-.383z"/>
</svg>
`, Zm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M1.947 25.554c-2.176 3.77-.867 8.656 2.903 10.832 2.126 1.229 4.607 1.346 6.757.539l8.252 12.152a7.79 7.79 0 0 0-.701 1.005c-2.176 3.77-.867 8.656 2.903 10.833 3.77 2.177 8.655.867 10.832-2.903 2.1-3.64.93-8.294-2.543-10.572a2.211 2.211 0 0 0-.36-.26 2.211 2.211 0 0 0-.404-.181 7.955 7.955 0 0 0-6.086-.432l-8.348-12.292c.19-.252.369-.512.53-.79 1.457-2.526 1.339-5.537-.03-7.907l8.202-8.256c3.494 1.335 7.562.025 9.575-3.229l13.899 2.913c.266 2.435 1.634 4.721 3.899 6.03 3.77 2.176 8.655.866 10.832-2.904 2.101-3.64.93-8.294-2.543-10.572a2.211 2.211 0 0 0-.36-.26 2.211 2.211 0 0 0-.403-.181c-3.71-1.87-8.328-.556-10.429 3.083-.084.147-.155.297-.228.446l-13.5-2.83c-.053-2.55-1.329-5.023-3.58-6.499a2.211 2.211 0 0 0-.358-.259 2.211 2.211 0 0 0-.405-.181c-3.708-1.87-8.326-.556-10.428 3.083-1.61 2.79-1.307 6.19.486 8.652l-7.84 7.892a2.211 2.211 0 0 0-.094-.036c-3.71-1.87-8.328-.556-10.429 3.084zm3.83 2.211a3.473 3.473 0 0 1 4.79-1.282 3.472 3.472 0 0 1 1.284 4.789 3.473 3.473 0 0 1-4.79 1.284 3.475 3.475 0 0 1-1.283-4.79ZM23.656 8.173a3.474 3.474 0 0 1 4.79-1.283 3.472 3.472 0 0 1 1.283 4.79 3.473 3.473 0 0 1-4.789 1.284 3.475 3.475 0 0 1-1.284-4.791zm-.666 44.12a3.474 3.474 0 0 1 4.79-1.283 3.472 3.472 0 0 1 1.283 4.79 3.473 3.473 0 0 1-4.79 1.284 3.475 3.475 0 0 1-1.283-4.791zm29.166-37.88a3.474 3.474 0 0 1 4.79-1.283 3.472 3.472 0 0 1 1.283 4.79 3.473 3.473 0 0 1-4.79 1.284 3.475 3.475 0 0 1-1.283-4.791z"/>
    <path fill="currentColor"
          d="M12.9 13.516c-.63.177-.685.37-.88.95l-1.069 3.18 2.995 1.006.844-2.506 2.074-.882-1.236-2.908zm19.209 5.25 4.378 4.554 2.277-2.19-4.379-4.554zm8.132 3.106 1.441 2.812 5.623-2.882-1.441-2.812zM5.448 46.082l3.144.304.608-6.29-3.145-.303zm4.623 3.728 5.762 2.592 1.297-2.88-5.762-2.593z"/>
</svg>
`, Km = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M1.717 38.645a2.675 2.668 79.7 0 0-.307 3.769L16.754 60.55a2.675 2.668 79.7 0 0 3.76.312l41.769-35.508a2.675 2.668 79.7 0 0 .307-3.769L47.246 3.45a2.675 2.668 79.7 0 0-3.76-.312zm5.486 2.352 37.702-32.05 11.892 14.056-2.717 2.31-4.458-5.269-2.033 1.729 4.457 5.269-3.11 2.643-4.457-5.268-2.034 1.728 4.458 5.27-3.106 2.64-4.458-5.27-2.033 1.73 4.457 5.268-3.11 2.644-6.194-7.32-2.033 1.728 6.193 7.32-3.11 2.645-4.457-5.269-2.034 1.729 4.458 5.268-3.106 2.64-4.458-5.268-2.033 1.73 4.457 5.268-3.11 2.643-4.457-5.268-2.034 1.729 4.458 5.268-2.098 1.783z"/>
</svg>
`, Qm = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
    <path d="M7.839 34.833c-7.104-9.763-5.332-23.33 4.2-30.266C21.572-2.369 35.03.123 42.13 9.882L56.166 29.17c7.098 9.755 5.329 23.325-4.204 30.262-9.533 6.936-22.989 4.444-30.09-5.315L7.841 34.836Zm5.063-25.476c-6.079 5.766-7.006 15.598-1.634 22.98l.778 1.07 12.002-8.732zm3.43-2.495L27.476 22.18l12.002-8.733-.781-1.073c-5.37-7.38-15.01-9.522-22.367-5.512m25.643 10.014L14.54 36.836l10.762 14.79c5.818 7.997 16.653 9.842 24.163 4.378 7.51-5.465 9.088-16.342 3.267-24.342z"/>
</svg>
`, ev = `\uFEFF<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M42.012 2.106a4.092 4.092 0 0 0-5.741.735 4.092 4.092 0 0 0 .572 5.607L23.964 23.45a8.185 8.185 0 0 0-10.458 2.142l5.18 4.005 5.454 4.218L7.87 59.22a1.124 7.304 37.712 0 0 1.54 1.19l20.494-22.138 5.454 4.217 5.18 4.005a8.185 8.185 0 0 0-.558-10.66l11.277-16.24a4.092 4.092 0 0 0 5.572-.858 4.092 4.092 0 0 0-.735-5.74z"/>
</svg>
`, tv = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <g fill="currentColor" stroke="currentColor">
        <path d="m37.62 5.028-.337.284-4.039 4.068 3.547 3.523L39.875 9.8l2.846.596 1.025-4.893-4.176-.877Zm9.995 6.393 9.787 2.053 1.026-4.895-9.787-2.05zm14.68 3.078 9.787 2.05 1.025-4.892-9.787-2.053zm-39.623 5.522 3.547 3.523 7.049-7.094-3.547-3.523zm-10.57 10.642 3.546 3.524 7.047-7.094-3.547-3.524zM1.529 41.306l3.55 3.523 7.046-7.096-3.547-3.523Zm70.977 4.027 3.91 3.115 3.44-4.387-1.118-6.55zM.947 48.319l5.617 8.274 4.137-2.809-5.617-8.273Zm62.211 8.744 3.91 3.116 6.233-7.82-3.91-3.116zM9.373 60.73l5.62 8.272 4.134-2.809-5.617-8.271zm44.438 8.067 3.91 3.115 6.232-7.82-3.91-3.117zM17.8 73.138l5.617 8.273 4.137-2.808-5.617-8.274zm26.662 7.388 3.91 3.116 6.232-7.82-3.91-3.116zm-18.236 5.022 5.617 8.273 4.136-2.81-5.617-8.272zm8.888 6.709 3.91 3.117 6.233-7.822-3.91-3.115z"
              stroke-width="3"
              transform="translate(2.517 1.586) scale(.60827)"/>
        <path d="M22.672 20.02a3.5 3.5 0 0 0-2.506 1.034L-.514 41.872a3.5 3.5 0 0 0-.412 4.434L18 74.176a3.5 3.5 0 0 0 5.633.216l33.494-42.038a3.5 3.5 0 0 0-2.018-5.605l-31.742-6.654a3.5 3.5 0 0 0-.695-.074zm1.121 7.317 24.32 5.098-26.992 33.877L6.484 44.759Z"
              stroke-width="3"
              transform="translate(2.517 1.586) scale(.60827)"/>
        <path d="m78.734 7.668 2.61 11.396-18.145 4.154 2.705 11.816L84.05 30.88l2.609 11.396L100 21.011Z"
              stroke-width="3"
              transform="translate(1.586 1.586) scale(.60827)"/>
    </g>
</svg>
`, nv = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor" fill-rule="evenodd"
          d="M19.435 3.417c-4.478 0-8.96 1.693-12.343 5.076-6.766 6.766-6.766 17.913 0 24.679h.006c2.754 2.749 5.563 5.561 8.357 8.357 1.857 1.859 3.696 3.696 5.553 5.553l.949.949 1.892 1.898 9.496-9.49-1.898-1.898-6.502-6.502c-2.796-2.797-5.6-5.606-8.363-8.362-1.65-1.653-1.652-4.042 0-5.694 1.653-1.653 4.047-1.653 5.7 0l8.357 8.362 6.502 6.502 1.898 1.893 9.49-9.49-1.893-1.893-6.507-6.502-8.357-8.362c-3.384-3.383-7.86-5.076-12.337-5.076Zm0 2.68c3.789 0 7.577 1.432 10.439 4.294l8.357 8.362-5.694 5.694-8.357-8.362a6.7 6.7 0 0 0-9.496 0 6.697 6.697 0 0 0 0 9.49c2.76 2.755 5.566 5.564 8.363 8.362l-5.694 5.694c-2.795-2.796-5.601-5.607-8.357-8.357H8.99c-5.724-5.724-5.724-15.16 0-20.883 2.861-2.862 6.655-4.294 10.444-4.294ZM57.709 29.03a4.266 4.266 0 0 0-4.268 4.268c0 1.594.881 2.973 2.176 3.707-.714 4.997-1.424 10.107-2.176 15.037-.934 0-1.792.309-2.495.818l-7.115-5.07a4.25 4.25 0 0 0 .115-.965 4.27 4.27 0 1 0-4.268 4.268 4.23 4.23 0 0 0 2.732-1.012l6.973 4.965a4.22 4.22 0 0 0-.215 1.269 4.27 4.27 0 0 0 4.273 4.268 4.266 4.266 0 0 0 4.268-4.268 4.247 4.247 0 0 0-1.657-3.356l2.208-15.446c2.095-.273 3.722-2.045 3.722-4.215a4.27 4.27 0 0 0-4.273-4.268z"
    />
</svg>
`, rv = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <g fill="currentColor">
        <path d="m4.879 2.684-2.832 2.8L7.65 11.15l2.832-2.801Zm8.403 8.495-2.832 2.802 5.603 5.662 2.831-2.802zm8.404 8.494-2.832 2.8 5.602 5.664 2.832-2.802z"
        />
        <path d="M27.814 7.408a3.576 3.576 0 0 0-1.161-.176 3.2 3.2 0 0 0-.878.138l7.963 26.068L7.18 27.3c-.543 2.352 1.67 6.055 4.962 6.816l23.054 5.297 2.326 6.42c-2.27-.175-4.279 1.912-4.908 3.805-.535 1.698-.512 3.656.085 5.61.597 1.954 1.671 3.59 3.064 4.7 1.393 1.11 3.238 1.71 5.023 1.164 8.064-3.039 2.135-15.793.467-20.58 5.917 1.023 18.77 5.88 20.578-1.979.42-1.819-.306-3.616-1.509-4.929-1.203-1.313-2.909-2.27-4.9-2.73-1.99-.46-3.866-.547-5.602.303-1.737.849-3.768 2.642-3.468 4.73a6.17 6.17 0 0 0 .012.43l-6.563-1.794-6.88-22.632c-.702-2.297-3.445-3.99-5.108-4.523Zm26.824 26.88c1.36.315 2.472.99 3.116 1.692.644.703.795 1.307.684 1.79-.112.482-.511.956-1.399 1.305-.887.348-2.182.467-3.542.152-1.361-.314-2.472-.99-3.116-1.693-.644-.703-.797-1.304-.686-1.787.112-.482.513-.956 1.4-1.305a5.198 5.198 0 0 1 1.594-.327 6.98 6.98 0 0 1 1.949.173zM37.846 49.174c.333.069.71.25 1.13.585.746.594 1.497 1.654 1.905 2.99.408 1.335.379 2.635.092 3.545-.287.91-.731 1.34-1.205 1.484-.473.145-1.085.036-1.831-.558-.746-.594-1.496-1.655-1.904-2.99-.407-1.336-.378-2.637-.092-3.546.287-.91.732-1.342 1.206-1.486.118-.036.245-.057.38-.058.102 0 .207.011.319.034z"
        />
    </g>
</svg>
`, iv = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M41.233 7.917c-5.5 0-10.519 2.077-14.328 5.482a21.443 21.443 0 0 0-4.138-.404c-11.88 0-21.544 9.664-21.544 21.544s9.664 21.544 21.544 21.544c5.5 0 10.519-2.077 14.328-5.482 1.34.263 2.722.404 4.138.404 11.88 0 21.544-9.664 21.544-21.544S53.113 7.917 41.233 7.917zm-9.969 6.791a21.61 21.61 0 0 1 5.598 3.499l-2.01 2.33a18.557 18.557 0 0 0-4.8-2.999Zm-7.927 2.765 2.557 1.714a18.558 18.558 0 0 0-2.396 5.128l-2.955-.86a21.614 21.614 0 0 1 2.794-5.982zm15.86 3.08a21.413 21.413 0 0 1 3.46 5.628l-2.839 1.188a18.357 18.357 0 0 0-2.963-4.817zm-19.334 6.142 3.053.399a18.348 18.348 0 0 0 .144 5.654l-3.027.552a21.407 21.407 0 0 1-.17-6.605Zm23.834 2.63a21.81 21.81 0 0 1 .548 3.263c.1 1.1.115 2.207.044 3.31l-3.07-.195c.12-1.888-.056-3.8-.511-5.64zm-19.918 6.172a18.37 18.37 0 0 0 2.64 5.003l-2.466 1.84a21.427 21.427 0 0 1-3.083-5.84Zm17.042 3.016 3.004.666a21.486 21.486 0 0 1-2.404 6.15l-2.66-1.547a18.434 18.434 0 0 0 2.06-5.27zm-12.535 4.124a18.554 18.554 0 0 0 4.6 3.302l-1.392 2.744a21.611 21.611 0 0 1-5.363-3.85Z"/>
</svg>
`, sv = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M1.585 1.585V13.75h5.17v1.52H8.58v-1.52h5.17V1.585Zm3.041 3.041h6.083v6.083H4.626Zm9.429 2.13V8.58h3.65V6.755Zm5.475 0V8.58h3.65V6.755Zm5.474 0V8.58h3.65V6.755Zm5.475 0V8.58h3.65V6.755Zm5.475 0V8.58h3.65V6.755Zm5.475 0v1.597a1.521 1.521 0 0 0-.325.152l-15.686 9.758a1.52 1.52 0 0 0-.199 2.437l23.512 20.553a1.52 1.52 0 0 0 2.477-.78l4.212-17.037v.352h1.825v-3.65H55.42v1.524a1.52 1.52 0 0 0-.222-.296L43.002 8.741a1.521 1.521 0 0 0-.182-.16h2.259V6.754Zm5.475 0V8.58h3.65V6.755Zm5.474 0V8.58h3.65V6.755Zm3.042 2.432v3.65h1.825v-3.65Zm-13.752 2.549 10.757 11.137-3.57 14.446-20.087-17.559Zm13.752 2.926v3.65h1.825v-3.65ZM6.755 17.096v3.65H8.58v-3.65zm0 5.475v3.65h1.628a1.52 1.52 0 0 0 1.02.909l12.683 3.406 7.905 12.694c.168.27.417.481.712.602l13.39 4.576a1.52 1.52 0 0 0 1.157-2.814l-12.936-4.389L24.35 28.42a1.52 1.52 0 0 0-.896-.664L10.19 24.193a1.52 1.52 0 0 0-1.61.557v-2.178zm48.665 3.042v3.65h1.825v-3.65ZM6.755 28.046v3.65H8.58v-3.65zm48.665 3.042v3.65h1.825v-3.65ZM6.755 33.52v3.65H8.58v-3.65zm48.665 3.041v3.65h1.825v-3.65ZM6.755 38.996v3.65H8.58v-3.65zm48.665 3.041v3.65h1.825v-3.65zm-35.382.913c-3.454 0-6.287 2.833-6.287 6.287 0 3.076 2.248 5.654 5.179 6.183h-1.225v1.825h3.65V55.42h-.206c2.712-.5 4.777-2.796 5.055-5.59l.002-.002a1.52 1.52 0 0 0 0-1.18c-.314-3.168-2.922-5.698-6.168-5.698zM6.755 44.47v3.65H8.58v-3.65zm13.283 1.521a3.223 3.223 0 0 1 3.246 3.246 3.223 3.223 0 0 1-3.246 3.246 3.223 3.223 0 0 1-3.246-3.246 3.223 3.223 0 0 1 3.246-3.246zm35.382 1.52v2.738h-5.17v12.166h12.165V50.25h-5.17v-2.737ZM6.755 49.946v3.65H8.58v-3.65zm46.536 3.346h6.083v6.083H53.29ZM6.755 55.42v1.825h3.65V55.42H7.668Zm5.475 0v1.825h3.65V55.42zm10.95 0v1.825h3.65V55.42zm5.474 0v1.825h3.65V55.42zm5.475 0v1.825h3.65V55.42zm5.475 0v1.825h3.65V55.42zm5.475 0v1.825h3.65V55.42z"/>
</svg>
`, wt = {
  marker: Dm,
  circle: Nm,
  ellipse: Pm,
  circle_marker: jf,
  text_marker: qm,
  line: Rm,
  rectangle: Gm,
  polygon: Fm,
  freehand: Xm,
  custom_shape: Jm,
  drag: Om,
  change: Cm,
  rotate: Um,
  scale: tv,
  copy: Hm,
  cut: $m,
  split: rv,
  delete: Bm,
  union: iv,
  difference: Vm,
  line_simplification: Zm,
  lasso: jm,
  shape_markers: null,
  snapping: nv,
  pin: ev,
  snap_guides: zm,
  measurements: Km,
  auto_trace: Ym,
  geofencing: Wm,
  zoom_to_features: sv,
  click_to_edit: Qm
}, Jo = (t) => [
  {
    type: "circle",
    paint: {
      "circle-radius": t.circleMarkerRadius,
      "circle-color": t.fillColor,
      "circle-opacity": t.fillOpacity,
      "circle-stroke-color": t.lineColor,
      "circle-stroke-width": t.lineWidth,
      "circle-stroke-opacity": t.lineOpacity
    }
  }
], Mi = (t) => [
  {
    type: "circle",
    paint: {
      "circle-radius": 7,
      "circle-color": "#ffffff",
      "circle-opacity": 1,
      "circle-stroke-color": t.lineColor,
      "circle-stroke-width": 2,
      "circle-stroke-opacity": 1
    }
  }
], $o = (t) => [
  {
    type: "line",
    paint: {
      "line-color": t.lineColor,
      "line-opacity": t.lineOpacity,
      "line-width": t.lineWidth
    }
  }
], Vo = () => [
  {
    type: "symbol",
    layout: {
      "icon-image": "default-marker",
      "icon-size": 0.18,
      "icon-allow-overlap": !0,
      "icon-anchor": "bottom"
    }
  }
], Zt = (t) => [
  {
    type: "fill",
    paint: {
      "fill-color": t.fillColor,
      "fill-opacity": t.fillOpacity
    }
  },
  {
    type: "line",
    paint: {
      "line-color": t.lineColor,
      "line-opacity": t.lineOpacity,
      "line-width": t.lineWidth
    }
  }
], Xo = (t) => [
  {
    type: "circle",
    paint: {
      "circle-radius": 6,
      "circle-color": "#ffffff",
      "circle-opacity": 0.6,
      "circle-stroke-color": t.lineColor,
      "circle-stroke-width": 2,
      "circle-stroke-opacity": 1
    }
  }
], Wo = () => [
  {
    type: "line",
    paint: {
      "line-color": "#00979f",
      "line-width": 1.8,
      "line-dasharray": [2, 1]
    }
  }
], vt = `__${ut}_`, qt = `${vt}id`, Hc = 6e4, K = {
  // order matters here, layers order will be aligned according to these items
  ...at && { standby: `${ut}_standby` },
  // available only in the pro version
  main: `${ut}_main`,
  temporary: `${ut}_temporary`
}, jo = () => [
  {
    type: "symbol",
    layout: {
      "text-field": ["get", `${vt}text`],
      "text-justify": "center"
    },
    paint: {
      "text-color": "black",
      "text-halo-color": "#fff",
      "text-halo-width": 2
    }
  }
], Be = {
  [K.main]: {
    lineColor: "#278cda",
    lineOpacity: 0.8,
    lineWidth: 3,
    fillColor: "#4fb3ff",
    fillOpacity: 0.4,
    circleMarkerRadius: 10
  },
  [K.temporary]: {
    lineColor: "#ff5600",
    lineOpacity: 0.8,
    lineWidth: 3,
    fillColor: "#4fb3ff",
    fillOpacity: 0.4,
    circleMarkerRadius: 10
  },
  ...at && {
    [K.standby]: {
      lineColor: "#787878",
      lineOpacity: 0.8,
      lineWidth: 3,
      fillColor: "#a5a5a5",
      fillOpacity: 0.4,
      circleMarkerRadius: 10
    }
  }
}, av = {
  // order matters here, layers order will be aligned according to these items
  polygon: {
    [K.main]: Zt(Be[K.main]),
    [K.temporary]: Zt(Be[K.temporary]),
    ...at && { [K.standby]: Zt(Be[K.standby]) }
  },
  ellipse: {
    [K.main]: Zt(Be[K.main]),
    [K.temporary]: Zt(Be[K.temporary]),
    ...at && { [K.standby]: Zt(Be[K.standby]) }
  },
  rectangle: {
    [K.main]: Zt(Be[K.main]),
    [K.temporary]: Zt(Be[K.temporary]),
    ...at && { [K.standby]: Zt(Be[K.standby]) }
  },
  circle: {
    [K.main]: Zt(Be[K.main]),
    [K.temporary]: Zt(Be[K.temporary]),
    ...at && { [K.standby]: Zt(Be[K.standby]) }
  },
  circle_marker: {
    [K.main]: Jo(Be[K.main]),
    [K.temporary]: Jo(Be[K.temporary]),
    ...at && { [K.standby]: Jo(Be[K.standby]) }
  },
  line: {
    [K.main]: $o(Be[K.main]),
    [K.temporary]: $o(Be[K.temporary]),
    ...at && { [K.standby]: $o(Be[K.standby]) }
  },
  marker: {
    [K.temporary]: Vo(),
    [K.main]: Vo(),
    ...at && { [K.standby]: Vo() }
  },
  text_marker: {
    [K.main]: jo(),
    [K.temporary]: jo(),
    ...at && { [K.standby]: jo() }
  },
  dom_marker: {
    // not a geojson source, layers aren't required
    [K.main]: [],
    [K.temporary]: [],
    ...at && { [K.standby]: [] }
  },
  center_marker: {
    [K.main]: Mi(Be[K.main]),
    [K.temporary]: Mi(Be[K.temporary]),
    ...at && { [K.standby]: Mi(Be[K.standby]) }
  },
  vertex_marker: {
    [K.main]: Mi(Be[K.main]),
    [K.temporary]: Mi(Be[K.temporary]),
    ...at && { [K.standby]: Mi(Be[K.standby]) }
  },
  edge_marker: {
    [K.main]: Xo(Be[K.main]),
    [K.temporary]: Xo(Be[K.temporary]),
    ...at && {
      [K.standby]: Xo(Be[K.standby])
    }
  },
  snap_guide: {
    // todo: check which sources can't display snap guides (and other shapes) and remove layers
    [K.main]: Wo(),
    [K.temporary]: Wo(),
    ...at && { [K.standby]: Wo() }
  }
}, ov = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0A95F0" class="bi bi-geo-alt-fill"
     viewBox="0 0 16 16">
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
`, uv = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
    <circle cx="10.5" cy="10.5" r="9.213" fill="#fff" stroke="#278cda" stroke-width="2.303"/>
</svg>
`, lv = {
  settings: {
    throttlingDelay: 10,
    awaitDataUpdatesOnEvents: !0,
    useDefaultLayers: !0,
    controlsPosition: "top-left",
    controlsUiEnabledByDefault: !0,
    controlsCollapsible: !1,
    controlsStyles: {
      controlGroupClass: "maplibregl-ctrl maplibregl-ctrl-group",
      controlContainerClass: "gm-control-container",
      controlButtonClass: "gm-control-button"
    },
    idGenerator: null,
    markerIcons: {
      default: ov,
      control: uv
    }
  },
  layerStyles: av,
  controls: {
    draw: {
      marker: {
        title: "Marker",
        icon: wt.marker,
        uiEnabled: !0,
        active: !1
      },
      circle_marker: {
        title: "Circle Marker",
        icon: wt.circle_marker,
        uiEnabled: !0,
        active: !1
      },
      text_marker: {
        title: "Text Marker",
        icon: wt.text_marker,
        uiEnabled: !0,
        active: !1
      },
      circle: {
        title: "Circle",
        icon: wt.circle,
        uiEnabled: !0,
        active: !1
      },
      ellipse: {
        title: "Ellipse",
        icon: wt.ellipse,
        uiEnabled: !0,
        active: !1
      },
      line: {
        title: "Line",
        icon: wt.line,
        uiEnabled: !0,
        active: !1
      },
      rectangle: {
        title: "Rectangle",
        icon: wt.rectangle,
        uiEnabled: !0,
        active: !1
      },
      polygon: {
        title: "Polygon",
        icon: wt.polygon,
        uiEnabled: !0,
        active: !1
      }
    },
    edit: {
      drag: {
        title: "Drag",
        icon: wt.drag,
        uiEnabled: !0,
        active: !1
      },
      change: {
        title: "Change",
        icon: wt.change,
        uiEnabled: !0,
        active: !1
      },
      rotate: {
        title: "Rotate",
        icon: wt.rotate,
        uiEnabled: !0,
        active: !1
      },
      cut: {
        title: "Cut",
        icon: wt.cut,
        uiEnabled: !0,
        active: !1
      },
      delete: {
        title: "Delete",
        icon: wt.delete,
        uiEnabled: !0,
        active: !1
      }
    },
    helper: {
      shape_markers: {
        title: "Shape markers",
        icon: null,
        uiEnabled: !1,
        active: !1
      },
      snapping: {
        title: "Snapping",
        icon: wt.snapping,
        uiEnabled: !0,
        active: !1
      },
      zoom_to_features: {
        title: "Zoom to features",
        icon: wt.zoom_to_features,
        uiEnabled: !0,
        active: !1
      }
    }
  }
};
var Zf = typeof global == "object" && global && global.Object === Object && global, cv = typeof self == "object" && self && self.Object === Object && self, In = Zf || cv || Function("return this")(), an = In.Symbol, Kf = Object.prototype, hv = Kf.hasOwnProperty, fv = Kf.toString, hs = an ? an.toStringTag : void 0;
function gv(t) {
  var e = hv.call(t, hs), r = t[hs];
  try {
    t[hs] = void 0;
    var s = !0;
  } catch {
  }
  var u = fv.call(t);
  return s && (e ? t[hs] = r : delete t[hs]), u;
}
var dv = Object.prototype, pv = dv.toString;
function mv(t) {
  return pv.call(t);
}
var vv = "[object Null]", yv = "[object Undefined]", Jc = an ? an.toStringTag : void 0;
function ai(t) {
  return t == null ? t === void 0 ? yv : vv : Jc && Jc in Object(t) ? gv(t) : mv(t);
}
function Hn(t) {
  return t != null && typeof t == "object";
}
var _v = "[object Symbol]";
function Gi(t) {
  return typeof t == "symbol" || Hn(t) && ai(t) == _v;
}
function Ri(t, e) {
  for (var r = -1, s = t == null ? 0 : t.length, u = Array(s); ++r < s; )
    u[r] = e(t[r], r, t);
  return u;
}
var bt = Array.isArray, $c = an ? an.prototype : void 0, Vc = $c ? $c.toString : void 0;
function Qf(t) {
  if (typeof t == "string")
    return t;
  if (bt(t))
    return Ri(t, Qf) + "";
  if (Gi(t))
    return Vc ? Vc.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var Ev = /\s/;
function xv(t) {
  for (var e = t.length; e-- && Ev.test(t.charAt(e)); )
    ;
  return e;
}
var wv = /^\s+/;
function kv(t) {
  return t && t.slice(0, xv(t) + 1).replace(wv, "");
}
function At(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Xc = NaN, Sv = /^[-+]0x[0-9a-f]+$/i, Mv = /^0b[01]+$/i, Iv = /^0o[0-7]+$/i, bv = parseInt;
function Wc(t) {
  if (typeof t == "number")
    return t;
  if (Gi(t))
    return Xc;
  if (At(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = At(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = kv(t);
  var r = Mv.test(t);
  return r || Iv.test(t) ? bv(t.slice(2), r ? 2 : 8) : Sv.test(t) ? Xc : +t;
}
function mo(t) {
  return t;
}
var Av = "[object AsyncFunction]", Tv = "[object Function]", Lv = "[object GeneratorFunction]", Cv = "[object Proxy]";
function dl(t) {
  if (!At(t))
    return !1;
  var e = ai(t);
  return e == Tv || e == Lv || e == Av || e == Cv;
}
var Zo = In["__core-js_shared__"], jc = (function() {
  var t = /[^.]+$/.exec(Zo && Zo.keys && Zo.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function Nv(t) {
  return !!jc && jc in t;
}
var Pv = Function.prototype, Ov = Pv.toString;
function oi(t) {
  if (t != null) {
    try {
      return Ov.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Rv = /[\\^$.*+?()[\]{}|]/g, Dv = /^\[object .+?Constructor\]$/, Fv = Function.prototype, Gv = Object.prototype, Bv = Fv.toString, Uv = Gv.hasOwnProperty, zv = RegExp(
  "^" + Bv.call(Uv).replace(Rv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qv(t) {
  if (!At(t) || Nv(t))
    return !1;
  var e = dl(t) ? zv : Dv;
  return e.test(oi(t));
}
function Yv(t, e) {
  return t?.[e];
}
function ui(t, e) {
  var r = Yv(t, e);
  return qv(r) ? r : void 0;
}
var Mu = ui(In, "WeakMap"), Zc = Object.create, Hv = /* @__PURE__ */ (function() {
  function t() {
  }
  return function(e) {
    if (!At(e))
      return {};
    if (Zc)
      return Zc(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
})();
function Jv(t, e, r) {
  switch (r.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, r[0]);
    case 2:
      return t.call(e, r[0], r[1]);
    case 3:
      return t.call(e, r[0], r[1], r[2]);
  }
  return t.apply(e, r);
}
function $v() {
}
function Vv(t, e) {
  var r = -1, s = t.length;
  for (e || (e = Array(s)); ++r < s; )
    e[r] = t[r];
  return e;
}
var Xv = 800, Wv = 16, jv = Date.now;
function Zv(t) {
  var e = 0, r = 0;
  return function() {
    var s = jv(), u = Wv - (s - r);
    if (r = s, u > 0) {
      if (++e >= Xv)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function Kv(t) {
  return function() {
    return t;
  };
}
var Xa = (function() {
  try {
    var t = ui(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})(), Qv = Xa ? function(t, e) {
  return Xa(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Kv(e),
    writable: !0
  });
} : mo, ey = Zv(Qv);
function ty(t, e) {
  for (var r = -1, s = t == null ? 0 : t.length; ++r < s && e(t[r], r, t) !== !1; )
    ;
  return t;
}
function ny(t, e, r, s) {
  for (var u = t.length, l = r + -1; ++l < u; )
    if (e(t[l], l, t))
      return l;
  return -1;
}
function ry(t) {
  return t !== t;
}
function iy(t, e, r) {
  for (var s = r - 1, u = t.length; ++s < u; )
    if (t[s] === e)
      return s;
  return -1;
}
function sy(t, e, r) {
  return e === e ? iy(t, e, r) : ny(t, ry, r);
}
function eg(t, e) {
  var r = t == null ? 0 : t.length;
  return !!r && sy(t, e, 0) > -1;
}
var ay = 9007199254740991, oy = /^(?:0|[1-9]\d*)$/;
function vo(t, e) {
  var r = typeof t;
  return e = e ?? ay, !!e && (r == "number" || r != "symbol" && oy.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Ws(t, e, r) {
  e == "__proto__" && Xa ? Xa(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
function js(t, e) {
  return t === e || t !== t && e !== e;
}
var uy = Object.prototype, ly = uy.hasOwnProperty;
function pl(t, e, r) {
  var s = t[e];
  (!(ly.call(t, e) && js(s, r)) || r === void 0 && !(e in t)) && Ws(t, e, r);
}
function cy(t, e, r, s) {
  var u = !r;
  r || (r = {});
  for (var l = -1, f = e.length; ++l < f; ) {
    var h = e[l], p = void 0;
    p === void 0 && (p = t[h]), u ? Ws(r, h, p) : pl(r, h, p);
  }
  return r;
}
var Kc = Math.max;
function hy(t, e, r) {
  return e = Kc(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var s = arguments, u = -1, l = Kc(s.length - e, 0), f = Array(l); ++u < l; )
      f[u] = s[e + u];
    u = -1;
    for (var h = Array(e + 1); ++u < e; )
      h[u] = s[u];
    return h[e] = r(f), Jv(t, this, h);
  };
}
function ml(t, e) {
  return ey(hy(t, e, mo), t + "");
}
var fy = 9007199254740991;
function vl(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= fy;
}
function Xi(t) {
  return t != null && vl(t.length) && !dl(t);
}
function Iu(t, e, r) {
  if (!At(r))
    return !1;
  var s = typeof e;
  return (s == "number" ? Xi(r) && vo(e, r.length) : s == "string" && e in r) ? js(r[e], t) : !1;
}
function tg(t) {
  return ml(function(e, r) {
    var s = -1, u = r.length, l = u > 1 ? r[u - 1] : void 0, f = u > 2 ? r[2] : void 0;
    for (l = t.length > 3 && typeof l == "function" ? (u--, l) : void 0, f && Iu(r[0], r[1], f) && (l = u < 3 ? void 0 : l, u = 1), e = Object(e); ++s < u; ) {
      var h = r[s];
      h && t(e, h, s, l);
    }
    return e;
  });
}
var gy = Object.prototype;
function yl(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || gy;
  return t === r;
}
function dy(t, e) {
  for (var r = -1, s = Array(t); ++r < t; )
    s[r] = e(r);
  return s;
}
var py = "[object Arguments]";
function Qc(t) {
  return Hn(t) && ai(t) == py;
}
var ng = Object.prototype, my = ng.hasOwnProperty, vy = ng.propertyIsEnumerable, Bs = Qc(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Qc : function(t) {
  return Hn(t) && my.call(t, "callee") && !vy.call(t, "callee");
};
function yy() {
  return !1;
}
var rg = typeof exports == "object" && exports && !exports.nodeType && exports, eh = rg && typeof module == "object" && module && !module.nodeType && module, _y = eh && eh.exports === rg, th = _y ? In.Buffer : void 0, Ey = th ? th.isBuffer : void 0, Us = Ey || yy, xy = "[object Arguments]", wy = "[object Array]", ky = "[object Boolean]", Sy = "[object Date]", My = "[object Error]", Iy = "[object Function]", by = "[object Map]", Ay = "[object Number]", Ty = "[object Object]", Ly = "[object RegExp]", Cy = "[object Set]", Ny = "[object String]", Py = "[object WeakMap]", Oy = "[object ArrayBuffer]", Ry = "[object DataView]", Dy = "[object Float32Array]", Fy = "[object Float64Array]", Gy = "[object Int8Array]", By = "[object Int16Array]", Uy = "[object Int32Array]", zy = "[object Uint8Array]", qy = "[object Uint8ClampedArray]", Yy = "[object Uint16Array]", Hy = "[object Uint32Array]", He = {};
He[Dy] = He[Fy] = He[Gy] = He[By] = He[Uy] = He[zy] = He[qy] = He[Yy] = He[Hy] = !0;
He[xy] = He[wy] = He[Oy] = He[ky] = He[Ry] = He[Sy] = He[My] = He[Iy] = He[by] = He[Ay] = He[Ty] = He[Ly] = He[Cy] = He[Ny] = He[Py] = !1;
function Jy(t) {
  return Hn(t) && vl(t.length) && !!He[ai(t)];
}
function yo(t) {
  return function(e) {
    return t(e);
  };
}
var ig = typeof exports == "object" && exports && !exports.nodeType && exports, Cs = ig && typeof module == "object" && module && !module.nodeType && module, $y = Cs && Cs.exports === ig, Ko = $y && Zf.process, Bi = (function() {
  try {
    var t = Cs && Cs.require && Cs.require("util").types;
    return t || Ko && Ko.binding && Ko.binding("util");
  } catch {
  }
})(), nh = Bi && Bi.isTypedArray, _l = nh ? yo(nh) : Jy, Vy = Object.prototype, Xy = Vy.hasOwnProperty;
function sg(t, e) {
  var r = bt(t), s = !r && Bs(t), u = !r && !s && Us(t), l = !r && !s && !u && _l(t), f = r || s || u || l, h = f ? dy(t.length, String) : [], p = h.length;
  for (var d in t)
    (e || Xy.call(t, d)) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    u && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    vo(d, p))) && h.push(d);
  return h;
}
function ag(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var Wy = ag(Object.keys, Object), jy = Object.prototype, Zy = jy.hasOwnProperty;
function Ky(t) {
  if (!yl(t))
    return Wy(t);
  var e = [];
  for (var r in Object(t))
    Zy.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
function _o(t) {
  return Xi(t) ? sg(t) : Ky(t);
}
function Qy(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var e0 = Object.prototype, t0 = e0.hasOwnProperty;
function n0(t) {
  if (!At(t))
    return Qy(t);
  var e = yl(t), r = [];
  for (var s in t)
    s == "constructor" && (e || !t0.call(t, s)) || r.push(s);
  return r;
}
function og(t) {
  return Xi(t) ? sg(t, !0) : n0(t);
}
var r0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, i0 = /^\w*$/;
function El(t, e) {
  if (bt(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || Gi(t) ? !0 : i0.test(t) || !r0.test(t) || e != null && t in Object(e);
}
var zs = ui(Object, "create");
function s0() {
  this.__data__ = zs ? zs(null) : {}, this.size = 0;
}
function a0(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var o0 = "__lodash_hash_undefined__", u0 = Object.prototype, l0 = u0.hasOwnProperty;
function c0(t) {
  var e = this.__data__;
  if (zs) {
    var r = e[t];
    return r === o0 ? void 0 : r;
  }
  return l0.call(e, t) ? e[t] : void 0;
}
var h0 = Object.prototype, f0 = h0.hasOwnProperty;
function g0(t) {
  var e = this.__data__;
  return zs ? e[t] !== void 0 : f0.call(e, t);
}
var d0 = "__lodash_hash_undefined__";
function p0(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = zs && e === void 0 ? d0 : e, this;
}
function Kr(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var s = t[e];
    this.set(s[0], s[1]);
  }
}
Kr.prototype.clear = s0;
Kr.prototype.delete = a0;
Kr.prototype.get = c0;
Kr.prototype.has = g0;
Kr.prototype.set = p0;
function m0() {
  this.__data__ = [], this.size = 0;
}
function Eo(t, e) {
  for (var r = t.length; r--; )
    if (js(t[r][0], e))
      return r;
  return -1;
}
var v0 = Array.prototype, y0 = v0.splice;
function _0(t) {
  var e = this.__data__, r = Eo(e, t);
  if (r < 0)
    return !1;
  var s = e.length - 1;
  return r == s ? e.pop() : y0.call(e, r, 1), --this.size, !0;
}
function E0(t) {
  var e = this.__data__, r = Eo(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function x0(t) {
  return Eo(this.__data__, t) > -1;
}
function w0(t, e) {
  var r = this.__data__, s = Eo(r, t);
  return s < 0 ? (++this.size, r.push([t, e])) : r[s][1] = e, this;
}
function gr(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var s = t[e];
    this.set(s[0], s[1]);
  }
}
gr.prototype.clear = m0;
gr.prototype.delete = _0;
gr.prototype.get = E0;
gr.prototype.has = x0;
gr.prototype.set = w0;
var qs = ui(In, "Map");
function k0() {
  this.size = 0, this.__data__ = {
    hash: new Kr(),
    map: new (qs || gr)(),
    string: new Kr()
  };
}
function S0(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function xo(t, e) {
  var r = t.__data__;
  return S0(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function M0(t) {
  var e = xo(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function I0(t) {
  return xo(this, t).get(t);
}
function b0(t) {
  return xo(this, t).has(t);
}
function A0(t, e) {
  var r = xo(this, t), s = r.size;
  return r.set(t, e), this.size += r.size == s ? 0 : 1, this;
}
function dr(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var s = t[e];
    this.set(s[0], s[1]);
  }
}
dr.prototype.clear = k0;
dr.prototype.delete = M0;
dr.prototype.get = I0;
dr.prototype.has = b0;
dr.prototype.set = A0;
var T0 = "Expected a function";
function xl(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(T0);
  var r = function() {
    var s = arguments, u = e ? e.apply(this, s) : s[0], l = r.cache;
    if (l.has(u))
      return l.get(u);
    var f = t.apply(this, s);
    return r.cache = l.set(u, f) || l, f;
  };
  return r.cache = new (xl.Cache || dr)(), r;
}
xl.Cache = dr;
var L0 = 500;
function C0(t) {
  var e = xl(t, function(s) {
    return r.size === L0 && r.clear(), s;
  }), r = e.cache;
  return e;
}
var N0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, P0 = /\\(\\)?/g, O0 = C0(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(N0, function(r, s, u, l) {
    e.push(u ? l.replace(P0, "$1") : s || r);
  }), e;
});
function R0(t) {
  return t == null ? "" : Qf(t);
}
function wl(t, e) {
  return bt(t) ? t : El(t, e) ? [t] : O0(R0(t));
}
function Zs(t) {
  if (typeof t == "string" || Gi(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function kl(t, e) {
  e = wl(e, t);
  for (var r = 0, s = e.length; t != null && r < s; )
    t = t[Zs(e[r++])];
  return r && r == s ? t : void 0;
}
function Ui(t, e, r) {
  var s = t == null ? void 0 : kl(t, e);
  return s === void 0 ? r : s;
}
function ug(t, e) {
  for (var r = -1, s = e.length, u = t.length; ++r < s; )
    t[u + r] = e[r];
  return t;
}
var rh = an ? an.isConcatSpreadable : void 0;
function D0(t) {
  return bt(t) || Bs(t) || !!(rh && t && t[rh]);
}
function F0(t, e, r, s, u) {
  var l = -1, f = t.length;
  for (r || (r = D0), u || (u = []); ++l < f; ) {
    var h = t[l];
    r(h) ? ug(u, h) : u[u.length] = h;
  }
  return u;
}
var lg = ag(Object.getPrototypeOf, Object), G0 = "[object Object]", B0 = Function.prototype, U0 = Object.prototype, cg = B0.toString, z0 = U0.hasOwnProperty, q0 = cg.call(Object);
function hg(t) {
  if (!Hn(t) || ai(t) != G0)
    return !1;
  var e = lg(t);
  if (e === null)
    return !0;
  var r = z0.call(e, "constructor") && e.constructor;
  return typeof r == "function" && r instanceof r && cg.call(r) == q0;
}
function Y0() {
  this.__data__ = new gr(), this.size = 0;
}
function H0(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function J0(t) {
  return this.__data__.get(t);
}
function $0(t) {
  return this.__data__.has(t);
}
var V0 = 200;
function X0(t, e) {
  var r = this.__data__;
  if (r instanceof gr) {
    var s = r.__data__;
    if (!qs || s.length < V0 - 1)
      return s.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new dr(s);
  }
  return r.set(t, e), this.size = r.size, this;
}
function kn(t) {
  var e = this.__data__ = new gr(t);
  this.size = e.size;
}
kn.prototype.clear = Y0;
kn.prototype.delete = H0;
kn.prototype.get = J0;
kn.prototype.has = $0;
kn.prototype.set = X0;
var fg = typeof exports == "object" && exports && !exports.nodeType && exports, ih = fg && typeof module == "object" && module && !module.nodeType && module, W0 = ih && ih.exports === fg, sh = W0 ? In.Buffer : void 0, ah = sh ? sh.allocUnsafe : void 0;
function gg(t, e) {
  if (e)
    return t.slice();
  var r = t.length, s = ah ? ah(r) : new t.constructor(r);
  return t.copy(s), s;
}
function j0(t, e) {
  for (var r = -1, s = t == null ? 0 : t.length, u = 0, l = []; ++r < s; ) {
    var f = t[r];
    e(f, r, t) && (l[u++] = f);
  }
  return l;
}
function Z0() {
  return [];
}
var K0 = Object.prototype, Q0 = K0.propertyIsEnumerable, oh = Object.getOwnPropertySymbols, e1 = oh ? function(t) {
  return t == null ? [] : (t = Object(t), j0(oh(t), function(e) {
    return Q0.call(t, e);
  }));
} : Z0;
function t1(t, e, r) {
  var s = e(t);
  return bt(t) ? s : ug(s, r(t));
}
function bu(t) {
  return t1(t, _o, e1);
}
var Au = ui(In, "DataView"), Tu = ui(In, "Promise"), Di = ui(In, "Set"), uh = "[object Map]", n1 = "[object Object]", lh = "[object Promise]", ch = "[object Set]", hh = "[object WeakMap]", fh = "[object DataView]", r1 = oi(Au), i1 = oi(qs), s1 = oi(Tu), a1 = oi(Di), o1 = oi(Mu), pn = ai;
(Au && pn(new Au(new ArrayBuffer(1))) != fh || qs && pn(new qs()) != uh || Tu && pn(Tu.resolve()) != lh || Di && pn(new Di()) != ch || Mu && pn(new Mu()) != hh) && (pn = function(t) {
  var e = ai(t), r = e == n1 ? t.constructor : void 0, s = r ? oi(r) : "";
  if (s)
    switch (s) {
      case r1:
        return fh;
      case i1:
        return uh;
      case s1:
        return lh;
      case a1:
        return ch;
      case o1:
        return hh;
    }
  return e;
});
var u1 = Object.prototype, l1 = u1.hasOwnProperty;
function c1(t) {
  var e = t.length, r = new t.constructor(e);
  return e && typeof t[0] == "string" && l1.call(t, "index") && (r.index = t.index, r.input = t.input), r;
}
var Wa = In.Uint8Array;
function Sl(t) {
  var e = new t.constructor(t.byteLength);
  return new Wa(e).set(new Wa(t)), e;
}
function h1(t, e) {
  var r = Sl(t.buffer);
  return new t.constructor(r, t.byteOffset, t.byteLength);
}
var f1 = /\w*$/;
function g1(t) {
  var e = new t.constructor(t.source, f1.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var gh = an ? an.prototype : void 0, dh = gh ? gh.valueOf : void 0;
function d1(t) {
  return dh ? Object(dh.call(t)) : {};
}
function dg(t, e) {
  var r = e ? Sl(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
var p1 = "[object Boolean]", m1 = "[object Date]", v1 = "[object Map]", y1 = "[object Number]", _1 = "[object RegExp]", E1 = "[object Set]", x1 = "[object String]", w1 = "[object Symbol]", k1 = "[object ArrayBuffer]", S1 = "[object DataView]", M1 = "[object Float32Array]", I1 = "[object Float64Array]", b1 = "[object Int8Array]", A1 = "[object Int16Array]", T1 = "[object Int32Array]", L1 = "[object Uint8Array]", C1 = "[object Uint8ClampedArray]", N1 = "[object Uint16Array]", P1 = "[object Uint32Array]";
function O1(t, e, r) {
  var s = t.constructor;
  switch (e) {
    case k1:
      return Sl(t);
    case p1:
    case m1:
      return new s(+t);
    case S1:
      return h1(t);
    case M1:
    case I1:
    case b1:
    case A1:
    case T1:
    case L1:
    case C1:
    case N1:
    case P1:
      return dg(t, r);
    case v1:
      return new s();
    case y1:
    case x1:
      return new s(t);
    case _1:
      return g1(t);
    case E1:
      return new s();
    case w1:
      return d1(t);
  }
}
function pg(t) {
  return typeof t.constructor == "function" && !yl(t) ? Hv(lg(t)) : {};
}
var R1 = "[object Map]";
function D1(t) {
  return Hn(t) && pn(t) == R1;
}
var ph = Bi && Bi.isMap, F1 = ph ? yo(ph) : D1, G1 = "[object Set]";
function B1(t) {
  return Hn(t) && pn(t) == G1;
}
var mh = Bi && Bi.isSet, U1 = mh ? yo(mh) : B1, z1 = 1, mg = "[object Arguments]", q1 = "[object Array]", Y1 = "[object Boolean]", H1 = "[object Date]", J1 = "[object Error]", vg = "[object Function]", $1 = "[object GeneratorFunction]", V1 = "[object Map]", X1 = "[object Number]", yg = "[object Object]", W1 = "[object RegExp]", j1 = "[object Set]", Z1 = "[object String]", K1 = "[object Symbol]", Q1 = "[object WeakMap]", e_ = "[object ArrayBuffer]", t_ = "[object DataView]", n_ = "[object Float32Array]", r_ = "[object Float64Array]", i_ = "[object Int8Array]", s_ = "[object Int16Array]", a_ = "[object Int32Array]", o_ = "[object Uint8Array]", u_ = "[object Uint8ClampedArray]", l_ = "[object Uint16Array]", c_ = "[object Uint32Array]", qe = {};
qe[mg] = qe[q1] = qe[e_] = qe[t_] = qe[Y1] = qe[H1] = qe[n_] = qe[r_] = qe[i_] = qe[s_] = qe[a_] = qe[V1] = qe[X1] = qe[yg] = qe[W1] = qe[j1] = qe[Z1] = qe[K1] = qe[o_] = qe[u_] = qe[l_] = qe[c_] = !0;
qe[J1] = qe[vg] = qe[Q1] = !1;
function Da(t, e, r, s, u, l) {
  var f, h = e & z1;
  if (f !== void 0)
    return f;
  if (!At(t))
    return t;
  var p = bt(t);
  if (p)
    f = c1(t);
  else {
    var d = pn(t), v = d == vg || d == $1;
    if (Us(t))
      return gg(t, h);
    if (d == yg || d == mg || v && !u)
      f = v ? {} : pg(t);
    else {
      if (!qe[d])
        return u ? t : {};
      f = O1(t, d, h);
    }
  }
  l || (l = new kn());
  var _ = l.get(t);
  if (_)
    return _;
  l.set(t, f), U1(t) ? t.forEach(function(M) {
    f.add(Da(M, e, r, M, t, l));
  }) : F1(t) && t.forEach(function(M, R) {
    f.set(R, Da(M, e, r, R, t, l));
  });
  var x = bu, k = p ? void 0 : x(t);
  return ty(k || t, function(M, R) {
    k && (R = M, M = t[R]), pl(f, R, Da(M, e, r, R, t, l));
  }), f;
}
var h_ = 1, f_ = 4;
function $t(t) {
  return Da(t, h_ | f_);
}
var g_ = "__lodash_hash_undefined__";
function d_(t) {
  return this.__data__.set(t, g_), this;
}
function p_(t) {
  return this.__data__.has(t);
}
function zi(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.__data__ = new dr(); ++e < r; )
    this.add(t[e]);
}
zi.prototype.add = zi.prototype.push = d_;
zi.prototype.has = p_;
function m_(t, e) {
  for (var r = -1, s = t == null ? 0 : t.length; ++r < s; )
    if (e(t[r], r, t))
      return !0;
  return !1;
}
function ja(t, e) {
  return t.has(e);
}
var v_ = 1, y_ = 2;
function _g(t, e, r, s, u, l) {
  var f = r & v_, h = t.length, p = e.length;
  if (h != p && !(f && p > h))
    return !1;
  var d = l.get(t), v = l.get(e);
  if (d && v)
    return d == e && v == t;
  var _ = -1, x = !0, k = r & y_ ? new zi() : void 0;
  for (l.set(t, e), l.set(e, t); ++_ < h; ) {
    var M = t[_], R = e[_];
    if (s)
      var C = f ? s(R, M, _, e, t, l) : s(M, R, _, t, e, l);
    if (C !== void 0) {
      if (C)
        continue;
      x = !1;
      break;
    }
    if (k) {
      if (!m_(e, function(I, T) {
        if (!ja(k, T) && (M === I || u(M, I, r, s, l)))
          return k.push(T);
      })) {
        x = !1;
        break;
      }
    } else if (!(M === R || u(M, R, r, s, l))) {
      x = !1;
      break;
    }
  }
  return l.delete(t), l.delete(e), x;
}
function __(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(s, u) {
    r[++e] = [u, s];
  }), r;
}
function Ml(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(s) {
    r[++e] = s;
  }), r;
}
var E_ = 1, x_ = 2, w_ = "[object Boolean]", k_ = "[object Date]", S_ = "[object Error]", M_ = "[object Map]", I_ = "[object Number]", b_ = "[object RegExp]", A_ = "[object Set]", T_ = "[object String]", L_ = "[object Symbol]", C_ = "[object ArrayBuffer]", N_ = "[object DataView]", vh = an ? an.prototype : void 0, Qo = vh ? vh.valueOf : void 0;
function P_(t, e, r, s, u, l, f) {
  switch (r) {
    case N_:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case C_:
      return !(t.byteLength != e.byteLength || !l(new Wa(t), new Wa(e)));
    case w_:
    case k_:
    case I_:
      return js(+t, +e);
    case S_:
      return t.name == e.name && t.message == e.message;
    case b_:
    case T_:
      return t == e + "";
    case M_:
      var h = __;
    case A_:
      var p = s & E_;
      if (h || (h = Ml), t.size != e.size && !p)
        return !1;
      var d = f.get(t);
      if (d)
        return d == e;
      s |= x_, f.set(t, e);
      var v = _g(h(t), h(e), s, u, l, f);
      return f.delete(t), v;
    case L_:
      if (Qo)
        return Qo.call(t) == Qo.call(e);
  }
  return !1;
}
var O_ = 1, R_ = Object.prototype, D_ = R_.hasOwnProperty;
function F_(t, e, r, s, u, l) {
  var f = r & O_, h = bu(t), p = h.length, d = bu(e), v = d.length;
  if (p != v && !f)
    return !1;
  for (var _ = p; _--; ) {
    var x = h[_];
    if (!(f ? x in e : D_.call(e, x)))
      return !1;
  }
  var k = l.get(t), M = l.get(e);
  if (k && M)
    return k == e && M == t;
  var R = !0;
  l.set(t, e), l.set(e, t);
  for (var C = f; ++_ < p; ) {
    x = h[_];
    var I = t[x], T = e[x];
    if (s)
      var Y = f ? s(T, I, x, e, t, l) : s(I, T, x, t, e, l);
    if (!(Y === void 0 ? I === T || u(I, T, r, s, l) : Y)) {
      R = !1;
      break;
    }
    C || (C = x == "constructor");
  }
  if (R && !C) {
    var $ = t.constructor, J = e.constructor;
    $ != J && "constructor" in t && "constructor" in e && !(typeof $ == "function" && $ instanceof $ && typeof J == "function" && J instanceof J) && (R = !1);
  }
  return l.delete(t), l.delete(e), R;
}
var G_ = 1, yh = "[object Arguments]", _h = "[object Array]", va = "[object Object]", B_ = Object.prototype, Eh = B_.hasOwnProperty;
function U_(t, e, r, s, u, l) {
  var f = bt(t), h = bt(e), p = f ? _h : pn(t), d = h ? _h : pn(e);
  p = p == yh ? va : p, d = d == yh ? va : d;
  var v = p == va, _ = d == va, x = p == d;
  if (x && Us(t)) {
    if (!Us(e))
      return !1;
    f = !0, v = !1;
  }
  if (x && !v)
    return l || (l = new kn()), f || _l(t) ? _g(t, e, r, s, u, l) : P_(t, e, p, r, s, u, l);
  if (!(r & G_)) {
    var k = v && Eh.call(t, "__wrapped__"), M = _ && Eh.call(e, "__wrapped__");
    if (k || M) {
      var R = k ? t.value() : t, C = M ? e.value() : e;
      return l || (l = new kn()), u(R, C, r, s, l);
    }
  }
  return x ? (l || (l = new kn()), F_(t, e, r, s, u, l)) : !1;
}
function wo(t, e, r, s, u) {
  return t === e ? !0 : t == null || e == null || !Hn(t) && !Hn(e) ? t !== t && e !== e : U_(t, e, r, s, wo, u);
}
var z_ = 1, q_ = 2;
function Y_(t, e, r, s) {
  var u = r.length, l = u;
  if (t == null)
    return !l;
  for (t = Object(t); u--; ) {
    var f = r[u];
    if (f[2] ? f[1] !== t[f[0]] : !(f[0] in t))
      return !1;
  }
  for (; ++u < l; ) {
    f = r[u];
    var h = f[0], p = t[h], d = f[1];
    if (f[2]) {
      if (p === void 0 && !(h in t))
        return !1;
    } else {
      var v = new kn(), _;
      if (!(_ === void 0 ? wo(d, p, z_ | q_, s, v) : _))
        return !1;
    }
  }
  return !0;
}
function Eg(t) {
  return t === t && !At(t);
}
function H_(t) {
  for (var e = _o(t), r = e.length; r--; ) {
    var s = e[r], u = t[s];
    e[r] = [s, u, Eg(u)];
  }
  return e;
}
function xg(t, e) {
  return function(r) {
    return r == null ? !1 : r[t] === e && (e !== void 0 || t in Object(r));
  };
}
function J_(t) {
  var e = H_(t);
  return e.length == 1 && e[0][2] ? xg(e[0][0], e[0][1]) : function(r) {
    return r === t || Y_(r, t, e);
  };
}
function $_(t, e) {
  return t != null && e in Object(t);
}
function V_(t, e, r) {
  e = wl(e, t);
  for (var s = -1, u = e.length, l = !1; ++s < u; ) {
    var f = Zs(e[s]);
    if (!(l = t != null && r(t, f)))
      break;
    t = t[f];
  }
  return l || ++s != u ? l : (u = t == null ? 0 : t.length, !!u && vl(u) && vo(f, u) && (bt(t) || Bs(t)));
}
function X_(t, e) {
  return t != null && V_(t, e, $_);
}
var W_ = 1, j_ = 2;
function Z_(t, e) {
  return El(t) && Eg(e) ? xg(Zs(t), e) : function(r) {
    var s = Ui(r, t);
    return s === void 0 && s === e ? X_(r, t) : wo(e, s, W_ | j_);
  };
}
function K_(t) {
  return function(e) {
    return e?.[t];
  };
}
function Q_(t) {
  return function(e) {
    return kl(e, t);
  };
}
function eE(t) {
  return El(t) ? K_(Zs(t)) : Q_(t);
}
function wg(t) {
  return typeof t == "function" ? t : t == null ? mo : typeof t == "object" ? bt(t) ? Z_(t[0], t[1]) : J_(t) : eE(t);
}
function tE(t, e, r, s) {
  for (var u = -1, l = t == null ? 0 : t.length; ++u < l; ) {
    var f = t[u];
    e(s, f, r(f), t);
  }
  return s;
}
function nE(t) {
  return function(e, r, s) {
    for (var u = -1, l = Object(e), f = s(e), h = f.length; h--; ) {
      var p = f[++u];
      if (r(l[p], p, l) === !1)
        break;
    }
    return e;
  };
}
var kg = nE();
function rE(t, e) {
  return t && kg(t, e, _o);
}
function iE(t, e) {
  return function(r, s) {
    if (r == null)
      return r;
    if (!Xi(r))
      return t(r, s);
    for (var u = r.length, l = -1, f = Object(r); ++l < u && s(f[l], l, f) !== !1; )
      ;
    return r;
  };
}
var Sg = iE(rE);
function sE(t, e, r, s) {
  return Sg(t, function(u, l, f) {
    e(s, u, r(u), f);
  }), s;
}
function Mg(t, e) {
  return function(r, s) {
    var u = bt(r) ? tE : sE, l = e ? e() : {};
    return u(r, t, wg(s), l);
  };
}
var aE = Object.prototype, oE = aE.hasOwnProperty, uE = Mg(function(t, e, r) {
  oE.call(t, r) ? ++t[r] : Ws(t, r, 1);
}), eu = function() {
  return In.Date.now();
}, lE = "Expected a function", cE = Math.max, hE = Math.min;
function Ig(t, e, r) {
  var s, u, l, f, h, p, d = 0, v = !1, _ = !1, x = !0;
  if (typeof t != "function")
    throw new TypeError(lE);
  e = Wc(e) || 0, At(r) && (v = !!r.leading, _ = "maxWait" in r, l = _ ? cE(Wc(r.maxWait) || 0, e) : l, x = "trailing" in r ? !!r.trailing : x);
  function k(q) {
    var W = s, E = u;
    return s = u = void 0, d = q, f = t.apply(E, W), f;
  }
  function M(q) {
    return d = q, h = setTimeout(I, e), v ? k(q) : f;
  }
  function R(q) {
    var W = q - p, E = q - d, S = e - W;
    return _ ? hE(S, l - E) : S;
  }
  function C(q) {
    var W = q - p, E = q - d;
    return p === void 0 || W >= e || W < 0 || _ && E >= l;
  }
  function I() {
    var q = eu();
    if (C(q))
      return T(q);
    h = setTimeout(I, R(q));
  }
  function T(q) {
    return h = void 0, x && s ? k(q) : (s = u = void 0, f);
  }
  function Y() {
    h !== void 0 && clearTimeout(h), d = 0, s = p = u = h = void 0;
  }
  function $() {
    return h === void 0 ? f : T(eu());
  }
  function J() {
    var q = eu(), W = C(q);
    if (s = arguments, u = this, p = q, W) {
      if (h === void 0)
        return M(p);
      if (_)
        return clearTimeout(h), h = setTimeout(I, e), k(p);
    }
    return h === void 0 && (h = setTimeout(I, e)), f;
  }
  return J.cancel = Y, J.flush = $, J;
}
function Lu(t, e, r) {
  (r !== void 0 && !js(t[e], r) || r === void 0 && !(e in t)) && Ws(t, e, r);
}
function bg(t) {
  return Hn(t) && Xi(t);
}
function Cu(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
function fE(t) {
  return cy(t, og(t));
}
function gE(t, e, r, s, u, l, f) {
  var h = Cu(t, r), p = Cu(e, r), d = f.get(p);
  if (d) {
    Lu(t, r, d);
    return;
  }
  var v = l ? l(h, p, r + "", t, e, f) : void 0, _ = v === void 0;
  if (_) {
    var x = bt(p), k = !x && Us(p), M = !x && !k && _l(p);
    v = p, x || k || M ? bt(h) ? v = h : bg(h) ? v = Vv(h) : k ? (_ = !1, v = gg(p, !0)) : M ? (_ = !1, v = dg(p, !0)) : v = [] : hg(p) || Bs(p) ? (v = h, Bs(h) ? v = fE(h) : (!At(h) || dl(h)) && (v = pg(p))) : _ = !1;
  }
  _ && (f.set(p, v), u(v, p, s, l, f), f.delete(p)), Lu(t, r, v);
}
function Il(t, e, r, s, u) {
  t !== e && kg(e, function(l, f) {
    if (u || (u = new kn()), At(l))
      gE(t, e, f, r, Il, s, u);
    else {
      var h = s ? s(Cu(t, f), l, f + "", t, e, u) : void 0;
      h === void 0 && (h = l), Lu(t, f, h);
    }
  }, og);
}
var dE = tg(function(t, e, r, s) {
  Il(t, e, r, s);
});
function pE(t, e, r) {
  for (var s = -1, u = t == null ? 0 : t.length; ++s < u; )
    if (r(e, t[s]))
      return !0;
  return !1;
}
function mE(t, e) {
  var r = -1, s = Xi(t) ? Array(t.length) : [];
  return Sg(t, function(u, l, f) {
    s[++r] = e(u, l, f);
  }), s;
}
function vE(t, e) {
  return Ri(e, function(r) {
    return t[r];
  });
}
function yE(t) {
  return t == null ? [] : vE(t, _o(t));
}
var _E = Math.min;
function EE(t, e, r) {
  for (var s = eg, u = t[0].length, l = t.length, f = l, h = Array(l), p = 1 / 0, d = []; f--; ) {
    var v = t[f];
    p = _E(v.length, p), h[f] = u >= 120 && v.length >= 120 ? new zi(f && v) : void 0;
  }
  v = t[0];
  var _ = -1, x = h[0];
  e:
    for (; ++_ < u && d.length < p; ) {
      var k = v[_], M = k;
      if (k = k !== 0 ? k : 0, !(x ? ja(x, M) : s(d, M))) {
        for (f = l; --f; ) {
          var R = h[f];
          if (!(R ? ja(R, M) : s(t[f], M)))
            continue e;
        }
        x && x.push(M), d.push(k);
      }
    }
  return d;
}
function xE(t) {
  return bg(t) ? t : [];
}
var wE = ml(function(t) {
  var e = Ri(t, xE);
  return e.length && e[0] === t[0] ? EE(e) : [];
});
function Wi(t, e) {
  return wo(t, e);
}
var kE = Mg(function(t, e, r) {
  Ws(t, r, e);
}), SE = tg(function(t, e, r) {
  Il(t, e, r);
});
function ME(t, e, r, s) {
  if (!At(t))
    return t;
  e = wl(e, t);
  for (var u = -1, l = e.length, f = l - 1, h = t; h != null && ++u < l; ) {
    var p = Zs(e[u]), d = r;
    if (p === "__proto__" || p === "constructor" || p === "prototype")
      return t;
    if (u != f) {
      var v = h[p];
      d = void 0, d === void 0 && (d = At(v) ? v : vo(e[u + 1]) ? [] : {});
    }
    pl(h, p, d), h = h[p];
  }
  return t;
}
function IE(t, e) {
  var r = t.length;
  for (t.sort(e); r--; )
    t[r] = t[r].value;
  return t;
}
function bE(t, e) {
  if (t !== e) {
    var r = t !== void 0, s = t === null, u = t === t, l = Gi(t), f = e !== void 0, h = e === null, p = e === e, d = Gi(e);
    if (!h && !d && !l && t > e || l && f && p && !h && !d || s && f && p || !r && p || !u)
      return 1;
    if (!s && !l && !d && t < e || d && r && u && !s && !l || h && r && u || !f && u || !p)
      return -1;
  }
  return 0;
}
function AE(t, e, r) {
  for (var s = -1, u = t.criteria, l = e.criteria, f = u.length, h = r.length; ++s < f; ) {
    var p = bE(u[s], l[s]);
    if (p) {
      if (s >= h)
        return p;
      var d = r[s];
      return p * (d == "desc" ? -1 : 1);
    }
  }
  return t.index - e.index;
}
function TE(t, e, r) {
  e.length ? e = Ri(e, function(l) {
    return bt(l) ? function(f) {
      return kl(f, l.length === 1 ? l[0] : l);
    } : l;
  }) : e = [mo];
  var s = -1;
  e = Ri(e, yo(wg));
  var u = mE(t, function(l, f, h) {
    var p = Ri(e, function(d) {
      return d(l);
    });
    return { criteria: p, index: ++s, value: l };
  });
  return IE(u, function(l, f) {
    return AE(l, f, r);
  });
}
function LE(t, e, r) {
  return t == null ? t : ME(t, e, r);
}
var xh = ml(function(t, e) {
  if (t == null)
    return [];
  var r = e.length;
  return r > 1 && Iu(t, e[0], e[1]) ? e = [] : r > 2 && Iu(e[0], e[1], e[2]) && (e = [e[0]]), TE(t, F0(e), []);
}), CE = "Expected a function";
function Ag(t, e, r) {
  var s = !0, u = !0;
  if (typeof t != "function")
    throw new TypeError(CE);
  return At(r) && (s = "leading" in r ? !!r.leading : s, u = "trailing" in r ? !!r.trailing : u), Ig(t, e, {
    leading: s,
    maxWait: e,
    trailing: u
  });
}
var NE = 1 / 0, PE = Di && 1 / Ml(new Di([, -0]))[1] == NE ? function(t) {
  return new Di(t);
} : $v, OE = 200;
function RE(t, e, r) {
  var s = -1, u = eg, l = t.length, f = !0, h = [], p = h;
  if (r)
    f = !1, u = pE;
  else if (l >= OE) {
    var d = PE(t);
    if (d)
      return Ml(d);
    f = !1, u = ja, p = new zi();
  } else
    p = h;
  e:
    for (; ++s < l; ) {
      var v = t[s], _ = v;
      if (v = r || v !== 0 ? v : 0, f && _ === _) {
        for (var x = p.length; x--; )
          if (p[x] === _)
            continue e;
        h.push(v);
      } else u(p, _, r) || (p !== h && p.push(_), h.push(v));
    }
  return h;
}
function wh(t, e) {
  return e = typeof e == "function" ? e : void 0, t && t.length ? RE(t, void 0, e) : [];
}
function Tg(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Fa = { exports: {} }, DE = Fa.exports, kh;
function FE() {
  return kh || (kh = 1, (function(t) {
    (function(e, r) {
      t.exports ? t.exports = r() : e.log = r();
    })(DE, function() {
      var e = function() {
      }, r = "undefined", s = typeof window !== r && typeof window.navigator !== r && /Trident\/|MSIE /.test(window.navigator.userAgent), u = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
      ], l = {}, f = null;
      function h(R, C) {
        var I = R[C];
        if (typeof I.bind == "function")
          return I.bind(R);
        try {
          return Function.prototype.bind.call(I, R);
        } catch {
          return function() {
            return Function.prototype.apply.apply(I, [R, arguments]);
          };
        }
      }
      function p() {
        console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
      }
      function d(R) {
        return R === "debug" && (R = "log"), typeof console === r ? !1 : R === "trace" && s ? p : console[R] !== void 0 ? h(console, R) : console.log !== void 0 ? h(console, "log") : e;
      }
      function v() {
        for (var R = this.getLevel(), C = 0; C < u.length; C++) {
          var I = u[C];
          this[I] = C < R ? e : this.methodFactory(I, R, this.name);
        }
        if (this.log = this.debug, typeof console === r && R < this.levels.SILENT)
          return "No console available for logging";
      }
      function _(R) {
        return function() {
          typeof console !== r && (v.call(this), this[R].apply(this, arguments));
        };
      }
      function x(R, C, I) {
        return d(R) || _.apply(this, arguments);
      }
      function k(R, C) {
        var I = this, T, Y, $, J = "loglevel";
        typeof R == "string" ? J += ":" + R : typeof R == "symbol" && (J = void 0);
        function q(O) {
          var P = (u[O] || "silent").toUpperCase();
          if (!(typeof window === r || !J)) {
            try {
              window.localStorage[J] = P;
              return;
            } catch {
            }
            try {
              window.document.cookie = encodeURIComponent(J) + "=" + P + ";";
            } catch {
            }
          }
        }
        function W() {
          var O;
          if (!(typeof window === r || !J)) {
            try {
              O = window.localStorage[J];
            } catch {
            }
            if (typeof O === r)
              try {
                var P = window.document.cookie, F = encodeURIComponent(J), D = P.indexOf(F + "=");
                D !== -1 && (O = /^([^;]+)/.exec(
                  P.slice(D + F.length + 1)
                )[1]);
              } catch {
              }
            return I.levels[O] === void 0 && (O = void 0), O;
          }
        }
        function E() {
          if (!(typeof window === r || !J)) {
            try {
              window.localStorage.removeItem(J);
            } catch {
            }
            try {
              window.document.cookie = encodeURIComponent(J) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            } catch {
            }
          }
        }
        function S(O) {
          var P = O;
          if (typeof P == "string" && I.levels[P.toUpperCase()] !== void 0 && (P = I.levels[P.toUpperCase()]), typeof P == "number" && P >= 0 && P <= I.levels.SILENT)
            return P;
          throw new TypeError("log.setLevel() called with invalid level: " + O);
        }
        I.name = R, I.levels = {
          TRACE: 0,
          DEBUG: 1,
          INFO: 2,
          WARN: 3,
          ERROR: 4,
          SILENT: 5
        }, I.methodFactory = C || x, I.getLevel = function() {
          return $ ?? Y ?? T;
        }, I.setLevel = function(O, P) {
          return $ = S(O), P !== !1 && q($), v.call(I);
        }, I.setDefaultLevel = function(O) {
          Y = S(O), W() || I.setLevel(O, !1);
        }, I.resetLevel = function() {
          $ = null, E(), v.call(I);
        }, I.enableAll = function(O) {
          I.setLevel(I.levels.TRACE, O);
        }, I.disableAll = function(O) {
          I.setLevel(I.levels.SILENT, O);
        }, I.rebuild = function() {
          if (f !== I && (T = S(f.getLevel())), v.call(I), f === I)
            for (var O in l)
              l[O].rebuild();
        }, T = S(
          f ? f.getLevel() : "WARN"
        );
        var b = W();
        b != null && ($ = S(b)), v.call(I);
      }
      f = new k(), f.getLogger = function(C) {
        if (typeof C != "symbol" && typeof C != "string" || C === "")
          throw new TypeError("You must supply a name when creating a logger.");
        var I = l[C];
        return I || (I = l[C] = new k(
          C,
          f.methodFactory
        )), I;
      };
      var M = typeof window !== r ? window.log : void 0;
      return f.noConflict = function() {
        return typeof window !== r && window.log === f && (window.log = M), f;
      }, f.getLoggers = function() {
        return l;
      }, f.default = f, f;
    });
  })(Fa)), Fa.exports;
}
var GE = FE();
const te = /* @__PURE__ */ Tg(GE), BE = (t, e) => {
  let r = null;
  try {
    t.forEach((s) => {
      if (e(s))
        throw r = s, new Error("found");
    });
  } catch {
  }
  return r;
};
function Nu(t, e, r = []) {
  e(t, r), Array.isArray(t) ? t.forEach((s, u) => Nu(s, e, [...r, u])) : hg(t) ? Object.entries(t).forEach(
    ([s, u]) => Nu(u, e, [...r, s])
  ) : t !== null && typeof t == "object" && te.warn(`forEachDeep: unknown collection type (${t}), path "${r.join(".")}"`);
}
const UE = (t) => {
  const e = ["shape_markers"], r = t.settings.controlsUiEnabledByDefault;
  Nu(t, (s, u) => {
    const l = u.at(2);
    if (u.length === 4 && u.at(-1) === "uiEnabled") {
      if (e.includes(l))
        return;
      LE(t, u, r);
    }
  });
}, Pu = () => $t(lv), Ou = !1;
var bl = Array.isArray, zE = Array.prototype.indexOf, ko = Array.from, Lg = Object.defineProperty, Ns = Object.getOwnPropertyDescriptor, qE = Object.getOwnPropertyDescriptors, YE = Object.prototype, HE = Array.prototype, Cg = Object.getPrototypeOf, Sh = Object.isExtensible;
function JE(t) {
  return typeof t == "function";
}
const mn = () => {
};
function $E(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ng() {
  var t, e, r = new Promise((s, u) => {
    t = s, e = u;
  });
  return { promise: r, resolve: t, reject: e };
}
function Za(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const r = [];
  for (const s of t)
    if (r.push(s), r.length === e) break;
  return r;
}
const dt = 2, Ka = 4, So = 8, Pg = 1 << 24, Xn = 16, pr = 32, li = 64, Al = 128, sn = 512, yt = 1024, Tt = 2048, mr = 4096, Jt = 8192, Ar = 16384, Mo = 32768, Qr = 65536, Mh = 1 << 17, Og = 1 << 18, ji = 1 << 19, VE = 1 << 20, rr = 1 << 25, ei = 32768, Ru = 1 << 21, Tl = 1 << 22, Tr = 1 << 23, Ps = /* @__PURE__ */ Symbol("$state"), XE = /* @__PURE__ */ Symbol(""), Ni = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Rg(t) {
  return t === this.v;
}
function Dg(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Fg(t) {
  return !Dg(t, this.v);
}
function Gg(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function WE() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function jE(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ZE() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function KE(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function QE() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ex() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function tx() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function nx() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function rx() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let ix = !1;
const sx = 1, ax = 2, Bg = 4, ox = 8, ux = 16, lx = 1, cx = 2, hx = 4, fx = 1, gx = 2, gt = /* @__PURE__ */ Symbol(), dx = "http://www.w3.org/1999/xhtml";
let _t = null;
function qi(t) {
  _t = t;
}
function Ug(t) {
  return (
    /** @type {T} */
    px().get(t)
  );
}
function Zi(t, e = !1, r) {
  _t = {
    p: _t,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function Ki(t) {
  var e = (
    /** @type {ComponentContext} */
    _t
  ), r = e.e;
  if (r !== null) {
    e.e = null;
    for (var s of r)
      cd(s);
  }
  return e.i = !0, _t = e.p, /** @type {T} */
  {};
}
function zg() {
  return !0;
}
function px(t) {
  return _t === null && Gg(), _t.c ??= new Map(mx(_t) || void 0);
}
function mx(t) {
  let e = t.p;
  for (; e !== null; ) {
    const r = e.c;
    if (r !== null)
      return r;
    e = e.p;
  }
  return null;
}
let Pi = [];
function vx() {
  var t = Pi;
  Pi = [], $E(t);
}
function Ks(t) {
  if (Pi.length === 0) {
    var e = Pi;
    queueMicrotask(() => {
      e === Pi && vx();
    });
  }
  Pi.push(t);
}
function yx() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function _x() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function xs(t) {
  if (typeof t != "object" || t === null || Ps in t)
    return t;
  const e = Cg(t);
  if (e !== YE && e !== HE)
    return t;
  var r = /* @__PURE__ */ new Map(), s = bl(t), u = /* @__PURE__ */ Gn(0), l = Wr, f = (h) => {
    if (Wr === l)
      return h();
    var p = Ae, d = Wr;
    Dt(null), Ch(l);
    var v = h();
    return Dt(p), Ch(d), v;
  };
  return s && r.set("length", /* @__PURE__ */ Gn(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(h, p, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && ex();
        var v = r.get(p);
        return v === void 0 ? v = f(() => {
          var _ = /* @__PURE__ */ Gn(d.value);
          return r.set(p, _), _;
        }) : It(v, d.value, !0), !0;
      },
      deleteProperty(h, p) {
        var d = r.get(p);
        if (d === void 0) {
          if (p in h) {
            const v = f(() => /* @__PURE__ */ Gn(gt));
            r.set(p, v), Os(u);
          }
        } else
          It(d, gt), Os(u);
        return !0;
      },
      get(h, p, d) {
        if (p === Ps)
          return t;
        var v = r.get(p), _ = p in h;
        if (v === void 0 && (!_ || Ns(h, p)?.writable) && (v = f(() => {
          var k = xs(_ ? h[p] : gt), M = /* @__PURE__ */ Gn(k);
          return M;
        }), r.set(p, v)), v !== void 0) {
          var x = _e(v);
          return x === gt ? void 0 : x;
        }
        return Reflect.get(h, p, d);
      },
      getOwnPropertyDescriptor(h, p) {
        var d = Reflect.getOwnPropertyDescriptor(h, p);
        if (d && "value" in d) {
          var v = r.get(p);
          v && (d.value = _e(v));
        } else if (d === void 0) {
          var _ = r.get(p), x = _?.v;
          if (_ !== void 0 && x !== gt)
            return {
              enumerable: !0,
              configurable: !0,
              value: x,
              writable: !0
            };
        }
        return d;
      },
      has(h, p) {
        if (p === Ps)
          return !0;
        var d = r.get(p), v = d !== void 0 && d.v !== gt || Reflect.has(h, p);
        if (d !== void 0 || Oe !== null && (!v || Ns(h, p)?.writable)) {
          d === void 0 && (d = f(() => {
            var x = v ? xs(h[p]) : gt, k = /* @__PURE__ */ Gn(x);
            return k;
          }), r.set(p, d));
          var _ = _e(d);
          if (_ === gt)
            return !1;
        }
        return v;
      },
      set(h, p, d, v) {
        var _ = r.get(p), x = p in h;
        if (s && p === "length")
          for (var k = d; k < /** @type {Source<number>} */
          _.v; k += 1) {
            var M = r.get(k + "");
            M !== void 0 ? It(M, gt) : k in h && (M = f(() => /* @__PURE__ */ Gn(gt)), r.set(k + "", M));
          }
        if (_ === void 0)
          (!x || Ns(h, p)?.writable) && (_ = f(() => /* @__PURE__ */ Gn(void 0)), It(_, xs(d)), r.set(p, _));
        else {
          x = _.v !== gt;
          var R = f(() => xs(d));
          It(_, R);
        }
        var C = Reflect.getOwnPropertyDescriptor(h, p);
        if (C?.set && C.set.call(v, d), !x) {
          if (s && typeof p == "string") {
            var I = (
              /** @type {Source<number>} */
              r.get("length")
            ), T = Number(p);
            Number.isInteger(T) && T >= I.v && It(I, T + 1);
          }
          Os(u);
        }
        return !0;
      },
      ownKeys(h) {
        _e(u);
        var p = Reflect.ownKeys(h).filter((_) => {
          var x = r.get(_);
          return x === void 0 || x.v !== gt;
        });
        for (var [d, v] of r)
          v.v !== gt && !(d in h) && p.push(d);
        return p;
      },
      setPrototypeOf() {
        tx();
      }
    }
  );
}
function Ih(t) {
  try {
    if (t !== null && typeof t == "object" && Ps in t)
      return t[Ps];
  } catch {
  }
  return t;
}
function Ex(t, e) {
  return Object.is(Ih(t), Ih(e));
}
var bh, qg, Yg, Hg;
function xx() {
  if (bh === void 0) {
    bh = window, qg = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, r = Text.prototype;
    Yg = Ns(e, "firstChild").get, Hg = Ns(e, "nextSibling").get, Sh(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Sh(r) && (r.__t = void 0);
  }
}
function ar(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ir(t) {
  return (
    /** @type {TemplateNode | null} */
    Yg.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Qs(t) {
  return (
    /** @type {TemplateNode | null} */
    Hg.call(t)
  );
}
function _n(t, e) {
  return /* @__PURE__ */ Ir(t);
}
function Sn(t, e = !1) {
  {
    var r = /* @__PURE__ */ Ir(t);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Qs(r) : r;
  }
}
function Ys(t, e = 1, r = !1) {
  let s = t;
  for (; e--; )
    s = /** @type {TemplateNode} */
    /* @__PURE__ */ Qs(s);
  return s;
}
function wx(t) {
  t.textContent = "";
}
function Jg() {
  return !1;
}
function $g(t) {
  var e = Oe;
  if (e === null)
    return Ae.f |= Tr, t;
  if ((e.f & Mo) === 0) {
    if ((e.f & Al) === 0)
      throw t;
    e.b.error(t);
  } else
    Yi(t, e);
}
function Yi(t, e) {
  for (; e !== null; ) {
    if ((e.f & Al) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (r) {
        t = r;
      }
    e = e.parent;
  }
  throw t;
}
const kx = -7169;
function ht(t, e) {
  t.f = t.f & kx | e;
}
function Ll(t) {
  (t.f & sn) !== 0 || t.deps === null ? ht(t, yt) : ht(t, mr);
}
function Vg(t) {
  if (t !== null)
    for (const e of t)
      (e.f & dt) === 0 || (e.f & ei) === 0 || (e.f ^= ei, Vg(
        /** @type {Derived} */
        e.deps
      ));
}
function Xg(t, e, r) {
  (t.f & Tt) !== 0 ? e.add(t) : (t.f & mr) !== 0 && r.add(t), Vg(t.deps), ht(t, yt);
}
const ya = /* @__PURE__ */ new Set();
let Je = null, Ga = null, vn = null, Bn = [], Cl = null, Du = !1;
class zn {
  committed = !1;
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #a = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #e = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #i = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #s = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #r = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #n = /* @__PURE__ */ new Set();
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  is_fork = !1;
  is_deferred() {
    return this.is_fork || this.#i > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    Bn = [], Ga = null, this.apply();
    var r = [], s = [];
    for (const u of e)
      this.#o(u, r, s);
    this.is_fork || this.#l(), this.is_deferred() ? (this.#u(s), this.#u(r)) : (Ga = this, Je = null, Ah(s), Ah(r), Ga = null, this.#s?.resolve()), vn = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #o(e, r, s) {
    e.f ^= yt;
    for (var u = e.first, l = null; u !== null; ) {
      var f = u.f, h = (f & (pr | li)) !== 0, p = h && (f & yt) !== 0, d = p || (f & Jt) !== 0 || this.skipped_effects.has(u);
      if (!d && u.fn !== null) {
        h ? u.f ^= yt : l !== null && (f & (Ka | So | Pg)) !== 0 ? l.b.defer_effect(u) : (f & Ka) !== 0 ? r.push(u) : ta(u) && ((f & Xn) !== 0 && this.#r.add(u), Js(u));
        var v = u.first;
        if (v !== null) {
          u = v;
          continue;
        }
      }
      var _ = u.parent;
      for (u = u.next; u === null && _ !== null; )
        _ === l && (l = null), u = _.next, _ = _.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #u(e) {
    for (var r = 0; r < e.length; r += 1)
      Xg(e[r], this.#r, this.#n);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, r) {
    r !== gt && !this.previous.has(e) && this.previous.set(e, r), (e.f & Tr) === 0 && (this.current.set(e, e.v), vn?.set(e, e.v));
  }
  activate() {
    Je = this, this.apply();
  }
  deactivate() {
    Je === this && (Je = null, vn = null);
  }
  flush() {
    if (this.activate(), Bn.length > 0) {
      if (Sx(), Je !== null && Je !== this)
        return;
    } else this.#e === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of this.#a) e(this);
    this.#a.clear();
  }
  #l() {
    if (this.#i === 0) {
      for (const e of this.#t) e();
      this.#t.clear();
    }
    this.#e === 0 && this.#c();
  }
  #c() {
    if (ya.size > 1) {
      this.previous.clear();
      var e = vn, r = !0;
      for (const u of ya) {
        if (u === this) {
          r = !1;
          continue;
        }
        const l = [];
        for (const [h, p] of this.current) {
          if (u.current.has(h))
            if (r && p !== u.current.get(h))
              u.current.set(h, p);
            else
              continue;
          l.push(h);
        }
        if (l.length === 0)
          continue;
        const f = [...u.current.keys()].filter((h) => !this.current.has(h));
        if (f.length > 0) {
          var s = Bn;
          Bn = [];
          const h = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
          for (const d of l)
            Wg(d, f, h, p);
          if (Bn.length > 0) {
            Je = u, u.apply();
            for (const d of Bn)
              u.#o(d, [], []);
            u.deactivate();
          }
          Bn = s;
        }
      }
      Je = null, vn = e;
    }
    this.committed = !0, ya.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    this.#e += 1, e && (this.#i += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    this.#e -= 1, e && (this.#i -= 1), this.revive();
  }
  revive() {
    for (const e of this.#r)
      this.#n.delete(e), ht(e, Tt), cr(e);
    for (const e of this.#n)
      ht(e, mr), cr(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    this.#t.add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    this.#a.add(e);
  }
  settled() {
    return (this.#s ??= Ng()).promise;
  }
  static ensure() {
    if (Je === null) {
      const e = Je = new zn();
      ya.add(Je), zn.enqueue(() => {
        Je === e && e.flush();
      });
    }
    return Je;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Ks(e);
  }
  apply() {
  }
}
function Sx() {
  var t = Xr;
  Du = !0;
  var e = null;
  try {
    var r = 0;
    for (eo(!0); Bn.length > 0; ) {
      var s = zn.ensure();
      if (r++ > 1e3) {
        var u, l;
        Mx();
      }
      s.process(Bn), Lr.clear();
    }
  } finally {
    Du = !1, eo(t), Cl = null;
  }
}
function Mx() {
  try {
    QE();
  } catch (t) {
    Yi(t, Cl);
  }
}
let tr = null;
function Ah(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var s = t[r++];
      if ((s.f & (Ar | Jt)) === 0 && ta(s) && (tr = /* @__PURE__ */ new Set(), Js(s), s.deps === null && s.first === null && s.nodes === null && (s.teardown === null && s.ac === null ? md(s) : s.fn = null), tr?.size > 0)) {
        Lr.clear();
        for (const u of tr) {
          if ((u.f & (Ar | Jt)) !== 0) continue;
          const l = [u];
          let f = u.parent;
          for (; f !== null; )
            tr.has(f) && (tr.delete(f), l.push(f)), f = f.parent;
          for (let h = l.length - 1; h >= 0; h--) {
            const p = l[h];
            (p.f & (Ar | Jt)) === 0 && Js(p);
          }
        }
        tr.clear();
      }
    }
    tr = null;
  }
}
function Wg(t, e, r, s) {
  if (!r.has(t) && (r.add(t), t.reactions !== null))
    for (const u of t.reactions) {
      const l = u.f;
      (l & dt) !== 0 ? Wg(
        /** @type {Derived} */
        u,
        e,
        r,
        s
      ) : (l & (Tl | Xn)) !== 0 && (l & Tt) === 0 && jg(u, e, s) && (ht(u, Tt), cr(
        /** @type {Effect} */
        u
      ));
    }
}
function jg(t, e, r) {
  const s = r.get(t);
  if (s !== void 0) return s;
  if (t.deps !== null)
    for (const u of t.deps) {
      if (e.includes(u))
        return !0;
      if ((u.f & dt) !== 0 && jg(
        /** @type {Derived} */
        u,
        e,
        r
      ))
        return r.set(
          /** @type {Derived} */
          u,
          !0
        ), !0;
    }
  return r.set(t, !1), !1;
}
function cr(t) {
  for (var e = Cl = t; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if (Du && e === Oe && (r & Xn) !== 0 && (r & Og) === 0)
      return;
    if ((r & (li | pr)) !== 0) {
      if ((r & yt) === 0) return;
      e.f ^= yt;
    }
  }
  Bn.push(e);
}
function Ix(t) {
  let e = 0, r = ti(0), s;
  return () => {
    Ol() && (_e(r), fd(() => (e === 0 && (s = na(() => t(() => Os(r)))), e += 1, () => {
      Ks(() => {
        e -= 1, e === 0 && (s?.(), s = void 0, Os(r));
      });
    })));
  };
}
var bx = Qr | ji | Al;
function Ax(t, e, r) {
  new Tx(t, e, r);
}
class Tx {
  /** @type {Boundary | null} */
  parent;
  is_pending = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #a = null;
  /** @type {BoundaryProps} */
  #e;
  /** @type {((anchor: Node) => void)} */
  #i;
  /** @type {Effect} */
  #s;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #n = null;
  /** @type {Effect | null} */
  #o = null;
  /** @type {DocumentFragment | null} */
  #u = null;
  /** @type {TemplateNode | null} */
  #l = null;
  #c = 0;
  #h = 0;
  #g = !1;
  /** @type {Set<Effect>} */
  #d = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #p = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #f = null;
  #E = Ix(() => (this.#f = ti(this.#c), () => {
    this.#f = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, r, s) {
    this.#t = e, this.#e = r, this.#i = s, this.parent = /** @type {Effect} */
    Oe.b, this.is_pending = !!this.#e.pending, this.#s = Dl(() => {
      Oe.b = this;
      {
        var u = this.#y();
        try {
          this.#r = rn(() => s(u));
        } catch (l) {
          this.error(l);
        }
        this.#h > 0 ? this.#v() : this.is_pending = !1;
      }
      return () => {
        this.#l?.remove();
      };
    }, bx);
  }
  #x() {
    try {
      this.#r = rn(() => this.#i(this.#t));
    } catch (e) {
      this.error(e);
    }
  }
  #w() {
    const e = this.#e.pending;
    e && (this.#n = rn(() => e(this.#t)), zn.enqueue(() => {
      var r = this.#y();
      this.#r = this.#m(() => (zn.ensure(), rn(() => this.#i(r)))), this.#h > 0 ? this.#v() : (jr(
        /** @type {Effect} */
        this.#n,
        () => {
          this.#n = null;
        }
      ), this.is_pending = !1);
    }));
  }
  #y() {
    var e = this.#t;
    return this.is_pending && (this.#l = ar(), this.#t.before(this.#l), e = this.#l), e;
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Xg(e, this.#d, this.#p);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #m(e) {
    var r = Oe, s = Ae, u = _t;
    Jn(this.#s), Dt(this.#s), qi(this.#s.ctx);
    try {
      return e();
    } catch (l) {
      return $g(l), null;
    } finally {
      Jn(r), Dt(s), qi(u);
    }
  }
  #v() {
    const e = (
      /** @type {(anchor: Node) => void} */
      this.#e.pending
    );
    this.#r !== null && (this.#u = document.createDocumentFragment(), this.#u.append(
      /** @type {TemplateNode} */
      this.#l
    ), _d(this.#r, this.#u)), this.#n === null && (this.#n = rn(() => e(this.#t)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #_(e) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#_(e);
      return;
    }
    if (this.#h += e, this.#h === 0) {
      this.is_pending = !1;
      for (const r of this.#d)
        ht(r, Tt), cr(r);
      for (const r of this.#p)
        ht(r, mr), cr(r);
      this.#d.clear(), this.#p.clear(), this.#n && jr(this.#n, () => {
        this.#n = null;
      }), this.#u && (this.#t.before(this.#u), this.#u = null);
    }
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    this.#_(e), this.#c += e, this.#f && Hi(this.#f, this.#c);
  }
  get_effect_pending() {
    return this.#E(), _e(
      /** @type {Source<number>} */
      this.#f
    );
  }
  /** @param {unknown} error */
  error(e) {
    var r = this.#e.onerror;
    let s = this.#e.failed;
    if (this.#g || !r && !s)
      throw e;
    this.#r && (Ft(this.#r), this.#r = null), this.#n && (Ft(this.#n), this.#n = null), this.#o && (Ft(this.#o), this.#o = null);
    var u = !1, l = !1;
    const f = () => {
      if (u) {
        _x();
        return;
      }
      u = !0, l && rx(), zn.ensure(), this.#c = 0, this.#o !== null && jr(this.#o, () => {
        this.#o = null;
      }), this.is_pending = this.has_pending_snippet(), this.#r = this.#m(() => (this.#g = !1, rn(() => this.#i(this.#t)))), this.#h > 0 ? this.#v() : this.is_pending = !1;
    };
    var h = Ae;
    try {
      Dt(null), l = !0, r?.(e, f), l = !1;
    } catch (p) {
      Yi(p, this.#s && this.#s.parent);
    } finally {
      Dt(h);
    }
    s && Ks(() => {
      this.#o = this.#m(() => {
        zn.ensure(), this.#g = !0;
        try {
          return rn(() => {
            s(
              this.#t,
              () => e,
              () => f
            );
          });
        } catch (p) {
          return Yi(
            p,
            /** @type {Effect} */
            this.#s.parent
          ), null;
        } finally {
          this.#g = !1;
        }
      });
    });
  }
}
function Lx(t, e, r, s) {
  const u = Nl;
  if (r.length === 0 && t.length === 0) {
    s(e.map(u));
    return;
  }
  var l = Je, f = (
    /** @type {Effect} */
    Oe
  ), h = Cx();
  function p() {
    Promise.all(r.map((d) => /* @__PURE__ */ Nx(d))).then((d) => {
      h();
      try {
        s([...e.map(u), ...d]);
      } catch (v) {
        (f.f & Ar) === 0 && Yi(v, f);
      }
      l?.deactivate(), Qa();
    }).catch((d) => {
      Yi(d, f);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    h();
    try {
      return p();
    } finally {
      l?.deactivate(), Qa();
    }
  }) : p();
}
function Cx() {
  var t = Oe, e = Ae, r = _t, s = Je;
  return function(l = !0) {
    Jn(t), Dt(e), qi(r), l && s?.activate();
  };
}
function Qa() {
  Jn(null), Dt(null), qi(null);
}
// @__NO_SIDE_EFFECTS__
function Nl(t) {
  var e = dt | Tt, r = Ae !== null && (Ae.f & dt) !== 0 ? (
    /** @type {Derived} */
    Ae
  ) : null;
  return Oe !== null && (Oe.f |= ji), {
    ctx: _t,
    deps: null,
    effects: null,
    equals: Rg,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      gt
    ),
    wv: 0,
    parent: r ?? Oe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Nx(t, e, r) {
  let s = (
    /** @type {Effect | null} */
    Oe
  );
  s === null && WE();
  var u = (
    /** @type {Boundary} */
    s.b
  ), l = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), f = ti(
    /** @type {V} */
    gt
  ), h = !Ae, p = /* @__PURE__ */ new Map();
  return Yx(() => {
    var d = Ng();
    l = d.promise;
    try {
      Promise.resolve(t()).then(d.resolve, d.reject).then(() => {
        v === Je && v.committed && v.deactivate(), Qa();
      });
    } catch (k) {
      d.reject(k), Qa();
    }
    var v = (
      /** @type {Batch} */
      Je
    );
    if (h) {
      var _ = u.is_rendered();
      u.update_pending_count(1), v.increment(_), p.get(v)?.reject(Ni), p.delete(v), p.set(v, d);
    }
    const x = (k, M = void 0) => {
      if (v.activate(), M)
        M !== Ni && (f.f |= Tr, Hi(f, M));
      else {
        (f.f & Tr) !== 0 && (f.f ^= Tr), Hi(f, k);
        for (const [R, C] of p) {
          if (p.delete(R), R === v) break;
          C.reject(Ni);
        }
      }
      h && (u.update_pending_count(-1), v.decrement(_));
    };
    d.promise.then(x, (k) => x(null, k || "unknown"));
  }), Rl(() => {
    for (const d of p.values())
      d.reject(Ni);
  }), new Promise((d) => {
    function v(_) {
      function x() {
        _ === l ? d(f) : v(l);
      }
      _.then(x, x);
    }
    v(l);
  });
}
// @__NO_SIDE_EFFECTS__
function yn(t) {
  const e = /* @__PURE__ */ Nl(t);
  return rd(e), e;
}
// @__NO_SIDE_EFFECTS__
function Px(t) {
  const e = /* @__PURE__ */ Nl(t);
  return e.equals = Fg, e;
}
function Zg(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var r = 0; r < e.length; r += 1)
      Ft(
        /** @type {Effect} */
        e[r]
      );
  }
}
function Ox(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & dt) === 0)
      return (e.f & Ar) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Pl(t) {
  var e, r = Oe;
  Jn(Ox(t));
  try {
    t.f &= ~ei, Zg(t), e = od(t);
  } finally {
    Jn(r);
  }
  return e;
}
function Kg(t) {
  var e = Pl(t);
  if (!t.equals(e) && (t.wv = sd(), (!Je?.is_fork || t.deps === null) && (t.v = e, t.deps === null))) {
    ht(t, yt);
    return;
  }
  ni || (vn !== null ? (Ol() || Je?.is_fork) && vn.set(t, e) : Ll(t));
}
let Fu = /* @__PURE__ */ new Set();
const Lr = /* @__PURE__ */ new Map();
let Qg = !1;
function ti(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Rg,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function Gn(t, e) {
  const r = ti(t);
  return rd(r), r;
}
// @__NO_SIDE_EFFECTS__
function ed(t, e = !1, r = !0) {
  const s = ti(t);
  return e || (s.equals = Fg), s;
}
function It(t, e, r = !1) {
  Ae !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!En || (Ae.f & Mh) !== 0) && zg() && (Ae.f & (dt | Xn | Tl | Mh)) !== 0 && !or?.includes(t) && nx();
  let s = r ? xs(e) : e;
  return Hi(t, s);
}
function Hi(t, e) {
  if (!t.equals(e)) {
    var r = t.v;
    ni ? Lr.set(t, e) : Lr.set(t, r), t.v = e;
    var s = zn.ensure();
    if (s.capture(t, r), (t.f & dt) !== 0) {
      const u = (
        /** @type {Derived} */
        t
      );
      (t.f & Tt) !== 0 && Pl(u), Ll(u);
    }
    t.wv = sd(), td(t, Tt), Oe !== null && (Oe.f & yt) !== 0 && (Oe.f & (pr | li)) === 0 && (tn === null ? Fx([t]) : tn.push(t)), !s.is_fork && Fu.size > 0 && !Qg && Rx();
  }
  return e;
}
function Rx() {
  Qg = !1;
  var t = Xr;
  eo(!0);
  const e = Array.from(Fu);
  try {
    for (const r of e)
      (r.f & yt) !== 0 && ht(r, mr), ta(r) && Js(r);
  } finally {
    eo(t);
  }
  Fu.clear();
}
function Os(t) {
  It(t, t.v + 1);
}
function td(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var s = r.length, u = 0; u < s; u++) {
      var l = r[u], f = l.f, h = (f & Tt) === 0;
      if (h && ht(l, e), (f & dt) !== 0) {
        var p = (
          /** @type {Derived} */
          l
        );
        vn?.delete(p), (f & ei) === 0 && (f & sn && (l.f |= ei), td(p, mr));
      } else h && ((f & Xn) !== 0 && tr !== null && tr.add(
        /** @type {Effect} */
        l
      ), cr(
        /** @type {Effect} */
        l
      ));
    }
}
let Th = !1;
function Dx() {
  Th || (Th = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        if (!t.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            e.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function ea(t) {
  var e = Ae, r = Oe;
  Dt(null), Jn(null);
  try {
    return t();
  } finally {
    Dt(e), Jn(r);
  }
}
function nd(t, e, r, s = r) {
  t.addEventListener(e, () => ea(r));
  const u = t.__on_r;
  u ? t.__on_r = () => {
    u(), s(!0);
  } : t.__on_r = () => s(!0), Dx();
}
let Xr = !1;
function eo(t) {
  Xr = t;
}
let ni = !1;
function Lh(t) {
  ni = t;
}
let Ae = null, En = !1;
function Dt(t) {
  Ae = t;
}
let Oe = null;
function Jn(t) {
  Oe = t;
}
let or = null;
function rd(t) {
  Ae !== null && (or === null ? or = [t] : or.push(t));
}
let Mt = null, zt = 0, tn = null;
function Fx(t) {
  tn = t;
}
let id = 1, Hs = 0, Wr = Hs;
function Ch(t) {
  Wr = t;
}
function sd() {
  return ++id;
}
function ta(t) {
  var e = t.f;
  if ((e & Tt) !== 0)
    return !0;
  if (e & dt && (t.f &= ~ei), (e & mr) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      t.deps
    ), s = r.length, u = 0; u < s; u++) {
      var l = r[u];
      if (ta(
        /** @type {Derived} */
        l
      ) && Kg(
        /** @type {Derived} */
        l
      ), l.wv > t.wv)
        return !0;
    }
    (e & sn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    vn === null && ht(t, yt);
  }
  return !1;
}
function ad(t, e, r = !0) {
  var s = t.reactions;
  if (s !== null && !or?.includes(t))
    for (var u = 0; u < s.length; u++) {
      var l = s[u];
      (l.f & dt) !== 0 ? ad(
        /** @type {Derived} */
        l,
        e,
        !1
      ) : e === l && (r ? ht(l, Tt) : (l.f & yt) !== 0 && ht(l, mr), cr(
        /** @type {Effect} */
        l
      ));
    }
}
function od(t) {
  var e = Mt, r = zt, s = tn, u = Ae, l = or, f = _t, h = En, p = Wr, d = t.f;
  Mt = /** @type {null | Value[]} */
  null, zt = 0, tn = null, Ae = (d & (pr | li)) === 0 ? t : null, or = null, qi(t.ctx), En = !1, Wr = ++Hs, t.ac !== null && (ea(() => {
    t.ac.abort(Ni);
  }), t.ac = null);
  try {
    t.f |= Ru;
    var v = (
      /** @type {Function} */
      t.fn
    ), _ = v(), x = t.deps;
    if (Mt !== null) {
      var k;
      if (to(t, zt), x !== null && zt > 0)
        for (x.length = zt + Mt.length, k = 0; k < Mt.length; k++)
          x[zt + k] = Mt[k];
      else
        t.deps = x = Mt;
      if (Ol() && (t.f & sn) !== 0)
        for (k = zt; k < x.length; k++)
          (x[k].reactions ??= []).push(t);
    } else x !== null && zt < x.length && (to(t, zt), x.length = zt);
    if (zg() && tn !== null && !En && x !== null && (t.f & (dt | mr | Tt)) === 0)
      for (k = 0; k < /** @type {Source[]} */
      tn.length; k++)
        ad(
          tn[k],
          /** @type {Effect} */
          t
        );
    return u !== null && u !== t && (Hs++, tn !== null && (s === null ? s = tn : s.push(.../** @type {Source[]} */
    tn))), (t.f & Tr) !== 0 && (t.f ^= Tr), _;
  } catch (M) {
    return $g(M);
  } finally {
    t.f ^= Ru, Mt = e, zt = r, tn = s, Ae = u, or = l, qi(f), En = h, Wr = p;
  }
}
function Gx(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var s = zE.call(r, t);
    if (s !== -1) {
      var u = r.length - 1;
      u === 0 ? r = e.reactions = null : (r[s] = r[u], r.pop());
    }
  }
  if (r === null && (e.f & dt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Mt === null || !Mt.includes(e))) {
    var l = (
      /** @type {Derived} */
      e
    );
    (l.f & sn) !== 0 && (l.f ^= sn, l.f &= ~ei), Ll(l), Zg(l), to(l, 0);
  }
}
function to(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var s = e; s < r.length; s++)
      Gx(t, r[s]);
}
function Js(t) {
  var e = t.f;
  if ((e & Ar) === 0) {
    ht(t, yt);
    var r = Oe, s = Xr;
    Oe = t, Xr = !0;
    try {
      (e & (Xn | Pg)) !== 0 ? Hx(t) : dd(t), gd(t);
      var u = od(t);
      t.teardown = typeof u == "function" ? u : null, t.wv = id;
      var l;
      Ou && ix && (t.f & Tt) !== 0 && t.deps;
    } finally {
      Xr = s, Oe = r;
    }
  }
}
function _e(t) {
  var e = t.f, r = (e & dt) !== 0;
  if (Ae !== null && !En) {
    var s = Oe !== null && (Oe.f & Ar) !== 0;
    if (!s && !or?.includes(t)) {
      var u = Ae.deps;
      if ((Ae.f & Ru) !== 0)
        t.rv < Hs && (t.rv = Hs, Mt === null && u !== null && u[zt] === t ? zt++ : Mt === null ? Mt = [t] : Mt.includes(t) || Mt.push(t));
      else {
        (Ae.deps ??= []).push(t);
        var l = t.reactions;
        l === null ? t.reactions = [Ae] : l.includes(Ae) || l.push(Ae);
      }
    }
  }
  if (ni && Lr.has(t))
    return Lr.get(t);
  if (r) {
    var f = (
      /** @type {Derived} */
      t
    );
    if (ni) {
      var h = f.v;
      return ((f.f & yt) === 0 && f.reactions !== null || ld(f)) && (h = Pl(f)), Lr.set(f, h), h;
    }
    var p = (f.f & sn) === 0 && !En && Ae !== null && (Xr || (Ae.f & sn) !== 0), d = f.deps === null;
    ta(f) && (p && (f.f |= sn), Kg(f)), p && !d && ud(f);
  }
  if (vn?.has(t))
    return vn.get(t);
  if ((t.f & Tr) !== 0)
    throw t.v;
  return t.v;
}
function ud(t) {
  if (t.deps !== null) {
    t.f |= sn;
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & dt) !== 0 && (e.f & sn) === 0 && ud(
        /** @type {Derived} */
        e
      );
  }
}
function ld(t) {
  if (t.v === gt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Lr.has(e) || (e.f & dt) !== 0 && ld(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function na(t) {
  var e = En;
  try {
    return En = !0, t();
  } finally {
    En = e;
  }
}
function Bx(t) {
  Oe === null && (Ae === null && KE(), ZE()), ni && jE();
}
function Ux(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function vr(t, e, r) {
  var s = Oe;
  s !== null && (s.f & Jt) !== 0 && (t |= Jt);
  var u = {
    ctx: _t,
    deps: null,
    nodes: null,
    f: t | Tt | sn,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: s,
    b: s && s.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      Js(u), u.f |= Mo;
    } catch (h) {
      throw Ft(u), h;
    }
  else e !== null && cr(u);
  var l = u;
  if (r && l.deps === null && l.teardown === null && l.nodes === null && l.first === l.last && // either `null`, or a singular child
  (l.f & ji) === 0 && (l = l.first, (t & Xn) !== 0 && (t & Qr) !== 0 && l !== null && (l.f |= Qr)), l !== null && (l.parent = s, s !== null && Ux(l, s), Ae !== null && (Ae.f & dt) !== 0 && (t & li) === 0)) {
    var f = (
      /** @type {Derived} */
      Ae
    );
    (f.effects ??= []).push(l);
  }
  return u;
}
function Ol() {
  return Ae !== null && !En;
}
function Rl(t) {
  const e = vr(So, null, !1);
  return ht(e, yt), e.teardown = t, e;
}
function zx(t) {
  Bx();
  var e = (
    /** @type {Effect} */
    Oe.f
  ), r = !Ae && (e & pr) !== 0 && (e & Mo) === 0;
  if (r) {
    var s = (
      /** @type {ComponentContext} */
      _t
    );
    (s.e ??= []).push(t);
  } else
    return cd(t);
}
function cd(t) {
  return vr(Ka | VE, t, !1);
}
function qx(t) {
  zn.ensure();
  const e = vr(li | ji, t, !0);
  return (r = {}) => new Promise((s) => {
    r.outro ? jr(e, () => {
      Ft(e), s(void 0);
    }) : (Ft(e), s(void 0));
  });
}
function hd(t) {
  return vr(Ka, t, !1);
}
function Yx(t) {
  return vr(Tl | ji, t, !0);
}
function fd(t, e = 0) {
  return vr(So | e, t, !0);
}
function xn(t, e = [], r = [], s = []) {
  Lx(s, e, r, (u) => {
    vr(So, () => t(...u.map(_e)), !0);
  });
}
function Dl(t, e = 0) {
  var r = vr(Xn | e, t, !0);
  return r;
}
function rn(t) {
  return vr(pr | ji, t, !0);
}
function gd(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = ni, s = Ae;
    Lh(!0), Dt(null);
    try {
      e.call(null);
    } finally {
      Lh(r), Dt(s);
    }
  }
}
function dd(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    const u = r.ac;
    u !== null && ea(() => {
      u.abort(Ni);
    });
    var s = r.next;
    (r.f & li) !== 0 ? r.parent = null : Ft(r, e), r = s;
  }
}
function Hx(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    (e.f & pr) === 0 && Ft(e), e = r;
  }
}
function Ft(t, e = !0) {
  var r = !1;
  (e || (t.f & Og) !== 0) && t.nodes !== null && t.nodes.end !== null && (pd(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), r = !0), dd(t, e && !r), to(t, 0), ht(t, Ar);
  var s = t.nodes && t.nodes.t;
  if (s !== null)
    for (const l of s)
      l.stop();
  gd(t);
  var u = t.parent;
  u !== null && u.first !== null && md(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function pd(t, e) {
  for (; t !== null; ) {
    var r = t === e ? null : /* @__PURE__ */ Qs(t);
    t.remove(), t = r;
  }
}
function md(t) {
  var e = t.parent, r = t.prev, s = t.next;
  r !== null && (r.next = s), s !== null && (s.prev = r), e !== null && (e.first === t && (e.first = s), e.last === t && (e.last = r));
}
function jr(t, e, r = !0) {
  var s = [];
  vd(t, s, !0);
  var u = () => {
    r && Ft(t), e && e();
  }, l = s.length;
  if (l > 0) {
    var f = () => --l || u();
    for (var h of s)
      h.out(f);
  } else
    u();
}
function vd(t, e, r) {
  if ((t.f & Jt) === 0) {
    t.f ^= Jt;
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const h of s)
        (h.is_global || r) && e.push(h);
    for (var u = t.first; u !== null; ) {
      var l = u.next, f = (u.f & Qr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (u.f & pr) !== 0 && (t.f & Xn) !== 0;
      vd(u, e, f ? r : !1), u = l;
    }
  }
}
function Fl(t) {
  yd(t, !0);
}
function yd(t, e) {
  if ((t.f & Jt) !== 0) {
    t.f ^= Jt, (t.f & yt) === 0 && (ht(t, Tt), cr(t));
    for (var r = t.first; r !== null; ) {
      var s = r.next, u = (r.f & Qr) !== 0 || (r.f & pr) !== 0;
      yd(r, u ? e : !1), r = s;
    }
    var l = t.nodes && t.nodes.t;
    if (l !== null)
      for (const f of l)
        (f.is_global || e) && f.in();
  }
}
function _d(t, e) {
  if (t.nodes)
    for (var r = t.nodes.start, s = t.nodes.end; r !== null; ) {
      var u = r === s ? null : /* @__PURE__ */ Qs(r);
      e.append(r), r = u;
    }
}
const Jx = ["touchstart", "touchmove"];
function $x(t) {
  return Jx.includes(t);
}
const Ed = /* @__PURE__ */ new Set(), Gu = /* @__PURE__ */ new Set();
function Io(t) {
  for (var e = 0; e < t.length; e++)
    Ed.add(t[e]);
  for (var r of Gu)
    r(t);
}
let Nh = null;
function _a(t) {
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), s = t.type, u = t.composedPath?.() || [], l = (
    /** @type {null | Element} */
    u[0] || t.target
  );
  Nh = t;
  var f = 0, h = Nh === t && t.__root;
  if (h) {
    var p = u.indexOf(h);
    if (p !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var d = u.indexOf(e);
    if (d === -1)
      return;
    p <= d && (f = p);
  }
  if (l = /** @type {Element} */
  u[f] || t.target, l !== e) {
    Lg(t, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var v = Ae, _ = Oe;
    Dt(null), Jn(null);
    try {
      for (var x, k = []; l !== null; ) {
        var M = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var R = l["__" + s];
          R != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === l) && R.call(l, t);
        } catch (C) {
          x ? k.push(C) : x = C;
        }
        if (t.cancelBubble || M === e || M === null)
          break;
        l = M;
      }
      if (x) {
        for (let C of k)
          queueMicrotask(() => {
            throw C;
          });
        throw x;
      }
    } finally {
      t.__root = e, delete t.currentTarget, Dt(v), Jn(_);
    }
  }
}
function xd(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function $s(t, e) {
  var r = (
    /** @type {Effect} */
    Oe
  );
  r.nodes === null && (r.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ln(t, e) {
  var r = (e & fx) !== 0, s = (e & gx) !== 0, u, l = !t.startsWith("<!>");
  return () => {
    u === void 0 && (u = xd(l ? t : "<!>" + t), r || (u = /** @type {TemplateNode} */
    /* @__PURE__ */ Ir(u)));
    var f = (
      /** @type {TemplateNode} */
      s || qg ? document.importNode(u, !0) : u.cloneNode(!0)
    );
    if (r) {
      var h = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ir(f)
      ), p = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      $s(h, p);
    } else
      $s(f, f);
    return f;
  };
}
function Ph(t = "") {
  {
    var e = ar(t + "");
    return $s(e, e), e;
  }
}
function ur() {
  var t = document.createDocumentFragment(), e = document.createComment(""), r = ar();
  return t.append(e, r), $s(e, r), t;
}
function We(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
let Bu = !0;
function Fi(t, e) {
  var r = e == null ? "" : typeof e == "object" ? e + "" : e;
  r !== (t.__t ??= t.nodeValue) && (t.__t = r, t.nodeValue = r + "");
}
function Vx(t, e) {
  return Xx(t, e);
}
const Ii = /* @__PURE__ */ new Map();
function Xx(t, { target: e, anchor: r, props: s = {}, events: u, context: l, intro: f = !0 }) {
  xx();
  var h = /* @__PURE__ */ new Set(), p = (_) => {
    for (var x = 0; x < _.length; x++) {
      var k = _[x];
      if (!h.has(k)) {
        h.add(k);
        var M = $x(k);
        e.addEventListener(k, _a, { passive: M });
        var R = Ii.get(k);
        R === void 0 ? (document.addEventListener(k, _a, { passive: M }), Ii.set(k, 1)) : Ii.set(k, R + 1);
      }
    }
  };
  p(ko(Ed)), Gu.add(p);
  var d = void 0, v = qx(() => {
    var _ = r ?? e.appendChild(ar());
    return Ax(
      /** @type {TemplateNode} */
      _,
      {
        pending: () => {
        }
      },
      (x) => {
        if (l) {
          Zi({});
          var k = (
            /** @type {ComponentContext} */
            _t
          );
          k.c = l;
        }
        u && (s.$$events = u), Bu = f, d = t(x, s) || {}, Bu = !0, l && Ki();
      }
    ), () => {
      for (var x of h) {
        e.removeEventListener(x, _a);
        var k = (
          /** @type {number} */
          Ii.get(x)
        );
        --k === 0 ? (document.removeEventListener(x, _a), Ii.delete(x)) : Ii.set(x, k);
      }
      Gu.delete(p), _ !== r && _.parentNode?.removeChild(_);
    };
  });
  return Uu.set(d, v), d;
}
let Uu = /* @__PURE__ */ new WeakMap();
function Wx(t, e) {
  const r = Uu.get(t);
  return r ? (Uu.delete(t), r(e)) : Promise.resolve();
}
class jx {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #t = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #a = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #e = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #i = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #s = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, r = !0) {
    this.anchor = e, this.#s = r;
  }
  #r = () => {
    var e = (
      /** @type {Batch} */
      Je
    );
    if (this.#t.has(e)) {
      var r = (
        /** @type {Key} */
        this.#t.get(e)
      ), s = this.#a.get(r);
      if (s)
        Fl(s), this.#i.delete(r);
      else {
        var u = this.#e.get(r);
        u && (this.#a.set(r, u.effect), this.#e.delete(r), u.fragment.lastChild.remove(), this.anchor.before(u.fragment), s = u.effect);
      }
      for (const [l, f] of this.#t) {
        if (this.#t.delete(l), l === e)
          break;
        const h = this.#e.get(f);
        h && (Ft(h.effect), this.#e.delete(f));
      }
      for (const [l, f] of this.#a) {
        if (l === r || this.#i.has(l)) continue;
        const h = () => {
          if (Array.from(this.#t.values()).includes(l)) {
            var d = document.createDocumentFragment();
            _d(f, d), d.append(ar()), this.#e.set(l, { effect: f, fragment: d });
          } else
            Ft(f);
          this.#i.delete(l), this.#a.delete(l);
        };
        this.#s || !s ? (this.#i.add(l), jr(f, h, !1)) : h();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #n = (e) => {
    this.#t.delete(e);
    const r = Array.from(this.#t.values());
    for (const [s, u] of this.#e)
      r.includes(s) || (Ft(u.effect), this.#e.delete(s));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, r) {
    var s = (
      /** @type {Batch} */
      Je
    ), u = Jg();
    if (r && !this.#a.has(e) && !this.#e.has(e))
      if (u) {
        var l = document.createDocumentFragment(), f = ar();
        l.append(f), this.#e.set(e, {
          effect: rn(() => r(f)),
          fragment: l
        });
      } else
        this.#a.set(
          e,
          rn(() => r(this.anchor))
        );
    if (this.#t.set(s, e), u) {
      for (const [h, p] of this.#a)
        h === e ? s.skipped_effects.delete(p) : s.skipped_effects.add(p);
      for (const [h, p] of this.#e)
        h === e ? s.skipped_effects.delete(p.effect) : s.skipped_effects.add(p.effect);
      s.oncommit(this.#r), s.ondiscard(this.#n);
    } else
      this.#r();
  }
}
function Yt(t, e, r = !1) {
  var s = new jx(t), u = r ? Qr : 0;
  function l(f, h) {
    s.ensure(f, h);
  }
  Dl(() => {
    var f = !1;
    e((h, p = !0) => {
      f = !0, l(p, h);
    }), f || l(!1, null);
  }, u);
}
function Zx(t, e) {
  return e;
}
function Kx(t, e, r) {
  for (var s = [], u = e.length, l, f = e.length, h = 0; h < u; h++) {
    let _ = e[h];
    jr(
      _,
      () => {
        if (l) {
          if (l.pending.delete(_), l.done.add(_), l.pending.size === 0) {
            var x = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            zu(ko(l.done)), x.delete(l), x.size === 0 && (t.outrogroups = null);
          }
        } else
          f -= 1;
      },
      !1
    );
  }
  if (f === 0) {
    var p = s.length === 0 && r !== null;
    if (p) {
      var d = (
        /** @type {Element} */
        r
      ), v = (
        /** @type {Element} */
        d.parentNode
      );
      wx(v), v.append(d), t.items.clear();
    }
    zu(e, !p);
  } else
    l = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ??= /* @__PURE__ */ new Set()).add(l);
}
function zu(t, e = !0) {
  for (var r = 0; r < t.length; r++)
    Ft(t[r], e);
}
var Oh;
function Vs(t, e, r, s, u, l = null) {
  var f = t, h = /* @__PURE__ */ new Map(), p = (e & Bg) !== 0;
  if (p) {
    var d = (
      /** @type {Element} */
      t
    );
    f = d.appendChild(ar());
  }
  var v = null, _ = /* @__PURE__ */ Px(() => {
    var I = r();
    return bl(I) ? I : I == null ? [] : ko(I);
  }), x, k = !0;
  function M() {
    C.fallback = v, Qx(C, x, f, e, s), v !== null && (x.length === 0 ? (v.f & rr) === 0 ? Fl(v) : (v.f ^= rr, ws(v, null, f)) : jr(v, () => {
      v = null;
    }));
  }
  var R = Dl(() => {
    x = /** @type {V[]} */
    _e(_);
    for (var I = x.length, T = /* @__PURE__ */ new Set(), Y = (
      /** @type {Batch} */
      Je
    ), $ = Jg(), J = 0; J < I; J += 1) {
      var q = x[J], W = s(q, J), E = k ? null : h.get(W);
      E ? (E.v && Hi(E.v, q), E.i && Hi(E.i, J), $ && Y.skipped_effects.delete(E.e)) : (E = ew(
        h,
        k ? f : Oh ??= ar(),
        q,
        W,
        J,
        u,
        e,
        r
      ), k || (E.e.f |= rr), h.set(W, E)), T.add(W);
    }
    if (I === 0 && l && !v && (k ? v = rn(() => l(f)) : (v = rn(() => l(Oh ??= ar())), v.f |= rr)), !k)
      if ($) {
        for (const [S, b] of h)
          T.has(S) || Y.skipped_effects.add(b.e);
        Y.oncommit(M), Y.ondiscard(() => {
        });
      } else
        M();
    _e(_);
  }), C = { effect: R, items: h, outrogroups: null, fallback: v };
  k = !1;
}
function Qx(t, e, r, s, u) {
  var l = (s & ox) !== 0, f = e.length, h = t.items, p = t.effect.first, d, v = null, _, x = [], k = [], M, R, C, I;
  if (l)
    for (I = 0; I < f; I += 1)
      M = e[I], R = u(M, I), C = /** @type {EachItem} */
      h.get(R).e, (C.f & rr) === 0 && (C.nodes?.a?.measure(), (_ ??= /* @__PURE__ */ new Set()).add(C));
  for (I = 0; I < f; I += 1) {
    if (M = e[I], R = u(M, I), C = /** @type {EachItem} */
    h.get(R).e, t.outrogroups !== null)
      for (const b of t.outrogroups)
        b.pending.delete(C), b.done.delete(C);
    if ((C.f & rr) !== 0)
      if (C.f ^= rr, C === p)
        ws(C, null, r);
      else {
        var T = v ? v.next : p;
        C === t.effect.last && (t.effect.last = C.prev), C.prev && (C.prev.next = C.next), C.next && (C.next.prev = C.prev), kr(t, v, C), kr(t, C, T), ws(C, T, r), v = C, x = [], k = [], p = v.next;
        continue;
      }
    if ((C.f & Jt) !== 0 && (Fl(C), l && (C.nodes?.a?.unfix(), (_ ??= /* @__PURE__ */ new Set()).delete(C))), C !== p) {
      if (d !== void 0 && d.has(C)) {
        if (x.length < k.length) {
          var Y = k[0], $;
          v = Y.prev;
          var J = x[0], q = x[x.length - 1];
          for ($ = 0; $ < x.length; $ += 1)
            ws(x[$], Y, r);
          for ($ = 0; $ < k.length; $ += 1)
            d.delete(k[$]);
          kr(t, J.prev, q.next), kr(t, v, J), kr(t, q, Y), p = Y, v = q, I -= 1, x = [], k = [];
        } else
          d.delete(C), ws(C, p, r), kr(t, C.prev, C.next), kr(t, C, v === null ? t.effect.first : v.next), kr(t, v, C), v = C;
        continue;
      }
      for (x = [], k = []; p !== null && p !== C; )
        (d ??= /* @__PURE__ */ new Set()).add(p), k.push(p), p = p.next;
      if (p === null)
        continue;
    }
    (C.f & rr) === 0 && x.push(C), v = C, p = C.next;
  }
  if (t.outrogroups !== null) {
    for (const b of t.outrogroups)
      b.pending.size === 0 && (zu(ko(b.done)), t.outrogroups?.delete(b));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (p !== null || d !== void 0) {
    var W = [];
    if (d !== void 0)
      for (C of d)
        (C.f & Jt) === 0 && W.push(C);
    for (; p !== null; )
      (p.f & Jt) === 0 && p !== t.fallback && W.push(p), p = p.next;
    var E = W.length;
    if (E > 0) {
      var S = (s & Bg) !== 0 && f === 0 ? r : null;
      if (l) {
        for (I = 0; I < E; I += 1)
          W[I].nodes?.a?.measure();
        for (I = 0; I < E; I += 1)
          W[I].nodes?.a?.fix();
      }
      Kx(t, W, S);
    }
  }
  l && Ks(() => {
    if (_ !== void 0)
      for (C of _)
        C.nodes?.a?.apply();
  });
}
function ew(t, e, r, s, u, l, f, h) {
  var p = (f & sx) !== 0 ? (f & ux) === 0 ? /* @__PURE__ */ ed(r, !1, !1) : ti(r) : null, d = (f & ax) !== 0 ? ti(u) : null;
  return {
    v: p,
    i: d,
    e: rn(() => (l(e, p ?? r, d ?? u, h), () => {
      t.delete(s);
    }))
  };
}
function ws(t, e, r) {
  if (t.nodes)
    for (var s = t.nodes.start, u = t.nodes.end, l = e && (e.f & rr) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : r; s !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qs(s)
      );
      if (l.before(s), s === u)
        return;
      s = f;
    }
}
function kr(t, e, r) {
  e === null ? t.effect.first = r : e.next = r, r === null ? t.effect.last = e : r.prev = e;
}
function wd(t, e, r = !1, s = !1, u = !1) {
  var l = t, f = "";
  xn(() => {
    var h = (
      /** @type {Effect} */
      Oe
    );
    if (f !== (f = e() ?? "") && (h.nodes !== null && (pd(
      h.nodes.start,
      /** @type {TemplateNode} */
      h.nodes.end
    ), h.nodes = null), f !== "")) {
      var p = f + "";
      r ? p = `<svg>${p}</svg>` : s && (p = `<math>${p}</math>`);
      var d = xd(p);
      if ((r || s) && (d = /** @type {Element} */
      /* @__PURE__ */ Ir(d)), $s(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ir(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), r || s)
        for (; /* @__PURE__ */ Ir(d); )
          l.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Ir(d)
          );
      else
        l.before(d);
    }
  });
}
const tw = () => performance.now(), nr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => tw(),
  tasks: /* @__PURE__ */ new Set()
};
function kd() {
  const t = nr.now();
  nr.tasks.forEach((e) => {
    e.c(t) || (nr.tasks.delete(e), e.f());
  }), nr.tasks.size !== 0 && nr.tick(kd);
}
function nw(t) {
  let e;
  return nr.tasks.size === 0 && nr.tick(kd), {
    promise: new Promise((r) => {
      nr.tasks.add(e = { c: t, f: r });
    }),
    abort() {
      nr.tasks.delete(e);
    }
  };
}
function Ea(t, e) {
  ea(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function rw(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function Rh(t) {
  const e = {}, r = t.split(";");
  for (const s of r) {
    const [u, l] = s.split(":");
    if (!u || l === void 0) break;
    const f = rw(u.trim());
    e[f] = l.trim();
  }
  return e;
}
const iw = (t) => t;
function Dh(t, e, r, s) {
  var u = (t & lx) !== 0, l = (t & cx) !== 0, f = u && l, h = (t & hx) !== 0, p = f ? "both" : u ? "in" : "out", d, v = e.inert, _ = e.style.overflow, x, k;
  function M() {
    return ea(() => d ??= r()(e, s?.() ?? /** @type {P} */
    {}, {
      direction: p
    }));
  }
  var R = {
    is_global: h,
    in() {
      if (e.inert = v, !u) {
        k?.abort(), k?.reset?.();
        return;
      }
      l || x?.abort(), Ea(e, "introstart"), x = qu(e, M(), k, 1, () => {
        Ea(e, "introend"), x?.abort(), x = d = void 0, e.style.overflow = _;
      });
    },
    out(Y) {
      if (!l) {
        Y?.(), d = void 0;
        return;
      }
      e.inert = !0, Ea(e, "outrostart"), k = qu(e, M(), x, 0, () => {
        Ea(e, "outroend"), Y?.();
      });
    },
    stop: () => {
      x?.abort(), k?.abort();
    }
  }, C = (
    /** @type {Effect & { nodes: EffectNodes }} */
    Oe
  );
  if ((C.nodes.t ??= []).push(R), u && Bu) {
    var I = h;
    if (!I) {
      for (var T = (
        /** @type {Effect | null} */
        C.parent
      ); T && (T.f & Qr) !== 0; )
        for (; (T = T.parent) && (T.f & Xn) === 0; )
          ;
      I = !T || (T.f & Mo) !== 0;
    }
    I && hd(() => {
      na(() => R.in());
    });
  }
}
function qu(t, e, r, s, u) {
  var l = s === 1;
  if (JE(e)) {
    var f, h = !1;
    return Ks(() => {
      if (!h) {
        var C = e({ direction: l ? "in" : "out" });
        f = qu(t, C, r, s, u);
      }
    }), {
      abort: () => {
        h = !0, f?.abort();
      },
      deactivate: () => f.deactivate(),
      reset: () => f.reset(),
      t: () => f.t()
    };
  }
  if (r?.deactivate(), !e?.duration)
    return u(), {
      abort: mn,
      deactivate: mn,
      reset: mn,
      t: () => s
    };
  const { delay: p = 0, css: d, tick: v, easing: _ = iw } = e;
  var x = [];
  if (l && r === void 0 && (v && v(0, 1), d)) {
    var k = Rh(d(0, 1));
    x.push(k, k);
  }
  var M = () => 1 - s, R = t.animate(x, { duration: p, fill: "forwards" });
  return R.onfinish = () => {
    R.cancel();
    var C = r?.t() ?? 1 - s;
    r?.abort();
    var I = s - C, T = (
      /** @type {number} */
      e.duration * Math.abs(I)
    ), Y = [];
    if (T > 0) {
      var $ = !1;
      if (d)
        for (var J = Math.ceil(T / 16.666666666666668), q = 0; q <= J; q += 1) {
          var W = C + I * _(q / J), E = Rh(d(W, 1 - W));
          Y.push(E), $ ||= E.overflow === "hidden";
        }
      $ && (t.style.overflow = "hidden"), M = () => {
        var S = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          R.currentTime
        );
        return C + I * _(S / T);
      }, v && nw(() => {
        if (R.playState !== "running") return !1;
        var S = M();
        return v(S, 1 - S), !0;
      });
    }
    R = t.animate(Y, { duration: T, fill: "forwards" }), R.onfinish = () => {
      M = () => s, v?.(s, 1 - s), u();
    };
  }, {
    abort: () => {
      R && (R.cancel(), R.effect = null, R.onfinish = mn);
    },
    deactivate: () => {
      u = mn;
    },
    reset: () => {
      s === 0 && v?.(1, 0);
    },
    t: () => M()
  };
}
function Sd(t) {
  var e, r, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var u = t.length;
    for (e = 0; e < u; e++) t[e] && (r = Sd(t[e])) && (s && (s += " "), s += r);
  } else for (r in t) t[r] && (s && (s += " "), s += r);
  return s;
}
function sw() {
  for (var t, e, r = 0, s = "", u = arguments.length; r < u; r++) (t = arguments[r]) && (e = Sd(t)) && (s && (s += " "), s += e);
  return s;
}
function aw(t) {
  return typeof t == "object" ? sw(t) : t ?? "";
}
const Fh = [...` 	
\r\f \v\uFEFF`];
function ow(t, e, r) {
  var s = t == null ? "" : "" + t;
  if (e && (s = s ? s + " " + e : e), r) {
    for (var u in r)
      if (r[u])
        s = s ? s + " " + u : u;
      else if (s.length)
        for (var l = u.length, f = 0; (f = s.indexOf(u, f)) >= 0; ) {
          var h = f + l;
          (f === 0 || Fh.includes(s[f - 1])) && (h === s.length || Fh.includes(s[h])) ? s = (f === 0 ? "" : s.substring(0, f)) + s.substring(h + 1) : f = h;
        }
  }
  return s === "" ? null : s;
}
function Rs(t, e, r, s, u, l) {
  var f = t.__className;
  if (f !== r || f === void 0) {
    var h = ow(r, s, l);
    h == null ? t.removeAttribute("class") : t.className = h, t.__className = r;
  } else if (l && u !== l)
    for (var p in l) {
      var d = !!l[p];
      (u == null || d !== !!u[p]) && t.classList.toggle(p, d);
    }
  return l;
}
function Md(t, e, r = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!bl(e))
      return yx();
    for (var s of t.options)
      s.selected = e.includes(Ds(s));
    return;
  }
  for (s of t.options) {
    var u = Ds(s);
    if (Ex(u, e)) {
      s.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function uw(t) {
  var e = new MutationObserver(() => {
    Md(t, t.__value);
  });
  e.observe(t, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Rl(() => {
    e.disconnect();
  });
}
function lw(t, e, r = e) {
  var s = /* @__PURE__ */ new WeakSet(), u = !0;
  nd(t, "change", (l) => {
    var f = l ? "[selected]" : ":checked", h;
    if (t.multiple)
      h = [].map.call(t.querySelectorAll(f), Ds);
    else {
      var p = t.querySelector(f) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      h = p && Ds(p);
    }
    r(h), Je !== null && s.add(Je);
  }), hd(() => {
    var l = e();
    if (t === document.activeElement) {
      var f = (
        /** @type {Batch} */
        Ga ?? Je
      );
      if (s.has(f))
        return;
    }
    if (Md(t, l, u), u && l === void 0) {
      var h = t.querySelector(":checked");
      h !== null && (l = Ds(h), r(l));
    }
    t.__value = l, u = !1;
  }), uw(t);
}
function Ds(t) {
  return "__value" in t ? t.__value : t.value;
}
const cw = /* @__PURE__ */ Symbol("is custom element"), hw = /* @__PURE__ */ Symbol("is html");
function br(t, e, r, s) {
  var u = fw(t);
  u[e] !== (u[e] = r) && (e === "loading" && (t[XE] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && gw(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function fw(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [cw]: t.nodeName.includes("-"),
      [hw]: t.namespaceURI === dx
    }
  );
}
var Gh = /* @__PURE__ */ new Map();
function gw(t) {
  var e = t.getAttribute("is") || t.nodeName, r = Gh.get(e);
  if (r) return r;
  Gh.set(e, r = []);
  for (var s, u = t, l = Element.prototype; l !== u; ) {
    s = qE(u);
    for (var f in s)
      s[f].set && r.push(f);
    u = Cg(u);
  }
  return r;
}
function dw(t, e, r = e) {
  nd(t, "change", (s) => {
    var u = s ? t.defaultChecked : t.checked;
    r(u);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  na(e) == null && r(t.checked), fd(() => {
    var s = e();
    t.checked = !!s;
  });
}
let Yu = /* @__PURE__ */ Symbol();
function Id(t, e, r) {
  const s = r[e] ??= {
    store: null,
    source: /* @__PURE__ */ ed(void 0),
    unsubscribe: mn
  };
  if (s.store !== t && !(Yu in r))
    if (s.unsubscribe(), s.store = t ?? null, t == null)
      s.source.v = void 0, s.unsubscribe = mn;
    else {
      var u = !0;
      s.unsubscribe = Ad(t, (l) => {
        u ? s.source.v = l : It(s.source, l);
      }), u = !1;
    }
  return t && Yu in r ? vw(t) : _e(s.source);
}
function bd() {
  const t = {};
  function e() {
    Rl(() => {
      for (var r in t)
        t[r].unsubscribe();
      Lg(t, Yu, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function pw(t) {
  _t === null && Gg(), zx(() => {
    const e = na(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Ad(t, e, r) {
  if (t == null)
    return e(void 0), mn;
  const s = na(
    () => t.subscribe(
      e,
      // @ts-expect-error
      r
    )
  );
  return s.unsubscribe ? () => s.unsubscribe() : s;
}
const bi = [];
function mw(t, e = mn) {
  let r = null;
  const s = /* @__PURE__ */ new Set();
  function u(h) {
    if (Dg(t, h) && (t = h, r)) {
      const p = !bi.length;
      for (const d of s)
        d[1](), bi.push(d, t);
      if (p) {
        for (let d = 0; d < bi.length; d += 2)
          bi[d][0](bi[d + 1]);
        bi.length = 0;
      }
    }
  }
  function l(h) {
    u(h(
      /** @type {T} */
      t
    ));
  }
  function f(h, p = mn) {
    const d = [h, p];
    return s.add(d), s.size === 1 && (r = e(u, l) || mn), h(
      /** @type {T} */
      t
    ), () => {
      s.delete(d), s.size === 0 && r && (r(), r = null);
    };
  }
  return { set: u, update: l, subscribe: f };
}
function vw(t) {
  let e;
  return Ad(t, (r) => e = r)(), e;
}
const yw = {
  controls: $t(Wf),
  options: Pu().controls,
  settings: Pu().settings
}, Gl = mw(yw), _w = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(_w);
const Ew = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
    <path d="M7.474 17.988h49.045L31.996 46.012zm-3.85 3.37 24.522 28.019a5.113 5.113 0 0 0 7.7 0l24.523-28.02c2.894-3.308.542-8.482-3.85-8.482H7.474a5.113 5.113 0 0 0-3.85 8.482"/>
</svg>
`, xw = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
    <path d="M7.474 46.012h49.045L31.996 17.988Zm-3.85-3.37 24.522-28.019a5.113 5.113 0 0 1 7.7 0l24.523 28.02c2.894 3.308.542 8.482-3.85 8.482H7.474a5.113 5.113 0 0 1-3.85-8.482"/>
</svg>
`;
var ww = /* @__PURE__ */ ln("<option> </option>"), kw = /* @__PURE__ */ ln('<label class="svelte-18zciyf"> </label> <select class="svelte-18zciyf"></select>', 1), Sw = /* @__PURE__ */ ln('<label class="svelte-18zciyf"><input type="checkbox" class="svelte-18zciyf"/> </label>'), Mw = /* @__PURE__ */ ln('<div class="action-option svelte-18zciyf"><!></div>');
function Iw(t, e) {
  Zi(e, !0);
  let r = /* @__PURE__ */ Gn("");
  pw(() => {
    e.actionOption && (e.actionOption.type === "select" ? It(r, e.actionOption.value.value, !0) : e.actionOption.type === "toggle" && It(r, e.actionOption.value, !0));
  });
  const s = (h) => {
    if (!e.actionInstance || !e.actionOption) {
      te.error("Can't apply option value", e.actionInstance, e.actionOption);
      return;
    }
    if (e.actionOption?.type === "toggle") {
      const p = h.target;
      It(r, p.checked, !0);
    } else if (e.actionOption?.type === "select") {
      const p = h.target;
      It(r, p.value, !0);
    }
    e.actionInstance.applyOptionValue(e.name, _e(r));
  };
  var u = ur(), l = Sn(u);
  {
    var f = (h) => {
      var p = Mw(), d = _n(p);
      {
        var v = (x) => {
          var k = kw(), M = Sn(k), R = _n(M), C = Ys(M, 2);
          C.__change = s, Vs(C, 21, () => e.actionOption.choices, Zx, (I, T) => {
            var Y = ww(), $ = _n(Y), J = {};
            xn(() => {
              Fi($, _e(T).title), J !== (J = _e(T).value) && (Y.value = (Y.__value = _e(T).value) ?? "");
            }), We(I, Y);
          }), xn(() => {
            br(M, "for", e.name), Fi(R, e.actionOption.label), br(C, "id", e.name);
          }), lw(C, () => _e(r), (I) => It(r, I)), We(x, k);
        }, _ = (x) => {
          var k = ur(), M = Sn(k);
          {
            var R = (C) => {
              var I = Sw(), T = _n(I);
              T.__change = s;
              var Y = Ys(T);
              xn(
                ($) => {
                  br(I, "for", e.name), br(T, "id", $), Fi(Y, ` ${e.actionOption.label ?? ""}`);
                },
                [() => String(e.name)]
              ), dw(T, () => _e(r), ($) => It(r, $)), We(C, I);
            };
            Yt(
              M,
              (C) => {
                e.actionOption.type === "toggle" && typeof _e(r) == "boolean" && C(R);
              },
              !0
            );
          }
          We(x, k);
        };
        Yt(d, (x) => {
          e.actionOption.type === "select" ? x(v) : x(_, !1);
        });
      }
      We(h, p);
    };
    Yt(l, (h) => {
      e.actionOption && h(f);
    });
  }
  We(t, u), Ki();
}
Io(["change"]);
var bw = /* @__PURE__ */ ln('<button type="submit" class="sub-action svelte-1xmw7n6"> </button>');
function Aw(t, e) {
  Zi(e, !0);
  const r = (f) => {
    if (f.preventDefault(), !e.actionInstance || !e.subAction) {
      te.error("Can't run a SubAction", e.actionInstance, e.subAction);
      return;
    }
    e.subAction.method();
  };
  var s = ur(), u = Sn(s);
  {
    var l = (f) => {
      var h = bw();
      h.__click = r;
      var p = _n(h);
      xn(() => {
        br(h, "id", `subaction-${e.name}`), br(h, "title", e.subAction.label), Fi(p, e.subAction.label);
      }), We(f, h);
    };
    Yt(u, (f) => {
      e.subAction && f(l);
    });
  }
  We(t, s), Ki();
}
Io(["click"]);
var Tw = /* @__PURE__ */ ln("<!> <!>", 1);
function Lw(t, e) {
  Zi(e, !0);
  const r = Ug("gm"), s = /* @__PURE__ */ yn(() => e.control.type), u = /* @__PURE__ */ yn(() => e.control.targetMode), l = /* @__PURE__ */ yn(() => _e(s) && _e(u) && r.actionInstances[`${_e(s)}__${_e(u)}`] || null);
  var f = ur(), h = Sn(f);
  {
    var p = (d) => {
      var v = Tw(), _ = Sn(v);
      Vs(_, 17, () => Object.entries(_e(l).options), ([k, M]) => k, (k, M) => {
        var R = /* @__PURE__ */ yn(() => Za(_e(M), 2));
        let C = () => _e(R)[0], I = () => _e(R)[1];
        Iw(k, {
          get name() {
            return C();
          },
          get actionInstance() {
            return _e(l);
          },
          get actionOption() {
            return I();
          }
        });
      });
      var x = Ys(_, 2);
      Vs(x, 17, () => Object.entries(_e(l).actions), ([k, M]) => k, (k, M) => {
        var R = /* @__PURE__ */ yn(() => Za(_e(M), 2));
        let C = () => _e(R)[0], I = () => _e(R)[1];
        Aw(k, {
          get name() {
            return C();
          },
          get actionInstance() {
            return _e(l);
          },
          get subAction() {
            return I();
          }
        });
      }), We(d, v);
    };
    Yt(h, (d) => {
      _e(l) && d(p);
    });
  }
  We(t, f), Ki();
}
const {
  entries: Td,
  setPrototypeOf: Bh,
  isFrozen: Cw,
  getPrototypeOf: Nw,
  getOwnPropertyDescriptor: Pw
} = Object;
let {
  freeze: Lt,
  seal: on,
  create: Hu
} = Object, {
  apply: Ju,
  construct: $u
} = typeof Reflect < "u" && Reflect;
Lt || (Lt = function(e) {
  return e;
});
on || (on = function(e) {
  return e;
});
Ju || (Ju = function(e, r) {
  for (var s = arguments.length, u = new Array(s > 2 ? s - 2 : 0), l = 2; l < s; l++)
    u[l - 2] = arguments[l];
  return e.apply(r, u);
});
$u || ($u = function(e) {
  for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
    s[u - 1] = arguments[u];
  return new e(...s);
});
const xa = Ct(Array.prototype.forEach), Ow = Ct(Array.prototype.lastIndexOf), Uh = Ct(Array.prototype.pop), fs = Ct(Array.prototype.push), Rw = Ct(Array.prototype.splice), Ba = Ct(String.prototype.toLowerCase), tu = Ct(String.prototype.toString), nu = Ct(String.prototype.match), gs = Ct(String.prototype.replace), Dw = Ct(String.prototype.indexOf), Fw = Ct(String.prototype.trim), dn = Ct(Object.prototype.hasOwnProperty), kt = Ct(RegExp.prototype.test), ds = Gw(TypeError);
function Ct(t) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
      s[u - 1] = arguments[u];
    return Ju(t, e, s);
  };
}
function Gw(t) {
  return function() {
    for (var e = arguments.length, r = new Array(e), s = 0; s < e; s++)
      r[s] = arguments[s];
    return $u(t, r);
  };
}
function Se(t, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ba;
  Bh && Bh(t, null);
  let s = e.length;
  for (; s--; ) {
    let u = e[s];
    if (typeof u == "string") {
      const l = r(u);
      l !== u && (Cw(e) || (e[s] = l), u = l);
    }
    t[u] = !0;
  }
  return t;
}
function Bw(t) {
  for (let e = 0; e < t.length; e++)
    dn(t, e) || (t[e] = null);
  return t;
}
function Fn(t) {
  const e = Hu(null);
  for (const [r, s] of Td(t))
    dn(t, r) && (Array.isArray(s) ? e[r] = Bw(s) : s && typeof s == "object" && s.constructor === Object ? e[r] = Fn(s) : e[r] = s);
  return e;
}
function ps(t, e) {
  for (; t !== null; ) {
    const s = Pw(t, e);
    if (s) {
      if (s.get)
        return Ct(s.get);
      if (typeof s.value == "function")
        return Ct(s.value);
    }
    t = Nw(t);
  }
  function r() {
    return null;
  }
  return r;
}
const zh = Lt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ru = Lt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), iu = Lt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Uw = Lt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), su = Lt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), zw = Lt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), qh = Lt(["#text"]), Yh = Lt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), au = Lt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Hh = Lt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), wa = Lt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), qw = on(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Yw = on(/<%[\w\W]*|[\w\W]*%>/gm), Hw = on(/\$\{[\w\W]*/gm), Jw = on(/^data-[\-\w.\u00B7-\uFFFF]+$/), $w = on(/^aria-[\-\w]+$/), Ld = on(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Vw = on(/^(?:\w+script|data):/i), Xw = on(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Cd = on(/^html$/i), Ww = on(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Jh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: $w,
  ATTR_WHITESPACE: Xw,
  CUSTOM_ELEMENT: Ww,
  DATA_ATTR: Jw,
  DOCTYPE_NAME: Cd,
  ERB_EXPR: Yw,
  IS_ALLOWED_URI: Ld,
  IS_SCRIPT_OR_DATA: Vw,
  MUSTACHE_EXPR: qw,
  TMPLIT_EXPR: Hw
});
const ms = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, jw = function() {
  return typeof window > "u" ? null : window;
}, Zw = function(e, r) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let s = null;
  const u = "data-tt-policy-suffix";
  r && r.hasAttribute(u) && (s = r.getAttribute(u));
  const l = "dompurify" + (s ? "#" + s : "");
  try {
    return e.createPolicy(l, {
      createHTML(f) {
        return f;
      },
      createScriptURL(f) {
        return f;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
}, $h = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function Nd() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : jw();
  const e = (de) => Nd(de);
  if (e.version = "3.3.1", e.removed = [], !t || !t.document || t.document.nodeType !== ms.document || !t.Element)
    return e.isSupported = !1, e;
  let {
    document: r
  } = t;
  const s = r, u = s.currentScript, {
    DocumentFragment: l,
    HTMLTemplateElement: f,
    Node: h,
    Element: p,
    NodeFilter: d,
    NamedNodeMap: v = t.NamedNodeMap || t.MozNamedAttrMap,
    HTMLFormElement: _,
    DOMParser: x,
    trustedTypes: k
  } = t, M = p.prototype, R = ps(M, "cloneNode"), C = ps(M, "remove"), I = ps(M, "nextSibling"), T = ps(M, "childNodes"), Y = ps(M, "parentNode");
  if (typeof f == "function") {
    const de = r.createElement("template");
    de.content && de.content.ownerDocument && (r = de.content.ownerDocument);
  }
  let $, J = "";
  const {
    implementation: q,
    createNodeIterator: W,
    createDocumentFragment: E,
    getElementsByTagName: S
  } = r, {
    importNode: b
  } = s;
  let O = $h();
  e.isSupported = typeof Td == "function" && typeof Y == "function" && q && q.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: P,
    ERB_EXPR: F,
    TMPLIT_EXPR: D,
    DATA_ATTR: L,
    ARIA_ATTR: B,
    IS_SCRIPT_OR_DATA: U,
    ATTR_WHITESPACE: H,
    CUSTOM_ELEMENT: j
  } = Jh;
  let {
    IS_ALLOWED_URI: Z
  } = Jh, ne = null;
  const le = Se({}, [...zh, ...ru, ...iu, ...su, ...qh]);
  let ue = null;
  const ie = Se({}, [...Yh, ...au, ...Hh, ...wa]);
  let oe = Object.seal(Hu(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), xe = null, Le = null;
  const V = Object.seal(Hu(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let bn = !0, Ie = !0, he = !1, N = !0, Ce = !1, De = !0, ke = !1, hi = !1, Gr = !1, _r = !1, re = !1, Br = !1, ns = !0, An = !1;
  const No = "user-content-";
  let Ee = !0, cn = !1, hn = {}, Nt = null;
  const ve = Se({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let fi = null;
  const Me = Se({}, ["audio", "video", "img", "source", "image", "track"]);
  let ye = null;
  const oa = Se({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Pt = "http://www.w3.org/1998/Math/MathML", gi = "http://www.w3.org/2000/svg", pe = "http://www.w3.org/1999/xhtml";
  let Er = pe, rs = !1, Ur = null;
  const Ot = Se({}, [Pt, gi, pe], tu);
  let Tn = Se({}, ["mi", "mo", "mn", "ms", "mtext"]), Et = Se({}, ["annotation-xml"]);
  const ua = Se({}, ["title", "style", "font", "a", "script"]);
  let Ln = null;
  const Po = ["application/xhtml+xml", "text/html"], la = "text/html";
  let Fe = null, se = null;
  const di = r.createElement("form"), zr = function(G) {
    return G instanceof RegExp || G instanceof Function;
  }, Wn = function() {
    let G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(se && se === G)) {
      if ((!G || typeof G != "object") && (G = {}), G = Fn(G), Ln = // eslint-disable-next-line unicorn/prefer-includes
      Po.indexOf(G.PARSER_MEDIA_TYPE) === -1 ? la : G.PARSER_MEDIA_TYPE, Fe = Ln === "application/xhtml+xml" ? tu : Ba, ne = dn(G, "ALLOWED_TAGS") ? Se({}, G.ALLOWED_TAGS, Fe) : le, ue = dn(G, "ALLOWED_ATTR") ? Se({}, G.ALLOWED_ATTR, Fe) : ie, Ur = dn(G, "ALLOWED_NAMESPACES") ? Se({}, G.ALLOWED_NAMESPACES, tu) : Ot, ye = dn(G, "ADD_URI_SAFE_ATTR") ? Se(Fn(oa), G.ADD_URI_SAFE_ATTR, Fe) : oa, fi = dn(G, "ADD_DATA_URI_TAGS") ? Se(Fn(Me), G.ADD_DATA_URI_TAGS, Fe) : Me, Nt = dn(G, "FORBID_CONTENTS") ? Se({}, G.FORBID_CONTENTS, Fe) : ve, xe = dn(G, "FORBID_TAGS") ? Se({}, G.FORBID_TAGS, Fe) : Fn({}), Le = dn(G, "FORBID_ATTR") ? Se({}, G.FORBID_ATTR, Fe) : Fn({}), hn = dn(G, "USE_PROFILES") ? G.USE_PROFILES : !1, bn = G.ALLOW_ARIA_ATTR !== !1, Ie = G.ALLOW_DATA_ATTR !== !1, he = G.ALLOW_UNKNOWN_PROTOCOLS || !1, N = G.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ce = G.SAFE_FOR_TEMPLATES || !1, De = G.SAFE_FOR_XML !== !1, ke = G.WHOLE_DOCUMENT || !1, _r = G.RETURN_DOM || !1, re = G.RETURN_DOM_FRAGMENT || !1, Br = G.RETURN_TRUSTED_TYPE || !1, Gr = G.FORCE_BODY || !1, ns = G.SANITIZE_DOM !== !1, An = G.SANITIZE_NAMED_PROPS || !1, Ee = G.KEEP_CONTENT !== !1, cn = G.IN_PLACE || !1, Z = G.ALLOWED_URI_REGEXP || Ld, Er = G.NAMESPACE || pe, Tn = G.MATHML_TEXT_INTEGRATION_POINTS || Tn, Et = G.HTML_INTEGRATION_POINTS || Et, oe = G.CUSTOM_ELEMENT_HANDLING || {}, G.CUSTOM_ELEMENT_HANDLING && zr(G.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (oe.tagNameCheck = G.CUSTOM_ELEMENT_HANDLING.tagNameCheck), G.CUSTOM_ELEMENT_HANDLING && zr(G.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (oe.attributeNameCheck = G.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), G.CUSTOM_ELEMENT_HANDLING && typeof G.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (oe.allowCustomizedBuiltInElements = G.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ce && (Ie = !1), re && (_r = !0), hn && (ne = Se({}, qh), ue = [], hn.html === !0 && (Se(ne, zh), Se(ue, Yh)), hn.svg === !0 && (Se(ne, ru), Se(ue, au), Se(ue, wa)), hn.svgFilters === !0 && (Se(ne, iu), Se(ue, au), Se(ue, wa)), hn.mathMl === !0 && (Se(ne, su), Se(ue, Hh), Se(ue, wa))), G.ADD_TAGS && (typeof G.ADD_TAGS == "function" ? V.tagCheck = G.ADD_TAGS : (ne === le && (ne = Fn(ne)), Se(ne, G.ADD_TAGS, Fe))), G.ADD_ATTR && (typeof G.ADD_ATTR == "function" ? V.attributeCheck = G.ADD_ATTR : (ue === ie && (ue = Fn(ue)), Se(ue, G.ADD_ATTR, Fe))), G.ADD_URI_SAFE_ATTR && Se(ye, G.ADD_URI_SAFE_ATTR, Fe), G.FORBID_CONTENTS && (Nt === ve && (Nt = Fn(Nt)), Se(Nt, G.FORBID_CONTENTS, Fe)), G.ADD_FORBID_CONTENTS && (Nt === ve && (Nt = Fn(Nt)), Se(Nt, G.ADD_FORBID_CONTENTS, Fe)), Ee && (ne["#text"] = !0), ke && Se(ne, ["html", "head", "body"]), ne.table && (Se(ne, ["tbody"]), delete xe.tbody), G.TRUSTED_TYPES_POLICY) {
        if (typeof G.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ds('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof G.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ds('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        $ = G.TRUSTED_TYPES_POLICY, J = $.createHTML("");
      } else
        $ === void 0 && ($ = Zw(k, u)), $ !== null && typeof J == "string" && (J = $.createHTML(""));
      Lt && Lt(G), se = G;
    }
  }, is = Se({}, [...ru, ...iu, ...Uw]), pi = Se({}, [...su, ...zw]), ca = function(G) {
    let Q = Y(G);
    (!Q || !Q.tagName) && (Q = {
      namespaceURI: Er,
      tagName: "template"
    });
    const fe = Ba(G.tagName), Ue = Ba(Q.tagName);
    return Ur[G.namespaceURI] ? G.namespaceURI === gi ? Q.namespaceURI === pe ? fe === "svg" : Q.namespaceURI === Pt ? fe === "svg" && (Ue === "annotation-xml" || Tn[Ue]) : !!is[fe] : G.namespaceURI === Pt ? Q.namespaceURI === pe ? fe === "math" : Q.namespaceURI === gi ? fe === "math" && Et[Ue] : !!pi[fe] : G.namespaceURI === pe ? Q.namespaceURI === gi && !Et[Ue] || Q.namespaceURI === Pt && !Tn[Ue] ? !1 : !pi[fe] && (ua[fe] || !is[fe]) : !!(Ln === "application/xhtml+xml" && Ur[G.namespaceURI]) : !1;
  }, rt = function(G) {
    fs(e.removed, {
      element: G
    });
    try {
      Y(G).removeChild(G);
    } catch {
      C(G);
    }
  }, Cn = function(G, Q) {
    try {
      fs(e.removed, {
        attribute: Q.getAttributeNode(G),
        from: Q
      });
    } catch {
      fs(e.removed, {
        attribute: null,
        from: Q
      });
    }
    if (Q.removeAttribute(G), G === "is")
      if (_r || re)
        try {
          rt(Q);
        } catch {
        }
      else
        try {
          Q.setAttribute(G, "");
        } catch {
        }
  }, qr = function(G) {
    let Q = null, fe = null;
    if (Gr)
      G = "<remove></remove>" + G;
    else {
      const ze = nu(G, /^[\r\n\t ]+/);
      fe = ze && ze[0];
    }
    Ln === "application/xhtml+xml" && Er === pe && (G = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + G + "</body></html>");
    const Ue = $ ? $.createHTML(G) : G;
    if (Er === pe)
      try {
        Q = new x().parseFromString(Ue, Ln);
      } catch {
      }
    if (!Q || !Q.documentElement) {
      Q = q.createDocument(Er, "template", null);
      try {
        Q.documentElement.innerHTML = rs ? J : Ue;
      } catch {
      }
    }
    const Qe = Q.body || Q.documentElement;
    return G && fe && Qe.insertBefore(r.createTextNode(fe), Qe.childNodes[0] || null), Er === pe ? S.call(Q, ke ? "html" : "body")[0] : ke ? Q.documentElement : Qe;
  }, ha = function(G) {
    return W.call(
      G.ownerDocument || G,
      G,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, mi = function(G) {
    return G instanceof _ && (typeof G.nodeName != "string" || typeof G.textContent != "string" || typeof G.removeChild != "function" || !(G.attributes instanceof v) || typeof G.removeAttribute != "function" || typeof G.setAttribute != "function" || typeof G.namespaceURI != "string" || typeof G.insertBefore != "function" || typeof G.hasChildNodes != "function");
  }, fa = function(G) {
    return typeof h == "function" && G instanceof h;
  };
  function Ve(de, G, Q) {
    xa(de, (fe) => {
      fe.call(e, G, Q, se);
    });
  }
  const vi = function(G) {
    let Q = null;
    if (Ve(O.beforeSanitizeElements, G, null), mi(G))
      return rt(G), !0;
    const fe = Fe(G.nodeName);
    if (Ve(O.uponSanitizeElement, G, {
      tagName: fe,
      allowedTags: ne
    }), De && G.hasChildNodes() && !fa(G.firstElementChild) && kt(/<[/\w!]/g, G.innerHTML) && kt(/<[/\w!]/g, G.textContent) || G.nodeType === ms.progressingInstruction || De && G.nodeType === ms.comment && kt(/<[/\w]/g, G.data))
      return rt(G), !0;
    if (!(V.tagCheck instanceof Function && V.tagCheck(fe)) && (!ne[fe] || xe[fe])) {
      if (!xe[fe] && Nn(fe) && (oe.tagNameCheck instanceof RegExp && kt(oe.tagNameCheck, fe) || oe.tagNameCheck instanceof Function && oe.tagNameCheck(fe)))
        return !1;
      if (Ee && !Nt[fe]) {
        const Ue = Y(G) || G.parentNode, Qe = T(G) || G.childNodes;
        if (Qe && Ue) {
          const ze = Qe.length;
          for (let it = ze - 1; it >= 0; --it) {
            const Gt = R(Qe[it], !0);
            Gt.__removalCount = (G.__removalCount || 0) + 1, Ue.insertBefore(Gt, I(G));
          }
        }
      }
      return rt(G), !0;
    }
    return G instanceof p && !ca(G) || (fe === "noscript" || fe === "noembed" || fe === "noframes") && kt(/<\/no(script|embed|frames)/i, G.innerHTML) ? (rt(G), !0) : (Ce && G.nodeType === ms.text && (Q = G.textContent, xa([P, F, D], (Ue) => {
      Q = gs(Q, Ue, " ");
    }), G.textContent !== Q && (fs(e.removed, {
      element: G.cloneNode()
    }), G.textContent = Q)), Ve(O.afterSanitizeElements, G, null), !1);
  }, xr = function(G, Q, fe) {
    if (ns && (Q === "id" || Q === "name") && (fe in r || fe in di))
      return !1;
    if (!(Ie && !Le[Q] && kt(L, Q))) {
      if (!(bn && kt(B, Q))) {
        if (!(V.attributeCheck instanceof Function && V.attributeCheck(Q, G))) {
          if (!ue[Q] || Le[Q]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Nn(G) && (oe.tagNameCheck instanceof RegExp && kt(oe.tagNameCheck, G) || oe.tagNameCheck instanceof Function && oe.tagNameCheck(G)) && (oe.attributeNameCheck instanceof RegExp && kt(oe.attributeNameCheck, Q) || oe.attributeNameCheck instanceof Function && oe.attributeNameCheck(Q, G)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              Q === "is" && oe.allowCustomizedBuiltInElements && (oe.tagNameCheck instanceof RegExp && kt(oe.tagNameCheck, fe) || oe.tagNameCheck instanceof Function && oe.tagNameCheck(fe)))
            ) return !1;
          } else if (!ye[Q]) {
            if (!kt(Z, gs(fe, H, ""))) {
              if (!((Q === "src" || Q === "xlink:href" || Q === "href") && G !== "script" && Dw(fe, "data:") === 0 && fi[G])) {
                if (!(he && !kt(U, gs(fe, H, "")))) {
                  if (fe)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Nn = function(G) {
    return G !== "annotation-xml" && nu(G, j);
  }, Pn = function(G) {
    Ve(O.beforeSanitizeAttributes, G, null);
    const {
      attributes: Q
    } = G;
    if (!Q || mi(G))
      return;
    const fe = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ue,
      forceKeepAttr: void 0
    };
    let Ue = Q.length;
    for (; Ue--; ) {
      const Qe = Q[Ue], {
        name: ze,
        namespaceURI: it,
        value: Gt
      } = Qe, jn = Fe(ze), as = Gt;
      let Re = ze === "value" ? as : Fw(as);
      if (fe.attrName = jn, fe.attrValue = Re, fe.keepAttr = !0, fe.forceKeepAttr = void 0, Ve(O.uponSanitizeAttribute, G, fe), Re = fe.attrValue, An && (jn === "id" || jn === "name") && (Cn(ze, G), Re = No + Re), De && kt(/((--!?|])>)|<\/(style|title|textarea)/i, Re)) {
        Cn(ze, G);
        continue;
      }
      if (jn === "attributename" && nu(Re, "href")) {
        Cn(ze, G);
        continue;
      }
      if (fe.forceKeepAttr)
        continue;
      if (!fe.keepAttr) {
        Cn(ze, G);
        continue;
      }
      if (!N && kt(/\/>/i, Re)) {
        Cn(ze, G);
        continue;
      }
      Ce && xa([P, F, D], (yi) => {
        Re = gs(Re, yi, " ");
      });
      const Zn = Fe(G.nodeName);
      if (!xr(Zn, jn, Re)) {
        Cn(ze, G);
        continue;
      }
      if ($ && typeof k == "object" && typeof k.getAttributeType == "function" && !it)
        switch (k.getAttributeType(Zn, jn)) {
          case "TrustedHTML": {
            Re = $.createHTML(Re);
            break;
          }
          case "TrustedScriptURL": {
            Re = $.createScriptURL(Re);
            break;
          }
        }
      if (Re !== as)
        try {
          it ? G.setAttributeNS(it, ze, Re) : G.setAttribute(ze, Re), mi(G) ? rt(G) : Uh(e.removed);
        } catch {
          Cn(ze, G);
        }
    }
    Ve(O.afterSanitizeAttributes, G, null);
  }, ss = function de(G) {
    let Q = null;
    const fe = ha(G);
    for (Ve(O.beforeSanitizeShadowDOM, G, null); Q = fe.nextNode(); )
      Ve(O.uponSanitizeShadowNode, Q, null), vi(Q), Pn(Q), Q.content instanceof l && de(Q.content);
    Ve(O.afterSanitizeShadowDOM, G, null);
  };
  return e.sanitize = function(de) {
    let G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Q = null, fe = null, Ue = null, Qe = null;
    if (rs = !de, rs && (de = "<!-->"), typeof de != "string" && !fa(de))
      if (typeof de.toString == "function") {
        if (de = de.toString(), typeof de != "string")
          throw ds("dirty is not a string, aborting");
      } else
        throw ds("toString is not a function");
    if (!e.isSupported)
      return de;
    if (hi || Wn(G), e.removed = [], typeof de == "string" && (cn = !1), cn) {
      if (de.nodeName) {
        const Gt = Fe(de.nodeName);
        if (!ne[Gt] || xe[Gt])
          throw ds("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (de instanceof h)
      Q = qr("<!---->"), fe = Q.ownerDocument.importNode(de, !0), fe.nodeType === ms.element && fe.nodeName === "BODY" || fe.nodeName === "HTML" ? Q = fe : Q.appendChild(fe);
    else {
      if (!_r && !Ce && !ke && // eslint-disable-next-line unicorn/prefer-includes
      de.indexOf("<") === -1)
        return $ && Br ? $.createHTML(de) : de;
      if (Q = qr(de), !Q)
        return _r ? null : Br ? J : "";
    }
    Q && Gr && rt(Q.firstChild);
    const ze = ha(cn ? de : Q);
    for (; Ue = ze.nextNode(); )
      vi(Ue), Pn(Ue), Ue.content instanceof l && ss(Ue.content);
    if (cn)
      return de;
    if (_r) {
      if (re)
        for (Qe = E.call(Q.ownerDocument); Q.firstChild; )
          Qe.appendChild(Q.firstChild);
      else
        Qe = Q;
      return (ue.shadowroot || ue.shadowrootmode) && (Qe = b.call(s, Qe, !0)), Qe;
    }
    let it = ke ? Q.outerHTML : Q.innerHTML;
    return ke && ne["!doctype"] && Q.ownerDocument && Q.ownerDocument.doctype && Q.ownerDocument.doctype.name && kt(Cd, Q.ownerDocument.doctype.name) && (it = "<!DOCTYPE " + Q.ownerDocument.doctype.name + `>
` + it), Ce && xa([P, F, D], (Gt) => {
      it = gs(it, Gt, " ");
    }), $ && Br ? $.createHTML(it) : it;
  }, e.setConfig = function() {
    let de = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Wn(de), hi = !0;
  }, e.clearConfig = function() {
    se = null, hi = !1;
  }, e.isValidAttribute = function(de, G, Q) {
    se || Wn({});
    const fe = Fe(de), Ue = Fe(G);
    return xr(fe, Ue, Q);
  }, e.addHook = function(de, G) {
    typeof G == "function" && fs(O[de], G);
  }, e.removeHook = function(de, G) {
    if (G !== void 0) {
      const Q = Ow(O[de], G);
      return Q === -1 ? void 0 : Rw(O[de], Q, 1)[0];
    }
    return Uh(O[de]);
  }, e.removeHooks = function(de) {
    O[de] = [];
  }, e.removeAllHooks = function() {
    O = $h();
  }, e;
}
var Pd = Nd(), Kw = /* @__PURE__ */ ln("<div><!></div>"), Qw = /* @__PURE__ */ ln('<div><button type="button"><!></button> <!></div>');
function ek(t, e) {
  Zi(e, !0);
  const r = () => Id(Gl, "$controlsStore", s), [s, u] = bd(), l = /* @__PURE__ */ yn(() => e.controlOptions?.icon ? Pd.sanitize(e.controlOptions.icon.trim()) : null), f = Ug("gm"), h = f.control.getDefaultPosition(), p = () => {
    e.control && e.controlOptions ? f.options.toggleMode(e.control.type, e.control.targetMode) : te.error("Control or controlOptions not defined", e.control, e.controlOptions);
  };
  var d = ur(), v = Sn(d);
  {
    var _ = (x) => {
      var k = Qw(), M = _n(k);
      let R;
      M.__click = p;
      var C = _n(M);
      {
        var I = (J) => {
          var q = ur(), W = Sn(q);
          wd(W, () => _e(l)), We(J, q);
        }, T = (J) => {
          var q = ur(), W = Sn(q);
          {
            var E = (b) => {
              var O = Ph();
              xn((P) => Fi(O, P), [() => e.controlOptions.title.slice(0, 2)]), We(b, O);
            }, S = (b) => {
              var O = Ph();
              xn(() => Fi(O, e.control.targetMode)), We(b, O);
            };
            Yt(
              W,
              (b) => {
                e.controlOptions.title ? b(E) : b(S, !1);
              },
              !0
            );
          }
          We(J, q);
        };
        Yt(C, (J) => {
          e.controlOptions.icon ? J(I) : J(T, !1);
        });
      }
      var Y = Ys(M, 2);
      {
        var $ = (J) => {
          var q = Kw();
          let W;
          var E = _n(q);
          Lw(E, {
            get control() {
              return e.control;
            }
          }), xn((S) => W = Rs(q, 1, "control-menu svelte-1q85gr9", null, W, S), [
            () => ({
              "menu-right": h.endsWith("left"),
              "menu-left": h.endsWith("right")
            })
          ]), We(J, q);
        };
        Yt(Y, (J) => {
          e.controlOptions.active && J($);
        });
      }
      xn(() => {
        Rs(k, 1, aw(r().settings.controlsStyles.controlContainerClass), "svelte-1q85gr9"), br(M, "id", `id_${e.control.type}_${e.control.targetMode}`), R = Rs(M, 1, `${r().settings.controlsStyles.controlButtonClass} ${e.control.type}-${e.control.targetMode}`, "svelte-1q85gr9", R, { active: e.controlOptions.active }), br(M, "title", e.controlOptions.title);
      }), We(x, k);
    };
    Yt(v, (x) => {
      e.control && e.controlOptions && e.controlOptions.uiEnabled && x(_);
    });
  }
  We(t, d), Ki(), u();
}
Io(["click"]);
function tk(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Vh(t, { delay: e = 0, duration: r = 400, easing: s = tk, axis: u = "y" } = {}) {
  const l = getComputedStyle(t), f = +l.opacity, h = u === "y" ? "height" : "width", p = parseFloat(l[h]), d = u === "y" ? ["top", "bottom"] : ["left", "right"], v = d.map(
    (I) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${I[0].toUpperCase()}${I.slice(1)}`
    )
  ), _ = parseFloat(l[`padding${v[0]}`]), x = parseFloat(l[`padding${v[1]}`]), k = parseFloat(l[`margin${v[0]}`]), M = parseFloat(l[`margin${v[1]}`]), R = parseFloat(
    l[`border${v[0]}Width`]
  ), C = parseFloat(
    l[`border${v[1]}Width`]
  );
  return {
    delay: e,
    duration: r,
    easing: s,
    css: (I) => `overflow: hidden;opacity: ${Math.min(I * 20, 1) * f};${h}: ${I * p}px;padding-${d[0]}: ${I * _}px;padding-${d[1]}: ${I * x}px;margin-${d[0]}: ${I * k}px;margin-${d[1]}: ${I * M}px;border-${d[0]}-width: ${I * R}px;border-${d[1]}-width: ${I * C}px;min-${h}: 0`
  };
}
var nk = /* @__PURE__ */ ln('<div><button class="gm-control-button"><!></button></div>'), rk = /* @__PURE__ */ ln("<div></div>"), ik = /* @__PURE__ */ ln("<div></div>"), sk = /* @__PURE__ */ ln('<div class="gm-reactive-controls"><!> <!></div>');
function ak(t, e) {
  Zi(e, !0);
  const r = () => Id(Gl, "$controlsStore", s), [s, u] = bd();
  let l = /* @__PURE__ */ Gn(!0), f = /* @__PURE__ */ yn(() => r().settings.controlsCollapsible), h = /* @__PURE__ */ yn(() => r().settings.controlsStyles);
  const p = (T, Y) => r().controls?.[T]?.[Y] || null, d = (T, Y) => Object.entries(Y).some(([$, J]) => p(T, $) && J && J.uiEnabled), v = () => {
    It(l, !_e(l));
  }, _ = () => Pd.sanitize(_e(l) ? Ew : xw), x = (T) => Object.entries(T).map(([Y, $], J) => ({ key: Y, options: $, originalIndex: J })).sort((Y, $) => {
    const J = Y.options.order ?? 1 / 0, q = $.options.order ?? 1 / 0;
    return J !== q ? J - q : Y.originalIndex - $.originalIndex;
  }).map(({ key: Y, options: $ }) => [Y, $]);
  var k = sk(), M = _n(k);
  {
    var R = (T) => {
      var Y = nk(), $ = _n(Y);
      $.__click = v;
      var J = _n($);
      wd(J, _), xn(() => Rs(Y, 1, `${_e(h).controlGroupClass} group-settings`)), We(T, Y);
    };
    Yt(M, (T) => {
      _e(f) && T(R);
    });
  }
  var C = Ys(M, 2);
  {
    var I = (T) => {
      var Y = ik();
      Vs(Y, 5, () => Object.entries(r().options), ([$, J]) => $, ($, J) => {
        var q = /* @__PURE__ */ yn(() => Za(_e(J), 2));
        let W = () => _e(q)[0], E = () => _e(q)[1];
        var S = ur(), b = Sn(S);
        {
          var O = (P) => {
            var F = rk();
            Vs(F, 21, () => x(E()), ([D, L]) => D, (D, L) => {
              var B = /* @__PURE__ */ yn(() => Za(_e(L), 2));
              let U = () => _e(B)[0], H = () => _e(B)[1];
              const j = /* @__PURE__ */ yn(() => p(W(), U()));
              var Z = ur(), ne = Sn(Z);
              {
                var le = (ue) => {
                  ek(ue, {
                    get control() {
                      return _e(j);
                    },
                    get controlOptions() {
                      return H();
                    }
                  });
                };
                Yt(ne, (ue) => {
                  _e(j) && ue(le);
                });
              }
              We(D, Z);
            }), xn(() => Rs(F, 1, `${_e(h).controlGroupClass} group-${W()}`)), We(P, F);
          };
          Yt(b, (P) => {
            d(W(), E()) && P(O);
          });
        }
        We($, S);
      }), Dh(1, Y, () => Vh, () => ({ duration: 180 })), Dh(2, Y, () => Vh, () => ({ duration: 140 })), We(T, Y);
    };
    Yt(C, (T) => {
      _e(l) && T(I);
    });
  }
  We(t, k), Ki(), u();
}
Io(["click"]);
class ok {
  gm;
  constructor(e) {
    this.gm = e;
  }
}
const et = (t) => Object.keys(t), Vu = (t) => Object.values(t), Cr = (t, e) => e.includes(t);
class uk extends ok {
  controls = $t(Wf);
  reactiveControls = null;
  container = void 0;
  eventHandlers = {
    [`${ae}:draw`]: this.handleModeEvent.bind(this),
    [`${ae}:edit`]: this.handleModeEvent.bind(this),
    [`${ae}:helper`]: this.handleModeEvent.bind(this)
  };
  onAdd() {
    if (this.createControls(), this.gm.events.bus.attachEvents(this.eventHandlers), !this.container)
      throw new Error("Controls container is not initialized");
    return this.container;
  }
  createControls(e = void 0) {
    if (this.controlsAdded()) {
      te.warn("Can't add controls: controls already added");
      return;
    }
    this.container = e || this.createHtmlContainer(), this.createReactivePanel();
  }
  onRemove() {
    this.gm.events.bus.detachEvents(this.eventHandlers), this.reactiveControls && (Wx(this.reactiveControls), this.reactiveControls = null), this.container && this.container.parentNode && this.container.parentNode.removeChild(this.container), this.container = void 0;
  }
  handleModeEvent(e) {
    return sc(e) ? (["mode_started", "mode_ended"].includes(e.action) && this.updateReactivePanel(), { next: !0 }) : { next: !0 };
  }
  controlsAdded() {
    return !!this.reactiveControls;
  }
  createReactivePanel() {
    if (!this.container) {
      te.error("Can't create reactive panel: container is not initialized");
      return;
    }
    this.syncModeStates();
    const e = /* @__PURE__ */ new Map();
    e.set("gm", this.gm), this.reactiveControls = Vx(ak, {
      target: this.container,
      context: e
    }), this.updateReactivePanel();
  }
  updateReactivePanel() {
    Gl.update(() => ({
      controls: this.controls,
      options: this.gm.options.controls,
      settings: this.gm.options.settings
    }));
  }
  createHtmlContainer() {
    const e = document.createElement("div");
    return e.classList.add("geoman-controls"), e;
  }
  syncModeStates() {
    this.eachControlWithOptions(({ control: e }) => {
      this.gm.options.syncModeState(e.type, e.targetMode);
    });
  }
  eachControlWithOptions(e) {
    return et(this.controls).forEach((r) => {
      const s = this.controls[r];
      return Object.keys(s).forEach((u) => {
        const l = u, f = this.getControl({ modeType: r, modeName: l }), h = this.gm.options.getControlOptions({
          modeType: r,
          modeName: l
        });
        f && h && e({ control: f, controlOptions: h });
      });
    });
  }
  getControl({
    modeType: e,
    modeName: r
  }) {
    return e && r && this.controls[e][r] || null;
  }
  getDefaultPosition() {
    return this.gm.options.settings.controlsPosition;
  }
}
class lk {
  gm;
  globalEventsListener = null;
  constructor(e) {
    this.gm = e;
  }
  get map() {
    return this.gm.mapAdapter.getMapInstance();
  }
  async processEvent(e, r) {
    await this.fireToMap({
      type: "system",
      eventName: e.split(":")[1],
      payload: {
        ...r,
        level: "user"
      }
    }), r.action === "mode_start" || r.action === "mode_end" ? await this.forwardModeToggledEvent(r) : r.action === "feature_created" ? await this.forwardFeatureCreated(r) : r.action === "feature_removed" ? await this.forwardFeatureRemoved(r) : r.action === "feature_updated" ? await this.forwardFeatureUpdated(r) : r.action === "feature_edit_start" ? await this.forwardFeatureEditStart(r) : r.action === "feature_edit_end" ? await this.forwardFeatureEditEnd(r) : (r.action === "loaded" || r.action === "unloaded") && await this.forwardGeomanLoaded(r);
  }
  async forwardModeToggledEvent(e) {
    const r = e.action === "mode_start";
    if (e.actionType === "draw") {
      const s = "globaldrawmodetoggled", u = {
        name: `${ut}:${s}`,
        actionType: e.actionType,
        action: e.action,
        enabled: r,
        shape: e.mode,
        map: this.map
      };
      await this.fireToMap({ type: "converted", eventName: s, payload: u });
      const l = r ? "drawstart" : "drawend", f = {
        name: `${ut}:${l}`,
        actionType: e.actionType,
        action: e.action,
        shape: e.mode,
        map: this.map
      };
      await this.fireToMap({
        type: "converted",
        eventName: l,
        payload: f
      });
    } else if (e.actionType === "edit") {
      const u = `global${this.getConvertedEditModeName(e.mode)}modetoggled`, l = {
        name: `${ut}:${u}`,
        actionType: e.actionType,
        action: e.action,
        enabled: r,
        map: this.map
      };
      await this.fireToMap({
        type: "converted",
        eventName: u,
        payload: l
      });
    } else if (e.actionType === "helper") {
      const s = `global${e.mode}modetoggled`, u = {
        name: `${ut}:${s}`,
        actionType: e.actionType,
        action: e.action,
        enabled: r,
        map: this.map
      };
      await this.fireToMap({
        type: "converted",
        eventName: s,
        payload: u
      });
    }
  }
  async forwardFeatureCreated(e) {
    const r = {
      name: `${ut}:create`,
      actionType: e.actionType,
      action: e.action,
      shape: e.mode,
      feature: e.featureData,
      map: this.map
    };
    await this.fireToMap({ type: "converted", eventName: "create", payload: r });
  }
  async forwardFeatureRemoved(e) {
    const r = {
      name: `${ut}:remove`,
      actionType: e.actionType,
      action: e.action,
      shape: e.mode,
      feature: e.featureData,
      map: this.map
    };
    await this.fireToMap({ type: "converted", eventName: "remove", payload: r });
  }
  async forwardFeatureUpdated(e) {
    const r = this.getConvertedEditModeName(e.mode), s = ["lasso"], u = {
      name: `${ut}:${r}`,
      actionType: e.actionType,
      action: e.action,
      map: this.map
    };
    e.sourceFeatures.length === 1 && !s.includes(e.mode) ? u.originalFeature = e.sourceFeatures[0] : u.originalFeatures = e.sourceFeatures, e.targetFeatures.length === 1 && !s.includes(e.mode) ? (u.feature = e.targetFeatures[0], u.shape = u.feature.shape) : u.features = e.targetFeatures, await this.fireToMap({ type: "converted", eventName: `${r}`, payload: u });
  }
  async forwardFeatureEditStart(e) {
    const r = this.getConvertedEditModeName(e.mode), s = {
      name: `${ut}:${r}start`,
      actionType: e.actionType,
      action: e.action,
      shape: e.feature.shape,
      feature: e.feature,
      map: this.map
    };
    await this.fireToMap({ type: "converted", eventName: `${r}start`, payload: s });
  }
  async forwardFeatureEditEnd(e) {
    const r = this.getConvertedEditModeName(e.mode), s = {
      name: `${ut}:${r}end`,
      actionType: e.actionType,
      action: e.action,
      shape: e.feature.shape,
      feature: e.feature,
      map: this.map
    };
    await this.fireToMap({ type: "converted", eventName: `${r}end`, payload: s });
  }
  async forwardGeomanLoaded(e) {
    const r = {
      name: `${ut}:${e.action}`,
      actionType: e.actionType,
      action: e.action,
      map: this.map,
      [ut]: this.gm
    };
    await this.fireToMap({
      type: "converted",
      eventName: `${r.action}`,
      payload: r
    });
  }
  async fireToMap({
    type: e,
    eventName: r,
    payload: s
  }) {
    const l = `${e === "system" ? ae : ut}:${r}`;
    if (this.gm.options.settings.awaitDataUpdatesOnEvents && "feature" in s && s.feature?.source) {
      const h = s.feature.source.id;
      await this.gm.features.updateManager.waitForPendingUpdates(h);
    }
    this.globalEventsListener?.(s), this.gm.mapAdapter.fire(l, s);
  }
  getConvertedEditModeName(e) {
    return e === "change" ? "edit" : e;
  }
}
const Od = (t) => Mn(t) && t.name === `${ae}:control:switch`, Mn = (t) => !!(t && typeof t == "object" && ["level", "name", "actionType", "action"].every((r) => r in t)), ck = (t) => !!(t && typeof t == "object" && ["type", "originalEvent", "target"].every((r) => r in t));
class hk {
  gm;
  forwarder;
  mapEventHandlers = {};
  gmEventHandlers = {};
  constructor(e) {
    this.gm = e, this.forwarder = new lk(e);
  }
  // Track pending event forwarding to maintain event ordering
  // Events are processed sequentially to ensure dragstart fires before drag, etc.
  pendingForward = Promise.resolve();
  fireEvent(e, r) {
    const s = this.gmEventHandlers[e];
    if (!s)
      return;
    const { controlHandler: u } = s;
    u(r), this.pendingForward = this.pendingForward.then(
      () => this.forwarder.processEvent(e, r)
    );
  }
  attachEvents(e) {
    et(e).forEach((r) => {
      const s = e[r];
      s && this.on(r, s);
    });
  }
  detachEvents(e) {
    et(e).forEach((r) => {
      const s = e[r];
      s && this.off(r, s);
    });
  }
  detachAllEvents() {
    et(this.gmEventHandlers).forEach((e) => {
      Array.from(this.gmEventHandlers[e]?.handlers || []).forEach((s) => {
        this.off(e, s);
      });
    }), et(this.mapEventHandlers).forEach((e) => {
      Array.from(this.mapEventHandlers[e]?.handlers || []).forEach((s) => {
        this.off(e, s);
      });
    });
  }
  on(e, r) {
    e.startsWith(ae) ? this.onGmEvent(e, r) : this.onMapEvent(e, r);
  }
  onGmEvent(e, r) {
    this.gmEventHandlers[e] || (this.gmEventHandlers[e] = this.createEventSection(e)), this.gmEventHandlers[e]?.handlers.unshift(r);
  }
  onMapEvent(e, r) {
    if (!this.mapEventHandlers[e]) {
      const s = this.createEventSection(e);
      this.gm.mapAdapter.on(e, s.controlHandler), this.mapEventHandlers[e] = s;
    }
    this.mapEventHandlers[e]?.handlers.unshift(r);
  }
  off(e, r) {
    e.startsWith(`${ae}`) ? this.offGmEvent(e, r) : this.offMapEvent(e, r);
  }
  offGmEvent(e, r) {
    const s = this.gmEventHandlers[e]?.handlers || [], u = s.findIndex((l) => r === l);
    u === -1 ? te.warn("MapEvents: handler not found", e, r) : (s.splice(u, 1), s.length === 0 && delete this.gmEventHandlers[e]);
  }
  offMapEvent(e, r) {
    const s = this.mapEventHandlers[e]?.handlers || [], u = s.findIndex((l) => r === l);
    if (u === -1)
      te.warn("MapEvents: handler not found", e, r);
    else if (s.splice(u, 1), s.length === 0) {
      const l = this.mapEventHandlers[e]?.controlHandler;
      l && this.gm.mapAdapter.off(e, l), delete this.mapEventHandlers[e];
    }
  }
  createEventSection(e) {
    return {
      handlers: [],
      controlHandler: (r) => {
        let s;
        if (Mn(r) && e.startsWith(`${ae}`) ? s = this.gmEventHandlers[e] : s = this.mapEventHandlers[e], !s) {
          te.debug(`No handlers for eventName: "${e}"`);
          return;
        }
        s.handlers.some((u) => {
          let l;
          return Mn(r) || ck(r) ? l = u(r) : te.error("EventsBus: unknown event type", r), l && typeof l == "object" && "next" in l ? !l.next : (te.error('EventsBus: handler should return an object with a "next" property'), !1);
        });
      }
    };
  }
}
class bo {
  gm;
  constructor(e) {
    this.gm = e;
  }
  trackExclusiveModes(e) {
    if (e.action !== "mode_start")
      return;
    const { sectionName: r, modeName: s } = this.getControlIds(e) || {};
    this.getControl(e)?.settings.exclusive && this.gm.control.eachControlWithOptions((l) => {
      const f = l.control.type, h = l.control.targetMode;
      f === r && h === s || l.controlOptions.active && l.control.settings.exclusive && this.gm.options.disableMode(f, h);
    });
  }
  trackRelatedModes(e) {
    sc(e) && this.gm.control.eachControlWithOptions((r) => {
      const s = r.control, { type: u, targetMode: l } = s;
      s.settings.enabledBy?.includes(e.mode) && (e.action === "mode_start" ? (this.gm.options.isModeEnabled(u, l) && this.gm.options.disableMode(u, l), this.gm.options.enableMode(u, l)) : e.action === "mode_end" ? this.gm.options.disableMode(u, l) : te.error("Unknown mode action", e.action));
    });
  }
  getControl(e) {
    const { modeName: r, sectionName: s } = this.getControlIds(e) || {};
    return r && s ? this.gm.control.getControl({ modeType: s, modeName: r }) : null;
  }
  getControlOptions(e) {
    const { modeName: r, sectionName: s } = this.getControlIds(e) || {};
    return r && s ? this.gm.options.getControlOptions({ modeType: s, modeName: r }) : null;
  }
  getControlIds(e) {
    let r = null, s = null;
    return e.action === "mode_start" ? (r = e.actionType, s = e.mode) : Od(e) && (r = e.section, s = e.mode), r && s ? { sectionName: r, modeName: s } : null;
  }
}
class fk extends bo {
  eventHandlers = {
    [`${ae}:control`]: this.handleControlEvent.bind(this)
  };
  constructor(e, r) {
    super(e), r.attachEvents(this.eventHandlers);
  }
  handleControlEvent(e) {
    return Od(e) ? (this.getControl(e) || te.error("Control not found, event payload", e), { next: !0 }) : { next: !0 };
  }
}
const Rd = ["draw", "edit", "helper"], gk = [...Rd, "control"], ir = [
  // shapes
  "marker",
  "circle",
  "circle_marker",
  "ellipse",
  "text_marker",
  "line",
  "rectangle",
  "polygon"
], dk = [
  "dom_marker",
  "vertex_marker",
  "center_marker",
  "edge_marker",
  "snap_guide"
], Dd = [...ir, ...dk], pk = ["freehand", "custom_shape"], Fd = [...ir, ...pk], Gd = [
  "shape_markers",
  "pin",
  "snapping",
  "snap_guides",
  "measurements",
  "auto_trace",
  "geofencing",
  "zoom_to_features",
  "click_to_edit"
], Bd = [
  "drag",
  "change",
  "rotate",
  "scale",
  "copy",
  "cut",
  "split",
  "union",
  "difference",
  "line_simplification",
  "lasso",
  "delete"
], mk = (t) => Array.isArray(t) && t.length === 2 && typeof t[0] == "number" && typeof t[1] == "number", ou = {
  id: (t) => typeof t == "string" || typeof t == "number",
  shape: (t) => typeof t == "string" && Cr(t, Dd),
  center: (t) => mk(t),
  xSemiAxis: (t) => typeof t == "number",
  ySemiAxis: (t) => typeof t == "number",
  angle: (t) => typeof t == "number",
  text: (t) => typeof t == "string",
  disableEdit: (t) => typeof t == "boolean"
};
class Bl {
  isMarkerInstanceAvailable() {
    return this.markerInstance ? !0 : (te.error("Marker instance is not available"), !1);
  }
}
var ot = 63710088e-1, Ud = {
  centimeters: ot * 100,
  centimetres: ot * 100,
  degrees: 360 / (2 * Math.PI),
  feet: ot * 3.28084,
  inches: ot * 39.37,
  kilometers: ot / 1e3,
  kilometres: ot / 1e3,
  meters: ot,
  metres: ot,
  miles: ot / 1609.344,
  millimeters: ot * 1e3,
  millimetres: ot * 1e3,
  nauticalmiles: ot / 1852,
  radians: 1,
  yards: ot * 1.0936
};
function un(t, e, r = {}) {
  const s = { type: "Feature" };
  return (r.id === 0 || r.id) && (s.id = r.id), r.bbox && (s.bbox = r.bbox), s.properties = e || {}, s.geometry = t, s;
}
function wn(t, e, r = {}) {
  if (!t)
    throw new Error("coordinates is required");
  if (!Array.isArray(t))
    throw new Error("coordinates must be an Array");
  if (t.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!no(t[0]) || !no(t[1]))
    throw new Error("coordinates must contain numbers");
  return un({
    type: "Point",
    coordinates: t
  }, e, r);
}
function hr(t, e, r = {}) {
  for (const u of t) {
    if (u.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (u[u.length - 1].length !== u[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let l = 0; l < u[u.length - 1].length; l++)
      if (u[u.length - 1][l] !== u[0][l])
        throw new Error("First and last Position are not equivalent.");
  }
  return un({
    type: "Polygon",
    coordinates: t
  }, e, r);
}
function Nr(t, e, r = {}) {
  if (t.length < 2)
    throw new Error("coordinates must be an array of two or more positions");
  return un({
    type: "LineString",
    coordinates: t
  }, e, r);
}
function nt(t, e = {}) {
  const r = { type: "FeatureCollection" };
  return e.id && (r.id = e.id), e.bbox && (r.bbox = e.bbox), r.features = t, r;
}
function vk(t, e, r = {}) {
  return un({
    type: "MultiLineString",
    coordinates: t
  }, e, r);
}
function Ul(t, e, r = {}) {
  return un({
    type: "MultiPolygon",
    coordinates: t
  }, e, r);
}
function zl(t, e = "kilometers") {
  const r = Ud[e];
  if (!r)
    throw new Error(e + " units is invalid");
  return t * r;
}
function ql(t, e = "kilometers") {
  const r = Ud[e];
  if (!r)
    throw new Error(e + " units is invalid");
  return t / r;
}
function ri(t) {
  return t % (2 * Math.PI) * 180 / Math.PI;
}
function lt(t) {
  return t % 360 * Math.PI / 180;
}
function zd(t, e = "kilometers", r = "kilometers") {
  if (!(t >= 0))
    throw new Error("length must be a positive number");
  return zl(ql(t, e), r);
}
function no(t) {
  return !isNaN(t) && t !== null && !Array.isArray(t);
}
function Ao(t) {
  return t !== null && typeof t == "object" && !Array.isArray(t);
}
function Or(t, e, r) {
  if (t !== null)
    for (var s, u, l, f, h, p, d, v = 0, _ = 0, x, k = t.type, M = k === "FeatureCollection", R = k === "Feature", C = M ? t.features.length : 1, I = 0; I < C; I++) {
      d = M ? (
        // @ts-expect-error: Known type conflict
        t.features[I].geometry
      ) : R ? (
        // @ts-expect-error: Known type conflict
        t.geometry
      ) : t, x = d ? d.type === "GeometryCollection" : !1, h = x ? d.geometries.length : 1;
      for (var T = 0; T < h; T++) {
        var Y = 0, $ = 0;
        if (f = x ? d.geometries[T] : d, f !== null) {
          p = f.coordinates;
          var J = f.type;
          switch (v = r && (J === "Polygon" || J === "MultiPolygon") ? 1 : 0, J) {
            case null:
              break;
            case "Point":
              if (
                // @ts-expect-error: Known type conflict
                e(
                  p,
                  _,
                  I,
                  Y,
                  $
                ) === !1
              )
                return !1;
              _++, Y++;
              break;
            case "LineString":
            case "MultiPoint":
              for (s = 0; s < p.length; s++) {
                if (
                  // @ts-expect-error: Known type conflict
                  e(
                    p[s],
                    _,
                    I,
                    Y,
                    $
                  ) === !1
                )
                  return !1;
                _++, J === "MultiPoint" && Y++;
              }
              J === "LineString" && Y++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (s = 0; s < p.length; s++) {
                for (u = 0; u < p[s].length - v; u++) {
                  if (
                    // @ts-expect-error: Known type conflict
                    e(
                      p[s][u],
                      _,
                      I,
                      Y,
                      $
                    ) === !1
                  )
                    return !1;
                  _++;
                }
                J === "MultiLineString" && Y++, J === "Polygon" && $++;
              }
              J === "Polygon" && Y++;
              break;
            case "MultiPolygon":
              for (s = 0; s < p.length; s++) {
                for ($ = 0, u = 0; u < p[s].length; u++) {
                  for (l = 0; l < p[s][u].length - v; l++) {
                    if (
                      // @ts-expect-error: Known type conflict
                      e(
                        p[s][u][l],
                        _,
                        I,
                        Y,
                        $
                      ) === !1
                    )
                      return !1;
                    _++;
                  }
                  $++;
                }
                Y++;
              }
              break;
            case "GeometryCollection":
              for (s = 0; s < f.geometries.length; s++)
                if (
                  // @ts-expect-error: Known type conflict
                  Or(f.geometries[s], e, r) === !1
                )
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function $n(t, e) {
  if (t.type === "Feature")
    e(t, 0);
  else if (t.type === "FeatureCollection")
    for (var r = 0; r < t.features.length && e(t.features[r], r) !== !1; r++)
      ;
}
function yk(t, e, r) {
  var s = r;
  return $n(t, function(u, l) {
    l === 0 && r === void 0 ? s = u : s = e(s, u, l);
  }), s;
}
function Rr(t, e) {
  var r, s, u, l, f, h, p, d, v, _, x = 0, k = t.type === "FeatureCollection", M = t.type === "Feature", R = k ? t.features.length : 1;
  for (r = 0; r < R; r++) {
    for (h = k ? (
      // @ts-expect-error: Known type conflict
      t.features[r].geometry
    ) : M ? (
      // @ts-expect-error: Known type conflict
      t.geometry
    ) : t, d = k ? (
      // @ts-expect-error: Known type conflict
      t.features[r].properties
    ) : M ? (
      // @ts-expect-error: Known type conflict
      t.properties
    ) : {}, v = k ? (
      // @ts-expect-error: Known type conflict
      t.features[r].bbox
    ) : M ? (
      // @ts-expect-error: Known type conflict
      t.bbox
    ) : void 0, _ = k ? (
      // @ts-expect-error: Known type conflict
      t.features[r].id
    ) : M ? (
      // @ts-expect-error: Known type conflict
      t.id
    ) : void 0, p = h ? h.type === "GeometryCollection" : !1, f = p ? h.geometries.length : 1, u = 0; u < f; u++) {
      if (l = p ? h.geometries[u] : h, l === null) {
        if (
          // @ts-expect-error: Known type conflict
          e(
            // @ts-expect-error: Known type conflict
            null,
            x,
            d,
            v,
            _
          ) === !1
        )
          return !1;
        continue;
      }
      switch (l.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (
            // @ts-expect-error: Known type conflict
            e(
              l,
              x,
              d,
              v,
              _
            ) === !1
          )
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (s = 0; s < l.geometries.length; s++)
            if (
              // @ts-expect-error: Known type conflict
              e(
                l.geometries[s],
                x,
                d,
                v,
                _
              ) === !1
            )
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    x++;
  }
}
function _k(t, e, r) {
  var s = r;
  return Rr(
    t,
    function(u, l, f, h, p) {
      s = e(
        // @ts-expect-error: Known type conflict
        s,
        u,
        l,
        f,
        h,
        p
      );
    }
  ), s;
}
function Pr(t, e) {
  Rr(t, function(r, s, u, l, f) {
    var h = r === null ? null : r.type;
    switch (h) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return (
          // @ts-expect-error: Known type conflict
          e(
            un(r, u, { bbox: l, id: f }),
            s,
            0
          ) === !1 ? !1 : void 0
        );
    }
    var p;
    switch (h) {
      case "MultiPoint":
        p = "Point";
        break;
      case "MultiLineString":
        p = "LineString";
        break;
      case "MultiPolygon":
        p = "Polygon";
        break;
    }
    for (
      var d = 0;
      // @ts-expect-error: Known type conflict
      d < r.coordinates.length;
      d++
    ) {
      var v = r.coordinates[d], _ = {
        type: p,
        coordinates: v
      };
      if (
        // @ts-expect-error: Known type conflict
        e(un(_, u), s, d) === !1
      )
        return !1;
    }
  });
}
function sr(t, e = {}) {
  if (t.bbox != null && e.recompute !== !0)
    return t.bbox;
  const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Or(t, (s) => {
    r[0] > s[0] && (r[0] = s[0]), r[1] > s[1] && (r[1] = s[1]), r[2] < s[0] && (r[2] = s[0]), r[3] < s[1] && (r[3] = s[1]);
  }), r;
}
var qd = sr;
function tt(t) {
  if (!t)
    throw new Error("coord is required");
  if (!Array.isArray(t)) {
    if (t.type === "Feature" && t.geometry !== null && t.geometry.type === "Point")
      return [...t.geometry.coordinates];
    if (t.type === "Point")
      return [...t.coordinates];
  }
  if (Array.isArray(t) && t.length >= 2 && !Array.isArray(t[0]) && !Array.isArray(t[1]))
    return [...t];
  throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
function Ht(t) {
  if (Array.isArray(t))
    return t;
  if (t.type === "Feature") {
    if (t.geometry !== null)
      return t.geometry.coordinates;
  } else if (t.coordinates)
    return t.coordinates;
  throw new Error(
    "coords must be GeoJSON Feature, Geometry Object or an Array"
  );
}
function ra(t) {
  return t.type === "Feature" ? t.geometry : t;
}
function Xh(t, e) {
  return t.type === "FeatureCollection" ? "FeatureCollection" : t.type === "GeometryCollection" ? "GeometryCollection" : t.type === "Feature" && t.geometry !== null ? t.geometry.type : t.type;
}
function Yd(t, e, r, s = {}) {
  const u = tt(t), l = lt(u[0]), f = lt(u[1]), h = lt(r), p = ql(e, s.units), d = Math.asin(
    Math.sin(f) * Math.cos(p) + Math.cos(f) * Math.sin(p) * Math.cos(h)
  ), v = l + Math.atan2(
    Math.sin(h) * Math.sin(p) * Math.cos(f),
    Math.cos(p) - Math.sin(f) * Math.sin(d)
  ), _ = ri(v), x = ri(d);
  return u[2] !== void 0 ? wn([_, x, u[2]], s.properties) : wn([_, x], s.properties);
}
function Ek(t, e, r = {}) {
  const s = r.steps || 64, u = r.properties ? r.properties : !Array.isArray(t) && t.type === "Feature" && t.properties ? t.properties : {}, l = [];
  for (let f = 0; f < s; f++)
    l.push(
      Yd(t, e, f * -360 / s, r).geometry.coordinates
    );
  return l.push(l[0]), hr([l], u);
}
var xk = Ek;
function Hd(t, e = {}) {
  let r = 0, s = 0, u = 0;
  return Or(
    t,
    function(l) {
      r += l[0], s += l[1], u++;
    },
    !0
  ), wn([r / u, s / u], e.properties);
}
var Xu = Hd;
function wk(t, e, r = {}) {
  let s;
  return r.final ? s = Wh(tt(e), tt(t)) : s = Wh(tt(t), tt(e)), s > 180 ? -(360 - s) : s;
}
function Wh(t, e) {
  const r = lt(t[1]), s = lt(e[1]);
  let u = lt(e[0] - t[0]);
  u > Math.PI && (u -= 2 * Math.PI), u < -Math.PI && (u += 2 * Math.PI);
  const l = Math.log(
    Math.tan(s / 2 + Math.PI / 4) / Math.tan(r / 2 + Math.PI / 4)
  ), f = Math.atan2(u, l);
  return (ri(f) + 360) % 360;
}
function kk(t, e, r = {}) {
  const s = tt(t), u = tt(e);
  u[0] += u[0] - s[0] > 180 ? -360 : s[0] - u[0] > 180 ? 360 : 0;
  const l = Sk(s, u);
  return zd(l, "meters", r.units);
}
function Sk(t, e, r) {
  r = r === void 0 ? ot : Number(r);
  const s = r, u = t[1] * Math.PI / 180, l = e[1] * Math.PI / 180, f = l - u;
  let h = Math.abs(e[0] - t[0]) * Math.PI / 180;
  h > Math.PI && (h -= 2 * Math.PI);
  const p = Math.log(
    Math.tan(l / 2 + Math.PI / 4) / Math.tan(u / 2 + Math.PI / 4)
  ), d = Math.abs(p) > 1e-11 ? f / p : Math.cos(u);
  return Math.sqrt(
    f * f + d * d * h * h
  ) * s;
}
function Mk(t, e, r, s = {}) {
  const u = e < 0;
  let l = zd(
    Math.abs(e),
    s.units,
    "meters"
  );
  u && (l = -Math.abs(l));
  const f = tt(t), h = Ik(
    f,
    l,
    r
  );
  return h[0] += h[0] - f[0] > 180 ? -360 : f[0] - h[0] > 180 ? 360 : 0, wn(h, s.properties);
}
function Ik(t, e, r, s) {
  s = s === void 0 ? ot : Number(s);
  const u = e / s, l = t[0] * Math.PI / 180, f = lt(t[1]), h = lt(r), p = u * Math.cos(h);
  let d = f + p;
  Math.abs(d) > Math.PI / 2 && (d = d > 0 ? Math.PI - d : -Math.PI - d);
  const v = Math.log(
    Math.tan(d / 2 + Math.PI / 4) / Math.tan(f / 2 + Math.PI / 4)
  ), _ = Math.abs(v) > 1e-11 ? p / v : Math.cos(f), x = u * Math.sin(h) / _;
  return [
    ((l + x) * 180 / Math.PI + 540) % 360 - 180,
    d * 180 / Math.PI
  ];
}
function To(t) {
  if (!t)
    throw new Error("geojson is required");
  switch (t.type) {
    case "Feature":
      return Jd(t);
    case "FeatureCollection":
      return bk(t);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return Yl(t);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function Jd(t) {
  const e = { type: "Feature" };
  return Object.keys(t).forEach((r) => {
    switch (r) {
      case "type":
      case "properties":
      case "geometry":
        return;
      default:
        e[r] = t[r];
    }
  }), e.properties = $d(t.properties), t.geometry == null ? e.geometry = null : e.geometry = Yl(t.geometry), e;
}
function $d(t) {
  const e = {};
  return t && Object.keys(t).forEach((r) => {
    const s = t[r];
    typeof s == "object" ? s === null ? e[r] = null : Array.isArray(s) ? e[r] = s.map((u) => u) : e[r] = $d(s) : e[r] = s;
  }), e;
}
function bk(t) {
  const e = { type: "FeatureCollection" };
  return Object.keys(t).forEach((r) => {
    switch (r) {
      case "type":
      case "features":
        return;
      default:
        e[r] = t[r];
    }
  }), e.features = t.features.map((r) => Jd(r)), e;
}
function Yl(t) {
  const e = { type: t.type };
  return t.bbox && (e.bbox = t.bbox), t.type === "GeometryCollection" ? (e.geometries = t.geometries.map((r) => Yl(r)), e) : (e.coordinates = Vd(t.coordinates), e);
}
function Vd(t) {
  const e = t;
  return typeof e[0] != "object" ? e.slice() : e.map((r) => Vd(r));
}
var Ak = To;
function Xd(t, e, r) {
  if (r = r || {}, !Ao(r)) throw new Error("options is invalid");
  const s = r.pivot, u = r.mutate;
  if (!t) throw new Error("geojson is required");
  if (e == null || isNaN(e))
    throw new Error("angle is required");
  if (e === 0) return t;
  const l = s ?? Hd(t);
  return (u === !1 || u === void 0) && (t = To(t)), Or(t, function(f) {
    const p = wk(l, f) + e, d = kk(l, f), v = Ht(
      Mk(l, d, p)
    );
    f[0] = v[0], f[1] = v[1];
  }), t;
}
var Tk = Xd;
function jh(t, e, r, s) {
  s = s || {};
  let u = s.steps || 64;
  const l = s.units || "kilometers";
  let f = s.angle || 0;
  const h = s.pivot || t, p = s.properties || {};
  if (!t) throw new Error("center is required");
  if (!e) throw new Error("xSemiAxis is required");
  if (!r) throw new Error("ySemiAxis is required");
  if (!Ao(s)) throw new Error("options must be an object");
  if (!no(u)) throw new Error("steps must be a number");
  if (!no(f)) throw new Error("angle must be a number");
  const d = tt(Xd(wn(tt(t)), f, { pivot: h }));
  f = -90 + f, u = Math.ceil(u / 4);
  const v = [], _ = [], x = e, k = r, M = k, R = (x - k) / (Math.PI / 2), C = (x + k) * Math.PI / 4, I = 0.5, T = u;
  let Y = 0, $ = 0;
  for (let q = 0; q < u; q++)
    $ += Y, R === 0 ? Y = C / T / M : Y = (-(R * $ + M) + Math.sqrt(Math.pow(R * $ + M, 2) - 4 * (I * R) * -(C / T))) / (2 * (I * R)), $ != 0 && v.push($);
  _.push(0);
  for (let q = 0; q < v.length; q++)
    _.push(v[q]);
  _.push(Math.PI / 2);
  for (let q = 0; q < v.length; q++)
    _.push(Math.PI - v[v.length - q - 1]);
  _.push(Math.PI);
  for (let q = 0; q < v.length; q++)
    _.push(Math.PI + v[q]);
  _.push(3 * Math.PI / 2);
  for (let q = 0; q < v.length; q++)
    _.push(2 * Math.PI - v[v.length - q - 1]);
  _.push(0);
  const J = [];
  for (const q of _) {
    const W = Math.atan2(k * Math.sin(q), x * Math.cos(q)), E = Math.sqrt(
      Math.pow(x, 2) * Math.pow(k, 2) / (Math.pow(x * Math.sin(W), 2) + Math.pow(k * Math.cos(W), 2))
    );
    J.push(
      Yd(d, E, f + ri(W), {
        units: l
      }).geometry.coordinates
    );
  }
  return hr([J], p);
}
function Wd(t, e, r = {}) {
  if (r.final === !0)
    return Lk(t, e);
  const s = tt(t), u = tt(e), l = lt(s[0]), f = lt(u[0]), h = lt(s[1]), p = lt(u[1]), d = Math.sin(f - l) * Math.cos(p), v = Math.cos(h) * Math.sin(p) - Math.sin(h) * Math.cos(p) * Math.cos(f - l);
  return ri(Math.atan2(d, v));
}
function Lk(t, e) {
  let r = Wd(e, t);
  return r = (r + 180) % 360, r;
}
var ro = Wd;
function Zr(t, e, r = {}) {
  var s = tt(t), u = tt(e), l = lt(u[1] - s[1]), f = lt(u[0] - s[0]), h = lt(s[1]), p = lt(u[1]), d = Math.pow(Math.sin(l / 2), 2) + Math.pow(Math.sin(f / 2), 2) * Math.cos(h) * Math.cos(p);
  return zl(
    2 * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d)),
    r.units
  );
}
var jd = Zr;
function Wu(t, e = {}) {
  const r = ra(t);
  switch (!e.properties && t.type === "Feature" && (e.properties = t.properties), r.type) {
    case "Polygon":
      return Zd(r, e);
    case "MultiPolygon":
      return Kd(r, e);
    default:
      throw new Error("invalid poly");
  }
}
function Zd(t, e = {}) {
  const s = ra(t).coordinates, u = e.properties ? e.properties : t.type === "Feature" ? t.properties : {};
  return Qd(s, u);
}
function Kd(t, e = {}) {
  const s = ra(t).coordinates, u = e.properties ? e.properties : t.type === "Feature" ? t.properties : {}, l = [];
  return s.forEach((f) => {
    l.push(Qd(f, u));
  }), nt(l);
}
function Qd(t, e) {
  return t.length > 1 ? vk(t, e) : Nr(t[0], e);
}
const Zh = (t, e) => t[0] === e[0] && t[1] === e[1], Fs = (t) => t.type === "Feature" && t.geometry.type === "LineString", Kh = (t) => t.type === "Feature" && t.geometry.type === "MultiLineString", Hl = (t) => t.type === "Feature" && t.geometry.type === "Polygon", Jl = (t) => t.type === "Feature" && t.geometry.type === "MultiPolygon", Qh = (t) => ({
  type: "FeatureCollection",
  features: t.geometry.coordinates.map((e) => ({
    type: "Feature",
    properties: t.properties,
    geometry: {
      type: "LineString",
      coordinates: e
    }
  }))
}), uu = (t, e) => ({
  lng: e[0] - t[0],
  lat: e[1] - t[1]
}), io = (t) => Array.isArray(t) && t.length >= 2 && t.length <= 3 && t.every((e) => typeof e == "number"), ia = (t, e, r = !1) => {
  let s = 0;
  const u = ["features", "geometries", "geometry", "coordinates"], l = (f, h, p = !1) => {
    io(f) ? (e({ coordinate: f, path: h }, s), s += 1) : Array.isArray(f) ? f.forEach((d, v) => {
      p && r && v === f.length - 1 && io(d) || l(d, [...h, v], p);
    }) : typeof f == "object" && f !== null && et(f).forEach((d) => {
      const v = f[d];
      if (u.includes(d) && v) {
        const _ = "type" in f && f.type, x = _ === "Polygon" || _ === "MultiPolygon";
        l(v, [...h, d], x);
      }
    });
  };
  l(t, []);
}, Ck = (t, e) => {
  let r = { coordinate: [0, 0], path: [] }, s = -1;
  try {
    ia(t, (u, l) => {
      if (e[0] === u.coordinate[0] && e[1] === u.coordinate[1])
        throw s = l, r = u, new Error("stop");
    });
  } catch {
    if (r)
      return {
        index: s,
        coordinate: r.coordinate,
        path: r.path
      };
  }
  return null;
}, $l = (t, e) => {
  let r = 0;
  const s = ["features", "geometries", "geometry", "coordinates"], u = (l, f, h, p) => {
    io(l) && io(f) ? (e(
      {
        start: { coordinate: [...l], path: h },
        end: { coordinate: [...f], path: p }
      },
      r
    ), r += 1) : Array.isArray(l) ? l.forEach((d, v) => {
      u(
        d,
        l[v + 1],
        [...h, v],
        [...h, v + 1]
      );
    }) : typeof l == "object" && l !== null && et(l).forEach((d) => {
      const v = l[d];
      s.includes(d) && v && u(v, void 0, [...h, d], []);
    });
  };
  u(t, void 0, [], []);
}, Lo = (t, e) => {
  let r = {
    absCoordIndex: -1,
    featureIndex: -1,
    multiFeatureIndex: -1,
    geometryIndex: -1
  };
  try {
    Or(
      t,
      (s, u, l, f, h) => {
        if (s[0] === e[0] && s[1] === e[1])
          throw r = { absCoordIndex: u, featureIndex: l, multiFeatureIndex: f, geometryIndex: h }, new Error("found");
      }
    );
  } catch {
  }
  return r;
}, mI = (t, e, r = {}) => ({
  type: "Feature",
  properties: r,
  geometry: {
    type: "LineString",
    coordinates: [t, e]
  }
}), Li = (t, e) => {
  const [r, s] = t, [u, l] = e, f = Math.min(r, u), h = Math.min(s, l), p = Math.max(r, u), d = Math.max(s, l);
  return [f, h, p, d];
}, ju = (t, e) => {
  const r = Li(t, e), s = [r[0], r[1]], u = [r[2], r[3]], l = s[0], f = s[1], h = u[0], p = u[1];
  return {
    type: "Feature",
    properties: {
      shape: "rectangle"
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [l, f],
          [h, f],
          [h, p],
          [l, p],
          [l, f]
        ]
      ]
    }
  };
}, Zu = (t) => [t.geometry.coordinates[0], t.geometry.coordinates[1]], Vl = (t) => {
  const e = qd(t);
  return [
    [e[0], e[1]],
    // South-West (min-x, min-y)
    [e[2], e[3]]
    // North-East (max-x, max-y)
  ];
}, Nk = (t) => [t[0][0], t[0][1], t[1][0], t[1][1]], Pk = (t, e) => {
  const [r, s, u, l] = t, [f, h] = e;
  return f >= r && f <= u && h >= s && h <= l;
}, vI = (t, e) => {
  const r = Nk(t);
  return Pk(r, e);
}, lu = (t) => {
  let e = 0;
  return Or(
    t,
    () => {
      e += 1;
    },
    !0
  ), e;
}, Ok = (t) => {
  const e = [];
  return Or(
    t,
    (r) => {
      e.push([r[0], r[1]]);
    },
    !0
  ), e;
}, Xl = (t) => {
  const e = Ok(t);
  return e.some((r) => !Wi(e[0], r));
}, ep = (t) => {
  let e = null;
  try {
    ia(t, (r) => {
      throw e = r.coordinate, new Error("found");
    });
  } catch {
    return e;
  }
  return null;
}, Ua = (t, e) => Math.sqrt((t[0] - e[0]) ** 2 + (t[1] - e[1]) ** 2), Rk = (t, e, r) => {
  const [s, u] = [t[0], t[1]], [l, f] = [e[0], e[1]], [h, p] = [r[0], r[1]], d = l - s, v = f - u, _ = h - s, x = p - u, k = _ * d + x * v, M = d * d + v * v;
  let R = k / M;
  return R = Math.max(0, Math.min(1, R)), [s + R * d, u + R * v];
}, Dk = (t, e) => {
  const { absCoordIndex: r } = Lo(t, e);
  return r !== -1 ? (t.geometry.coordinates.splice(r, 1), !0) : !1;
}, Fk = (t, e) => {
  const r = Lo(t, e);
  if (r.absCoordIndex !== -1) {
    const s = [r.geometryIndex], u = Ui(
      t.geometry.coordinates,
      s
    ), l = u.findIndex((f) => Wi(f, e));
    return u.length <= 4 ? (t.geometry.coordinates.splice(r.geometryIndex, 1), !0) : (u.splice(l, 1), l === 0 && (u[u.length - 1] = [...u[0]]), !0);
  }
  return !1;
}, Gk = (t, e) => {
  const r = Lo(t, e);
  if (r.absCoordIndex !== -1) {
    const s = [
      r.multiFeatureIndex,
      r.geometryIndex
    ], u = Ui(
      t.geometry.coordinates,
      s
    ), l = u.findIndex((f) => Wi(f, e));
    if (u.length <= 4) {
      s.pop();
      const f = Ui(
        t.geometry.coordinates,
        r.multiFeatureIndex
      );
      return f.splice(r.geometryIndex, 1), f.length === 0 && t.geometry.coordinates.splice(r.multiFeatureIndex, 1), !0;
    }
    return u.splice(l, 1), l === 0 && (u[u.length - 1] = [...u[0]]), !0;
  }
  return !1;
}, Bk = (t, e) => Fs(t) ? Dk(t, e) : Hl(t) ? Fk(t, e) : Jl(t) ? Gk(t, e) : !1, yI = (t) => {
  let e = 0;
  return $l(t, (r) => {
    e += Zr(r.start.coordinate, r.end.coordinate, {
      units: "meters"
    });
  }), e;
}, _I = (t) => {
  const e = {
    type: "FeatureCollection",
    features: []
  };
  return t.features.forEach((r) => {
    if (Fs(r))
      e.features.push(r);
    else if (Hl(r)) {
      const s = Zd(r);
      Fs(s) ? e.features.push(s) : Kh(s) && Qh(s).features.forEach((l) => {
        e.features.push(l);
      });
    } else Jl(r) ? Kd(r).features.forEach((u) => {
      Fs(u) ? e.features.push(u) : Kh(u) && Qh(u).features.forEach((f) => {
        e.features.push(f);
      });
    }) : te.warn("AutoTraceHelper.getFeaturesGeoJsonAsLines: Feature is not supported", r);
  }), e;
}, Uk = (t, e = "marker") => ({
  type: "Feature",
  properties: {
    shape: e
  },
  geometry: {
    type: "Point",
    coordinates: t
  }
}), Wl = ({
  center: t,
  radius: e,
  steps: r = 80
}) => {
  const s = xk(t, e, {
    steps: r,
    units: "meters"
  });
  return s.geometry.coordinates[0][0] = [...s.geometry.coordinates[0][0]], s;
}, ef = ({
  center: t,
  xSemiAxisLngLat: e,
  rimLngLat: r
}) => {
  let s = Zr(t, e, { units: "meters" });
  s === 0 && (s = 1);
  const u = ro(t, e) - 90;
  let l = 0;
  if (r) {
    const h = -u * Math.PI / 180, d = -(ro(t, r) - 90) * Math.PI / 180, v = Zr(t, r, { units: "meters" }), _ = v * Math.cos(d), x = v * Math.sin(d), k = _ * Math.cos(h) + x * Math.sin(h), M = _ * -Math.sin(h) + x * Math.cos(h), R = k * k / (s * s);
    l = Math.abs(M) / Math.sqrt(1 - R), isNaN(l) && (l = 0);
  }
  return {
    xSemiAxis: s,
    ySemiAxis: l,
    angle: u
  };
}, tp = 80, Co = ({
  center: t,
  xSemiAxis: e,
  ySemiAxis: r,
  angle: s,
  properties: u = {}
}) => {
  const l = {
    steps: tp,
    angle: s,
    units: "meters"
  };
  if (r === void 0 || r === 0) {
    const h = jh(t, e, 1, l);
    return Nr(h.geometry.coordinates[0].slice(0, 41), {
      shape: "line"
    });
  }
  const f = jh(t, e, r, {
    ...l,
    properties: {
      ...u,
      [`${vt}shape`]: "ellipse",
      [`${vt}center`]: t,
      [`${vt}xSemiAxis`]: e,
      [`${vt}ySemiAxis`]: r,
      [`${vt}angle`]: s
    }
  });
  return f.geometry.coordinates[0][0] = [...f.geometry.coordinates[0][0]], f;
}, zk = [
  "circle",
  "ellipse",
  "rectangle"
];
class Gs {
  gm;
  id = "no-id";
  parent = null;
  markers;
  source;
  _geoJson = null;
  constructor(e) {
    this.gm = e.gm, this.id = e.id, this.source = e.source, this.parent = e.parent, this.markers = /* @__PURE__ */ new Map();
    const r = {
      ...e.geoJsonShapeFeature,
      properties: {
        ...this.parseExtraProperties(e.geoJsonShapeFeature),
        ...this.parseGmShapeProperties(e.geoJsonShapeFeature)
      }
    };
    if (e.skipSourceUpdate) {
      if (this._geoJson = {
        ...r,
        id: this.id
      }, this.shape === "circle") {
        const s = Zu(Xu(this._geoJson));
        this._geoJson.properties[`${vt}center`] = s;
      }
    } else
      this.addGeoJson(r);
  }
  get shape() {
    const e = this.getShapeProperty("shape");
    if (typeof e == "string" && Cr(e, Dd))
      return e;
    throw new Error(`Wrong shape type: "${e}"`);
  }
  set shape(e) {
    this.setShapeProperty("shape", e);
  }
  get temporary() {
    return this.source.id === K.temporary;
  }
  get sourceName() {
    return this.source.id;
  }
  getShapeProperty(e, r) {
    const s = r?.properties || this._geoJson?.properties || {}, u = ou[e], l = s[`${vt}${e}`] ?? s[e];
    if (u && u(l))
      return l;
  }
  setShapeProperty(e, r) {
    if (!this._geoJson) {
      te.error("FeatureData.setShapeProperty(): geojson is not set");
      return;
    }
    this._geoJson.properties[`${vt}${e}`] = r, this._updateAllProperties(this._geoJson.properties);
  }
  deleteShapeProperty(e) {
    if (!this._geoJson) {
      te.error("FeatureData.deleteShapeProperty(): geojson is not set");
      return;
    }
    delete this._geoJson.properties[`${vt}${e}`], this._updateAllProperties(this._geoJson.properties);
  }
  parseGmShapeProperties(e) {
    const r = this.getShapeProperty("shape", e) || this.gm.features.getFeatureShapeByGeoJson(e);
    r || te.error(`FeatureData.importGmShapeProperties(): unknown shape: ${r}`);
    const u = {
      ...Object.fromEntries(
        et(ou).map((l) => [l, this.getShapeProperty(l, e)])
      ),
      id: this.id,
      shape: r || void 0
    };
    return Object.fromEntries(
      et(u).filter((l) => u[l] !== void 0).map((l) => [`${vt}${l}`, u[l]])
    );
  }
  parseExtraProperties(e) {
    const r = $t(e.properties) || {};
    return et(ou).forEach((s) => {
      delete r[s], delete r[`${vt}${s}`];
    }), r;
  }
  getGeoJson() {
    if (this._geoJson)
      return this._geoJson;
    throw new Error(`Missing GeoJSON for feature: "${this.shape}:${this.id}"`);
  }
  addGeoJson(e) {
    if (this._geoJson = {
      ...e,
      id: this.id
    }, this.shape === "circle") {
      const r = Zu(Xu(this._geoJson));
      this._geoJson.properties[`${vt}center`] = r;
    }
    this.gm.features.updateManager.updateSource({
      diff: { add: [this._geoJson] },
      sourceName: this.sourceName
    });
  }
  removeGeoJson() {
    if (!this._geoJson)
      throw new Error(`Feature not found: "${this.id}"`);
    this.gm.features.updateManager.updateSource({
      diff: { remove: [this.id] },
      sourceName: this.sourceName
    });
  }
  removeMarkers() {
    this.markers.forEach((e) => {
      e.instance instanceof Bl ? e.instance.remove() : this.gm.features.delete(e.instance);
    }), this.markers = /* @__PURE__ */ new Map();
  }
  /**
   * Updates the geometry of this feature.
   *
   * @param geometry - The new geometry for the feature
   *
   * @example
   * // Update a marker's position
   * feature.updateGeometry({ type: 'Point', coordinates: [10, 52] });
   *
   * // Update a polygon's coordinates
   * feature.updateGeometry({
   *   type: 'Polygon',
   *   coordinates: [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]]
   * });
   */
  updateGeometry(e) {
    const r = this.getGeoJson();
    if (!r)
      throw new Error(`Feature not found: "${this.id}"`);
    this._geoJson = { ...r, geometry: e };
    const s = {
      update: [this._geoJson]
    };
    this.gm.features.updateManager.updateSource({
      diff: s,
      sourceName: this.sourceName
    });
  }
  /**
   * @deprecated Use `updateGeometry()` instead.
   */
  updateGeoJsonGeometry(e) {
    this.updateGeometry(e);
  }
  /**
   * Updates custom properties on this feature. Properties are merged with existing ones.
   * Set a property value to `undefined` to delete it.
   *
   * Internal Geoman properties (prefixed with `gm_`) cannot be modified through this method
   * and will be preserved.
   *
   * @param properties - Object containing properties to update or delete (set to undefined)
   *
   * @example
   * // Add or update properties
   * feature.updateProperties({ color: 'red', size: 10 });
   *
   * // Delete a property
   * feature.updateProperties({ color: undefined });
   *
   * // Mix of updates and deletions
   * feature.updateProperties({ color: 'blue', oldProp: undefined });
   */
  updateProperties(e) {
    if (!this._geoJson)
      throw new Error(`Feature not found: "${this.id}"`);
    const r = this.parseGmShapeProperties(this._geoJson), s = new Set(Object.keys(r)), u = {};
    for (const [h, p] of Object.entries(this._geoJson.properties))
      h in e || (u[h] = p);
    for (const [h, p] of Object.entries(e))
      s.has(h) || p !== void 0 && (u[h] = p);
    Object.assign(u, r), this._geoJson.properties = u;
    const l = { ...u };
    for (const [h, p] of Object.entries(e))
      s.has(h) || p === void 0 && (l[h] = void 0);
    const f = { update: [{ ...this._geoJson, properties: l }] };
    this.gm.features.updateManager.updateSource({
      diff: f,
      sourceName: this.sourceName
    });
  }
  /**
   * Replaces all custom properties on this feature. Existing custom properties are removed
   * and replaced with the provided ones.
   *
   * Internal Geoman properties (prefixed with `gm_`) cannot be modified and will be preserved.
   *
   * @param properties - Object containing the new properties (replaces all existing custom properties)
   *
   * @example
   * // Replace all custom properties
   * feature.setProperties({ name: 'New Feature', category: 'poi' });
   */
  setProperties(e) {
    if (!this._geoJson)
      throw new Error(`Feature not found: "${this.id}"`);
    const r = this.parseGmShapeProperties(this._geoJson), s = {};
    for (const [l, f] of Object.entries(e))
      f !== void 0 && !(l in r) && (s[l] = f);
    this._geoJson.properties = {
      ...s,
      ...r
    };
    const u = { update: [this._geoJson] };
    this.gm.features.updateManager.updateSource({
      diff: u,
      sourceName: this.sourceName
    });
  }
  /**
   * Internal method to update all properties including Geoman system properties.
   * This should only be used by internal Geoman code (edit modes, draw modes, etc.).
   *
   * @internal
   * @param properties - Properties to merge with existing ones
   */
  _updateAllProperties(e) {
    if (!this._geoJson)
      throw new Error(`Feature not found: "${this.id}"`);
    this._geoJson.properties = { ...this._geoJson.properties, ...e };
    const r = { update: [this._geoJson] };
    this.gm.features.updateManager.updateSource({
      diff: r,
      sourceName: this.sourceName
    });
  }
  /**
   * @deprecated Use `updateProperties()` instead. Set property value to `undefined` to delete it.
   */
  updateGeoJsonProperties(e) {
    this._updateAllProperties(e);
  }
  /**
   * @deprecated Use `setProperties()` instead.
   */
  setGeoJsonCustomProperties(e) {
    this.setProperties(e || {});
  }
  /**
   * @deprecated Use `updateProperties()` instead.
   */
  updateGeoJsonCustomProperties(e) {
    this.updateProperties(e || {});
  }
  /**
   * @deprecated Use `updateProperties({ propName: undefined })` instead.
   */
  deleteGeoJsonCustomProperties(e) {
    const r = {};
    for (const s of e)
      r[s] = void 0;
    this.updateProperties(r);
  }
  convertToPolygon() {
    return this.isConvertableToPolygon() ? (this.shape = "polygon", this.deleteShapeProperty("center"), this.deleteShapeProperty("angle"), this.deleteShapeProperty("xSemiAxis"), this.deleteShapeProperty("ySemiAxis"), !0) : !1;
  }
  isConvertableToPolygon() {
    return zk.includes(this.shape);
  }
  // changeSource({ sourceName, atomic }: { sourceName: FeatureSourceName; atomic: boolean }) {
  //   if (atomic) {
  //     this.gm.features.updateManager.withAtomicSourcesUpdate(() =>
  //       this.actualChangeSource({ sourceName, atomic }),
  //     );
  //   } else {
  //     this.actualChangeSource({ sourceName, atomic });
  //   }
  // }
  changeSource({ sourceName: e, atomic: r }) {
    if (this.source.id === e) {
      te.error(
        `FeatureData.changeSource: feature "${this.id}" already has the source "${e}"`
      );
      return;
    }
    const s = this.gm.features.sources[e];
    if (!s) {
      te.error(`FeatureData.changeSource: missing source "${e}"`);
      return;
    }
    const u = this.getGeoJson();
    if (!u) {
      te.error("FeatureData.changeSource: missing shape GeoJSON");
      return;
    }
    this.removeGeoJson(), this.source = s, this.addGeoJson(u), this.markers.forEach((l) => {
      l.instance instanceof Gs && l.instance.changeSource({ sourceName: e, atomic: r });
    });
  }
  fireFeatureUpdatedEvent({ mode: e }) {
    const r = {
      name: `${ae}:edit:feature_updated`,
      level: "system",
      actionType: "edit",
      action: "feature_updated",
      mode: e,
      sourceFeatures: [this],
      targetFeatures: [this],
      markerData: null
    };
    this.gm.events.fire(`${ae}:edit`, r);
  }
  delete() {
    this.removeGeoJson(), this.removeMarkers();
  }
}
const jl = (t) => Mn(t) && t.actionType === "helper", qk = (t) => Mn(t) && t.name === `${ae}:helper:geofencing_violation`;
class Zl {
  gm;
  options = {};
  settings = {};
  actions = {};
  flags = {
    featureCreateAllowed: !0,
    featureUpdateAllowed: !0,
    actionInProgress: !1
  };
  internalEventHandlers = {
    [`${ae}:helper`]: this.handleHelperEvent.bind(this)
  };
  constructor(e) {
    this.gm = e;
  }
  get snappingHelper() {
    return this.gm.actionInstances.helper__snapping || null;
  }
  startAction() {
    this.gm.events.bus.attachEvents(this.internalEventHandlers), this.gm.events.bus.attachEvents(this.eventHandlers), this.onStartAction();
  }
  endAction() {
    this.onEndAction(), this.gm.events.bus.detachEvents(this.eventHandlers), this.gm.events.bus.detachEvents(this.internalEventHandlers);
  }
  getOptionValue(e) {
    const r = this.options[e];
    if (!r)
      throw new Error(`Option ${e} not found`);
    if (["toggle", "hidden"].includes(r.type))
      return r.value;
    if (r.type === "select")
      return r.value.value;
    throw new Error(`Unknown option type: ${JSON.stringify(r)}`);
  }
  getSettingValue(e) {
    if (e in this.settings)
      return this.settings[e];
  }
  applyOptionValue(e, r) {
    const s = this.options[e];
    if (!s) {
      te.error("Option not found", e, r);
      return;
    }
    if (s.type === "toggle" && typeof r == "boolean")
      s.value = r;
    else if (s.type === "select") {
      const u = s.choices.find((l) => l.value === r);
      u && (s.value = u);
    } else s.type === "hidden" ? s.value = r : te.error("Can't apply option value", e, r, s);
  }
  handleHelperEvent(e) {
    return qk(e) ? this.handleGeofencingViolationEvent(e) : { next: !0 };
  }
  handleGeofencingViolationEvent(e) {
    return e.actionType === "draw" ? this.flags.featureCreateAllowed = !1 : e.actionType === "edit" && (this.flags.featureUpdateAllowed = !1), { next: !0 };
  }
}
const Kl = (t) => Mn(t) && t.actionType === "draw", np = (t) => Mn(t) && (t.name === `${ae}:draw:shape` || t.name === `${ae}:draw:shape_with_data`), rp = (t) => np(t) && t.variant === "line_drawer", EI = (t) => np(t) && t.variant === "freehand_drawer";
class yr extends Zl {
  actionType = "draw";
  shape = null;
  featureData = null;
  saveFeature() {
    if (this.featureData) {
      const e = this.featureData.getGeoJson();
      this.removeTmpFeature(), this.gm.features.createFeature({
        sourceName: K.main,
        shapeGeoJson: e
      });
    } else
      te.error("BaseDraw.saveFeature: no featureData to save");
  }
  removeTmpFeature() {
    this.featureData && (this.featureData.temporary || te.error("Not a temporary feature to remove", this.featureData), this.gm.features.delete(this.featureData), this.featureData = null);
  }
  fireBeforeFeatureCreate({
    geoJsonFeatures: e,
    forceMode: r = void 0
  }) {
    this.flags.featureCreateAllowed = !0;
    const s = {
      name: `${ae}:feature:before_create`,
      level: "system",
      actionType: "draw",
      mode: r || this.mode,
      action: "before_create",
      geoJsonFeatures: e
    };
    this.gm.events.fire(`${ae}:${this.actionType}`, s);
  }
  fireMarkerPointerStartEvent() {
    if (!this.gm.markerPointer.marker || !this.shape)
      return;
    const e = this.gm.markerPointer.marker, r = {
      name: `${ae}:draw:shape_with_data`,
      level: "system",
      variant: null,
      actionType: "draw",
      mode: this.shape,
      action: "start",
      markerData: {
        type: "dom",
        instance: e,
        position: {
          coordinate: e.getLngLat(),
          path: [-1]
        }
      },
      featureData: this.featureData
    };
    this.gm.events.fire(`${ae}:draw`, r);
  }
  fireMarkerPointerUpdateEvent() {
    if (!this.gm.markerPointer.marker || !this.shape)
      return;
    const e = this.gm.markerPointer.marker, r = {
      name: `${ae}:draw:shape_with_data`,
      level: "system",
      variant: null,
      actionType: "draw",
      mode: this.shape,
      action: "update",
      markerData: {
        type: "dom",
        instance: e,
        position: {
          coordinate: e.getLngLat(),
          path: [-1]
        }
      },
      featureData: this.featureData
    };
    this.gm.events.fire(`${ae}:draw`, r);
  }
  fireMarkerPointerFinishEvent() {
    if (!this.shape)
      return;
    const e = {
      name: `${ae}:draw:shape`,
      level: "system",
      variant: null,
      actionType: "draw",
      mode: this.shape,
      action: "finish"
    };
    this.gm.events.fire(`${ae}:draw`, e);
  }
  forwardLineDrawerEvent(e) {
    if (!rp(e) || !this.shape)
      return { next: !0 };
    if (e.action === "start" || e.action === "update") {
      const r = {
        name: `${ae}:draw:shape_with_data`,
        level: "system",
        actionType: "draw",
        mode: this.shape,
        variant: null,
        action: e.action,
        featureData: e.featureData,
        markerData: e.markerData
      };
      this.gm.events.fire(`${ae}:draw`, r);
    } else if (e.action === "finish" || e.action === "cancel") {
      const r = {
        name: `${ae}:draw:shape`,
        level: "system",
        actionType: "draw",
        mode: this.shape,
        variant: null,
        action: e.action
      };
      this.gm.events.fire(`${ae}:draw`, r);
    }
    return { next: !0 };
  }
  fireStartEvent(e, r = null) {
    if (!this.shape)
      return;
    const s = {
      name: `${ae}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: this.shape,
      variant: null,
      action: "start",
      featureData: e,
      markerData: r
    };
    this.gm.events.fire(`${ae}:draw`, s);
  }
  fireUpdateEvent(e, r = null) {
    if (!this.shape)
      return;
    const s = {
      name: `${ae}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: this.shape,
      variant: null,
      action: "update",
      featureData: e,
      markerData: r
    };
    this.gm.events.fire(`${ae}:draw`, s);
  }
  fireFinishEvent() {
    if (!this.shape)
      return;
    const e = {
      name: `${ae}:draw:shape`,
      level: "system",
      actionType: "draw",
      mode: this.shape,
      variant: null,
      action: "finish"
    };
    this.gm.events.fire(`${ae}:draw`, e);
  }
}
class Ql extends yr {
  mode = "circle";
  shape = "circle";
  eventHandlers = {
    mousemove: this.onMouseMove.bind(this),
    click: this.onMouseClick.bind(this)
  };
  circleCenterPoint = null;
  circleCenterLngLat = null;
  onStartAction() {
    this.gm.markerPointer.enable();
  }
  onEndAction() {
    this.removeTmpFeature(), this.gm.markerPointer.disable(), this.fireFinishEvent();
  }
  getFeatureGeoJson(e) {
    return {
      type: "Feature",
      properties: {
        shape: this.shape
      },
      geometry: {
        type: "Point",
        coordinates: e
      }
    };
  }
  getControlMarkerData() {
    const e = this.gm.markerPointer.marker;
    return e ? {
      type: "dom",
      instance: e,
      position: {
        coordinate: e.getLngLat(),
        path: [-1]
      }
    } : null;
  }
  createFeature() {
    const e = this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson(this.circleCenterLngLat || [0, 0]),
      sourceName: K.temporary
    });
    return e && this.circleCenterLngLat && e.setShapeProperty("center", this.circleCenterLngLat), e;
  }
  createMarker() {
    const e = document.createElement("div");
    e.innerHTML = jf;
    const r = e.firstChild;
    return r.style.color = "#278cda", r.style.width = "28px", r.style.height = "28px", r.style.pointerEvents = "none", this.gm.mapAdapter.createDomMarker(
      {
        draggable: !1,
        anchor: "center",
        element: r
      },
      [0, 0]
    );
  }
}
class Yk extends Ql {
  mode = "circle_marker";
  shape = "circle_marker";
  onStartAction() {
    this.gm.markerPointer.enable({
      customMarker: this.createMarker()
    });
  }
  onEndAction() {
    this.fireMarkerPointerFinishEvent(), super.onEndAction();
  }
  onMouseMove() {
    return this.fireMarkerPointerUpdateEvent(), { next: !0 };
  }
  onMouseClick(e) {
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    return this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(r)] }), this.flags.featureCreateAllowed && (this.featureData = this.createFeature(), this.circleCenterLngLat = r, this.circleCenterPoint = this.gm.mapAdapter.project(this.circleCenterLngLat), this.updateFeaturePosition(this.circleCenterLngLat), this.saveFeature()), { next: !1 };
  }
  updateFeaturePosition(e) {
    if (!this.featureData)
      return;
    const r = this.getFeatureGeoJson(e);
    this.featureData.updateGeoJsonGeometry(r.geometry);
  }
}
const Hk = () => window.PointerEvent && "maxTouchPoints" in navigator ? navigator.maxTouchPoints > 0 ? !window.matchMedia("(hover: hover)").matches : !1 : matchMedia("(hover: none)").matches || "ontouchstart" in window ? !0 : "msMaxTouchPoints" in navigator && typeof navigator.msMaxTouchPoints == "number" && navigator.msMaxTouchPoints > 0, ci = (t, e, r = 10) => {
  const s = { ...t };
  return et(t).forEach((u) => {
    const l = t[u];
    typeof l == "function" ? s[u] = Ag(l.bind(e), r, {
      leading: !0,
      trailing: !1
    }) : te.error("convertToThrottled: item is not a function", t[u]);
  }), s;
}, Jk = (t, e, r = 10) => {
  const s = { ...t };
  return et(t).forEach((u) => {
    const l = t[u];
    typeof l == "function" ? s[u] = Ig(l.bind(e), r, {
      leading: !1,
      trailing: !0
    }) : te.error("convertToDebounced: item is not a function", t[u]);
  }), s;
}, tf = async (t, e) => {
  const r = "Promise race timeout";
  await Promise.race([
    t,
    new Promise((s, u) => {
      setTimeout(
        () => u(
          new Error(
            `Timeout ${Hc / 1e3} seconds: ${e || r}`
          )
        ),
        Hc
      );
    })
  ]);
}, ip = [
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "contextmenu",
  "touchstart",
  "touchend",
  "touchmove",
  "touchcancel"
], $k = ["load"];
function xI(t) {
  return ip.includes(t);
}
function wI(t) {
  return $k.includes(t);
}
const Vk = (t) => !!(t && typeof t == "object" && "once" in t && typeof t.once == "function"), Ke = (t, e = { warning: !1 }) => {
  if (!t)
    return e.warning && te.warn("Empty event", t), !1;
  const r = typeof t == "object" && "lngLat" in t && "point" in t && "type" in t && "originalEvent" in t && typeof t.type == "string" && ip.includes(t.type);
  return !r && e.warning && te.warn("Not a pointer event", t), r;
}, Xk = (t) => t.originalEvent.ctrlKey || t.originalEvent.shiftKey || t.originalEvent.altKey || t.originalEvent.metaKey, Wk = (t) => {
  const e = ["symbol", "fill", "line", "circle"];
  return !!t && typeof t == "object" && "type" in t && e.includes(t.type);
};
class jk extends Ql {
  mode = "circle";
  shape = "circle";
  throttledMethods = ci(
    {
      updateFeatureGeoJson: this.updateFeatureGeoJson
    },
    this,
    this.gm.options.settings.throttlingDelay
  );
  onMouseClick(e) {
    if (!Ke(e))
      return { next: !0 };
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    if (this.circleCenterPoint && this.circleCenterLngLat)
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [this.getCircleGeoJson(this.circleCenterLngLat, r)]
      }), this.flags.featureCreateAllowed && (this.saveCircleFeature(r), this.circleCenterLngLat = null, this.circleCenterPoint = null, this.fireFinishEvent());
    else if (this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(r)] }), this.flags.featureCreateAllowed) {
      this.circleCenterLngLat = r, this.circleCenterPoint = this.gm.mapAdapter.project(this.circleCenterLngLat), this.featureData = this.createFeature();
      const s = this.getControlMarkerData();
      this.featureData && s && this.fireStartEvent(this.featureData, s);
    }
    return { next: !1 };
  }
  onMouseMove() {
    if (this.circleCenterLngLat && this.gm.markerPointer.marker) {
      const e = this.gm.markerPointer.marker.getLngLat();
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [this.getCircleGeoJson(this.circleCenterLngLat, e)]
      }), this.flags.featureCreateAllowed && this.throttledMethods.updateFeatureGeoJson(e);
    }
    return this.circleCenterPoint || this.fireMarkerPointerUpdateEvent(), { next: !1 };
  }
  updateFeatureGeoJson(e) {
    if (this.featureData && this.circleCenterLngLat) {
      const r = this.getCircleGeoJson(this.circleCenterLngLat, e);
      this.featureData.updateGeoJsonGeometry(r.geometry);
      const s = this.getControlMarkerData();
      s && this.fireUpdateEvent(this.featureData, s);
    }
  }
  saveCircleFeature(e) {
    if (this.circleCenterLngLat && this.featureData) {
      const r = this.gm.markerPointer.marker?.getLngLat() || e;
      this.updateFeatureGeoJson(r), this.featureData.setShapeProperty("center", this.circleCenterLngLat), this.isFeatureGeoJsonValid() ? this.saveFeature() : this.removeTmpFeature();
    }
  }
  isFeatureGeoJsonValid() {
    return this.featureData ? Xl(this.featureData.getGeoJson()) : !1;
  }
  getCircleGeoJson(e, r) {
    const s = this.gm.mapAdapter.getDistance(e, r);
    return {
      ...Wl({ center: e, radius: s }),
      properties: {
        shape: this.shape
      }
    };
  }
}
class Dr extends Zl {
  actionType = "helper";
}
const sp = (t) => !!t && typeof t == "object" && t instanceof Dr && "removeSnapGuides" in t && "updateSnapGuides" in t && t.mode === "snap_guides" && typeof t.removeSnapGuides == "function" && typeof t.updateSnapGuides == "function", Zk = (t) => !!t && typeof t == "object" && t instanceof Dr && "getShortestPath" in t && t.mode === "auto_trace" && typeof t.getShortestPath == "function", Kk = (t) => !!t && typeof t == "object" && t instanceof Dr && "getSharedMarkers" in t && t.mode === "pin" && typeof t.getSharedMarkers == "function";
function Qk(t, e = {}) {
  var r, s, u, l = e.properties, f = (r = e.autoComplete) != null ? r : !0, h = (s = e.orderCoords) != null ? s : !0, p = (u = e.mutate) != null ? u : !1;
  if (p || (t = To(t)), t.type === "FeatureCollection") {
    var d = [];
    return t.features.forEach(function(v) {
      d.push(
        Ht(nf(v, {}, f, h))
      );
    }), Ul(d, l);
  } else
    return nf(t, l, f, h);
}
function nf(t, e, r, s) {
  e = e || (t.type === "Feature" ? t.properties : {});
  var u = ra(t), l = u.coordinates, f = u.type;
  if (!l.length) throw new Error("line must contain coordinates");
  switch (f) {
    case "LineString":
      return r && (l = rf(l)), hr([l], e);
    case "MultiLineString":
      var h = [], p = 0;
      return l.forEach(function(d) {
        if (r && (d = rf(d)), s) {
          var v = e2(sr(Nr(d)));
          v > p ? (h.unshift(d), p = v) : h.push(d);
        } else
          h.push(d);
      }), hr(h, e);
    default:
      throw new Error("geometry type " + f + " is not supported");
  }
}
function rf(t) {
  var e = t[0], r = e[0], s = e[1], u = t[t.length - 1], l = u[0], f = u[1];
  return (r !== l || s !== f) && t.push(e), t;
}
function e2(t) {
  var e = t[0], r = t[1], s = t[2], u = t[3];
  return Math.abs(e - s) * Math.abs(r - u);
}
var ec = Qk;
class tc extends yr {
  mode = "line";
  snappingKey = "line_drawer";
  drawOptions;
  shapeLngLats = [];
  throttledMethods = ci(
    {
      onMouseMove: this.onMouseMove
    },
    this,
    this.gm.options.settings.throttlingDelay
  );
  eventHandlers = {
    [`${ae}:helper`]: this.handleGmHelperEvent.bind(this),
    click: this.onMouseClick.bind(this),
    mousemove: this.throttledMethods.onMouseMove.bind(this)
  };
  drawerEventHandlers = {
    firstMarkerClick: null,
    lastMarkerClick: null,
    nMarkerClick: null
  };
  constructor(e, r = {
    snappingMarkers: "none",
    targetShape: "line"
  }) {
    super(e), this.drawOptions = r;
  }
  get snapGuidesInstance() {
    const e = this.gm.actionInstances.helper__snap_guides;
    return sp(e) ? e : null;
  }
  get autoTraceEnabled() {
    return this.gm.options.controls.helper.auto_trace?.active || !1;
  }
  get autoTraceHelperInstance() {
    return this.autoTraceEnabled && Object.values(this.gm.actionInstances).find(Zk) || null;
  }
  onStartAction() {
    this.gm.markerPointer.enable();
  }
  onEndAction() {
    this.gm.markerPointer.disable(), this.endShape(), this.snapGuidesInstance?.removeSnapGuides(), this.clearDrawerHandlers();
  }
  clearDrawerHandlers() {
    this.drawerEventHandlers.firstMarkerClick = null, this.drawerEventHandlers.lastMarkerClick = null, this.drawerEventHandlers.nMarkerClick = null;
  }
  handleGmHelperEvent(e) {
    return jl(e) ? (e.mode === "snap_guides" && e.action === "mode_start" && this.updateSnapGuides(), { next: !0 }) : (te.error("LineDrawer.handleGmHelperEvent: invalid event", e), { next: !0 });
  }
  updateSnapGuides() {
    if (this.snapGuidesInstance) {
      const e = this.featureData?.getGeoJson();
      e && e.geometry.coordinates.pop(), this.snapGuidesInstance.updateSnapGuides(
        e || null,
        this.shapeLngLats.at(-1) || null,
        !0
      );
    }
  }
  on(e, r) {
    this.drawerEventHandlers[e] = r;
  }
  onMouseClick(e) {
    if (!Ke(e, { warning: !0 }))
      return { next: !0 };
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    if (this.featureData) {
      const s = this.getClickedMarkerInfo(e);
      this.handleNextVertex(r, s);
    } else this.isFeatureAllowed(Uk(r)) && this.startShape(r);
    return this.updateSnapGuides(), { next: !0 };
  }
  handleNextVertex(e, r) {
    if (!this.featureData) {
      te.error("LineDrawer.handleNextVertex: no featureData");
      return;
    }
    const s = this.featureData.markers.size, u = this.getMarkerClickEventData(r.index);
    r.index < s - 1 && this.addPoint(e, r), r.index !== -1 && (r.index === 0 ? this.drawerEventHandlers.firstMarkerClick?.(u) : r.index > 0 && r.index === s - 1 && this.drawerEventHandlers.lastMarkerClick?.(u), r.index >= 0 && this.drawerEventHandlers.nMarkerClick?.(u));
  }
  getMarkerClickEventData(e) {
    const r = this.getFeatureGeoJson({ withControlMarker: !1 });
    return {
      markerIndex: e,
      shapeCoordinates: this.getShapeCoordinates({ withControlMarker: !1 }),
      geoJson: r,
      bounds: Vl(r)
    };
  }
  onMouseMove(e) {
    return Ke(e, { warning: !0 }) ? (this.featureData && this.shapeLngLats.length && this.updateFeatureSource(), { next: !0 }) : { next: !0 };
  }
  startShape(e) {
    this.shapeLngLats = [e], this.featureData = this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson({ withControlMarker: !0 }),
      sourceName: K.temporary
    });
    const r = {
      type: "dom",
      instance: this.createMarker(e),
      position: {
        coordinate: e,
        path: ["geometry", "coordinates", 0]
      }
    };
    this.featureData && (this.featureData.markers.set(r.position.path.join("."), r), this.setSnapping(), this.fireStartEvent(this.featureData, r)), this.gm.mapAdapter.disableMapInteractions(["doubleClickZoom"]);
  }
  endShape() {
    const e = this.getFeatureGeoJson({ withControlMarker: !1 });
    this.removeSnapping(), this.removeTmpFeature(), this.shapeLngLats = [], this.gm.mapAdapter.enableMapInteractions(["doubleClickZoom"]), this.fireStopEvent(e);
  }
  setSnapping() {
    if (!this.snappingHelper)
      return;
    const e = this.drawOptions.snappingMarkers;
    e === "none" ? this.snappingHelper.setCustomSnappingCoordinates(this.snappingKey, []) : e === "all" && this.shapeLngLats.length ? this.snappingHelper.setCustomSnappingCoordinates(this.snappingKey, this.shapeLngLats) : e === "first" && this.shapeLngLats.length ? this.snappingHelper.setCustomSnappingCoordinates(this.snappingKey, [this.shapeLngLats[0]]) : e === "last" && this.shapeLngLats.length ? this.snappingHelper.setCustomSnappingCoordinates(this.snappingKey, [
      this.shapeLngLats[this.shapeLngLats.length - 1]
    ]) : te.error("LineDrawer.setSnapping: invalid data", e, this.shapeLngLats);
  }
  removeSnapping() {
    this.snappingHelper && this.snappingHelper.clearCustomSnappingCoordinates(this.snappingKey);
  }
  getClickedMarkerInfo(e) {
    if (!this.featureData)
      return { index: -1, path: null };
    let r = 0, s = null;
    try {
      this.featureData.markers.forEach((u, l) => {
        if (u.instance instanceof Bl) {
          const f = u.instance.getElement() || null, h = e.originalEvent.target, p = h instanceof Element ? h : null;
          if (f && f.contains(p))
            throw s = l, new Error("stop");
        }
        r += 1;
      });
    } catch {
      if (s)
        return { index: r, path: s };
    }
    return { index: -1, path: null };
  }
  addPoint(e, r) {
    const s = this.featureData;
    if (!s) {
      te.error("LineDrawer.addPoint: no featureData");
      return;
    }
    const u = this.getAddedLngLats(e, r), l = this.getFeatureGeoJsonWithType({
      withControlMarker: !0,
      coordinates: this.shapeLngLats.concat(u)
    });
    this.isFeatureAllowed(l) && (u.forEach((f) => {
      this.shapeLngLats.push(f);
      const h = this.addMarker(f, s);
      this.fireUpdateEvent(s, h);
    }), this.updateFeatureSource());
  }
  isFeatureAllowed(e) {
    return this.gm.getActiveDrawModes().length ? (this.fireBeforeFeatureCreate({ geoJsonFeatures: [e] }), this.flags.featureCreateAllowed) : !0;
  }
  getAddedLngLats(e, r) {
    if (!this.featureData)
      return te.error("LineDrawer.getCurrentLngLats: no featureData"), [];
    const u = this.getMarkerInfoLngLat(r) || e;
    return [...this.getAutoTracePath(u)?.slice(1, -1) || [], u];
  }
  getAutoTracePath(e) {
    const r = this.shapeLngLats.at(-1);
    return this.autoTraceEnabled && this.autoTraceHelperInstance && r && this.autoTraceHelperInstance.getShortestPath(r, e) || null;
  }
  getMarkerInfoLngLat(e) {
    if (this.featureData && e.path) {
      const r = this.featureData.markers.get(e.path);
      if (r && r.type === "dom")
        return r.instance.getLngLat();
      te.error("LineDrawer.addPoint: no markerData", e);
    }
    return null;
  }
  addMarker(e, r) {
    const s = {
      type: "dom",
      instance: this.createMarker(e),
      position: {
        coordinate: e,
        path: ["geometry", "coordinates", this.shapeLngLats.length]
      }
    };
    return r.markers.set(s.position.path.join("."), {
      type: "dom",
      instance: s.instance,
      position: {
        coordinate: e,
        path: []
      }
    }), s;
  }
  createMarker(e) {
    return this.gm.mapAdapter.createDomMarker(
      {
        element: this.gm.createSvgMarkerElement("control", {
          pointerEvents: "auto",
          cursor: "pointer"
        }),
        anchor: "center"
      },
      e
    );
  }
  updateFeatureSource() {
    if (this.featureData && (this.featureData.updateGeoJsonGeometry(
      this.getFeatureGeoJson({ withControlMarker: !0 }).geometry
    ), this.gm.markerPointer.marker)) {
      const e = {
        type: "dom",
        instance: this.gm.markerPointer.marker,
        position: {
          coordinate: this.gm.markerPointer.marker.getLngLat(),
          path: ["geometry", "coordinates", this.shapeLngLats.length]
        }
      };
      this.fireUpdateEvent(this.featureData, e);
    }
  }
  getFeatureGeoJson({
    withControlMarker: e,
    coordinates: r = void 0
  }) {
    return {
      type: "Feature",
      properties: {
        shape: "line"
      },
      geometry: {
        type: "LineString",
        coordinates: r || this.getShapeCoordinates({ withControlMarker: e })
      }
    };
  }
  getFeatureGeoJsonWithType({
    withControlMarker: e,
    coordinates: r = void 0
  }) {
    const s = this.getFeatureGeoJson({ withControlMarker: e, coordinates: r });
    return this.drawOptions.targetShape === "polygon" && s.geometry.coordinates.length > 3 ? ec(s, {
      properties: s.properties
    }) : s;
  }
  getShapeCoordinates({ withControlMarker: e }) {
    const r = [...this.shapeLngLats];
    return e && this.gm.markerPointer.marker && r.push(this.gm.markerPointer.marker.getLngLat()), r;
  }
  fireStartEvent(e, r) {
    const s = {
      name: `${ae}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: "line",
      variant: "line_drawer",
      action: "start",
      featureData: e,
      markerData: r
    };
    this.gm.events.fire(`${ae}:draw`, s);
  }
  fireUpdateEvent(e, r) {
    const s = {
      name: `${ae}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: "line",
      variant: "line_drawer",
      action: "update",
      featureData: e,
      markerData: r
    };
    this.gm.events.fire(`${ae}:draw`, s);
  }
  fireStopEvent(e) {
    const r = {
      name: `${ae}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: "line",
      action: "finish",
      variant: "line_drawer",
      geoJsonFeature: e,
      markerData: null,
      featureData: null
    };
    this.gm.events.fire(`${ae}:draw`, r);
  }
}
class t2 extends yr {
  mode = "line";
  shape = "line";
  lineDrawer = new tc(this.gm, { snappingMarkers: "first", targetShape: "line" });
  eventHandlers = {
    [`${ae}:draw`]: this.forwardLineDrawerEvent.bind(this),
    mousemove: this.onMouseMove.bind(this)
  };
  onStartAction() {
    this.lineDrawer.startAction(), this.lineDrawer.on("nMarkerClick", this.lineFinished.bind(this));
  }
  onEndAction() {
    this.lineDrawer.endAction();
  }
  onMouseMove(e) {
    return Ke(e) ? (this.lineDrawer.featureData || this.fireMarkerPointerUpdateEvent(), { next: !0 }) : { next: !0 };
  }
  lineFinished(e) {
    this.lineDrawer.endShape();
    let r = e.shapeCoordinates;
    return e.markerIndex > 0 && (r = r.slice(0, e.markerIndex + 1)), r.length < 2 ? null : this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson(r),
      sourceName: K.main
    });
  }
  getFeatureGeoJson(e) {
    return {
      type: "Feature",
      properties: {
        shape: this.shape
      },
      geometry: {
        type: "LineString",
        coordinates: e
      }
    };
  }
}
class n2 extends yr {
  mode = "marker";
  shape = "marker";
  eventHandlers = {
    click: this.onMouseClick.bind(this),
    mousemove: this.onMouseMove.bind(this)
  };
  onStartAction() {
    const e = this.createMarker();
    this.gm.markerPointer.enable({ customMarker: e }), this.fireMarkerPointerStartEvent();
  }
  onEndAction() {
    this.gm.markerPointer.disable(), this.fireMarkerPointerFinishEvent();
  }
  onMouseClick(e) {
    return Ke(e) && (this.featureData = this.createFeature(e), this.featureData && this.saveFeature()), { next: !1 };
  }
  onMouseMove(e) {
    return !Ke(e) || !this.gm.markerPointer.marker ? { next: !0 } : (this.fireMarkerPointerUpdateEvent(), { next: !0 });
  }
  createFeature(e) {
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray(), s = this.getFeatureGeoJson(r);
    return s && (this.fireBeforeFeatureCreate({ geoJsonFeatures: [s] }), this.flags.featureCreateAllowed) ? this.gm.features.createFeature({
      shapeGeoJson: s,
      sourceName: K.temporary
    }) : null;
  }
  getFeatureGeoJson(e) {
    return {
      type: "Feature",
      properties: {
        shape: this.shape
      },
      geometry: {
        type: "Point",
        coordinates: e
      }
    };
  }
  createMarker(e = K.temporary) {
    const s = this.gm.options.layerStyles.marker[e]?.find((_) => _.type === "symbol"), u = s?.paint && "icon-opacity" in s.paint ? s.paint["icon-opacity"] : void 0, l = s?.layout && "icon-size" in s.layout ? s.layout["icon-size"] : void 0, f = 36, d = `${l !== void 0 ? Math.round(f * (l / 0.18)) : f}px`, v = this.gm.createSvgMarkerElement("default", {
      width: d,
      height: d,
      pointerEvents: "none",
      ...u !== void 0 && { opacity: String(u) }
    });
    return this.gm.mapAdapter.createDomMarker(
      {
        draggable: !1,
        anchor: "bottom",
        element: v
      },
      [0, 0]
    );
  }
}
function r2(t) {
  var e = {
    MultiPoint: {
      coordinates: [],
      properties: []
    },
    MultiLineString: {
      coordinates: [],
      properties: []
    },
    MultiPolygon: {
      coordinates: [],
      properties: []
    }
  };
  return $n(t, (r) => {
    var s;
    switch ((s = r.geometry) == null ? void 0 : s.type) {
      case "Point":
        e.MultiPoint.coordinates.push(r.geometry.coordinates), e.MultiPoint.properties.push(r.properties);
        break;
      case "MultiPoint":
        e.MultiPoint.coordinates.push(...r.geometry.coordinates), e.MultiPoint.properties.push(r.properties);
        break;
      case "LineString":
        e.MultiLineString.coordinates.push(r.geometry.coordinates), e.MultiLineString.properties.push(r.properties);
        break;
      case "MultiLineString":
        e.MultiLineString.coordinates.push(
          ...r.geometry.coordinates
        ), e.MultiLineString.properties.push(r.properties);
        break;
      case "Polygon":
        e.MultiPolygon.coordinates.push(r.geometry.coordinates), e.MultiPolygon.properties.push(r.properties);
        break;
      case "MultiPolygon":
        e.MultiPolygon.coordinates.push(...r.geometry.coordinates), e.MultiPolygon.properties.push(r.properties);
        break;
    }
  }), nt(
    Object.keys(e).filter(function(r) {
      return e[r].coordinates.length;
    }).sort().map(function(r) {
      var s = { type: r, coordinates: e[r].coordinates }, u = { collectedProperties: e[r].properties };
      return un(s, u);
    })
  );
}
var i2 = r2;
function s2(t, e, r, s, u) {
  ap(t, e, r || 0, s || t.length - 1, u || a2);
}
function ap(t, e, r, s, u) {
  for (; s > r; ) {
    if (s - r > 600) {
      var l = s - r + 1, f = e - r + 1, h = Math.log(l), p = 0.5 * Math.exp(2 * h / 3), d = 0.5 * Math.sqrt(h * p * (l - p) / l) * (f - l / 2 < 0 ? -1 : 1), v = Math.max(r, Math.floor(e - f * p / l + d)), _ = Math.min(s, Math.floor(e + (l - f) * p / l + d));
      ap(t, e, v, _, u);
    }
    var x = t[e], k = r, M = s;
    for (vs(t, r, e), u(t[s], x) > 0 && vs(t, r, s); k < M; ) {
      for (vs(t, k, M), k++, M--; u(t[k], x) < 0; ) k++;
      for (; u(t[M], x) > 0; ) M--;
    }
    u(t[r], x) === 0 ? vs(t, r, M) : (M++, vs(t, M, s)), M <= e && (r = M + 1), e <= M && (s = M - 1);
  }
}
function vs(t, e, r) {
  var s = t[e];
  t[e] = t[r], t[r] = s;
}
function a2(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
let nc = class {
  constructor(e = 9) {
    this._maxEntries = Math.max(4, e), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(e) {
    let r = this.data;
    const s = [];
    if (!Sa(e, r)) return s;
    const u = this.toBBox, l = [];
    for (; r; ) {
      for (let f = 0; f < r.children.length; f++) {
        const h = r.children[f], p = r.leaf ? u(h) : h;
        Sa(e, p) && (r.leaf ? s.push(h) : hu(e, p) ? this._all(h, s) : l.push(h));
      }
      r = l.pop();
    }
    return s;
  }
  collides(e) {
    let r = this.data;
    if (!Sa(e, r)) return !1;
    const s = [];
    for (; r; ) {
      for (let u = 0; u < r.children.length; u++) {
        const l = r.children[u], f = r.leaf ? this.toBBox(l) : l;
        if (Sa(e, f)) {
          if (r.leaf || hu(e, f)) return !0;
          s.push(l);
        }
      }
      r = s.pop();
    }
    return !1;
  }
  load(e) {
    if (!(e && e.length)) return this;
    if (e.length < this._minEntries) {
      for (let s = 0; s < e.length; s++)
        this.insert(e[s]);
      return this;
    }
    let r = this._build(e.slice(), 0, e.length - 1, 0);
    if (!this.data.children.length)
      this.data = r;
    else if (this.data.height === r.height)
      this._splitRoot(this.data, r);
    else {
      if (this.data.height < r.height) {
        const s = this.data;
        this.data = r, r = s;
      }
      this._insert(r, this.data.height - r.height - 1, !0);
    }
    return this;
  }
  insert(e) {
    return e && this._insert(e, this.data.height - 1), this;
  }
  clear() {
    return this.data = Ci([]), this;
  }
  remove(e, r) {
    if (!e) return this;
    let s = this.data;
    const u = this.toBBox(e), l = [], f = [];
    let h, p, d;
    for (; s || l.length; ) {
      if (s || (s = l.pop(), p = l[l.length - 1], h = f.pop(), d = !0), s.leaf) {
        const v = o2(e, s.children, r);
        if (v !== -1)
          return s.children.splice(v, 1), l.push(s), this._condense(l), this;
      }
      !d && !s.leaf && hu(s, u) ? (l.push(s), f.push(h), h = 0, p = s, s = s.children[0]) : p ? (h++, s = p.children[h], d = !1) : s = null;
    }
    return this;
  }
  toBBox(e) {
    return e;
  }
  compareMinX(e, r) {
    return e.minX - r.minX;
  }
  compareMinY(e, r) {
    return e.minY - r.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(e) {
    return this.data = e, this;
  }
  _all(e, r) {
    const s = [];
    for (; e; )
      e.leaf ? r.push(...e.children) : s.push(...e.children), e = s.pop();
    return r;
  }
  _build(e, r, s, u) {
    const l = s - r + 1;
    let f = this._maxEntries, h;
    if (l <= f)
      return h = Ci(e.slice(r, s + 1)), Ai(h, this.toBBox), h;
    u || (u = Math.ceil(Math.log(l) / Math.log(f)), f = Math.ceil(l / Math.pow(f, u - 1))), h = Ci([]), h.leaf = !1, h.height = u;
    const p = Math.ceil(l / f), d = p * Math.ceil(Math.sqrt(f));
    sf(e, r, s, d, this.compareMinX);
    for (let v = r; v <= s; v += d) {
      const _ = Math.min(v + d - 1, s);
      sf(e, v, _, p, this.compareMinY);
      for (let x = v; x <= _; x += p) {
        const k = Math.min(x + p - 1, _);
        h.children.push(this._build(e, x, k, u - 1));
      }
    }
    return Ai(h, this.toBBox), h;
  }
  _chooseSubtree(e, r, s, u) {
    for (; u.push(r), !(r.leaf || u.length - 1 === s); ) {
      let l = 1 / 0, f = 1 / 0, h;
      for (let p = 0; p < r.children.length; p++) {
        const d = r.children[p], v = cu(d), _ = c2(e, d) - v;
        _ < f ? (f = _, l = v < l ? v : l, h = d) : _ === f && v < l && (l = v, h = d);
      }
      r = h || r.children[0];
    }
    return r;
  }
  _insert(e, r, s) {
    const u = s ? e : this.toBBox(e), l = [], f = this._chooseSubtree(u, this.data, r, l);
    for (f.children.push(e), Ss(f, u); r >= 0 && l[r].children.length > this._maxEntries; )
      this._split(l, r), r--;
    this._adjustParentBBoxes(u, l, r);
  }
  // split overflowed node into two
  _split(e, r) {
    const s = e[r], u = s.children.length, l = this._minEntries;
    this._chooseSplitAxis(s, l, u);
    const f = this._chooseSplitIndex(s, l, u), h = Ci(s.children.splice(f, s.children.length - f));
    h.height = s.height, h.leaf = s.leaf, Ai(s, this.toBBox), Ai(h, this.toBBox), r ? e[r - 1].children.push(h) : this._splitRoot(s, h);
  }
  _splitRoot(e, r) {
    this.data = Ci([e, r]), this.data.height = e.height + 1, this.data.leaf = !1, Ai(this.data, this.toBBox);
  }
  _chooseSplitIndex(e, r, s) {
    let u, l = 1 / 0, f = 1 / 0;
    for (let h = r; h <= s - r; h++) {
      const p = ks(e, 0, h, this.toBBox), d = ks(e, h, s, this.toBBox), v = h2(p, d), _ = cu(p) + cu(d);
      v < l ? (l = v, u = h, f = _ < f ? _ : f) : v === l && _ < f && (f = _, u = h);
    }
    return u || s - r;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(e, r, s) {
    const u = e.leaf ? this.compareMinX : u2, l = e.leaf ? this.compareMinY : l2, f = this._allDistMargin(e, r, s, u), h = this._allDistMargin(e, r, s, l);
    f < h && e.children.sort(u);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(e, r, s, u) {
    e.children.sort(u);
    const l = this.toBBox, f = ks(e, 0, r, l), h = ks(e, s - r, s, l);
    let p = ka(f) + ka(h);
    for (let d = r; d < s - r; d++) {
      const v = e.children[d];
      Ss(f, e.leaf ? l(v) : v), p += ka(f);
    }
    for (let d = s - r - 1; d >= r; d--) {
      const v = e.children[d];
      Ss(h, e.leaf ? l(v) : v), p += ka(h);
    }
    return p;
  }
  _adjustParentBBoxes(e, r, s) {
    for (let u = s; u >= 0; u--)
      Ss(r[u], e);
  }
  _condense(e) {
    for (let r = e.length - 1, s; r >= 0; r--)
      e[r].children.length === 0 ? r > 0 ? (s = e[r - 1].children, s.splice(s.indexOf(e[r]), 1)) : this.clear() : Ai(e[r], this.toBBox);
  }
};
function o2(t, e, r) {
  if (!r) return e.indexOf(t);
  for (let s = 0; s < e.length; s++)
    if (r(t, e[s])) return s;
  return -1;
}
function Ai(t, e) {
  ks(t, 0, t.children.length, e, t);
}
function ks(t, e, r, s, u) {
  u || (u = Ci(null)), u.minX = 1 / 0, u.minY = 1 / 0, u.maxX = -1 / 0, u.maxY = -1 / 0;
  for (let l = e; l < r; l++) {
    const f = t.children[l];
    Ss(u, t.leaf ? s(f) : f);
  }
  return u;
}
function Ss(t, e) {
  return t.minX = Math.min(t.minX, e.minX), t.minY = Math.min(t.minY, e.minY), t.maxX = Math.max(t.maxX, e.maxX), t.maxY = Math.max(t.maxY, e.maxY), t;
}
function u2(t, e) {
  return t.minX - e.minX;
}
function l2(t, e) {
  return t.minY - e.minY;
}
function cu(t) {
  return (t.maxX - t.minX) * (t.maxY - t.minY);
}
function ka(t) {
  return t.maxX - t.minX + (t.maxY - t.minY);
}
function c2(t, e) {
  return (Math.max(e.maxX, t.maxX) - Math.min(e.minX, t.minX)) * (Math.max(e.maxY, t.maxY) - Math.min(e.minY, t.minY));
}
function h2(t, e) {
  const r = Math.max(t.minX, e.minX), s = Math.max(t.minY, e.minY), u = Math.min(t.maxX, e.maxX), l = Math.min(t.maxY, e.maxY);
  return Math.max(0, u - r) * Math.max(0, l - s);
}
function hu(t, e) {
  return t.minX <= e.minX && t.minY <= e.minY && e.maxX <= t.maxX && e.maxY <= t.maxY;
}
function Sa(t, e) {
  return e.minX <= t.maxX && e.minY <= t.maxY && e.maxX >= t.minX && e.maxY >= t.minY;
}
function Ci(t) {
  return {
    children: t,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0
  };
}
function sf(t, e, r, s, u) {
  const l = [e, r];
  for (; l.length; ) {
    if (r = l.pop(), e = l.pop(), r - e <= s) continue;
    const f = e + Math.ceil((r - e) / s / 2) * s;
    s2(t, f, e, r, u), l.push(e, f, f, r);
  }
}
function f2(t) {
  return _k(
    t,
    (e, r) => e + g2(r),
    0
  );
}
function g2(t) {
  let e = 0, r;
  switch (t.type) {
    case "Polygon":
      return af(t.coordinates);
    case "MultiPolygon":
      for (r = 0; r < t.coordinates.length; r++)
        e += af(t.coordinates[r]);
      return e;
    case "Point":
    case "MultiPoint":
    case "LineString":
    case "MultiLineString":
      return 0;
  }
  return 0;
}
function af(t) {
  let e = 0;
  if (t && t.length > 0) {
    e += Math.abs(of(t[0]));
    for (let r = 1; r < t.length; r++)
      e -= Math.abs(of(t[r]));
  }
  return e;
}
var d2 = ot * ot / 2, fu = Math.PI / 180;
function of(t) {
  const e = t.length - 1;
  if (e <= 2) return 0;
  let r = 0, s = 0;
  for (; s < e; ) {
    const u = t[s], l = t[s + 1 === e ? 0 : s + 1], f = t[s + 2 >= e ? (s + 2) % e : s + 2], h = u[0] * fu, p = l[1] * fu, d = f[0] * fu;
    r += (d - h) * Math.sin(p), s++;
  }
  return r * d2;
}
const lr = 11102230246251565e-32, mt = 134217729, p2 = (3 + 8 * lr) * lr;
function gu(t, e, r, s, u) {
  let l, f, h, p, d = e[0], v = s[0], _ = 0, x = 0;
  v > d == v > -d ? (l = d, d = e[++_]) : (l = v, v = s[++x]);
  let k = 0;
  if (_ < t && x < r)
    for (v > d == v > -d ? (f = d + l, h = l - (f - d), d = e[++_]) : (f = v + l, h = l - (f - v), v = s[++x]), l = f, h !== 0 && (u[k++] = h); _ < t && x < r; )
      v > d == v > -d ? (f = l + d, p = f - l, h = l - (f - p) + (d - p), d = e[++_]) : (f = l + v, p = f - l, h = l - (f - p) + (v - p), v = s[++x]), l = f, h !== 0 && (u[k++] = h);
  for (; _ < t; )
    f = l + d, p = f - l, h = l - (f - p) + (d - p), d = e[++_], l = f, h !== 0 && (u[k++] = h);
  for (; x < r; )
    f = l + v, p = f - l, h = l - (f - p) + (v - p), v = s[++x], l = f, h !== 0 && (u[k++] = h);
  return (l !== 0 || k === 0) && (u[k++] = l), k;
}
function m2(t, e) {
  let r = e[0];
  for (let s = 1; s < t; s++) r += e[s];
  return r;
}
function sa(t) {
  return new Float64Array(t);
}
const v2 = (3 + 16 * lr) * lr, y2 = (2 + 12 * lr) * lr, _2 = (9 + 64 * lr) * lr * lr, Ti = sa(4), uf = sa(8), lf = sa(12), cf = sa(16), St = sa(4);
function E2(t, e, r, s, u, l, f) {
  let h, p, d, v, _, x, k, M, R, C, I, T, Y, $, J, q, W, E;
  const S = t - u, b = r - u, O = e - l, P = s - l;
  $ = S * P, x = mt * S, k = x - (x - S), M = S - k, x = mt * P, R = x - (x - P), C = P - R, J = M * C - ($ - k * R - M * R - k * C), q = O * b, x = mt * O, k = x - (x - O), M = O - k, x = mt * b, R = x - (x - b), C = b - R, W = M * C - (q - k * R - M * R - k * C), I = J - W, _ = J - I, Ti[0] = J - (I + _) + (_ - W), T = $ + I, _ = T - $, Y = $ - (T - _) + (I - _), I = Y - q, _ = Y - I, Ti[1] = Y - (I + _) + (_ - q), E = T + I, _ = E - T, Ti[2] = T - (E - _) + (I - _), Ti[3] = E;
  let F = m2(4, Ti), D = y2 * f;
  if (F >= D || -F >= D || (_ = t - S, h = t - (S + _) + (_ - u), _ = r - b, d = r - (b + _) + (_ - u), _ = e - O, p = e - (O + _) + (_ - l), _ = s - P, v = s - (P + _) + (_ - l), h === 0 && p === 0 && d === 0 && v === 0) || (D = _2 * f + p2 * Math.abs(F), F += S * v + P * h - (O * d + b * p), F >= D || -F >= D)) return F;
  $ = h * P, x = mt * h, k = x - (x - h), M = h - k, x = mt * P, R = x - (x - P), C = P - R, J = M * C - ($ - k * R - M * R - k * C), q = p * b, x = mt * p, k = x - (x - p), M = p - k, x = mt * b, R = x - (x - b), C = b - R, W = M * C - (q - k * R - M * R - k * C), I = J - W, _ = J - I, St[0] = J - (I + _) + (_ - W), T = $ + I, _ = T - $, Y = $ - (T - _) + (I - _), I = Y - q, _ = Y - I, St[1] = Y - (I + _) + (_ - q), E = T + I, _ = E - T, St[2] = T - (E - _) + (I - _), St[3] = E;
  const L = gu(4, Ti, 4, St, uf);
  $ = S * v, x = mt * S, k = x - (x - S), M = S - k, x = mt * v, R = x - (x - v), C = v - R, J = M * C - ($ - k * R - M * R - k * C), q = O * d, x = mt * O, k = x - (x - O), M = O - k, x = mt * d, R = x - (x - d), C = d - R, W = M * C - (q - k * R - M * R - k * C), I = J - W, _ = J - I, St[0] = J - (I + _) + (_ - W), T = $ + I, _ = T - $, Y = $ - (T - _) + (I - _), I = Y - q, _ = Y - I, St[1] = Y - (I + _) + (_ - q), E = T + I, _ = E - T, St[2] = T - (E - _) + (I - _), St[3] = E;
  const B = gu(L, uf, 4, St, lf);
  $ = h * v, x = mt * h, k = x - (x - h), M = h - k, x = mt * v, R = x - (x - v), C = v - R, J = M * C - ($ - k * R - M * R - k * C), q = p * d, x = mt * p, k = x - (x - p), M = p - k, x = mt * d, R = x - (x - d), C = d - R, W = M * C - (q - k * R - M * R - k * C), I = J - W, _ = J - I, St[0] = J - (I + _) + (_ - W), T = $ + I, _ = T - $, Y = $ - (T - _) + (I - _), I = Y - q, _ = Y - I, St[1] = Y - (I + _) + (_ - q), E = T + I, _ = E - T, St[2] = T - (E - _) + (I - _), St[3] = E;
  const U = gu(B, lf, 4, St, cf);
  return cf[U - 1];
}
function x2(t, e, r, s, u, l) {
  const f = (e - l) * (r - u), h = (t - u) * (s - l), p = f - h, d = Math.abs(f + h);
  return Math.abs(p) >= v2 * d ? p : -E2(t, e, r, s, u, l, d);
}
function w2(t, e) {
  var r, s, u = 0, l, f, h, p, d, v, _, x = t[0], k = t[1], M = e.length;
  for (r = 0; r < M; r++) {
    s = 0;
    var R = e[r], C = R.length - 1;
    if (v = R[0], v[0] !== R[C][0] && v[1] !== R[C][1])
      throw new Error("First and last coordinates in a ring must be the same");
    for (f = v[0] - x, h = v[1] - k, s; s < C; s++) {
      if (_ = R[s + 1], p = _[0] - x, d = _[1] - k, h === 0 && d === 0) {
        if (p <= 0 && f >= 0 || f <= 0 && p >= 0)
          return 0;
      } else if (d >= 0 && h <= 0 || d <= 0 && h >= 0) {
        if (l = x2(f, p, h, d, 0, 0), l === 0)
          return 0;
        (l > 0 && d > 0 && h <= 0 || l < 0 && d <= 0 && h > 0) && u++;
      }
      v = _, h = d, f = p;
    }
  }
  return u % 2 !== 0;
}
function ii(t, e, r = {}) {
  if (!t)
    throw new Error("point is required");
  if (!e)
    throw new Error("polygon is required");
  const s = tt(t), u = ra(e), l = u.type, f = e.bbox;
  let h = u.coordinates;
  if (f && k2(s, f) === !1)
    return !1;
  l === "Polygon" && (h = [h]);
  let p = !1;
  for (var d = 0; d < h.length; ++d) {
    const v = w2(s, h[d]);
    if (v === 0) return !r.ignoreBoundary;
    v && (p = !0);
  }
  return p;
}
function k2(t, e) {
  return e[0] <= t[0] && e[1] <= t[1] && e[2] >= t[0] && e[3] >= t[1];
}
function S2(t, e) {
  if (t.geometry.type !== "Polygon")
    throw new Error("The input feature must be a Polygon");
  for (var r = t.geometry.coordinates, s = [], u = {}, l = [], f = 0; f < r.length; f++)
    for (var h = 0; h < r[f].length - 1; h++)
      l.push(k(f, h));
  var p = new nc();
  p.load(l);
  for (var d = 0; d < r.length; d++)
    for (var v = 0; v < r[d].length - 1; v++) {
      var _ = p.search(k(d, v));
      _.forEach(function(M) {
        var R = M.ring, C = M.edge;
        x(d, v, R, C);
      });
    }
  return s;
  function x(M, R, C, I) {
    var T = r[M][R], Y = r[M][R + 1], $ = r[C][I], J = r[C][I + 1], q = M2(T, Y, $, J);
    if (q !== null) {
      var W, E;
      if (Y[0] !== T[0] ? W = (q[0] - T[0]) / (Y[0] - T[0]) : W = (q[1] - T[1]) / (Y[1] - T[1]), J[0] !== $[0] ? E = (q[0] - $[0]) / (J[0] - $[0]) : E = (q[1] - $[1]) / (J[1] - $[1]), !(W >= 1 || W <= 0 || E >= 1 || E <= 0)) {
        var S = q, b = !u[S.toString()];
        b && (u[S.toString()] = !0), e && s.push(
          e(
            q,
            M,
            R,
            T,
            Y,
            W,
            C,
            I,
            $,
            J,
            E,
            b
          )
        );
      }
    }
  }
  function k(M, R) {
    var C = r[M][R], I = r[M][R + 1], T, Y, $, J;
    return C[0] < I[0] ? (T = C[0], Y = I[0]) : (T = I[0], Y = C[0]), C[1] < I[1] ? ($ = C[1], J = I[1]) : ($ = I[1], J = C[1]), {
      minX: T,
      minY: $,
      maxX: Y,
      maxY: J,
      ring: M,
      edge: R
    };
  }
}
function M2(t, e, r, s) {
  if (Ms(t, r) || Ms(t, s) || Ms(e, r) || Ms(s, r))
    return null;
  var u = t[0], l = t[1], f = e[0], h = e[1], p = r[0], d = r[1], v = s[0], _ = s[1], x = (u - f) * (d - _) - (l - h) * (p - v);
  if (x === 0) return null;
  var k = ((u * h - l * f) * (p - v) - (u - f) * (p * _ - d * v)) / x, M = ((u * h - l * f) * (d - _) - (l - h) * (p * _ - d * v)) / x;
  return [k, M];
}
function Ms(t, e) {
  if (!t || !e || t.length !== e.length) return !1;
  for (var r = 0, s = t.length; r < s; r++)
    if (t[r] instanceof Array && e[r] instanceof Array) {
      if (!Ms(t[r], e[r])) return !1;
    } else if (t[r] !== e[r])
      return !1;
  return !0;
}
function I2(t) {
  if (t.type != "Feature")
    throw new Error("The input must a geojson object of type Feature");
  if (t.geometry === void 0 || t.geometry == null)
    throw new Error(
      "The input must a geojson object with a non-empty geometry"
    );
  if (t.geometry.type != "Polygon")
    throw new Error("The input must be a geojson Polygon");
  for (var e = t.geometry.coordinates.length, r = [], I = 0; I < e; I++) {
    var s = t.geometry.coordinates[I];
    Is(s[0], s[s.length - 1]) || s.push(s[0]);
    for (var u = 0; u < s.length - 1; u++)
      r.push(s[u]);
  }
  if (!A2(r))
    throw new Error(
      "The input polygon may not have duplicate vertices (except for the first and last vertex of each ring)"
    );
  var l = r.length, f = S2(
    t,
    function(ue, ie, oe, xe, Le, V, bn, Ie, he, N, Ce, De) {
      return [
        ue,
        ie,
        oe,
        xe,
        Le,
        V,
        bn,
        Ie,
        he,
        N,
        Ce,
        De
      ];
    }
  ), h = f.length;
  if (h == 0) {
    for (var q = [], I = 0; I < e; I++)
      q.push(
        hr([t.geometry.coordinates[I]], {
          parent: -1,
          winding: b2(t.geometry.coordinates[I])
        })
      );
    let ue = nt(q);
    return j(ue), Z(ue), ue;
  }
  for (var p = [], d = [], I = 0; I < e; I++) {
    p.push([]);
    for (var u = 0; u < t.geometry.coordinates[I].length - 1; u++)
      p[I].push([
        new hf(
          t.geometry.coordinates[I][Oi(u + 1, t.geometry.coordinates[I].length - 1)],
          1,
          [I, u],
          [I, Oi(u + 1, t.geometry.coordinates[I].length - 1)],
          void 0
        )
      ]), d.push(
        new ff(
          t.geometry.coordinates[I][u],
          [I, Oi(u - 1, t.geometry.coordinates[I].length - 1)],
          [I, u],
          void 0,
          void 0,
          !1,
          !0
        )
      );
  }
  for (var I = 0; I < h; I++)
    p[f[I][1]][f[I][2]].push(
      new hf(
        f[I][0],
        f[I][5],
        [f[I][1], f[I][2]],
        [f[I][6], f[I][7]],
        void 0
      )
    ), f[I][11] && d.push(
      new ff(
        f[I][0],
        [f[I][1], f[I][2]],
        [f[I][6], f[I][7]],
        void 0,
        void 0,
        !0,
        !0
      )
    );
  for (var v = d.length, I = 0; I < p.length; I++)
    for (var u = 0; u < p[I].length; u++)
      p[I][u].sort(function(ie, oe) {
        return ie.param < oe.param ? -1 : 1;
      });
  for (var _ = [], I = 0; I < v; I++)
    _.push({
      minX: d[I].coord[0],
      minY: d[I].coord[1],
      maxX: d[I].coord[0],
      maxY: d[I].coord[1],
      index: I
    });
  var x = new nc();
  x.load(_);
  for (var I = 0; I < p.length; I++)
    for (var u = 0; u < p[I].length; u++)
      for (var k = 0; k < p[I][u].length; k++) {
        let ie;
        k == p[I][u].length - 1 ? ie = p[I][Oi(u + 1, t.geometry.coordinates[I].length - 1)][0].coord : ie = p[I][u][k + 1].coord;
        var M = x.search({
          minX: ie[0],
          minY: ie[1],
          maxX: ie[0],
          maxY: ie[1]
        })[0];
        p[I][u][k].nxtIsectAlongEdgeIn = M.index;
      }
  for (var I = 0; I < p.length; I++)
    for (var u = 0; u < p[I].length; u++)
      for (var k = 0; k < p[I][u].length; k++) {
        let oe = p[I][u][k].coord;
        var M = x.search({
          minX: oe[0],
          minY: oe[1],
          maxX: oe[0],
          maxY: oe[1]
        })[0], R = M.index;
        R < l ? d[R].nxtIsectAlongRingAndEdge2 = p[I][u][k].nxtIsectAlongEdgeIn : Is(
          d[R].ringAndEdge1,
          p[I][u][k].ringAndEdgeIn
        ) ? d[R].nxtIsectAlongRingAndEdge1 = p[I][u][k].nxtIsectAlongEdgeIn : d[R].nxtIsectAlongRingAndEdge2 = p[I][u][k].nxtIsectAlongEdgeIn;
      }
  for (var C = [], I = 0, u = 0; u < e; u++) {
    for (var T = I, k = 0; k < t.geometry.coordinates[u].length - 1; k++)
      d[I].coord[0] < d[T].coord[0] && (T = I), I++;
    for (var Y = d[T].nxtIsectAlongRingAndEdge2, k = 0; k < d.length; k++)
      if (d[k].nxtIsectAlongRingAndEdge1 == T || d[k].nxtIsectAlongRingAndEdge2 == T) {
        var $ = k;
        break;
      }
    var J = za(
      [
        d[$].coord,
        d[T].coord,
        d[Y].coord
      ],
      !0
    ) ? 1 : -1;
    C.push({ isect: T, parent: -1, winding: J });
  }
  C.sort(function(le, ue) {
    return d[le.isect].coord > d[ue.isect].coord ? -1 : 1;
  });
  for (var q = []; C.length > 0; ) {
    var W = C.pop(), E = W.isect, S = W.parent, b = W.winding, O = q.length, P = [d[E].coord], F = E;
    if (d[E].ringAndEdge1Walkable)
      var D = d[E].ringAndEdge1, L = d[E].nxtIsectAlongRingAndEdge1;
    else
      var D = d[E].ringAndEdge2, L = d[E].nxtIsectAlongRingAndEdge2;
    for (; !Is(d[E].coord, d[L].coord); ) {
      P.push(d[L].coord);
      for (var B = void 0, I = 0; I < C.length; I++)
        if (C[I].isect == L) {
          B = I;
          break;
        }
      if (B != null && C.splice(B, 1), Is(D, d[L].ringAndEdge1)) {
        if (D = d[L].ringAndEdge2, d[L].ringAndEdge2Walkable = !1, d[L].ringAndEdge1Walkable) {
          var U = {
            isect: L
          };
          za(
            [
              d[F].coord,
              d[L].coord,
              d[d[L].nxtIsectAlongRingAndEdge2].coord
            ],
            b == 1
          ) ? (U.parent = S, U.winding = -b) : (U.parent = O, U.winding = b), C.push(U);
        }
        F = L, L = d[L].nxtIsectAlongRingAndEdge2;
      } else {
        if (D = d[L].ringAndEdge1, d[L].ringAndEdge1Walkable = !1, d[L].ringAndEdge2Walkable) {
          var U = {
            isect: L
          };
          za(
            [
              d[F].coord,
              d[L].coord,
              d[d[L].nxtIsectAlongRingAndEdge1].coord
            ],
            b == 1
          ) ? (U.parent = S, U.winding = -b) : (U.parent = O, U.winding = b), C.push(U);
        }
        F = L, L = d[L].nxtIsectAlongRingAndEdge1;
      }
    }
    P.push(d[L].coord), q.push(
      hr([P], {
        index: O,
        parent: S,
        winding: b,
        netWinding: void 0
      })
    );
  }
  let H = nt(q);
  j(H), Z(H);
  function j(le) {
    for (var ue = [], ie = 0; ie < le.features.length; ie++)
      le.features[ie].properties.parent == -1 && ue.push(ie);
    if (ue.length > 1)
      for (var ie = 0; ie < ue.length; ie++) {
        for (var oe = -1, xe = 1 / 0, Le = 0; Le < le.features.length; Le++)
          ue[ie] != Le && ii(
            le.features[ue[ie]].geometry.coordinates[0][0],
            le.features[Le],
            { ignoreBoundary: !0 }
          ) && f2(le.features[Le]) < xe && (oe = Le);
        le.features[ue[ie]].properties.parent = oe;
      }
  }
  function Z(le) {
    for (var ue = 0; ue < le.features.length; ue++)
      if (le.features[ue].properties.parent == -1) {
        var ie = le.features[ue].properties.winding;
        le.features[ue].properties.netWinding = ie, ne(le, ue, ie);
      }
  }
  function ne(le, ue, ie) {
    for (var oe = 0; oe < le.features.length; oe++)
      if (le.features[oe].properties.parent == ue) {
        var xe = ie + le.features[oe].properties.winding;
        le.features[oe].properties.netWinding = xe, ne(le, oe, xe);
      }
  }
  return H;
}
var hf = class {
  // The next intersection when following the incomming edge (so not when following ringAndEdgeOut!)
  // Constructor for (ring- or intersection-) pseudo-vertices.
  constructor(t, e, r, s, u) {
    this.coord = t, this.param = e, this.ringAndEdgeIn = r, this.ringAndEdgeOut = s, this.nxtIsectAlongEdgeIn = u;
  }
}, ff = class {
  // Constructor for an intersection. There are two intersection-pseudo-vertices per self-intersection and one ring-pseudo-vertex per ring-vertex-intersection. Their labels 1 and 2 are not assigned a particular meaning but are permanent once given.
  constructor(t, e, r, s, u, l, f) {
    this.coord = t, this.ringAndEdge1 = e, this.ringAndEdge2 = r, this.nxtIsectAlongRingAndEdge1 = s, this.nxtIsectAlongRingAndEdge2 = u, this.ringAndEdge1Walkable = l, this.ringAndEdge2Walkable = f;
  }
};
function za(t, e) {
  if (typeof e > "u" && (e = !0), t.length != 3)
    throw new Error("This function requires an array of three points [x,y]");
  var r = (t[1][0] - t[0][0]) * (t[2][1] - t[0][1]) - (t[1][1] - t[0][1]) * (t[2][0] - t[0][0]);
  return r >= 0 == e;
}
function b2(t) {
  for (var e = 0, r = 0; r < t.length - 1; r++)
    t[r][0] < t[e][0] && (e = r);
  if (za(
    [
      t[Oi(e - 1, t.length - 1)],
      t[e],
      t[Oi(e + 1, t.length - 1)]
    ],
    !0
  ))
    var s = 1;
  else
    var s = -1;
  return s;
}
function Is(t, e) {
  if (!t || !e || t.length != e.length) return !1;
  for (var r = 0, s = t.length; r < s; r++)
    if (t[r] instanceof Array && e[r] instanceof Array) {
      if (!Is(t[r], e[r])) return !1;
    } else if (t[r] != e[r])
      return !1;
  return !0;
}
function Oi(t, e) {
  return (t % e + e) % e;
}
function A2(t) {
  for (var e = {}, r = 1, s = 0, u = t.length; s < u; ++s) {
    if (Object.prototype.hasOwnProperty.call(e, t[s].toString())) {
      r = 0;
      break;
    }
    e[t[s].toString()] = 1;
  }
  return r;
}
function T2(t) {
  var e = [];
  return Pr(t, function(r) {
    r.geometry.type === "Polygon" && $n(I2(r), function(s) {
      e.push(hr(s.geometry.coordinates, r.properties));
    });
  }), nt(e);
}
var L2 = T2;
class C2 extends yr {
  mode = "polygon";
  shape = "polygon";
  lineDrawer = new tc(this.gm, { snappingMarkers: "first", targetShape: "polygon" });
  eventHandlers = {
    [`${ae}:draw`]: this.forwardLineDrawerEvent.bind(this),
    mousemove: this.onMouseMove.bind(this)
  };
  onEndAction() {
    this.lineDrawer.endAction();
  }
  onStartAction() {
    this.lineDrawer.startAction(), this.lineDrawer.on("firstMarkerClick", this.polygonFinished.bind(this));
  }
  onMouseMove(e) {
    return Ke(e) ? (this.lineDrawer.featureData || this.fireMarkerPointerUpdateEvent(), { next: !0 }) : { next: !0 };
  }
  polygonFinished(e) {
    if (this.lineDrawer.endShape(), e.shapeCoordinates.length < 3)
      return;
    const r = this.fixShapeGeoJson(ec(e.geoJson));
    r && this.gm.features.createFeature({
      shapeGeoJson: {
        ...r,
        properties: {
          // we don't need to have collected properties for a new polygon
          // ...geoJsonPolygon.properties,
          shape: this.shape
        }
      },
      sourceName: K.main
    });
  }
  fixShapeGeoJson(e) {
    try {
      return Ak(i2(L2(e))).features[0];
    } catch {
      return null;
    }
  }
}
class N2 extends yr {
  mode = "rectangle";
  shape = "rectangle";
  startLngLat = null;
  eventHandlers = {
    mousemove: this.onMouseMove.bind(this),
    click: this.onMouseClick.bind(this)
  };
  throttledMethods = ci(
    {
      updateFeaturePosition: this.updateFeaturePosition
    },
    this,
    this.gm.options.settings.throttlingDelay
  );
  onStartAction() {
    this.gm.markerPointer.enable();
  }
  onEndAction() {
    this.removeTmpFeature(), this.startLngLat = null, this.gm.markerPointer.disable(), this.fireFinishEvent();
  }
  onMouseClick(e) {
    if (!Ke(e, { warning: !0 }))
      return { next: !1 };
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    if (this.startLngLat) {
      const s = this.getFeatureGeoJson(Li(this.startLngLat, r));
      this.fireBeforeFeatureCreate({ geoJsonFeatures: [s] }), this.flags.featureCreateAllowed && this.finishShape(r);
    } else {
      const s = this.getFeatureGeoJson(Li(r, r));
      if (this.fireBeforeFeatureCreate({ geoJsonFeatures: [s] }), this.flags.featureCreateAllowed) {
        const u = this.startShape(r);
        if (u) {
          const l = this.getControlMarkerData(["geometry", "coordinates", 4]);
          this.fireStartEvent(u, l);
        }
      }
    }
    return { next: !1 };
  }
  onMouseMove(e) {
    if (!Ke(e, { warning: !0 }))
      return { next: !1 };
    if (!this.startLngLat)
      return this.fireMarkerPointerUpdateEvent(), { next: !1 };
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray(), s = Li(this.startLngLat, r), u = this.getFeatureGeoJson(s);
    return this.fireBeforeFeatureCreate({ geoJsonFeatures: [u] }), this.flags.featureCreateAllowed && this.throttledMethods.updateFeaturePosition(s), { next: !1 };
  }
  startShape(e) {
    this.startLngLat = e;
    const r = Li(this.startLngLat, this.startLngLat);
    return this.featureData = this.createFeature(r), this.featureData;
  }
  finishShape(e) {
    if (this.startLngLat) {
      const r = Li(this.startLngLat, e);
      this.throttledMethods.updateFeaturePosition(r);
    }
    this.featureData && (this.isFeatureGeoJsonValid() ? this.saveFeature() : this.removeTmpFeature()), this.startLngLat = null, this.fireFinishEvent();
  }
  createFeature(e) {
    return this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson(e),
      sourceName: K.temporary
    });
  }
  isFeatureGeoJsonValid() {
    return this.featureData ? Xl(this.featureData.getGeoJson()) : !1;
  }
  getFeatureGeoJson(e) {
    return {
      ...ju(
        [e[0], e[1]],
        [e[2], e[3]]
      ),
      properties: {
        shape: this.shape
      }
    };
  }
  updateFeaturePosition(e) {
    if (!this.featureData)
      return;
    const r = ju(
      [e[0], e[1]],
      [e[2], e[3]]
    );
    this.featureData.updateGeoJsonGeometry(r.geometry);
    const s = this.getControlMarkerData(["geometry", "coordinates", 4]);
    this.fireUpdateEvent(this.featureData, s);
  }
  getControlMarkerData(e) {
    const r = this.gm.markerPointer.marker;
    return r ? {
      type: "dom",
      instance: r,
      position: {
        coordinate: r.getLngLat(),
        path: e
      }
    } : null;
  }
  fireStartEvent(e, r) {
    const s = {
      name: `${ae}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: this.shape,
      variant: null,
      action: "start",
      featureData: e,
      markerData: r
    };
    this.gm.events.fire(`${ae}:draw`, s);
  }
  fireUpdateEvent(e, r) {
    const s = {
      name: `${ae}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: this.shape,
      variant: null,
      action: "update",
      featureData: e,
      markerData: r
    };
    this.gm.events.fire(`${ae}:draw`, s);
  }
  fireFinishEvent() {
    const e = {
      name: `${ae}:draw:shape`,
      level: "system",
      actionType: "draw",
      mode: this.shape,
      variant: null,
      action: "finish"
    };
    this.gm.events.fire(`${ae}:draw`, e);
  }
}
class P2 extends yr {
  mode = "text_marker";
  shape = "text_marker";
  textarea = null;
  eventHandlers = {
    click: this.onMouseClick.bind(this),
    mousemove: this.onMouseMove.bind(this)
  };
  onStartAction() {
    this.gm.markerPointer.enable({ invisibleMarker: !0 });
  }
  onEndAction() {
    this.removeTextarea(), this.removeTmpFeature(), this.featureData = null, this.gm.markerPointer.disable(), this.fireMarkerPointerFinishEvent();
  }
  onMouseMove(e) {
    return Ke(e, { warning: !0 }) ? (this.fireMarkerPointerUpdateEvent(), { next: !0 }) : { next: !0 };
  }
  onMouseClick(e) {
    if (!Ke(e, { warning: !0 }))
      return { next: !0 };
    if (this.textarea)
      this.endShape(), this.gm.markerPointer.enable({ invisibleMarker: !0, lngLat: e.lngLat.toArray() }), this.fireMarkerPointerUpdateEvent();
    else {
      const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
      this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(r)] }), this.flags.featureCreateAllowed && (this.featureData = this.createFeature(r), this.gm.markerPointer.disable(), this.fireMarkerPointerFinishEvent());
    }
    return { next: !1 };
  }
  createFeature(e) {
    const r = this.gm.mapAdapter.project(e);
    return this.createTextarea(r), this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson(e),
      sourceName: K.temporary
    });
  }
  endShape() {
    const e = this.textarea?.value || "";
    this.removeTextarea(), e.trim() ? (this.updateFeatureSource(e), this.saveFeature()) : this.removeTmpFeature();
  }
  createTextarea(e) {
    this.textarea = document.createElement("textarea"), this.textarea.style.position = "absolute", this.textarea.style.left = `${e[0]}px`, this.textarea.style.top = `${e[1]}px`, this.textarea.style.opacity = "0.7", this.gm.mapAdapter.getContainer().appendChild(this.textarea), this.textarea.focus();
  }
  removeTextarea() {
    this.textarea?.remove(), this.textarea = null;
  }
  getFeatureGeoJson(e) {
    return {
      type: "Feature",
      properties: {
        shape: this.shape,
        text: ""
      },
      geometry: {
        type: "Point",
        coordinates: e
      }
    };
  }
  updateFeatureSource(e) {
    this.featureData && this.featureData._updateAllProperties({ shape: this.shape, text: e });
  }
}
class O2 extends Ql {
  mode = "ellipse";
  shape = "ellipse";
  xSemiAxisPoint = null;
  xSemiAxisLngLat = null;
  throttledMethods = ci(
    {
      updateFeatureGeoJson: this.updateFeatureGeoJson
    },
    this,
    this.gm.options.settings.throttlingDelay
  );
  onMouseClick(e) {
    if (!Ke(e))
      return { next: !0 };
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    if (this.circleCenterLngLat && this.xSemiAxisLngLat)
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [
          this.getEllipseGeoJson(this.circleCenterLngLat, this.xSemiAxisLngLat, r)
        ]
      }), this.flags.featureCreateAllowed && (this.saveEllipseFeature(r), this.circleCenterLngLat = null, this.circleCenterPoint = null, this.xSemiAxisPoint = null, this.xSemiAxisLngLat = null, this.fireFinishEvent());
    else if (this.circleCenterLngLat)
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [this.getEllipseGeoJson(this.circleCenterLngLat, r)]
      }), this.flags.featureCreateAllowed && (this.xSemiAxisLngLat = r, this.xSemiAxisPoint = this.gm.mapAdapter.project(this.circleCenterLngLat));
    else if (this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(r)] }), this.flags.featureCreateAllowed) {
      this.circleCenterLngLat = r, this.circleCenterPoint = this.gm.mapAdapter.project(this.circleCenterLngLat), this.featureData = this.createFeature();
      const s = this.getControlMarkerData();
      this.featureData && s && this.fireStartEvent(this.featureData, s);
    }
    return { next: !1 };
  }
  onMouseMove() {
    if (this.circleCenterLngLat && this.gm.markerPointer.marker) {
      const e = this.gm.markerPointer.marker.getLngLat();
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [
          this.xSemiAxisLngLat ? this.getEllipseGeoJson(this.circleCenterLngLat, this.xSemiAxisLngLat, e) : this.getEllipseGeoJson(this.circleCenterLngLat, e)
        ]
      }), this.flags.featureCreateAllowed && this.throttledMethods.updateFeatureGeoJson(e);
    }
    return this.circleCenterLngLat || this.fireMarkerPointerUpdateEvent(), { next: !1 };
  }
  updateFeatureGeoJson(e) {
    if (!this.featureData || !this.circleCenterLngLat)
      return;
    const r = this.xSemiAxisLngLat ? this.getEllipseGeoJson(this.circleCenterLngLat, this.xSemiAxisLngLat, e) : this.getEllipseGeoJson(this.circleCenterLngLat, e);
    this.featureData.updateGeoJsonGeometry(r.geometry), this.featureData._updateAllProperties({
      shape: r.properties.shape
    });
    const s = this.getControlMarkerData();
    s && this.fireUpdateEvent(this.featureData, s);
  }
  saveEllipseFeature(e) {
    if (!(!this.circleCenterLngLat || !this.xSemiAxisLngLat) && this.featureData) {
      const r = this.gm.markerPointer.marker?.getLngLat() || e;
      this.updateFeatureGeoJson(r);
      const { xSemiAxis: s, ySemiAxis: u, angle: l } = ef({
        center: this.circleCenterLngLat,
        xSemiAxisLngLat: this.xSemiAxisLngLat,
        rimLngLat: r
      });
      this.featureData.setShapeProperty("center", this.circleCenterLngLat), this.featureData.setShapeProperty("xSemiAxis", s), this.featureData.setShapeProperty("ySemiAxis", u), this.featureData.setShapeProperty("angle", l), this.isFeatureGeoJsonValid() ? this.saveFeature() : this.removeTmpFeature();
    }
  }
  isFeatureGeoJsonValid() {
    return this.featureData ? Xl(this.featureData.getGeoJson()) : !1;
  }
  getEllipseGeoJson(e, r, s) {
    const { xSemiAxis: u, ySemiAxis: l, angle: f } = ef({
      center: e,
      xSemiAxisLngLat: r,
      rimLngLat: s
    });
    return Co({ center: e, xSemiAxis: u, ySemiAxis: l, angle: f });
  }
}
const Ku = {
  marker: n2,
  ellipse: O2,
  circle: jk,
  circle_marker: Yk,
  text_marker: P2,
  line: t2,
  rectangle: N2,
  polygon: C2,
  freehand: null,
  custom_shape: null
}, R2 = (t, e) => Ku[e] ? new Ku[e](t) : (te.error(`Draw "${e}" is not available`), null), Qi = (t) => Mn(t) && t.actionType === "edit", D2 = (t) => Rd.includes(t), SI = (t) => gk.includes(t), F2 = (t) => Fd.includes(t), G2 = (t) => Bd.includes(t), B2 = (t) => Gd.includes(t), U2 = (t) => F2(t) || G2(t) || B2(t);
class z2 extends bo {
  eventHandlers = {
    [`${ae}:draw`]: this.handleDrawEvent.bind(this)
  };
  constructor(e, r) {
    super(e), r.attachEvents(this.eventHandlers);
  }
  handleDrawEvent(e) {
    if (!Kl(e))
      return { next: !0 };
    const r = `${e.actionType}__${e.mode}`;
    return e.action === "mode_start" ? (this.trackExclusiveModes(e), this.start(r, e), this.trackRelatedModes(e)) : e.action === "mode_end" && (this.trackRelatedModes(e), this.end(r)), { next: !0 };
  }
  start(e, r) {
    const s = R2(this.gm, r.mode);
    s && (e in this.gm.actionInstances && te.error(`Action instance "${e}" already exists`), this.gm.actionInstances[e] = s, s.startAction());
  }
  end(e) {
    const r = this.gm.actionInstances[e];
    r instanceof yr ? (r.endAction(), delete this.gm.actionInstances[e]) : console.error(`Wrong action instance for draw event "${e}":`, r);
  }
}
class es extends Zl {
  actionType = "edit";
  featureData = null;
  cursorExcludedLayerIds = ["rectangle-line", "polygon-line", "circle-line"];
  layerEventHandlersData = [];
  startAction() {
    this.setEventsForLayers("mouseenter", this.setCursorToPointer.bind(this)), this.setEventsForLayers("mouseleave", this.setCursorToEmpty.bind(this)), super.startAction();
  }
  endAction() {
    this.clearEventsForLayers(), super.endAction();
  }
  setCursorToPointer() {
    this.flags.actionInProgress || this.gm.mapAdapter.setCursor("pointer");
  }
  setCursorToEmpty() {
    this.flags.actionInProgress || this.gm.mapAdapter.setCursor("");
  }
  getFeatureByMouseEvent({
    event: e,
    sourceNames: r
  }) {
    const s = this.gm.features.getFeatureByMouseEvent({
      event: e,
      sourceNames: r
    });
    return !s || s.getShapeProperty("disableEdit") === !0 ? null : s;
  }
  setEventsForLayers(e, r) {
    this.gm.features.layers.map((u) => u.id).filter(
      (u) => !this.cursorExcludedLayerIds.some((l) => u.includes(l))
    ).forEach((u) => {
      this.gm.mapAdapter.on(e, u, r), this.layerEventHandlersData.push({ eventName: e, layerId: u, callback: r });
    });
  }
  clearEventsForLayers() {
    this.layerEventHandlersData.forEach(({ eventName: e, layerId: r, callback: s }) => {
      this.gm.mapAdapter.off(e, r, s);
    }), this.layerEventHandlersData = [];
  }
  updateFeatureGeoJson({
    featureData: e,
    featureGeoJson: r,
    forceMode: s = void 0
  }) {
    return this.flags.featureUpdateAllowed ? (e.updateGeoJsonGeometry(r.geometry), Wi(e.getGeoJson().properties, r.properties) || e._updateAllProperties(r.properties), this.fireFeatureUpdatedEvent({
      sourceFeatures: [e],
      targetFeatures: [e],
      forceMode: s
    }), !0) : !1;
  }
  fireBeforeFeatureUpdate({
    features: e,
    geoJsonFeatures: r,
    forceMode: s = void 0
  }) {
    this.flags.featureUpdateAllowed = !0;
    const u = {
      name: `${ae}:feature:before_update`,
      level: "system",
      actionType: "edit",
      mode: s || this.mode,
      action: "before_update",
      features: e,
      geoJsonFeatures: r
    };
    this.gm.events.fire(`${ae}:${this.actionType}`, u);
  }
  fireFeatureUpdatedEvent({
    sourceFeatures: e,
    targetFeatures: r,
    markerData: s = void 0,
    forceMode: u = void 0
  }) {
    const l = {
      name: `${ae}:edit:feature_updated`,
      level: "system",
      actionType: "edit",
      action: "feature_updated",
      mode: u || this.mode,
      sourceFeatures: e,
      targetFeatures: r,
      markerData: s || null
    };
    this.gm.events.fire(`${ae}:edit`, l);
  }
  fireFeatureEditStartEvent({
    feature: e,
    forceMode: r = void 0
  }) {
    const s = {
      name: `${ae}:edit:feature_edit_start`,
      level: "system",
      actionType: "edit",
      action: "feature_edit_start",
      mode: r || this.mode,
      feature: e
    };
    this.gm.events.fire(`${ae}:edit`, s);
  }
  fireFeatureEditEndEvent({
    feature: e,
    forceMode: r = void 0
  }) {
    const s = {
      name: `${ae}:edit:feature_edit_end`,
      level: "system",
      actionType: "edit",
      action: "feature_edit_end",
      mode: r || this.mode,
      feature: e
    };
    this.gm.events.fire(`${ae}:edit`, s);
  }
  fireMarkerPointerUpdateEvent() {
    if (!this.gm.markerPointer.marker)
      return;
    const e = this.gm.markerPointer.marker, r = {
      name: `${ae}:draw:shape_with_data`,
      level: "system",
      variant: null,
      actionType: "draw",
      mode: this.getLineDrawerMode(),
      action: "update",
      markerData: {
        type: "dom",
        instance: e,
        position: {
          coordinate: e.getLngLat(),
          path: [-1]
        }
      },
      featureData: null
    };
    this.gm.events.fire(`${ae}:draw`, r);
  }
  forwardLineDrawerEvent(e) {
    if (!rp(e) || !["cut", "split"].includes(this.mode))
      return { next: !0 };
    if (e.action === "start" || e.action === "update") {
      const r = {
        name: `${ae}:draw:shape_with_data`,
        level: "system",
        actionType: "draw",
        mode: this.getLineDrawerMode(),
        variant: null,
        action: e.action,
        featureData: e.featureData,
        markerData: e.markerData
      };
      this.gm.events.fire(`${ae}:draw`, r);
    } else if (e.action === "finish" || e.action === "cancel") {
      const r = {
        name: `${ae}:draw:shape`,
        level: "system",
        actionType: "draw",
        mode: this.getLineDrawerMode(),
        variant: null,
        action: e.action
      };
      this.gm.events.fire(`${ae}:draw`, r);
    }
    return { next: !0 };
  }
  fireFeatureRemovedEvent(e) {
    if (Cr(e.shape, ir)) {
      const r = {
        name: `${ae}:edit:feature_removed`,
        level: "system",
        actionType: "edit",
        mode: e.shape,
        action: "feature_removed",
        featureData: e
      };
      this.gm.events.fire(`${ae}:edit`, r);
    }
  }
  getLineDrawerMode() {
    return this.mode === "cut" ? "polygon" : (this.mode === "split", "line");
  }
}
function q2(t, e = {}) {
  const r = sr(t), s = (r[0] + r[2]) / 2, u = (r[1] + r[3]) / 2;
  return wn([s, u], e.properties, e);
}
var qa = { exports: {} }, Y2 = qa.exports, gf;
function H2() {
  return gf || (gf = 1, (function(t, e) {
    (function(r, s) {
      t.exports = s();
    })(Y2, (function() {
      function r(o, n) {
        (n == null || n > o.length) && (n = o.length);
        for (var i = 0, a = Array(n); i < n; i++) a[i] = o[i];
        return a;
      }
      function s(o, n, i) {
        return n = v(n), (function(a, c) {
          if (c && (typeof c == "object" || typeof c == "function")) return c;
          if (c !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
          return (function(g) {
            if (g === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g;
          })(a);
        })(o, x() ? Reflect.construct(n, i || [], v(o).constructor) : n.apply(o, i));
      }
      function u(o, n) {
        if (!(o instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function l(o, n, i) {
        if (x()) return Reflect.construct.apply(null, arguments);
        var a = [null];
        a.push.apply(a, n);
        var c = new (o.bind.apply(o, a))();
        return i && k(c, i.prototype), c;
      }
      function f(o, n) {
        for (var i = 0; i < n.length; i++) {
          var a = n[i];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(o, C(a.key), a);
        }
      }
      function h(o, n, i) {
        return n && f(o.prototype, n), i && f(o, i), Object.defineProperty(o, "prototype", { writable: !1 }), o;
      }
      function p(o, n) {
        var i = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
        if (!i) {
          if (Array.isArray(o) || (i = I(o)) || n) {
            i && (o = i);
            var a = 0, c = function() {
            };
            return { s: c, n: function() {
              return a >= o.length ? { done: !0 } : { done: !1, value: o[a++] };
            }, e: function(w) {
              throw w;
            }, f: c };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var g, m = !0, y = !1;
        return { s: function() {
          i = i.call(o);
        }, n: function() {
          var w = i.next();
          return m = w.done, w;
        }, e: function(w) {
          y = !0, g = w;
        }, f: function() {
          try {
            m || i.return == null || i.return();
          } finally {
            if (y) throw g;
          }
        } };
      }
      function d() {
        return d = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(o, n, i) {
          var a = (function(g, m) {
            for (; !{}.hasOwnProperty.call(g, m) && (g = v(g)) !== null; ) ;
            return g;
          })(o, n);
          if (a) {
            var c = Object.getOwnPropertyDescriptor(a, n);
            return c.get ? c.get.call(arguments.length < 3 ? o : i) : c.value;
          }
        }, d.apply(null, arguments);
      }
      function v(o) {
        return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }, v(o);
      }
      function _(o, n) {
        if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
        o.prototype = Object.create(n && n.prototype, { constructor: { value: o, writable: !0, configurable: !0 } }), Object.defineProperty(o, "prototype", { writable: !1 }), n && k(o, n);
      }
      function x() {
        try {
          var o = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
          })));
        } catch {
        }
        return (x = function() {
          return !!o;
        })();
      }
      function k(o, n) {
        return k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, a) {
          return i.__proto__ = a, i;
        }, k(o, n);
      }
      function M(o, n, i, a) {
        var c = d(v(1 & a ? o.prototype : o), n, i);
        return 2 & a && typeof c == "function" ? function(g) {
          return c.apply(i, g);
        } : c;
      }
      function R(o) {
        return (function(n) {
          if (Array.isArray(n)) return r(n);
        })(o) || (function(n) {
          if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
        })(o) || I(o) || (function() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        })();
      }
      function C(o) {
        var n = (function(i, a) {
          if (typeof i != "object" || !i) return i;
          var c = i[Symbol.toPrimitive];
          if (c !== void 0) {
            var g = c.call(i, a);
            if (typeof g != "object") return g;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(i);
        })(o, "string");
        return typeof n == "symbol" ? n : n + "";
      }
      function I(o, n) {
        if (o) {
          if (typeof o == "string") return r(o, n);
          var i = {}.toString.call(o).slice(8, -1);
          return i === "Object" && o.constructor && (i = o.constructor.name), i === "Map" || i === "Set" ? Array.from(o) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? r(o, n) : void 0;
        }
      }
      function T(o) {
        var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
        return T = function(i) {
          if (i === null || !(function(c) {
            try {
              return Function.toString.call(c).indexOf("[native code]") !== -1;
            } catch {
              return typeof c == "function";
            }
          })(i)) return i;
          if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
          if (n !== void 0) {
            if (n.has(i)) return n.get(i);
            n.set(i, a);
          }
          function a() {
            return l(i, arguments, v(this).constructor);
          }
          return a.prototype = Object.create(i.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), k(a, i);
        }, T(o);
      }
      var Y = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getEndCapStyle", value: function() {
          return this._endCapStyle;
        } }, { key: "isSingleSided", value: function() {
          return this._isSingleSided;
        } }, { key: "setQuadrantSegments", value: function(n) {
          this._quadrantSegments = n, this._quadrantSegments === 0 && (this._joinStyle = o.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = o.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), n <= 0 && (this._quadrantSegments = 1), this._joinStyle !== o.JOIN_ROUND && (this._quadrantSegments = o.DEFAULT_QUADRANT_SEGMENTS);
        } }, { key: "getJoinStyle", value: function() {
          return this._joinStyle;
        } }, { key: "setJoinStyle", value: function(n) {
          this._joinStyle = n;
        } }, { key: "setSimplifyFactor", value: function(n) {
          this._simplifyFactor = n < 0 ? 0 : n;
        } }, { key: "getSimplifyFactor", value: function() {
          return this._simplifyFactor;
        } }, { key: "getQuadrantSegments", value: function() {
          return this._quadrantSegments;
        } }, { key: "setEndCapStyle", value: function(n) {
          this._endCapStyle = n;
        } }, { key: "getMitreLimit", value: function() {
          return this._mitreLimit;
        } }, { key: "setMitreLimit", value: function(n) {
          this._mitreLimit = n;
        } }, { key: "setSingleSided", value: function(n) {
          this._isSingleSided = n;
        } }], [{ key: "constructor_", value: function() {
          if (this._quadrantSegments = o.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = o.CAP_ROUND, this._joinStyle = o.JOIN_ROUND, this._mitreLimit = o.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = o.DEFAULT_SIMPLIFY_FACTOR, arguments.length !== 0) {
            if (arguments.length === 1) {
              var n = arguments[0];
              this.setQuadrantSegments(n);
            } else if (arguments.length === 2) {
              var i = arguments[0], a = arguments[1];
              this.setQuadrantSegments(i), this.setEndCapStyle(a);
            } else if (arguments.length === 4) {
              var c = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3];
              this.setQuadrantSegments(c), this.setEndCapStyle(g), this.setJoinStyle(m), this.setMitreLimit(y);
            }
          }
        } }, { key: "bufferDistanceError", value: function(n) {
          var i = Math.PI / 2 / n;
          return 1 - Math.cos(i / 2);
        } }]);
      })();
      Y.CAP_ROUND = 1, Y.CAP_FLAT = 2, Y.CAP_SQUARE = 3, Y.JOIN_ROUND = 1, Y.JOIN_MITRE = 2, Y.JOIN_BEVEL = 3, Y.DEFAULT_QUADRANT_SEGMENTS = 8, Y.DEFAULT_MITRE_LIMIT = 5, Y.DEFAULT_SIMPLIFY_FACTOR = 0.01;
      var $ = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n, [i])).name = Object.keys({ Exception: n })[0], a;
        }
        return _(n, o), h(n, [{ key: "toString", value: function() {
          return this.message;
        } }]);
      })(T(Error)), J = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n, [i])).name = Object.keys({ IllegalArgumentException: n })[0], a;
        }
        return _(n, o), h(n);
      })($), q = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "filter", value: function(o) {
        } }]);
      })();
      function W() {
      }
      function E() {
      }
      function S() {
      }
      var b, O, P, F, D, L, B, U, H = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "equalsWithTolerance", value: function(o, n, i) {
          return Math.abs(o - n) <= i;
        } }]);
      })(), j = (function() {
        return h((function o(n, i) {
          u(this, o), this.low = i || 0, this.high = n || 0;
        }), null, [{ key: "toBinaryString", value: function(o) {
          var n, i = "";
          for (n = 2147483648; n > 0; n >>>= 1) i += (o.high & n) === n ? "1" : "0";
          for (n = 2147483648; n > 0; n >>>= 1) i += (o.low & n) === n ? "1" : "0";
          return i;
        } }]);
      })();
      function Z() {
      }
      function ne() {
      }
      Z.NaN = NaN, Z.isNaN = function(o) {
        return Number.isNaN(o);
      }, Z.isInfinite = function(o) {
        return !Number.isFinite(o);
      }, Z.MAX_VALUE = Number.MAX_VALUE, Z.POSITIVE_INFINITY = Number.POSITIVE_INFINITY, Z.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY, typeof Float64Array == "function" && typeof Int32Array == "function" ? (L = 2146435072, B = new Float64Array(1), U = new Int32Array(B.buffer), Z.doubleToLongBits = function(o) {
        B[0] = o;
        var n = 0 | U[0], i = 0 | U[1];
        return (i & L) === L && 1048575 & i && n !== 0 && (n = 0, i = 2146959360), new j(i, n);
      }, Z.longBitsToDouble = function(o) {
        return U[0] = o.low, U[1] = o.high, B[0];
      }) : (b = 1023, O = Math.log2, P = Math.floor, F = Math.pow, D = (function() {
        for (var o = 53; o > 0; o--) {
          var n = F(2, o) - 1;
          if (P(O(n)) + 1 === o) return n;
        }
        return 0;
      })(), Z.doubleToLongBits = function(o) {
        var n, i, a, c, g, m, y, w, A;
        if (o < 0 || 1 / o === Number.NEGATIVE_INFINITY ? (m = 1 << 31, o = -o) : m = 0, o === 0) return new j(w = m, A = 0);
        if (o === 1 / 0) return new j(w = 2146435072 | m, A = 0);
        if (o != o) return new j(w = 2146959360, A = 0);
        if (c = 0, A = 0, (n = P(o)) > 1) if (n <= D) (c = P(O(n))) <= 20 ? (A = 0, w = n << 20 - c & 1048575) : (A = n % (i = F(2, a = c - 20)) << 32 - a, w = n / i & 1048575);
        else for (a = n, A = 0; (a = P(i = a / 2)) !== 0; ) c++, A >>>= 1, A |= (1 & w) << 31, w >>>= 1, i !== a && (w |= 524288);
        if (y = c + b, g = n === 0, n = o - n, c < 52 && n !== 0) for (a = 0; ; ) {
          if ((i = 2 * n) >= 1 ? (n = i - 1, g ? (y--, g = !1) : (a <<= 1, a |= 1, c++)) : (n = i, g ? --y == 0 && (c++, g = !1) : (a <<= 1, c++)), c === 20) w |= a, a = 0;
          else if (c === 52) {
            A |= a;
            break;
          }
          if (i === 1) {
            c < 20 ? w |= a << 20 - c : c < 52 && (A |= a << 52 - c);
            break;
          }
        }
        return w |= y << 20, new j(w |= m, A);
      }, Z.longBitsToDouble = function(o) {
        var n, i, a, c, g = o.high, m = o.low, y = g & 1 << 31 ? -1 : 1;
        for (a = ((2146435072 & g) >> 20) - b, c = 0, i = 1 << 19, n = 1; n <= 20; n++) g & i && (c += F(2, -n)), i >>>= 1;
        for (i = 1 << 31, n = 21; n <= 52; n++) m & i && (c += F(2, -n)), i >>>= 1;
        if (a === -1023) {
          if (c === 0) return 0 * y;
          a = -1022;
        } else {
          if (a === 1024) return c === 0 ? y / 0 : NaN;
          c += 1;
        }
        return y * c * F(2, a);
      });
      var le = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n, [i])).name = Object.keys({ RuntimeException: n })[0], a;
        }
        return _(n, o), h(n);
      })($), ue = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, null, [{ key: "constructor_", value: function() {
          if (arguments.length === 0) le.constructor_.call(this);
          else if (arguments.length === 1) {
            var i = arguments[0];
            le.constructor_.call(this, i);
          }
        } }]);
      })(le), ie = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "shouldNeverReachHere", value: function() {
          if (arguments.length === 0) o.shouldNeverReachHere(null);
          else if (arguments.length === 1) {
            var n = arguments[0];
            throw new ue("Should never reach here" + (n !== null ? ": " + n : ""));
          }
        } }, { key: "isTrue", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            o.isTrue(n, null);
          } else if (arguments.length === 2) {
            var i = arguments[1];
            if (!arguments[0]) throw i === null ? new ue() : new ue(i);
          }
        } }, { key: "equals", value: function() {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            o.equals(n, i, null);
          } else if (arguments.length === 3) {
            var a = arguments[0], c = arguments[1], g = arguments[2];
            if (!c.equals(a)) throw new ue("Expected " + a + " but encountered " + c + (g !== null ? ": " + g : ""));
          }
        } }]);
      })(), oe = new ArrayBuffer(8), xe = new Float64Array(oe), Le = new Int32Array(oe), V = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getM", value: function() {
          return Z.NaN;
        } }, { key: "setOrdinate", value: function(n, i) {
          switch (n) {
            case o.X:
              this.x = i;
              break;
            case o.Y:
              this.y = i;
              break;
            case o.Z:
              this.setZ(i);
              break;
            default:
              throw new J("Invalid ordinate index: " + n);
          }
        } }, { key: "equals2D", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            return this.x === n.x && this.y === n.y;
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            return !!H.equalsWithTolerance(this.x, i.x, a) && !!H.equalsWithTolerance(this.y, i.y, a);
          }
        } }, { key: "setM", value: function(n) {
          throw new J("Invalid ordinate index: " + o.M);
        } }, { key: "getZ", value: function() {
          return this.z;
        } }, { key: "getOrdinate", value: function(n) {
          switch (n) {
            case o.X:
              return this.x;
            case o.Y:
              return this.y;
            case o.Z:
              return this.getZ();
          }
          throw new J("Invalid ordinate index: " + n);
        } }, { key: "equals3D", value: function(n) {
          return this.x === n.x && this.y === n.y && (this.getZ() === n.getZ() || Z.isNaN(this.getZ()) && Z.isNaN(n.getZ()));
        } }, { key: "equals", value: function(n) {
          return n instanceof o && this.equals2D(n);
        } }, { key: "equalInZ", value: function(n, i) {
          return H.equalsWithTolerance(this.getZ(), n.getZ(), i);
        } }, { key: "setX", value: function(n) {
          this.x = n;
        } }, { key: "compareTo", value: function(n) {
          var i = n;
          return this.x < i.x ? -1 : this.x > i.x ? 1 : this.y < i.y ? -1 : this.y > i.y ? 1 : 0;
        } }, { key: "getX", value: function() {
          return this.x;
        } }, { key: "setZ", value: function(n) {
          this.z = n;
        } }, { key: "clone", value: function() {
          try {
            return null;
          } catch (n) {
            if (n instanceof CloneNotSupportedException) return ie.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"), null;
            throw n;
          }
        } }, { key: "copy", value: function() {
          return new o(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + ", " + this.getZ() + ")";
        } }, { key: "distance3D", value: function(n) {
          var i = this.x - n.x, a = this.y - n.y, c = this.getZ() - n.getZ();
          return Math.sqrt(i * i + a * a + c * c);
        } }, { key: "getY", value: function() {
          return this.y;
        } }, { key: "setY", value: function(n) {
          this.y = n;
        } }, { key: "distance", value: function(n) {
          var i = this.x - n.x, a = this.y - n.y;
          return Math.sqrt(i * i + a * a);
        } }, { key: "hashCode", value: function() {
          var n = 17;
          return n = 37 * (n = 37 * n + o.hashCode(this.x)) + o.hashCode(this.y);
        } }, { key: "setCoordinate", value: function(n) {
          this.x = n.x, this.y = n.y, this.z = n.getZ();
        } }, { key: "interfaces_", get: function() {
          return [W, E, S];
        } }], [{ key: "constructor_", value: function() {
          if (this.x = null, this.y = null, this.z = null, arguments.length === 0) o.constructor_.call(this, 0, 0);
          else if (arguments.length === 1) {
            var n = arguments[0];
            o.constructor_.call(this, n.x, n.y, n.getZ());
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            o.constructor_.call(this, i, a, o.NULL_ORDINATE);
          } else if (arguments.length === 3) {
            var c = arguments[0], g = arguments[1], m = arguments[2];
            this.x = c, this.y = g, this.z = m;
          }
        } }, { key: "hashCode", value: function(n) {
          return xe[0] = n, Le[0] ^ Le[1];
        } }]);
      })(), bn = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "compare", value: function(n, i) {
          var a = o.compare(n.x, i.x);
          if (a !== 0) return a;
          var c = o.compare(n.y, i.y);
          return c !== 0 ? c : this._dimensionsToTest <= 2 ? 0 : o.compare(n.getZ(), i.getZ());
        } }, { key: "interfaces_", get: function() {
          return [ne];
        } }], [{ key: "constructor_", value: function() {
          if (this._dimensionsToTest = 2, arguments.length === 0) o.constructor_.call(this, 2);
          else if (arguments.length === 1) {
            var n = arguments[0];
            if (n !== 2 && n !== 3) throw new J("only 2 or 3 dimensions may be specified");
            this._dimensionsToTest = n;
          }
        } }, { key: "compare", value: function(n, i) {
          return n < i ? -1 : n > i ? 1 : Z.isNaN(n) ? Z.isNaN(i) ? 0 : -1 : Z.isNaN(i) ? 1 : 0;
        } }]);
      })();
      V.DimensionalComparator = bn, V.NULL_ORDINATE = Z.NaN, V.X = 0, V.Y = 1, V.Z = 2, V.M = 3;
      var Ie = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getArea", value: function() {
          return this.getWidth() * this.getHeight();
        } }, { key: "equals", value: function(n) {
          if (!(n instanceof o)) return !1;
          var i = n;
          return this.isNull() ? i.isNull() : this._maxx === i.getMaxX() && this._maxy === i.getMaxY() && this._minx === i.getMinX() && this._miny === i.getMinY();
        } }, { key: "intersection", value: function(n) {
          if (this.isNull() || n.isNull() || !this.intersects(n)) return new o();
          var i = this._minx > n._minx ? this._minx : n._minx, a = this._miny > n._miny ? this._miny : n._miny;
          return new o(i, this._maxx < n._maxx ? this._maxx : n._maxx, a, this._maxy < n._maxy ? this._maxy : n._maxy);
        } }, { key: "isNull", value: function() {
          return this._maxx < this._minx;
        } }, { key: "getMaxX", value: function() {
          return this._maxx;
        } }, { key: "covers", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof V) {
              var n = arguments[0];
              return this.covers(n.x, n.y);
            }
            if (arguments[0] instanceof o) {
              var i = arguments[0];
              return !this.isNull() && !i.isNull() && i.getMinX() >= this._minx && i.getMaxX() <= this._maxx && i.getMinY() >= this._miny && i.getMaxY() <= this._maxy;
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            return !this.isNull() && a >= this._minx && a <= this._maxx && c >= this._miny && c <= this._maxy;
          }
        } }, { key: "intersects", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var n = arguments[0];
              return !this.isNull() && !n.isNull() && !(n._minx > this._maxx || n._maxx < this._minx || n._miny > this._maxy || n._maxy < this._miny);
            }
            if (arguments[0] instanceof V) {
              var i = arguments[0];
              return this.intersects(i.x, i.y);
            }
          } else if (arguments.length === 2) {
            if (arguments[0] instanceof V && arguments[1] instanceof V) {
              var a = arguments[0], c = arguments[1];
              return !this.isNull() && !((a.x < c.x ? a.x : c.x) > this._maxx) && !((a.x > c.x ? a.x : c.x) < this._minx) && !((a.y < c.y ? a.y : c.y) > this._maxy) && !((a.y > c.y ? a.y : c.y) < this._miny);
            }
            if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
              var g = arguments[0], m = arguments[1];
              return !this.isNull() && !(g > this._maxx || g < this._minx || m > this._maxy || m < this._miny);
            }
          }
        } }, { key: "getMinY", value: function() {
          return this._miny;
        } }, { key: "getDiameter", value: function() {
          if (this.isNull()) return 0;
          var n = this.getWidth(), i = this.getHeight();
          return Math.sqrt(n * n + i * i);
        } }, { key: "getMinX", value: function() {
          return this._minx;
        } }, { key: "expandToInclude", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof V) {
              var n = arguments[0];
              this.expandToInclude(n.x, n.y);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              if (i.isNull()) return null;
              this.isNull() ? (this._minx = i.getMinX(), this._maxx = i.getMaxX(), this._miny = i.getMinY(), this._maxy = i.getMaxY()) : (i._minx < this._minx && (this._minx = i._minx), i._maxx > this._maxx && (this._maxx = i._maxx), i._miny < this._miny && (this._miny = i._miny), i._maxy > this._maxy && (this._maxy = i._maxy));
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            this.isNull() ? (this._minx = a, this._maxx = a, this._miny = c, this._maxy = c) : (a < this._minx && (this._minx = a), a > this._maxx && (this._maxx = a), c < this._miny && (this._miny = c), c > this._maxy && (this._maxy = c));
          }
        } }, { key: "minExtent", value: function() {
          if (this.isNull()) return 0;
          var n = this.getWidth(), i = this.getHeight();
          return n < i ? n : i;
        } }, { key: "getWidth", value: function() {
          return this.isNull() ? 0 : this._maxx - this._minx;
        } }, { key: "compareTo", value: function(n) {
          var i = n;
          return this.isNull() ? i.isNull() ? 0 : -1 : i.isNull() ? 1 : this._minx < i._minx ? -1 : this._minx > i._minx ? 1 : this._miny < i._miny ? -1 : this._miny > i._miny ? 1 : this._maxx < i._maxx ? -1 : this._maxx > i._maxx ? 1 : this._maxy < i._maxy ? -1 : this._maxy > i._maxy ? 1 : 0;
        } }, { key: "translate", value: function(n, i) {
          if (this.isNull()) return null;
          this.init(this.getMinX() + n, this.getMaxX() + n, this.getMinY() + i, this.getMaxY() + i);
        } }, { key: "copy", value: function() {
          return new o(this);
        } }, { key: "toString", value: function() {
          return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
        } }, { key: "setToNull", value: function() {
          this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
        } }, { key: "disjoint", value: function(n) {
          return !(!this.isNull() && !n.isNull()) || n._minx > this._maxx || n._maxx < this._minx || n._miny > this._maxy || n._maxy < this._miny;
        } }, { key: "getHeight", value: function() {
          return this.isNull() ? 0 : this._maxy - this._miny;
        } }, { key: "maxExtent", value: function() {
          if (this.isNull()) return 0;
          var n = this.getWidth(), i = this.getHeight();
          return n > i ? n : i;
        } }, { key: "expandBy", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            this.expandBy(n, n);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            if (this.isNull()) return null;
            this._minx -= i, this._maxx += i, this._miny -= a, this._maxy += a, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
          }
        } }, { key: "contains", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var n = arguments[0];
              return this.covers(n);
            }
            if (arguments[0] instanceof V) {
              var i = arguments[0];
              return this.covers(i);
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            return this.covers(a, c);
          }
        } }, { key: "centre", value: function() {
          return this.isNull() ? null : new V((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
        } }, { key: "init", value: function() {
          if (arguments.length === 0) this.setToNull();
          else if (arguments.length === 1) {
            if (arguments[0] instanceof V) {
              var n = arguments[0];
              this.init(n.x, n.x, n.y, n.y);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this._minx = i._minx, this._maxx = i._maxx, this._miny = i._miny, this._maxy = i._maxy;
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            this.init(a.x, c.x, a.y, c.y);
          } else if (arguments.length === 4) {
            var g = arguments[0], m = arguments[1], y = arguments[2], w = arguments[3];
            g < m ? (this._minx = g, this._maxx = m) : (this._minx = m, this._maxx = g), y < w ? (this._miny = y, this._maxy = w) : (this._miny = w, this._maxy = y);
          }
        } }, { key: "getMaxY", value: function() {
          return this._maxy;
        } }, { key: "distance", value: function(n) {
          if (this.intersects(n)) return 0;
          var i = 0;
          this._maxx < n._minx ? i = n._minx - this._maxx : this._minx > n._maxx && (i = this._minx - n._maxx);
          var a = 0;
          return this._maxy < n._miny ? a = n._miny - this._maxy : this._miny > n._maxy && (a = this._miny - n._maxy), i === 0 ? a : a === 0 ? i : Math.sqrt(i * i + a * a);
        } }, { key: "hashCode", value: function() {
          var n = 17;
          return n = 37 * (n = 37 * (n = 37 * (n = 37 * n + V.hashCode(this._minx)) + V.hashCode(this._maxx)) + V.hashCode(this._miny)) + V.hashCode(this._maxy);
        } }, { key: "interfaces_", get: function() {
          return [W, S];
        } }], [{ key: "constructor_", value: function() {
          if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0) this.init();
          else if (arguments.length === 1) {
            if (arguments[0] instanceof V) {
              var n = arguments[0];
              this.init(n.x, n.x, n.y, n.y);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this.init(i);
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            this.init(a.x, c.x, a.y, c.y);
          } else if (arguments.length === 4) {
            var g = arguments[0], m = arguments[1], y = arguments[2], w = arguments[3];
            this.init(g, m, y, w);
          }
        } }, { key: "intersects", value: function() {
          if (arguments.length === 3) {
            var n = arguments[0], i = arguments[1], a = arguments[2];
            return a.x >= (n.x < i.x ? n.x : i.x) && a.x <= (n.x > i.x ? n.x : i.x) && a.y >= (n.y < i.y ? n.y : i.y) && a.y <= (n.y > i.y ? n.y : i.y);
          }
          if (arguments.length === 4) {
            var c = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3], w = Math.min(m.x, y.x), A = Math.max(m.x, y.x), z = Math.min(c.x, g.x), X = Math.max(c.x, g.x);
            return !(z > A) && !(X < w) && (w = Math.min(m.y, y.y), A = Math.max(m.y, y.y), z = Math.min(c.y, g.y), X = Math.max(c.y, g.y), !(z > A) && !(X < w));
          }
        } }]);
      })(), he = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "isGeometryCollection", value: function() {
          return this.getTypeCode() === o.TYPECODE_GEOMETRYCOLLECTION;
        } }, { key: "getFactory", value: function() {
          return this._factory;
        } }, { key: "getGeometryN", value: function(n) {
          return this;
        } }, { key: "getArea", value: function() {
          return 0;
        } }, { key: "isRectangle", value: function() {
          return !1;
        } }, { key: "equalsExact", value: function(n) {
          return this === n || this.equalsExact(n, 0);
        } }, { key: "geometryChanged", value: function() {
          this.apply(o.geometryChangedFilter);
        } }, { key: "geometryChangedAction", value: function() {
          this._envelope = null;
        } }, { key: "equalsNorm", value: function(n) {
          return n !== null && this.norm().equalsExact(n.norm());
        } }, { key: "getLength", value: function() {
          return 0;
        } }, { key: "getNumGeometries", value: function() {
          return 1;
        } }, { key: "compareTo", value: function() {
          var n;
          if (arguments.length === 1) {
            var i = arguments[0];
            return n = i, this.getTypeCode() !== n.getTypeCode() ? this.getTypeCode() - n.getTypeCode() : this.isEmpty() && n.isEmpty() ? 0 : this.isEmpty() ? -1 : n.isEmpty() ? 1 : this.compareToSameClass(i);
          }
          if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            return n = a, this.getTypeCode() !== n.getTypeCode() ? this.getTypeCode() - n.getTypeCode() : this.isEmpty() && n.isEmpty() ? 0 : this.isEmpty() ? -1 : n.isEmpty() ? 1 : this.compareToSameClass(a, c);
          }
        } }, { key: "getUserData", value: function() {
          return this._userData;
        } }, { key: "getSRID", value: function() {
          return this._SRID;
        } }, { key: "getEnvelope", value: function() {
          return this.getFactory().toGeometry(this.getEnvelopeInternal());
        } }, { key: "checkNotGeometryCollection", value: function(n) {
          if (n.getTypeCode() === o.TYPECODE_GEOMETRYCOLLECTION) throw new J("This method does not support GeometryCollection arguments");
        } }, { key: "equal", value: function(n, i, a) {
          return a === 0 ? n.equals(i) : n.distance(i) <= a;
        } }, { key: "norm", value: function() {
          var n = this.copy();
          return n.normalize(), n;
        } }, { key: "reverse", value: function() {
          var n = this.reverseInternal();
          return this.envelope != null && (n.envelope = this.envelope.copy()), n.setSRID(this.getSRID()), n;
        } }, { key: "copy", value: function() {
          var n = this.copyInternal();
          return n.envelope = this._envelope == null ? null : this._envelope.copy(), n._SRID = this._SRID, n._userData = this._userData, n;
        } }, { key: "getPrecisionModel", value: function() {
          return this._factory.getPrecisionModel();
        } }, { key: "getEnvelopeInternal", value: function() {
          return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new Ie(this._envelope);
        } }, { key: "setSRID", value: function(n) {
          this._SRID = n;
        } }, { key: "setUserData", value: function(n) {
          this._userData = n;
        } }, { key: "compare", value: function(n, i) {
          for (var a = n.iterator(), c = i.iterator(); a.hasNext() && c.hasNext(); ) {
            var g = a.next(), m = c.next(), y = g.compareTo(m);
            if (y !== 0) return y;
          }
          return a.hasNext() ? 1 : c.hasNext() ? -1 : 0;
        } }, { key: "hashCode", value: function() {
          return this.getEnvelopeInternal().hashCode();
        } }, { key: "isEquivalentClass", value: function(n) {
          return this.getClass() === n.getClass();
        } }, { key: "isGeometryCollectionOrDerived", value: function() {
          return this.getTypeCode() === o.TYPECODE_GEOMETRYCOLLECTION || this.getTypeCode() === o.TYPECODE_MULTIPOINT || this.getTypeCode() === o.TYPECODE_MULTILINESTRING || this.getTypeCode() === o.TYPECODE_MULTIPOLYGON;
        } }, { key: "interfaces_", get: function() {
          return [E, W, S];
        } }, { key: "getClass", value: function() {
          return o;
        } }], [{ key: "hasNonEmptyElements", value: function(n) {
          for (var i = 0; i < n.length; i++) if (!n[i].isEmpty()) return !0;
          return !1;
        } }, { key: "hasNullElements", value: function(n) {
          for (var i = 0; i < n.length; i++) if (n[i] === null) return !0;
          return !1;
        } }]);
      })();
      he.constructor_ = function(o) {
        o && (this._envelope = null, this._userData = null, this._factory = o, this._SRID = o.getSRID());
      }, he.TYPECODE_POINT = 0, he.TYPECODE_MULTIPOINT = 1, he.TYPECODE_LINESTRING = 2, he.TYPECODE_LINEARRING = 3, he.TYPECODE_MULTILINESTRING = 4, he.TYPECODE_POLYGON = 5, he.TYPECODE_MULTIPOLYGON = 6, he.TYPECODE_GEOMETRYCOLLECTION = 7, he.TYPENAME_POINT = "Point", he.TYPENAME_MULTIPOINT = "MultiPoint", he.TYPENAME_LINESTRING = "LineString", he.TYPENAME_LINEARRING = "LinearRing", he.TYPENAME_MULTILINESTRING = "MultiLineString", he.TYPENAME_POLYGON = "Polygon", he.TYPENAME_MULTIPOLYGON = "MultiPolygon", he.TYPENAME_GEOMETRYCOLLECTION = "GeometryCollection", he.geometryChangedFilter = { get interfaces_() {
        return [q];
      }, filter: function(o) {
        o.geometryChangedAction();
      } };
      var N = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "toLocationSymbol", value: function(n) {
          switch (n) {
            case o.EXTERIOR:
              return "e";
            case o.BOUNDARY:
              return "b";
            case o.INTERIOR:
              return "i";
            case o.NONE:
              return "-";
          }
          throw new J("Unknown location value: " + n);
        } }]);
      })();
      N.INTERIOR = 0, N.BOUNDARY = 1, N.EXTERIOR = 2, N.NONE = -1;
      var Ce = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "add", value: function() {
        } }, { key: "addAll", value: function() {
        } }, { key: "isEmpty", value: function() {
        } }, { key: "iterator", value: function() {
        } }, { key: "size", value: function() {
        } }, { key: "toArray", value: function() {
        } }, { key: "remove", value: function() {
        } }]);
      })(), De = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n, [i])).name = Object.keys({ NoSuchElementException: n })[0], a;
        }
        return _(n, o), h(n);
      })($), ke = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n, [i])).name = Object.keys({ UnsupportedOperationException: n })[0], a;
        }
        return _(n, o), h(n);
      })($), hi = (function(o) {
        function n() {
          return u(this, n), s(this, n, arguments);
        }
        return _(n, o), h(n, [{ key: "contains", value: function() {
        } }]);
      })(Ce), Gr = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n)).map = /* @__PURE__ */ new Map(), i instanceof Ce && a.addAll(i), a;
        }
        return _(n, o), h(n, [{ key: "contains", value: function(i) {
          var a = i.hashCode ? i.hashCode() : i;
          return !!this.map.has(a);
        } }, { key: "add", value: function(i) {
          var a = i.hashCode ? i.hashCode() : i;
          return !this.map.has(a) && !!this.map.set(a, i);
        } }, { key: "addAll", value: function(i) {
          var a, c = p(i);
          try {
            for (c.s(); !(a = c.n()).done; ) {
              var g = a.value;
              this.add(g);
            }
          } catch (m) {
            c.e(m);
          } finally {
            c.f();
          }
          return !0;
        } }, { key: "remove", value: function() {
          throw new ke();
        } }, { key: "size", value: function() {
          return this.map.size;
        } }, { key: "isEmpty", value: function() {
          return this.map.size === 0;
        } }, { key: "toArray", value: function() {
          return Array.from(this.map.values());
        } }, { key: "iterator", value: function() {
          return new _r(this.map);
        } }, { key: Symbol.iterator, value: function() {
          return this.map;
        } }]);
      })(hi), _r = (function() {
        return h((function o(n) {
          u(this, o), this.iterator = n.values();
          var i = this.iterator.next(), a = i.done, c = i.value;
          this.done = a, this.value = c;
        }), [{ key: "next", value: function() {
          if (this.done) throw new De();
          var o = this.value, n = this.iterator.next(), i = n.done, a = n.value;
          return this.done = i, this.value = a, o;
        } }, { key: "hasNext", value: function() {
          return !this.done;
        } }, { key: "remove", value: function() {
          throw new ke();
        } }]);
      })(), re = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "opposite", value: function(n) {
          return n === o.LEFT ? o.RIGHT : n === o.RIGHT ? o.LEFT : n;
        } }]);
      })();
      re.ON = 0, re.LEFT = 1, re.RIGHT = 2;
      var Br = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n, [i])).name = Object.keys({ EmptyStackException: n })[0], a;
        }
        return _(n, o), h(n);
      })($), ns = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n, [i])).name = Object.keys({ IndexOutOfBoundsException: n })[0], a;
        }
        return _(n, o), h(n);
      })($), An = (function(o) {
        function n() {
          return u(this, n), s(this, n, arguments);
        }
        return _(n, o), h(n, [{ key: "get", value: function() {
        } }, { key: "set", value: function() {
        } }, { key: "isEmpty", value: function() {
        } }]);
      })(Ce), No = (function(o) {
        function n() {
          var i;
          return u(this, n), (i = s(this, n)).array = [], i;
        }
        return _(n, o), h(n, [{ key: "add", value: function(i) {
          return this.array.push(i), !0;
        } }, { key: "get", value: function(i) {
          if (i < 0 || i >= this.size()) throw new ns();
          return this.array[i];
        } }, { key: "push", value: function(i) {
          return this.array.push(i), i;
        } }, { key: "pop", value: function() {
          if (this.array.length === 0) throw new Br();
          return this.array.pop();
        } }, { key: "peek", value: function() {
          if (this.array.length === 0) throw new Br();
          return this.array[this.array.length - 1];
        } }, { key: "empty", value: function() {
          return this.array.length === 0;
        } }, { key: "isEmpty", value: function() {
          return this.empty();
        } }, { key: "search", value: function(i) {
          return this.array.indexOf(i);
        } }, { key: "size", value: function() {
          return this.array.length;
        } }, { key: "toArray", value: function() {
          return this.array.slice();
        } }]);
      })(An);
      function Ee(o, n) {
        return o.interfaces_ && o.interfaces_.indexOf(n) > -1;
      }
      var cn = (function() {
        return h((function o(n) {
          u(this, o), this.str = n;
        }), [{ key: "append", value: function(o) {
          this.str += o;
        } }, { key: "setCharAt", value: function(o, n) {
          this.str = this.str.substr(0, o) + n + this.str.substr(o + 1);
        } }, { key: "toString", value: function() {
          return this.str;
        } }]);
      })(), hn = (function() {
        function o(n) {
          u(this, o), this.value = n;
        }
        return h(o, [{ key: "intValue", value: function() {
          return this.value;
        } }, { key: "compareTo", value: function(n) {
          return this.value < n ? -1 : this.value > n ? 1 : 0;
        } }], [{ key: "compare", value: function(n, i) {
          return n < i ? -1 : n > i ? 1 : 0;
        } }, { key: "isNan", value: function(n) {
          return Number.isNaN(n);
        } }, { key: "valueOf", value: function(n) {
          return new o(n);
        } }]);
      })(), Nt = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "isWhitespace", value: function(o) {
          return o <= 32 && o >= 0 || o === 127;
        } }, { key: "toUpperCase", value: function(o) {
          return o.toUpperCase();
        } }]);
      })(), ve = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "le", value: function(n) {
          return this._hi < n._hi || this._hi === n._hi && this._lo <= n._lo;
        } }, { key: "extractSignificantDigits", value: function(n, i) {
          var a = this.abs(), c = o.magnitude(a._hi), g = o.TEN.pow(c);
          (a = a.divide(g)).gt(o.TEN) ? (a = a.divide(o.TEN), c += 1) : a.lt(o.ONE) && (a = a.multiply(o.TEN), c -= 1);
          for (var m = c + 1, y = new cn(), w = o.MAX_PRINT_DIGITS - 1, A = 0; A <= w; A++) {
            n && A === m && y.append(".");
            var z = Math.trunc(a._hi);
            if (z < 0) break;
            var X = !1, ee = 0;
            z > 9 ? (X = !0, ee = "9") : ee = "0" + z, y.append(ee), a = a.subtract(o.valueOf(z)).multiply(o.TEN), X && a.selfAdd(o.TEN);
            var ce = !0, ge = o.magnitude(a._hi);
            if (ge < 0 && Math.abs(ge) >= w - A && (ce = !1), !ce) break;
          }
          return i[0] = c, y.toString();
        } }, { key: "sqr", value: function() {
          return this.multiply(this);
        } }, { key: "doubleValue", value: function() {
          return this._hi + this._lo;
        } }, { key: "subtract", value: function() {
          if (arguments[0] instanceof o) {
            var n = arguments[0];
            return this.add(n.negate());
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return this.add(-i);
          }
        } }, { key: "equals", value: function() {
          if (arguments.length === 1 && arguments[0] instanceof o) {
            var n = arguments[0];
            return this._hi === n._hi && this._lo === n._lo;
          }
        } }, { key: "isZero", value: function() {
          return this._hi === 0 && this._lo === 0;
        } }, { key: "selfSubtract", value: function() {
          if (arguments[0] instanceof o) {
            var n = arguments[0];
            return this.isNaN() ? this : this.selfAdd(-n._hi, -n._lo);
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return this.isNaN() ? this : this.selfAdd(-i, 0);
          }
        } }, { key: "getSpecialNumberString", value: function() {
          return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
        } }, { key: "min", value: function(n) {
          return this.le(n) ? this : n;
        } }, { key: "selfDivide", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var n = arguments[0];
              return this.selfDivide(n._hi, n._lo);
            }
            if (typeof arguments[0] == "number") {
              var i = arguments[0];
              return this.selfDivide(i, 0);
            }
          } else if (arguments.length === 2) {
            var a, c, g, m, y = arguments[0], w = arguments[1], A = null, z = null, X = null, ee = null;
            return g = this._hi / y, ee = (A = (X = o.SPLIT * g) - (A = X - g)) * (z = (ee = o.SPLIT * y) - (z = ee - y)) - (m = g * y) + A * (c = y - z) + (a = g - A) * z + a * c, ee = g + (X = (this._hi - m - ee + this._lo - g * w) / y), this._hi = ee, this._lo = g - ee + X, this;
          }
        } }, { key: "dump", value: function() {
          return "DD<" + this._hi + ", " + this._lo + ">";
        } }, { key: "divide", value: function() {
          if (arguments[0] instanceof o) {
            var n, i, a, c, g = arguments[0], m = null, y = null, w = null, A = null;
            return n = (a = this._hi / g._hi) - (m = (w = o.SPLIT * a) - (m = w - a)), A = m * (y = (A = o.SPLIT * g._hi) - (y = A - g._hi)) - (c = a * g._hi) + m * (i = g._hi - y) + n * y + n * i, new o(A = a + (w = (this._hi - c - A + this._lo - a * g._lo) / g._hi), a - A + w);
          }
          if (typeof arguments[0] == "number") {
            var z = arguments[0];
            return Z.isNaN(z) ? o.createNaN() : o.copy(this).selfDivide(z, 0);
          }
        } }, { key: "ge", value: function(n) {
          return this._hi > n._hi || this._hi === n._hi && this._lo >= n._lo;
        } }, { key: "pow", value: function(n) {
          if (n === 0) return o.valueOf(1);
          var i = new o(this), a = o.valueOf(1), c = Math.abs(n);
          if (c > 1) for (; c > 0; ) c % 2 == 1 && a.selfMultiply(i), (c /= 2) > 0 && (i = i.sqr());
          else a = i;
          return n < 0 ? a.reciprocal() : a;
        } }, { key: "ceil", value: function() {
          if (this.isNaN()) return o.NaN;
          var n = Math.ceil(this._hi), i = 0;
          return n === this._hi && (i = Math.ceil(this._lo)), new o(n, i);
        } }, { key: "compareTo", value: function(n) {
          var i = n;
          return this._hi < i._hi ? -1 : this._hi > i._hi ? 1 : this._lo < i._lo ? -1 : this._lo > i._lo ? 1 : 0;
        } }, { key: "rint", value: function() {
          return this.isNaN() ? this : this.add(0.5).floor();
        } }, { key: "setValue", value: function() {
          if (arguments[0] instanceof o) {
            var n = arguments[0];
            return this.init(n), this;
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return this.init(i), this;
          }
        } }, { key: "max", value: function(n) {
          return this.ge(n) ? this : n;
        } }, { key: "sqrt", value: function() {
          if (this.isZero()) return o.valueOf(0);
          if (this.isNegative()) return o.NaN;
          var n = 1 / Math.sqrt(this._hi), i = this._hi * n, a = o.valueOf(i), c = this.subtract(a.sqr())._hi * (0.5 * n);
          return a.add(c);
        } }, { key: "selfAdd", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var n = arguments[0];
              return this.selfAdd(n._hi, n._lo);
            }
            if (typeof arguments[0] == "number") {
              var i, a, c, g, m, y = arguments[0], w = null;
              return w = (c = this._hi + y) - (g = c - this._hi), a = (m = (w = y - g + (this._hi - w)) + this._lo) + (c - (i = c + m)), this._hi = i + a, this._lo = a + (i - this._hi), this;
            }
          } else if (arguments.length === 2) {
            var A, z, X, ee, ce = arguments[0], ge = arguments[1], me = null, Te = null, be = null;
            X = this._hi + ce, z = this._lo + ge, Te = X - (be = X - this._hi), me = z - (ee = z - this._lo);
            var Ge = (A = X + (be = (Te = ce - be + (this._hi - Te)) + z)) + (be = (me = ge - ee + (this._lo - me)) + (be + (X - A))), ft = be + (A - Ge);
            return this._hi = Ge, this._lo = ft, this;
          }
        } }, { key: "selfMultiply", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var n = arguments[0];
              return this.selfMultiply(n._hi, n._lo);
            }
            if (typeof arguments[0] == "number") {
              var i = arguments[0];
              return this.selfMultiply(i, 0);
            }
          } else if (arguments.length === 2) {
            var a, c, g = arguments[0], m = arguments[1], y = null, w = null, A = null, z = null;
            y = (A = o.SPLIT * this._hi) - this._hi, z = o.SPLIT * g, y = A - y, a = this._hi - y, w = z - g;
            var X = (A = this._hi * g) + (z = y * (w = z - w) - A + y * (c = g - w) + a * w + a * c + (this._hi * m + this._lo * g)), ee = z + (y = A - X);
            return this._hi = X, this._lo = ee, this;
          }
        } }, { key: "selfSqr", value: function() {
          return this.selfMultiply(this);
        } }, { key: "floor", value: function() {
          if (this.isNaN()) return o.NaN;
          var n = Math.floor(this._hi), i = 0;
          return n === this._hi && (i = Math.floor(this._lo)), new o(n, i);
        } }, { key: "negate", value: function() {
          return this.isNaN() ? this : new o(-this._hi, -this._lo);
        } }, { key: "clone", value: function() {
          try {
            return null;
          } catch (n) {
            if (n instanceof CloneNotSupportedException) return null;
            throw n;
          }
        } }, { key: "multiply", value: function() {
          if (arguments[0] instanceof o) {
            var n = arguments[0];
            return n.isNaN() ? o.createNaN() : o.copy(this).selfMultiply(n);
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return Z.isNaN(i) ? o.createNaN() : o.copy(this).selfMultiply(i, 0);
          }
        } }, { key: "isNaN", value: function() {
          return Z.isNaN(this._hi);
        } }, { key: "intValue", value: function() {
          return Math.trunc(this._hi);
        } }, { key: "toString", value: function() {
          var n = o.magnitude(this._hi);
          return n >= -3 && n <= 20 ? this.toStandardNotation() : this.toSciNotation();
        } }, { key: "toStandardNotation", value: function() {
          var n = this.getSpecialNumberString();
          if (n !== null) return n;
          var i = new Array(1).fill(null), a = this.extractSignificantDigits(!0, i), c = i[0] + 1, g = a;
          if (a.charAt(0) === ".") g = "0" + a;
          else if (c < 0) g = "0." + o.stringOfChar("0", -c) + a;
          else if (a.indexOf(".") === -1) {
            var m = c - a.length;
            g = a + o.stringOfChar("0", m) + ".0";
          }
          return this.isNegative() ? "-" + g : g;
        } }, { key: "reciprocal", value: function() {
          var n, i, a, c, g = null, m = null, y = null, w = null;
          n = (a = 1 / this._hi) - (g = (y = o.SPLIT * a) - (g = y - a)), m = (w = o.SPLIT * this._hi) - this._hi;
          var A = a + (y = (1 - (c = a * this._hi) - (w = g * (m = w - m) - c + g * (i = this._hi - m) + n * m + n * i) - a * this._lo) / this._hi);
          return new o(A, a - A + y);
        } }, { key: "toSciNotation", value: function() {
          if (this.isZero()) return o.SCI_NOT_ZERO;
          var n = this.getSpecialNumberString();
          if (n !== null) return n;
          var i = new Array(1).fill(null), a = this.extractSignificantDigits(!1, i), c = o.SCI_NOT_EXPONENT_CHAR + i[0];
          if (a.charAt(0) === "0") throw new IllegalStateException("Found leading zero: " + a);
          var g = "";
          a.length > 1 && (g = a.substring(1));
          var m = a.charAt(0) + "." + g;
          return this.isNegative() ? "-" + m + c : m + c;
        } }, { key: "abs", value: function() {
          return this.isNaN() ? o.NaN : this.isNegative() ? this.negate() : new o(this);
        } }, { key: "isPositive", value: function() {
          return this._hi > 0 || this._hi === 0 && this._lo > 0;
        } }, { key: "lt", value: function(n) {
          return this._hi < n._hi || this._hi === n._hi && this._lo < n._lo;
        } }, { key: "add", value: function() {
          if (arguments[0] instanceof o) {
            var n = arguments[0];
            return o.copy(this).selfAdd(n);
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return o.copy(this).selfAdd(i);
          }
        } }, { key: "init", value: function() {
          if (arguments.length === 1) {
            if (typeof arguments[0] == "number") {
              var n = arguments[0];
              this._hi = n, this._lo = 0;
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this._hi = i._hi, this._lo = i._lo;
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            this._hi = a, this._lo = c;
          }
        } }, { key: "gt", value: function(n) {
          return this._hi > n._hi || this._hi === n._hi && this._lo > n._lo;
        } }, { key: "isNegative", value: function() {
          return this._hi < 0 || this._hi === 0 && this._lo < 0;
        } }, { key: "trunc", value: function() {
          return this.isNaN() ? o.NaN : this.isPositive() ? this.floor() : this.ceil();
        } }, { key: "signum", value: function() {
          return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
        } }, { key: "interfaces_", get: function() {
          return [S, W, E];
        } }], [{ key: "constructor_", value: function() {
          if (this._hi = 0, this._lo = 0, arguments.length === 0) this.init(0);
          else if (arguments.length === 1) {
            if (typeof arguments[0] == "number") {
              var n = arguments[0];
              this.init(n);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this.init(i);
            } else if (typeof arguments[0] == "string") {
              var a = arguments[0];
              o.constructor_.call(this, o.parse(a));
            }
          } else if (arguments.length === 2) {
            var c = arguments[0], g = arguments[1];
            this.init(c, g);
          }
        } }, { key: "determinant", value: function() {
          if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var n = arguments[0], i = arguments[1], a = arguments[2], c = arguments[3];
            return o.determinant(o.valueOf(n), o.valueOf(i), o.valueOf(a), o.valueOf(c));
          }
          if (arguments[3] instanceof o && arguments[2] instanceof o && arguments[0] instanceof o && arguments[1] instanceof o) {
            var g = arguments[1], m = arguments[2], y = arguments[3];
            return arguments[0].multiply(y).selfSubtract(g.multiply(m));
          }
        } }, { key: "sqr", value: function(n) {
          return o.valueOf(n).selfMultiply(n);
        } }, { key: "valueOf", value: function() {
          if (typeof arguments[0] == "string") {
            var n = arguments[0];
            return o.parse(n);
          }
          if (typeof arguments[0] == "number") return new o(arguments[0]);
        } }, { key: "sqrt", value: function(n) {
          return o.valueOf(n).sqrt();
        } }, { key: "parse", value: function(n) {
          for (var i = 0, a = n.length; Nt.isWhitespace(n.charAt(i)); ) i++;
          var c = !1;
          if (i < a) {
            var g = n.charAt(i);
            g !== "-" && g !== "+" || (i++, g === "-" && (c = !0));
          }
          for (var m = new o(), y = 0, w = 0, A = 0, z = !1; !(i >= a); ) {
            var X = n.charAt(i);
            if (i++, Nt.isDigit(X)) {
              var ee = X - "0";
              m.selfMultiply(o.TEN), m.selfAdd(ee), y++;
            } else {
              if (X !== ".") {
                if (X === "e" || X === "E") {
                  var ce = n.substring(i);
                  try {
                    A = hn.parseInt(ce);
                  } catch (Ge) {
                    throw Ge instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + ce + " in string " + n) : Ge;
                  }
                  break;
                }
                throw new NumberFormatException("Unexpected character '" + X + "' at position " + i + " in string " + n);
              }
              w = y, z = !0;
            }
          }
          var ge = m;
          z || (w = y);
          var me = y - w - A;
          if (me === 0) ge = m;
          else if (me > 0) {
            var Te = o.TEN.pow(me);
            ge = m.divide(Te);
          } else if (me < 0) {
            var be = o.TEN.pow(-me);
            ge = m.multiply(be);
          }
          return c ? ge.negate() : ge;
        } }, { key: "createNaN", value: function() {
          return new o(Z.NaN, Z.NaN);
        } }, { key: "copy", value: function(n) {
          return new o(n);
        } }, { key: "magnitude", value: function(n) {
          var i = Math.abs(n), a = Math.log(i) / Math.log(10), c = Math.trunc(Math.floor(a));
          return 10 * Math.pow(10, c) <= i && (c += 1), c;
        } }, { key: "stringOfChar", value: function(n, i) {
          for (var a = new cn(), c = 0; c < i; c++) a.append(n);
          return a.toString();
        } }]);
      })();
      ve.PI = new ve(3.141592653589793, 12246467991473532e-32), ve.TWO_PI = new ve(6.283185307179586, 24492935982947064e-32), ve.PI_2 = new ve(1.5707963267948966, 6123233995736766e-32), ve.E = new ve(2.718281828459045, 14456468917292502e-32), ve.NaN = new ve(Z.NaN, Z.NaN), ve.EPS = 123259516440783e-46, ve.SPLIT = 134217729, ve.MAX_PRINT_DIGITS = 32, ve.TEN = ve.valueOf(10), ve.ONE = ve.valueOf(1), ve.SCI_NOT_EXPONENT_CHAR = "E", ve.SCI_NOT_ZERO = "0.0E0";
      var fi = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "orientationIndex", value: function(n, i, a) {
          var c = o.orientationIndexFilter(n, i, a);
          if (c <= 1) return c;
          var g = ve.valueOf(i.x).selfAdd(-n.x), m = ve.valueOf(i.y).selfAdd(-n.y), y = ve.valueOf(a.x).selfAdd(-i.x), w = ve.valueOf(a.y).selfAdd(-i.y);
          return g.selfMultiply(w).selfSubtract(m.selfMultiply(y)).signum();
        } }, { key: "signOfDet2x2", value: function() {
          if (arguments[3] instanceof ve && arguments[2] instanceof ve && arguments[0] instanceof ve && arguments[1] instanceof ve) {
            var n = arguments[1], i = arguments[2], a = arguments[3];
            return arguments[0].multiply(a).selfSubtract(n.multiply(i)).signum();
          }
          if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var c = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3], w = ve.valueOf(c), A = ve.valueOf(g), z = ve.valueOf(m), X = ve.valueOf(y);
            return w.multiply(X).selfSubtract(A.multiply(z)).signum();
          }
        } }, { key: "intersection", value: function(n, i, a, c) {
          var g = new ve(n.y).selfSubtract(i.y), m = new ve(i.x).selfSubtract(n.x), y = new ve(n.x).selfMultiply(i.y).selfSubtract(new ve(i.x).selfMultiply(n.y)), w = new ve(a.y).selfSubtract(c.y), A = new ve(c.x).selfSubtract(a.x), z = new ve(a.x).selfMultiply(c.y).selfSubtract(new ve(c.x).selfMultiply(a.y)), X = m.multiply(z).selfSubtract(A.multiply(y)), ee = w.multiply(y).selfSubtract(g.multiply(z)), ce = g.multiply(A).selfSubtract(w.multiply(m)), ge = X.selfDivide(ce).doubleValue(), me = ee.selfDivide(ce).doubleValue();
          return Z.isNaN(ge) || Z.isInfinite(ge) || Z.isNaN(me) || Z.isInfinite(me) ? null : new V(ge, me);
        } }, { key: "orientationIndexFilter", value: function(n, i, a) {
          var c = null, g = (n.x - a.x) * (i.y - a.y), m = (n.y - a.y) * (i.x - a.x), y = g - m;
          if (g > 0) {
            if (m <= 0) return o.signum(y);
            c = g + m;
          } else {
            if (!(g < 0) || m >= 0) return o.signum(y);
            c = -g - m;
          }
          var w = o.DP_SAFE_EPSILON * c;
          return y >= w || -y >= w ? o.signum(y) : 2;
        } }, { key: "signum", value: function(n) {
          return n > 0 ? 1 : n < 0 ? -1 : 0;
        } }]);
      })();
      fi.DP_SAFE_EPSILON = 1e-15;
      var Me = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "getM", value: function(o) {
          if (this.hasM()) {
            var n = this.getDimension() - this.getMeasures();
            return this.getOrdinate(o, n);
          }
          return Z.NaN;
        } }, { key: "setOrdinate", value: function(o, n, i) {
        } }, { key: "getZ", value: function(o) {
          return this.hasZ() ? this.getOrdinate(o, 2) : Z.NaN;
        } }, { key: "size", value: function() {
        } }, { key: "getOrdinate", value: function(o, n) {
        } }, { key: "getCoordinate", value: function() {
        } }, { key: "getCoordinateCopy", value: function(o) {
        } }, { key: "createCoordinate", value: function() {
        } }, { key: "getDimension", value: function() {
        } }, { key: "hasM", value: function() {
          return this.getMeasures() > 0;
        } }, { key: "getX", value: function(o) {
        } }, { key: "hasZ", value: function() {
          return this.getDimension() - this.getMeasures() > 2;
        } }, { key: "getMeasures", value: function() {
          return 0;
        } }, { key: "expandEnvelope", value: function(o) {
        } }, { key: "copy", value: function() {
        } }, { key: "getY", value: function(o) {
        } }, { key: "toCoordinateArray", value: function() {
        } }, { key: "interfaces_", get: function() {
          return [E];
        } }]);
      })();
      Me.X = 0, Me.Y = 1, Me.Z = 2, Me.M = 3;
      var ye = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "index", value: function(n, i, a) {
          return fi.orientationIndex(n, i, a);
        } }, { key: "isCCW", value: function() {
          if (arguments[0] instanceof Array) {
            var n = arguments[0], i = n.length - 1;
            if (i < 3) throw new J("Ring has fewer than 4 points, so orientation cannot be determined");
            for (var a = n[0], c = 0, g = 1; g <= i; g++) {
              var m = n[g];
              m.y > a.y && (a = m, c = g);
            }
            var y = c;
            do
              (y -= 1) < 0 && (y = i);
            while (n[y].equals2D(a) && y !== c);
            var w = c;
            do
              w = (w + 1) % i;
            while (n[w].equals2D(a) && w !== c);
            var A = n[y], z = n[w];
            if (A.equals2D(a) || z.equals2D(a) || A.equals2D(z)) return !1;
            var X = o.index(A, a, z);
            return X === 0 ? A.x > z.x : X > 0;
          }
          if (Ee(arguments[0], Me)) {
            var ee = arguments[0], ce = ee.size() - 1;
            if (ce < 3) throw new J("Ring has fewer than 4 points, so orientation cannot be determined");
            for (var ge = ee.getCoordinate(0), me = 0, Te = 1; Te <= ce; Te++) {
              var be = ee.getCoordinate(Te);
              be.y > ge.y && (ge = be, me = Te);
            }
            var Ge = null, ft = me;
            do
              (ft -= 1) < 0 && (ft = ce), Ge = ee.getCoordinate(ft);
            while (Ge.equals2D(ge) && ft !== me);
            var pt = null, Jr = me;
            do
              Jr = (Jr + 1) % ce, pt = ee.getCoordinate(Jr);
            while (pt.equals2D(ge) && Jr !== me);
            if (Ge.equals2D(ge) || pt.equals2D(ge) || Ge.equals2D(pt)) return !1;
            var cs = o.index(Ge, ge, pt);
            return cs === 0 ? Ge.x > pt.x : cs > 0;
          }
        } }]);
      })();
      ye.CLOCKWISE = -1, ye.RIGHT = ye.CLOCKWISE, ye.COUNTERCLOCKWISE = 1, ye.LEFT = ye.COUNTERCLOCKWISE, ye.COLLINEAR = 0, ye.STRAIGHT = ye.COLLINEAR;
      var oa = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getCoordinate", value: function() {
          return this._minCoord;
        } }, { key: "getRightmostSide", value: function(o, n) {
          var i = this.getRightmostSideOfSegment(o, n);
          return i < 0 && (i = this.getRightmostSideOfSegment(o, n - 1)), i < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(o)), i;
        } }, { key: "findRightmostEdgeAtVertex", value: function() {
          var o = this._minDe.getEdge().getCoordinates();
          ie.isTrue(this._minIndex > 0 && this._minIndex < o.length, "rightmost point expected to be interior vertex of edge");
          var n = o[this._minIndex - 1], i = o[this._minIndex + 1], a = ye.index(this._minCoord, i, n), c = !1;
          (n.y < this._minCoord.y && i.y < this._minCoord.y && a === ye.COUNTERCLOCKWISE || n.y > this._minCoord.y && i.y > this._minCoord.y && a === ye.CLOCKWISE) && (c = !0), c && (this._minIndex = this._minIndex - 1);
        } }, { key: "getRightmostSideOfSegment", value: function(o, n) {
          var i = o.getEdge().getCoordinates();
          if (n < 0 || n + 1 >= i.length || i[n].y === i[n + 1].y) return -1;
          var a = re.LEFT;
          return i[n].y < i[n + 1].y && (a = re.RIGHT), a;
        } }, { key: "getEdge", value: function() {
          return this._orientedDe;
        } }, { key: "checkForRightmostCoordinate", value: function(o) {
          for (var n = o.getEdge().getCoordinates(), i = 0; i < n.length - 1; i++) (this._minCoord === null || n[i].x > this._minCoord.x) && (this._minDe = o, this._minIndex = i, this._minCoord = n[i]);
        } }, { key: "findRightmostEdgeAtNode", value: function() {
          var o = this._minDe.getNode().getEdges();
          this._minDe = o.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
        } }, { key: "findEdge", value: function(o) {
          for (var n = o.iterator(); n.hasNext(); ) {
            var i = n.next();
            i.isForward() && this.checkForRightmostCoordinate(i);
          }
          ie.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe, this.getRightmostSide(this._minDe, this._minIndex) === re.LEFT && (this._orientedDe = this._minDe.getSym());
        } }], [{ key: "constructor_", value: function() {
          this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
        } }]);
      })(), Pt = (function(o) {
        function n(i, a) {
          var c;
          return u(this, n), (c = s(this, n, [a ? i + " [ " + a + " ]" : i])).pt = a ? new V(a) : void 0, c.name = Object.keys({ TopologyException: n })[0], c;
        }
        return _(n, o), h(n, [{ key: "getCoordinate", value: function() {
          return this.pt;
        } }]);
      })(le), gi = (function() {
        return h((function o() {
          u(this, o), this.array = [];
        }), [{ key: "addLast", value: function(o) {
          this.array.push(o);
        } }, { key: "removeFirst", value: function() {
          return this.array.shift();
        } }, { key: "isEmpty", value: function() {
          return this.array.length === 0;
        } }]);
      })(), pe = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n)).array = [], i instanceof Ce && a.addAll(i), a;
        }
        return _(n, o), h(n, [{ key: "interfaces_", get: function() {
          return [An, Ce];
        } }, { key: "ensureCapacity", value: function() {
        } }, { key: "add", value: function(i) {
          return arguments.length === 1 ? this.array.push(i) : this.array.splice(arguments[0], 0, arguments[1]), !0;
        } }, { key: "clear", value: function() {
          this.array = [];
        } }, { key: "addAll", value: function(i) {
          var a, c = p(i);
          try {
            for (c.s(); !(a = c.n()).done; ) {
              var g = a.value;
              this.array.push(g);
            }
          } catch (m) {
            c.e(m);
          } finally {
            c.f();
          }
        } }, { key: "set", value: function(i, a) {
          var c = this.array[i];
          return this.array[i] = a, c;
        } }, { key: "iterator", value: function() {
          return new Er(this);
        } }, { key: "get", value: function(i) {
          if (i < 0 || i >= this.size()) throw new ns();
          return this.array[i];
        } }, { key: "isEmpty", value: function() {
          return this.array.length === 0;
        } }, { key: "sort", value: function(i) {
          i ? this.array.sort((function(a, c) {
            return i.compare(a, c);
          })) : this.array.sort();
        } }, { key: "size", value: function() {
          return this.array.length;
        } }, { key: "toArray", value: function() {
          return this.array.slice();
        } }, { key: "remove", value: function(i) {
          for (var a = 0, c = this.array.length; a < c; a++) if (this.array[a] === i) return !!this.array.splice(a, 1);
          return !1;
        } }, { key: Symbol.iterator, value: function() {
          return this.array.values();
        } }]);
      })(An), Er = (function() {
        return h((function o(n) {
          u(this, o), this.arrayList = n, this.position = 0;
        }), [{ key: "next", value: function() {
          if (this.position === this.arrayList.size()) throw new De();
          return this.arrayList.get(this.position++);
        } }, { key: "hasNext", value: function() {
          return this.position < this.arrayList.size();
        } }, { key: "set", value: function(o) {
          return this.arrayList.set(this.position - 1, o);
        } }, { key: "remove", value: function() {
          this.arrayList.remove(this.arrayList.get(this.position));
        } }]);
      })(), rs = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "clearVisitedEdges", value: function() {
          for (var o = this._dirEdgeList.iterator(); o.hasNext(); )
            o.next().setVisited(!1);
        } }, { key: "getRightmostCoordinate", value: function() {
          return this._rightMostCoord;
        } }, { key: "computeNodeDepth", value: function(o) {
          for (var n = null, i = o.getEdges().iterator(); i.hasNext(); ) {
            var a = i.next();
            if (a.isVisited() || a.getSym().isVisited()) {
              n = a;
              break;
            }
          }
          if (n === null) throw new Pt("unable to find edge to compute depths at " + o.getCoordinate());
          o.getEdges().computeDepths(n);
          for (var c = o.getEdges().iterator(); c.hasNext(); ) {
            var g = c.next();
            g.setVisited(!0), this.copySymDepths(g);
          }
        } }, { key: "computeDepth", value: function(o) {
          this.clearVisitedEdges();
          var n = this._finder.getEdge();
          n.getNode(), n.getLabel(), n.setEdgeDepths(re.RIGHT, o), this.copySymDepths(n), this.computeDepths(n);
        } }, { key: "create", value: function(o) {
          this.addReachable(o), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
        } }, { key: "findResultEdges", value: function() {
          for (var o = this._dirEdgeList.iterator(); o.hasNext(); ) {
            var n = o.next();
            n.getDepth(re.RIGHT) >= 1 && n.getDepth(re.LEFT) <= 0 && !n.isInteriorAreaEdge() && n.setInResult(!0);
          }
        } }, { key: "computeDepths", value: function(o) {
          var n = new Gr(), i = new gi(), a = o.getNode();
          for (i.addLast(a), n.add(a), o.setVisited(!0); !i.isEmpty(); ) {
            var c = i.removeFirst();
            n.add(c), this.computeNodeDepth(c);
            for (var g = c.getEdges().iterator(); g.hasNext(); ) {
              var m = g.next().getSym();
              if (!m.isVisited()) {
                var y = m.getNode();
                n.contains(y) || (i.addLast(y), n.add(y));
              }
            }
          }
        } }, { key: "compareTo", value: function(o) {
          var n = o;
          return this._rightMostCoord.x < n._rightMostCoord.x ? -1 : this._rightMostCoord.x > n._rightMostCoord.x ? 1 : 0;
        } }, { key: "getEnvelope", value: function() {
          if (this._env === null) {
            for (var o = new Ie(), n = this._dirEdgeList.iterator(); n.hasNext(); ) for (var i = n.next().getEdge().getCoordinates(), a = 0; a < i.length - 1; a++) o.expandToInclude(i[a]);
            this._env = o;
          }
          return this._env;
        } }, { key: "addReachable", value: function(o) {
          var n = new No();
          for (n.add(o); !n.empty(); ) {
            var i = n.pop();
            this.add(i, n);
          }
        } }, { key: "copySymDepths", value: function(o) {
          var n = o.getSym();
          n.setDepth(re.LEFT, o.getDepth(re.RIGHT)), n.setDepth(re.RIGHT, o.getDepth(re.LEFT));
        } }, { key: "add", value: function(o, n) {
          o.setVisited(!0), this._nodes.add(o);
          for (var i = o.getEdges().iterator(); i.hasNext(); ) {
            var a = i.next();
            this._dirEdgeList.add(a);
            var c = a.getSym().getNode();
            c.isVisited() || n.push(c);
          }
        } }, { key: "getNodes", value: function() {
          return this._nodes;
        } }, { key: "getDirectedEdges", value: function() {
          return this._dirEdgeList;
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this._finder = null, this._dirEdgeList = new pe(), this._nodes = new pe(), this._rightMostCoord = null, this._env = null, this._finder = new oa();
        } }]);
      })(), Ur = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "intersection", value: function(o, n, i, a) {
          var c = o.x < n.x ? o.x : n.x, g = o.y < n.y ? o.y : n.y, m = o.x > n.x ? o.x : n.x, y = o.y > n.y ? o.y : n.y, w = i.x < a.x ? i.x : a.x, A = i.y < a.y ? i.y : a.y, z = i.x > a.x ? i.x : a.x, X = i.y > a.y ? i.y : a.y, ee = ((c > w ? c : w) + (m < z ? m : z)) / 2, ce = ((g > A ? g : A) + (y < X ? y : X)) / 2, ge = o.x - ee, me = o.y - ce, Te = n.x - ee, be = n.y - ce, Ge = i.x - ee, ft = i.y - ce, pt = a.x - ee, Jr = a.y - ce, cs = me - be, Gc = Te - ge, Bc = ge * be - Te * me, Uc = ft - Jr, zc = pt - Ge, qc = Ge * Jr - pt * ft, Yc = cs * zc - Uc * Gc, Yo = (Gc * qc - zc * Bc) / Yc, Ho = (Uc * Bc - cs * qc) / Yc;
          return Z.isNaN(Yo) || Z.isInfinite(Yo) || Z.isNaN(Ho) || Z.isInfinite(Ho) ? null : new V(Yo + ee, Ho + ce);
        } }]);
      })(), Ot = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "arraycopy", value: function(o, n, i, a, c) {
          for (var g = 0, m = n; m < n + c; m++) i[a + g] = o[m], g++;
        } }, { key: "getProperty", value: function(o) {
          return { "line.separator": `
` }[o];
        } }]);
      })(), Tn = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "log10", value: function(n) {
          var i = Math.log(n);
          return Z.isInfinite(i) || Z.isNaN(i) ? i : i / o.LOG_10;
        } }, { key: "min", value: function(n, i, a, c) {
          var g = n;
          return i < g && (g = i), a < g && (g = a), c < g && (g = c), g;
        } }, { key: "clamp", value: function() {
          if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var n = arguments[0], i = arguments[1], a = arguments[2];
            return n < i ? i : n > a ? a : n;
          }
          if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var c = arguments[0], g = arguments[1], m = arguments[2];
            return c < g ? g : c > m ? m : c;
          }
        } }, { key: "wrap", value: function(n, i) {
          return n < 0 ? i - -n % i : n % i;
        } }, { key: "max", value: function() {
          if (arguments.length === 3) {
            var n = arguments[1], i = arguments[2], a = arguments[0];
            return n > a && (a = n), i > a && (a = i), a;
          }
          if (arguments.length === 4) {
            var c = arguments[1], g = arguments[2], m = arguments[3], y = arguments[0];
            return c > y && (y = c), g > y && (y = g), m > y && (y = m), y;
          }
        } }, { key: "average", value: function(n, i) {
          return (n + i) / 2;
        } }]);
      })();
      Tn.LOG_10 = Math.log(10);
      var Et = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "segmentToSegment", value: function(n, i, a, c) {
          if (n.equals(i)) return o.pointToSegment(n, a, c);
          if (a.equals(c)) return o.pointToSegment(c, n, i);
          var g = !1;
          if (Ie.intersects(n, i, a, c)) {
            var m = (i.x - n.x) * (c.y - a.y) - (i.y - n.y) * (c.x - a.x);
            if (m === 0) g = !0;
            else {
              var y = (n.y - a.y) * (c.x - a.x) - (n.x - a.x) * (c.y - a.y), w = ((n.y - a.y) * (i.x - n.x) - (n.x - a.x) * (i.y - n.y)) / m, A = y / m;
              (A < 0 || A > 1 || w < 0 || w > 1) && (g = !0);
            }
          } else g = !0;
          return g ? Tn.min(o.pointToSegment(n, a, c), o.pointToSegment(i, a, c), o.pointToSegment(a, n, i), o.pointToSegment(c, n, i)) : 0;
        } }, { key: "pointToSegment", value: function(n, i, a) {
          if (i.x === a.x && i.y === a.y) return n.distance(i);
          var c = (a.x - i.x) * (a.x - i.x) + (a.y - i.y) * (a.y - i.y), g = ((n.x - i.x) * (a.x - i.x) + (n.y - i.y) * (a.y - i.y)) / c;
          if (g <= 0) return n.distance(i);
          if (g >= 1) return n.distance(a);
          var m = ((i.y - n.y) * (a.x - i.x) - (i.x - n.x) * (a.y - i.y)) / c;
          return Math.abs(m) * Math.sqrt(c);
        } }, { key: "pointToLinePerpendicular", value: function(n, i, a) {
          var c = (a.x - i.x) * (a.x - i.x) + (a.y - i.y) * (a.y - i.y), g = ((i.y - n.y) * (a.x - i.x) - (i.x - n.x) * (a.y - i.y)) / c;
          return Math.abs(g) * Math.sqrt(c);
        } }, { key: "pointToSegmentString", value: function(n, i) {
          if (i.length === 0) throw new J("Line array must contain at least one vertex");
          for (var a = n.distance(i[0]), c = 0; c < i.length - 1; c++) {
            var g = o.pointToSegment(n, i[c], i[c + 1]);
            g < a && (a = g);
          }
          return a;
        } }]);
      })(), ua = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "create", value: function() {
          if (arguments.length === 1) arguments[0] instanceof Array || Ee(arguments[0], Me);
          else if (arguments.length !== 2) {
            if (arguments.length === 3) {
              var o = arguments[0], n = arguments[1];
              return this.create(o, n);
            }
          }
        } }]);
      })(), Ln = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "filter", value: function(o) {
        } }]);
      })(), Po = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "ofLine", value: function(o) {
          var n = o.size();
          if (n <= 1) return 0;
          var i = 0, a = new V();
          o.getCoordinate(0, a);
          for (var c = a.x, g = a.y, m = 1; m < n; m++) {
            o.getCoordinate(m, a);
            var y = a.x, w = a.y, A = y - c, z = w - g;
            i += Math.sqrt(A * A + z * z), c = y, g = w;
          }
          return i;
        } }]);
      })(), la = h((function o() {
        u(this, o);
      })), Fe = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "copyCoord", value: function(n, i, a, c) {
          for (var g = Math.min(n.getDimension(), a.getDimension()), m = 0; m < g; m++) a.setOrdinate(c, m, n.getOrdinate(i, m));
        } }, { key: "isRing", value: function(n) {
          var i = n.size();
          return i === 0 || !(i <= 3) && n.getOrdinate(0, Me.X) === n.getOrdinate(i - 1, Me.X) && n.getOrdinate(0, Me.Y) === n.getOrdinate(i - 1, Me.Y);
        } }, { key: "scroll", value: function() {
          if (arguments.length === 2) {
            if (Ee(arguments[0], Me) && Number.isInteger(arguments[1])) {
              var n = arguments[0], i = arguments[1];
              o.scroll(n, i, o.isRing(n));
            } else if (Ee(arguments[0], Me) && arguments[1] instanceof V) {
              var a = arguments[0], c = arguments[1], g = o.indexOf(c, a);
              if (g <= 0) return null;
              o.scroll(a, g);
            }
          } else if (arguments.length === 3) {
            var m = arguments[0], y = arguments[1], w = arguments[2];
            if (y <= 0) return null;
            for (var A = m.copy(), z = w ? m.size() - 1 : m.size(), X = 0; X < z; X++) for (var ee = 0; ee < m.getDimension(); ee++) m.setOrdinate(X, ee, A.getOrdinate((y + X) % z, ee));
            if (w) for (var ce = 0; ce < m.getDimension(); ce++) m.setOrdinate(z, ce, m.getOrdinate(0, ce));
          }
        } }, { key: "isEqual", value: function(n, i) {
          var a = n.size();
          if (a !== i.size()) return !1;
          for (var c = Math.min(n.getDimension(), i.getDimension()), g = 0; g < a; g++) for (var m = 0; m < c; m++) {
            var y = n.getOrdinate(g, m), w = i.getOrdinate(g, m);
            if (n.getOrdinate(g, m) !== i.getOrdinate(g, m) && (!Z.isNaN(y) || !Z.isNaN(w))) return !1;
          }
          return !0;
        } }, { key: "minCoordinateIndex", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            return o.minCoordinateIndex(n, 0, n.size() - 1);
          }
          if (arguments.length === 3) {
            for (var i = arguments[0], a = arguments[2], c = -1, g = null, m = arguments[1]; m <= a; m++) {
              var y = i.getCoordinate(m);
              (g === null || g.compareTo(y) > 0) && (g = y, c = m);
            }
            return c;
          }
        } }, { key: "extend", value: function(n, i, a) {
          var c = n.create(a, i.getDimension()), g = i.size();
          if (o.copy(i, 0, c, 0, g), g > 0) for (var m = g; m < a; m++) o.copy(i, g - 1, c, m, 1);
          return c;
        } }, { key: "reverse", value: function(n) {
          for (var i = n.size() - 1, a = Math.trunc(i / 2), c = 0; c <= a; c++) o.swap(n, c, i - c);
        } }, { key: "swap", value: function(n, i, a) {
          if (i === a) return null;
          for (var c = 0; c < n.getDimension(); c++) {
            var g = n.getOrdinate(i, c);
            n.setOrdinate(i, c, n.getOrdinate(a, c)), n.setOrdinate(a, c, g);
          }
        } }, { key: "copy", value: function(n, i, a, c, g) {
          for (var m = 0; m < g; m++) o.copyCoord(n, i + m, a, c + m);
        } }, { key: "ensureValidRing", value: function(n, i) {
          var a = i.size();
          return a === 0 ? i : a <= 3 ? o.createClosedRing(n, i, 4) : i.getOrdinate(0, Me.X) === i.getOrdinate(a - 1, Me.X) && i.getOrdinate(0, Me.Y) === i.getOrdinate(a - 1, Me.Y) ? i : o.createClosedRing(n, i, a + 1);
        } }, { key: "indexOf", value: function(n, i) {
          for (var a = 0; a < i.size(); a++) if (n.x === i.getOrdinate(a, Me.X) && n.y === i.getOrdinate(a, Me.Y)) return a;
          return -1;
        } }, { key: "createClosedRing", value: function(n, i, a) {
          var c = n.create(a, i.getDimension()), g = i.size();
          o.copy(i, 0, c, 0, g);
          for (var m = g; m < a; m++) o.copy(i, 0, c, m, 1);
          return c;
        } }, { key: "minCoordinate", value: function(n) {
          for (var i = null, a = 0; a < n.size(); a++) {
            var c = n.getCoordinate(a);
            (i === null || i.compareTo(c) > 0) && (i = c);
          }
          return i;
        } }]);
      })(), se = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "toDimensionSymbol", value: function(n) {
          switch (n) {
            case o.FALSE:
              return o.SYM_FALSE;
            case o.TRUE:
              return o.SYM_TRUE;
            case o.DONTCARE:
              return o.SYM_DONTCARE;
            case o.P:
              return o.SYM_P;
            case o.L:
              return o.SYM_L;
            case o.A:
              return o.SYM_A;
          }
          throw new J("Unknown dimension value: " + n);
        } }, { key: "toDimensionValue", value: function(n) {
          switch (Nt.toUpperCase(n)) {
            case o.SYM_FALSE:
              return o.FALSE;
            case o.SYM_TRUE:
              return o.TRUE;
            case o.SYM_DONTCARE:
              return o.DONTCARE;
            case o.SYM_P:
              return o.P;
            case o.SYM_L:
              return o.L;
            case o.SYM_A:
              return o.A;
          }
          throw new J("Unknown dimension symbol: " + n);
        } }]);
      })();
      se.P = 0, se.L = 1, se.A = 2, se.FALSE = -1, se.TRUE = -2, se.DONTCARE = -3, se.SYM_FALSE = "F", se.SYM_TRUE = "T", se.SYM_DONTCARE = "*", se.SYM_P = "0", se.SYM_L = "1", se.SYM_A = "2";
      var di = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "filter", value: function(o) {
        } }]);
      })(), zr = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "filter", value: function(o, n) {
        } }, { key: "isDone", value: function() {
        } }, { key: "isGeometryChanged", value: function() {
        } }]);
      })(), Wn = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "computeEnvelopeInternal", value: function() {
          return this.isEmpty() ? new Ie() : this._points.expandEnvelope(new Ie());
        } }, { key: "isRing", value: function() {
          return this.isClosed() && this.isSimple();
        } }, { key: "getCoordinates", value: function() {
          return this._points.toCoordinateArray();
        } }, { key: "copyInternal", value: function() {
          return new n(this._points.copy(), this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof he) {
            var i = arguments[0], a = arguments[1];
            if (!this.isEquivalentClass(i)) return !1;
            var c = i;
            if (this._points.size() !== c._points.size()) return !1;
            for (var g = 0; g < this._points.size(); g++) if (!this.equal(this._points.getCoordinate(g), c._points.getCoordinate(g), a)) return !1;
            return !0;
          }
          return M(n, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "normalize", value: function() {
          for (var i = 0; i < Math.trunc(this._points.size() / 2); i++) {
            var a = this._points.size() - 1 - i;
            if (!this._points.getCoordinate(i).equals(this._points.getCoordinate(a))) {
              if (this._points.getCoordinate(i).compareTo(this._points.getCoordinate(a)) > 0) {
                var c = this._points.copy();
                Fe.reverse(c), this._points = c;
              }
              return null;
            }
          }
        } }, { key: "getCoordinate", value: function() {
          return this.isEmpty() ? null : this._points.getCoordinate(0);
        } }, { key: "getBoundaryDimension", value: function() {
          return this.isClosed() ? se.FALSE : 0;
        } }, { key: "isClosed", value: function() {
          return !this.isEmpty() && this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
        } }, { key: "reverseInternal", value: function() {
          var i = this._points.copy();
          return Fe.reverse(i), this.getFactory().createLineString(i);
        } }, { key: "getEndPoint", value: function() {
          return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_LINESTRING;
        } }, { key: "getDimension", value: function() {
          return 1;
        } }, { key: "getLength", value: function() {
          return Po.ofLine(this._points);
        } }, { key: "getNumPoints", value: function() {
          return this._points.size();
        } }, { key: "compareToSameClass", value: function() {
          if (arguments.length === 1) {
            for (var i = arguments[0], a = 0, c = 0; a < this._points.size() && c < i._points.size(); ) {
              var g = this._points.getCoordinate(a).compareTo(i._points.getCoordinate(c));
              if (g !== 0) return g;
              a++, c++;
            }
            return a < this._points.size() ? 1 : c < i._points.size() ? -1 : 0;
          }
          if (arguments.length === 2) {
            var m = arguments[0];
            return arguments[1].compare(this._points, m._points);
          }
        } }, { key: "apply", value: function() {
          if (Ee(arguments[0], Ln)) for (var i = arguments[0], a = 0; a < this._points.size(); a++) i.filter(this._points.getCoordinate(a));
          else if (Ee(arguments[0], zr)) {
            var c = arguments[0];
            if (this._points.size() === 0) return null;
            for (var g = 0; g < this._points.size() && (c.filter(this._points, g), !c.isDone()); g++) ;
            c.isGeometryChanged() && this.geometryChanged();
          } else Ee(arguments[0], di) ? arguments[0].filter(this) : Ee(arguments[0], q) && arguments[0].filter(this);
        } }, { key: "getBoundary", value: function() {
          throw new ke();
        } }, { key: "isEquivalentClass", value: function(i) {
          return i instanceof n;
        } }, { key: "getCoordinateN", value: function(i) {
          return this._points.getCoordinate(i);
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_LINESTRING;
        } }, { key: "getCoordinateSequence", value: function() {
          return this._points;
        } }, { key: "isEmpty", value: function() {
          return this._points.size() === 0;
        } }, { key: "init", value: function(i) {
          if (i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), i.size() === 1) throw new J("Invalid number of points in LineString (found " + i.size() + " - must be 0 or >= 2)");
          this._points = i;
        } }, { key: "isCoordinate", value: function(i) {
          for (var a = 0; a < this._points.size(); a++) if (this._points.getCoordinate(a).equals(i)) return !0;
          return !1;
        } }, { key: "getStartPoint", value: function() {
          return this.isEmpty() ? null : this.getPointN(0);
        } }, { key: "getPointN", value: function(i) {
          return this.getFactory().createPoint(this._points.getCoordinate(i));
        } }, { key: "interfaces_", get: function() {
          return [la];
        } }], [{ key: "constructor_", value: function() {
          if (this._points = null, arguments.length !== 0) {
            if (arguments.length === 2) {
              var i = arguments[0], a = arguments[1];
              he.constructor_.call(this, a), this.init(i);
            }
          }
        } }]);
      })(he), is = h((function o() {
        u(this, o);
      })), pi = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "computeEnvelopeInternal", value: function() {
          if (this.isEmpty()) return new Ie();
          var i = new Ie();
          return i.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), i;
        } }, { key: "getCoordinates", value: function() {
          return this.isEmpty() ? [] : [this.getCoordinate()];
        } }, { key: "copyInternal", value: function() {
          return new n(this._coordinates.copy(), this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof he) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && (!(!this.isEmpty() || !i.isEmpty()) || this.isEmpty() === i.isEmpty() && this.equal(i.getCoordinate(), this.getCoordinate(), a));
          }
          return M(n, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "normalize", value: function() {
        } }, { key: "getCoordinate", value: function() {
          return this._coordinates.size() !== 0 ? this._coordinates.getCoordinate(0) : null;
        } }, { key: "getBoundaryDimension", value: function() {
          return se.FALSE;
        } }, { key: "reverseInternal", value: function() {
          return this.getFactory().createPoint(this._coordinates.copy());
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_POINT;
        } }, { key: "getDimension", value: function() {
          return 0;
        } }, { key: "getNumPoints", value: function() {
          return this.isEmpty() ? 0 : 1;
        } }, { key: "getX", value: function() {
          if (this.getCoordinate() === null) throw new IllegalStateException("getX called on empty Point");
          return this.getCoordinate().x;
        } }, { key: "compareToSameClass", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0];
            return this.getCoordinate().compareTo(i.getCoordinate());
          }
          if (arguments.length === 2) {
            var a = arguments[0];
            return arguments[1].compare(this._coordinates, a._coordinates);
          }
        } }, { key: "apply", value: function() {
          if (Ee(arguments[0], Ln)) {
            var i = arguments[0];
            if (this.isEmpty()) return null;
            i.filter(this.getCoordinate());
          } else if (Ee(arguments[0], zr)) {
            var a = arguments[0];
            if (this.isEmpty()) return null;
            a.filter(this._coordinates, 0), a.isGeometryChanged() && this.geometryChanged();
          } else Ee(arguments[0], di) ? arguments[0].filter(this) : Ee(arguments[0], q) && arguments[0].filter(this);
        } }, { key: "getBoundary", value: function() {
          return this.getFactory().createGeometryCollection();
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_POINT;
        } }, { key: "getCoordinateSequence", value: function() {
          return this._coordinates;
        } }, { key: "getY", value: function() {
          if (this.getCoordinate() === null) throw new IllegalStateException("getY called on empty Point");
          return this.getCoordinate().y;
        } }, { key: "isEmpty", value: function() {
          return this._coordinates.size() === 0;
        } }, { key: "init", value: function(i) {
          i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), ie.isTrue(i.size() <= 1), this._coordinates = i;
        } }, { key: "isSimple", value: function() {
          return !0;
        } }, { key: "interfaces_", get: function() {
          return [is];
        } }], [{ key: "constructor_", value: function() {
          this._coordinates = null;
          var i = arguments[0], a = arguments[1];
          he.constructor_.call(this, a), this.init(i);
        } }]);
      })(he), ca = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "ofRing", value: function() {
          if (arguments[0] instanceof Array) {
            var n = arguments[0];
            return Math.abs(o.ofRingSigned(n));
          }
          if (Ee(arguments[0], Me)) {
            var i = arguments[0];
            return Math.abs(o.ofRingSigned(i));
          }
        } }, { key: "ofRingSigned", value: function() {
          if (arguments[0] instanceof Array) {
            var n = arguments[0];
            if (n.length < 3) return 0;
            for (var i = 0, a = n[0].x, c = 1; c < n.length - 1; c++) {
              var g = n[c].x - a, m = n[c + 1].y;
              i += g * (n[c - 1].y - m);
            }
            return i / 2;
          }
          if (Ee(arguments[0], Me)) {
            var y = arguments[0], w = y.size();
            if (w < 3) return 0;
            var A = new V(), z = new V(), X = new V();
            y.getCoordinate(0, z), y.getCoordinate(1, X);
            var ee = z.x;
            X.x -= ee;
            for (var ce = 0, ge = 1; ge < w - 1; ge++) A.y = z.y, z.x = X.x, z.y = X.y, y.getCoordinate(ge + 1, X), X.x -= ee, ce += z.x * (A.y - X.y);
            return ce / 2;
          }
        } }]);
      })(), rt = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "sort", value: function() {
          var o = arguments, n = arguments[0];
          if (arguments.length === 1) n.sort((function(ee, ce) {
            return ee.compareTo(ce);
          }));
          else if (arguments.length === 2) n.sort((function(ee, ce) {
            return o[1].compare(ee, ce);
          }));
          else if (arguments.length === 3) {
            var i = n.slice(arguments[1], arguments[2]);
            i.sort();
            var a = n.slice(0, arguments[1]).concat(i, n.slice(arguments[2], n.length));
            n.splice(0, n.length);
            var c, g = p(a);
            try {
              for (g.s(); !(c = g.n()).done; ) {
                var m = c.value;
                n.push(m);
              }
            } catch (ee) {
              g.e(ee);
            } finally {
              g.f();
            }
          } else if (arguments.length === 4) {
            var y = n.slice(arguments[1], arguments[2]);
            y.sort((function(ee, ce) {
              return o[3].compare(ee, ce);
            }));
            var w = n.slice(0, arguments[1]).concat(y, n.slice(arguments[2], n.length));
            n.splice(0, n.length);
            var A, z = p(w);
            try {
              for (z.s(); !(A = z.n()).done; ) {
                var X = A.value;
                n.push(X);
              }
            } catch (ee) {
              z.e(ee);
            } finally {
              z.f();
            }
          }
        } }, { key: "asList", value: function(o) {
          var n, i = new pe(), a = p(o);
          try {
            for (a.s(); !(n = a.n()).done; ) {
              var c = n.value;
              i.add(c);
            }
          } catch (g) {
            a.e(g);
          } finally {
            a.f();
          }
          return i;
        } }, { key: "copyOf", value: function(o, n) {
          return o.slice(0, n);
        } }]);
      })(), Cn = h((function o() {
        u(this, o);
      })), qr = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "computeEnvelopeInternal", value: function() {
          return this._shell.getEnvelopeInternal();
        } }, { key: "getCoordinates", value: function() {
          if (this.isEmpty()) return [];
          for (var i = new Array(this.getNumPoints()).fill(null), a = -1, c = this._shell.getCoordinates(), g = 0; g < c.length; g++) i[++a] = c[g];
          for (var m = 0; m < this._holes.length; m++) for (var y = this._holes[m].getCoordinates(), w = 0; w < y.length; w++) i[++a] = y[w];
          return i;
        } }, { key: "getArea", value: function() {
          var i = 0;
          i += ca.ofRing(this._shell.getCoordinateSequence());
          for (var a = 0; a < this._holes.length; a++) i -= ca.ofRing(this._holes[a].getCoordinateSequence());
          return i;
        } }, { key: "copyInternal", value: function() {
          for (var i = this._shell.copy(), a = new Array(this._holes.length).fill(null), c = 0; c < this._holes.length; c++) a[c] = this._holes[c].copy();
          return new n(i, a, this._factory);
        } }, { key: "isRectangle", value: function() {
          if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5) return !1;
          for (var i = this._shell.getCoordinateSequence(), a = this.getEnvelopeInternal(), c = 0; c < 5; c++) {
            var g = i.getX(c);
            if (g !== a.getMinX() && g !== a.getMaxX()) return !1;
            var m = i.getY(c);
            if (m !== a.getMinY() && m !== a.getMaxY()) return !1;
          }
          for (var y = i.getX(0), w = i.getY(0), A = 1; A <= 4; A++) {
            var z = i.getX(A), X = i.getY(A);
            if (z !== y == (X !== w)) return !1;
            y = z, w = X;
          }
          return !0;
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof he) {
            var i = arguments[0], a = arguments[1];
            if (!this.isEquivalentClass(i)) return !1;
            var c = i, g = this._shell, m = c._shell;
            if (!g.equalsExact(m, a) || this._holes.length !== c._holes.length) return !1;
            for (var y = 0; y < this._holes.length; y++) if (!this._holes[y].equalsExact(c._holes[y], a)) return !1;
            return !0;
          }
          return M(n, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "normalize", value: function() {
          if (arguments.length === 0) {
            this._shell = this.normalized(this._shell, !0);
            for (var i = 0; i < this._holes.length; i++) this._holes[i] = this.normalized(this._holes[i], !1);
            rt.sort(this._holes);
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            if (a.isEmpty()) return null;
            var g = a.getCoordinateSequence(), m = Fe.minCoordinateIndex(g, 0, g.size() - 2);
            Fe.scroll(g, m, !0), ye.isCCW(g) === c && Fe.reverse(g);
          }
        } }, { key: "getCoordinate", value: function() {
          return this._shell.getCoordinate();
        } }, { key: "getNumInteriorRing", value: function() {
          return this._holes.length;
        } }, { key: "getBoundaryDimension", value: function() {
          return 1;
        } }, { key: "reverseInternal", value: function() {
          for (var i = this.getExteriorRing().reverse(), a = new Array(this.getNumInteriorRing()).fill(null), c = 0; c < a.length; c++) a[c] = this.getInteriorRingN(c).reverse();
          return this.getFactory().createPolygon(i, a);
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_POLYGON;
        } }, { key: "getDimension", value: function() {
          return 2;
        } }, { key: "getLength", value: function() {
          var i = 0;
          i += this._shell.getLength();
          for (var a = 0; a < this._holes.length; a++) i += this._holes[a].getLength();
          return i;
        } }, { key: "getNumPoints", value: function() {
          for (var i = this._shell.getNumPoints(), a = 0; a < this._holes.length; a++) i += this._holes[a].getNumPoints();
          return i;
        } }, { key: "convexHull", value: function() {
          return this.getExteriorRing().convexHull();
        } }, { key: "normalized", value: function(i, a) {
          var c = i.copy();
          return this.normalize(c, a), c;
        } }, { key: "compareToSameClass", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0], a = this._shell, c = i._shell;
            return a.compareToSameClass(c);
          }
          if (arguments.length === 2) {
            var g = arguments[1], m = arguments[0], y = this._shell, w = m._shell, A = y.compareToSameClass(w, g);
            if (A !== 0) return A;
            for (var z = this.getNumInteriorRing(), X = m.getNumInteriorRing(), ee = 0; ee < z && ee < X; ) {
              var ce = this.getInteriorRingN(ee), ge = m.getInteriorRingN(ee), me = ce.compareToSameClass(ge, g);
              if (me !== 0) return me;
              ee++;
            }
            return ee < z ? 1 : ee < X ? -1 : 0;
          }
        } }, { key: "apply", value: function() {
          if (Ee(arguments[0], Ln)) {
            var i = arguments[0];
            this._shell.apply(i);
            for (var a = 0; a < this._holes.length; a++) this._holes[a].apply(i);
          } else if (Ee(arguments[0], zr)) {
            var c = arguments[0];
            if (this._shell.apply(c), !c.isDone()) for (var g = 0; g < this._holes.length && (this._holes[g].apply(c), !c.isDone()); g++) ;
            c.isGeometryChanged() && this.geometryChanged();
          } else if (Ee(arguments[0], di))
            arguments[0].filter(this);
          else if (Ee(arguments[0], q)) {
            var m = arguments[0];
            m.filter(this), this._shell.apply(m);
            for (var y = 0; y < this._holes.length; y++) this._holes[y].apply(m);
          }
        } }, { key: "getBoundary", value: function() {
          if (this.isEmpty()) return this.getFactory().createMultiLineString();
          var i = new Array(this._holes.length + 1).fill(null);
          i[0] = this._shell;
          for (var a = 0; a < this._holes.length; a++) i[a + 1] = this._holes[a];
          return i.length <= 1 ? this.getFactory().createLinearRing(i[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(i);
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_POLYGON;
        } }, { key: "getExteriorRing", value: function() {
          return this._shell;
        } }, { key: "isEmpty", value: function() {
          return this._shell.isEmpty();
        } }, { key: "getInteriorRingN", value: function(i) {
          return this._holes[i];
        } }, { key: "interfaces_", get: function() {
          return [Cn];
        } }], [{ key: "constructor_", value: function() {
          this._shell = null, this._holes = null;
          var i = arguments[0], a = arguments[1], c = arguments[2];
          if (he.constructor_.call(this, c), i === null && (i = this.getFactory().createLinearRing()), a === null && (a = []), he.hasNullElements(a)) throw new J("holes must not contain null elements");
          if (i.isEmpty() && he.hasNonEmptyElements(a)) throw new J("shell is empty but holes are not");
          this._shell = i, this._holes = a;
        } }]);
      })(he), ha = (function(o) {
        function n() {
          return u(this, n), s(this, n, arguments);
        }
        return _(n, o), h(n);
      })(hi), mi = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n)).array = [], i instanceof Ce && a.addAll(i), a;
        }
        return _(n, o), h(n, [{ key: "contains", value: function(i) {
          var a, c = p(this.array);
          try {
            for (c.s(); !(a = c.n()).done; )
              if (a.value.compareTo(i) === 0) return !0;
          } catch (g) {
            c.e(g);
          } finally {
            c.f();
          }
          return !1;
        } }, { key: "add", value: function(i) {
          if (this.contains(i)) return !1;
          for (var a = 0, c = this.array.length; a < c; a++)
            if (this.array[a].compareTo(i) === 1) return !!this.array.splice(a, 0, i);
          return this.array.push(i), !0;
        } }, { key: "addAll", value: function(i) {
          var a, c = p(i);
          try {
            for (c.s(); !(a = c.n()).done; ) {
              var g = a.value;
              this.add(g);
            }
          } catch (m) {
            c.e(m);
          } finally {
            c.f();
          }
          return !0;
        } }, { key: "remove", value: function() {
          throw new ke();
        } }, { key: "size", value: function() {
          return this.array.length;
        } }, { key: "isEmpty", value: function() {
          return this.array.length === 0;
        } }, { key: "toArray", value: function() {
          return this.array.slice();
        } }, { key: "iterator", value: function() {
          return new fa(this.array);
        } }]);
      })(ha), fa = (function() {
        return h((function o(n) {
          u(this, o), this.array = n, this.position = 0;
        }), [{ key: "next", value: function() {
          if (this.position === this.array.length) throw new De();
          return this.array[this.position++];
        } }, { key: "hasNext", value: function() {
          return this.position < this.array.length;
        } }, { key: "remove", value: function() {
          throw new ke();
        } }]);
      })(), Ve = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "computeEnvelopeInternal", value: function() {
          for (var i = new Ie(), a = 0; a < this._geometries.length; a++) i.expandToInclude(this._geometries[a].getEnvelopeInternal());
          return i;
        } }, { key: "getGeometryN", value: function(i) {
          return this._geometries[i];
        } }, { key: "getCoordinates", value: function() {
          for (var i = new Array(this.getNumPoints()).fill(null), a = -1, c = 0; c < this._geometries.length; c++) for (var g = this._geometries[c].getCoordinates(), m = 0; m < g.length; m++) i[++a] = g[m];
          return i;
        } }, { key: "getArea", value: function() {
          for (var i = 0, a = 0; a < this._geometries.length; a++) i += this._geometries[a].getArea();
          return i;
        } }, { key: "copyInternal", value: function() {
          for (var i = new Array(this._geometries.length).fill(null), a = 0; a < i.length; a++) i[a] = this._geometries[a].copy();
          return new n(i, this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof he) {
            var i = arguments[0], a = arguments[1];
            if (!this.isEquivalentClass(i)) return !1;
            var c = i;
            if (this._geometries.length !== c._geometries.length) return !1;
            for (var g = 0; g < this._geometries.length; g++) if (!this._geometries[g].equalsExact(c._geometries[g], a)) return !1;
            return !0;
          }
          return M(n, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "normalize", value: function() {
          for (var i = 0; i < this._geometries.length; i++) this._geometries[i].normalize();
          rt.sort(this._geometries);
        } }, { key: "getCoordinate", value: function() {
          return this.isEmpty() ? null : this._geometries[0].getCoordinate();
        } }, { key: "getBoundaryDimension", value: function() {
          for (var i = se.FALSE, a = 0; a < this._geometries.length; a++) i = Math.max(i, this._geometries[a].getBoundaryDimension());
          return i;
        } }, { key: "reverseInternal", value: function() {
          for (var i = this._geometries.length, a = new pe(i), c = 0; c < i; c++) a.add(this._geometries[c].reverse());
          return this.getFactory().buildGeometry(a);
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_GEOMETRYCOLLECTION;
        } }, { key: "getDimension", value: function() {
          for (var i = se.FALSE, a = 0; a < this._geometries.length; a++) i = Math.max(i, this._geometries[a].getDimension());
          return i;
        } }, { key: "getLength", value: function() {
          for (var i = 0, a = 0; a < this._geometries.length; a++) i += this._geometries[a].getLength();
          return i;
        } }, { key: "getNumPoints", value: function() {
          for (var i = 0, a = 0; a < this._geometries.length; a++) i += this._geometries[a].getNumPoints();
          return i;
        } }, { key: "getNumGeometries", value: function() {
          return this._geometries.length;
        } }, { key: "compareToSameClass", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0], a = new mi(rt.asList(this._geometries)), c = new mi(rt.asList(i._geometries));
            return this.compare(a, c);
          }
          if (arguments.length === 2) {
            for (var g = arguments[1], m = arguments[0], y = this.getNumGeometries(), w = m.getNumGeometries(), A = 0; A < y && A < w; ) {
              var z = this.getGeometryN(A), X = m.getGeometryN(A), ee = z.compareToSameClass(X, g);
              if (ee !== 0) return ee;
              A++;
            }
            return A < y ? 1 : A < w ? -1 : 0;
          }
        } }, { key: "apply", value: function() {
          if (Ee(arguments[0], Ln)) for (var i = arguments[0], a = 0; a < this._geometries.length; a++) this._geometries[a].apply(i);
          else if (Ee(arguments[0], zr)) {
            var c = arguments[0];
            if (this._geometries.length === 0) return null;
            for (var g = 0; g < this._geometries.length && (this._geometries[g].apply(c), !c.isDone()); g++) ;
            c.isGeometryChanged() && this.geometryChanged();
          } else if (Ee(arguments[0], di)) {
            var m = arguments[0];
            m.filter(this);
            for (var y = 0; y < this._geometries.length; y++) this._geometries[y].apply(m);
          } else if (Ee(arguments[0], q)) {
            var w = arguments[0];
            w.filter(this);
            for (var A = 0; A < this._geometries.length; A++) this._geometries[A].apply(w);
          }
        } }, { key: "getBoundary", value: function() {
          return he.checkNotGeometryCollection(this), ie.shouldNeverReachHere(), null;
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_GEOMETRYCOLLECTION;
        } }, { key: "isEmpty", value: function() {
          for (var i = 0; i < this._geometries.length; i++) if (!this._geometries[i].isEmpty()) return !1;
          return !0;
        } }], [{ key: "constructor_", value: function() {
          if (this._geometries = null, arguments.length !== 0) {
            if (arguments.length === 2) {
              var i = arguments[0], a = arguments[1];
              if (he.constructor_.call(this, a), i === null && (i = []), he.hasNullElements(i)) throw new J("geometries must not contain null elements");
              this._geometries = i;
            }
          }
        } }]);
      })(he), vi = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "copyInternal", value: function() {
          for (var i = new Array(this._geometries.length).fill(null), a = 0; a < i.length; a++) i[a] = this._geometries[a].copy();
          return new n(i, this._factory);
        } }, { key: "isValid", value: function() {
          return !0;
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof he) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && M(n, "equalsExact", this, 1).call(this, i, a);
          }
          return M(n, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "getCoordinate", value: function() {
          if (arguments.length === 1 && Number.isInteger(arguments[0])) {
            var i = arguments[0];
            return this._geometries[i].getCoordinate();
          }
          return M(n, "getCoordinate", this, 1).apply(this, arguments);
        } }, { key: "getBoundaryDimension", value: function() {
          return se.FALSE;
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_MULTIPOINT;
        } }, { key: "getDimension", value: function() {
          return 0;
        } }, { key: "getBoundary", value: function() {
          return this.getFactory().createGeometryCollection();
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_MULTIPOINT;
        } }, { key: "interfaces_", get: function() {
          return [is];
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          Ve.constructor_.call(this, i, a);
        } }]);
      })(Ve), xr = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "copyInternal", value: function() {
          return new n(this._points.copy(), this._factory);
        } }, { key: "getBoundaryDimension", value: function() {
          return se.FALSE;
        } }, { key: "isClosed", value: function() {
          return !!this.isEmpty() || M(n, "isClosed", this, 1).call(this);
        } }, { key: "reverseInternal", value: function() {
          var i = this._points.copy();
          return Fe.reverse(i), this.getFactory().createLinearRing(i);
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_LINEARRING;
        } }, { key: "validateConstruction", value: function() {
          if (!this.isEmpty() && !M(n, "isClosed", this, 1).call(this)) throw new J("Points of LinearRing do not form a closed linestring");
          if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < n.MINIMUM_VALID_SIZE) throw new J("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_LINEARRING;
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          Wn.constructor_.call(this, i, a), this.validateConstruction();
        } }]);
      })(Wn);
      xr.MINIMUM_VALID_SIZE = 4;
      var Nn = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "setOrdinate", value: function(i, a) {
          switch (i) {
            case n.X:
              this.x = a;
              break;
            case n.Y:
              this.y = a;
              break;
            default:
              throw new J("Invalid ordinate index: " + i);
          }
        } }, { key: "getZ", value: function() {
          return V.NULL_ORDINATE;
        } }, { key: "getOrdinate", value: function(i) {
          switch (i) {
            case n.X:
              return this.x;
            case n.Y:
              return this.y;
          }
          throw new J("Invalid ordinate index: " + i);
        } }, { key: "setZ", value: function(i) {
          throw new J("CoordinateXY dimension 2 does not support z-ordinate");
        } }, { key: "copy", value: function() {
          return new n(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + ")";
        } }, { key: "setCoordinate", value: function(i) {
          this.x = i.x, this.y = i.y, this.z = i.getZ();
        } }], [{ key: "constructor_", value: function() {
          if (arguments.length === 0) V.constructor_.call(this);
          else if (arguments.length === 1) {
            if (arguments[0] instanceof n) {
              var i = arguments[0];
              V.constructor_.call(this, i.x, i.y);
            } else if (arguments[0] instanceof V) {
              var a = arguments[0];
              V.constructor_.call(this, a.x, a.y);
            }
          } else if (arguments.length === 2) {
            var c = arguments[0], g = arguments[1];
            V.constructor_.call(this, c, g, V.NULL_ORDINATE);
          }
        } }]);
      })(V);
      Nn.X = 0, Nn.Y = 1, Nn.Z = -1, Nn.M = -1;
      var Pn = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "getM", value: function() {
          return this._m;
        } }, { key: "setOrdinate", value: function(i, a) {
          switch (i) {
            case n.X:
              this.x = a;
              break;
            case n.Y:
              this.y = a;
              break;
            case n.M:
              this._m = a;
              break;
            default:
              throw new J("Invalid ordinate index: " + i);
          }
        } }, { key: "setM", value: function(i) {
          this._m = i;
        } }, { key: "getZ", value: function() {
          return V.NULL_ORDINATE;
        } }, { key: "getOrdinate", value: function(i) {
          switch (i) {
            case n.X:
              return this.x;
            case n.Y:
              return this.y;
            case n.M:
              return this._m;
          }
          throw new J("Invalid ordinate index: " + i);
        } }, { key: "setZ", value: function(i) {
          throw new J("CoordinateXY dimension 2 does not support z-ordinate");
        } }, { key: "copy", value: function() {
          return new n(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + " m=" + this.getM() + ")";
        } }, { key: "setCoordinate", value: function(i) {
          this.x = i.x, this.y = i.y, this.z = i.getZ(), this._m = i.getM();
        } }], [{ key: "constructor_", value: function() {
          if (this._m = null, arguments.length === 0) V.constructor_.call(this), this._m = 0;
          else if (arguments.length === 1) {
            if (arguments[0] instanceof n) {
              var i = arguments[0];
              V.constructor_.call(this, i.x, i.y), this._m = i._m;
            } else if (arguments[0] instanceof V) {
              var a = arguments[0];
              V.constructor_.call(this, a.x, a.y), this._m = this.getM();
            }
          } else if (arguments.length === 3) {
            var c = arguments[0], g = arguments[1], m = arguments[2];
            V.constructor_.call(this, c, g, V.NULL_ORDINATE), this._m = m;
          }
        } }]);
      })(V);
      Pn.X = 0, Pn.Y = 1, Pn.Z = -1, Pn.M = 2;
      var ss = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "getM", value: function() {
          return this._m;
        } }, { key: "setOrdinate", value: function(i, a) {
          switch (i) {
            case V.X:
              this.x = a;
              break;
            case V.Y:
              this.y = a;
              break;
            case V.Z:
              this.z = a;
              break;
            case V.M:
              this._m = a;
              break;
            default:
              throw new J("Invalid ordinate index: " + i);
          }
        } }, { key: "setM", value: function(i) {
          this._m = i;
        } }, { key: "getOrdinate", value: function(i) {
          switch (i) {
            case V.X:
              return this.x;
            case V.Y:
              return this.y;
            case V.Z:
              return this.getZ();
            case V.M:
              return this.getM();
          }
          throw new J("Invalid ordinate index: " + i);
        } }, { key: "copy", value: function() {
          return new n(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + ", " + this.getZ() + " m=" + this.getM() + ")";
        } }, { key: "setCoordinate", value: function(i) {
          this.x = i.x, this.y = i.y, this.z = i.getZ(), this._m = i.getM();
        } }], [{ key: "constructor_", value: function() {
          if (this._m = null, arguments.length === 0) V.constructor_.call(this), this._m = 0;
          else if (arguments.length === 1) {
            if (arguments[0] instanceof n) {
              var i = arguments[0];
              V.constructor_.call(this, i), this._m = i._m;
            } else if (arguments[0] instanceof V) {
              var a = arguments[0];
              V.constructor_.call(this, a), this._m = this.getM();
            }
          } else if (arguments.length === 4) {
            var c = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3];
            V.constructor_.call(this, c, g, m), this._m = y;
          }
        } }]);
      })(V), de = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "measures", value: function(n) {
          return n instanceof Nn ? 0 : n instanceof Pn || n instanceof ss ? 1 : 0;
        } }, { key: "dimension", value: function(n) {
          return n instanceof Nn ? 2 : n instanceof Pn ? 3 : n instanceof ss ? 4 : 3;
        } }, { key: "create", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            return o.create(n, 0);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            return i === 2 ? new Nn() : i === 3 && a === 0 ? new V() : i === 3 && a === 1 ? new Pn() : i === 4 && a === 1 ? new ss() : new V();
          }
        } }]);
      })(), G = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "getCoordinate", value: function(i) {
          return this.get(i);
        } }, { key: "addAll", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "boolean" && Ee(arguments[0], Ce)) {
            for (var i = arguments[1], a = !1, c = arguments[0].iterator(); c.hasNext(); ) this.add(c.next(), i), a = !0;
            return a;
          }
          return M(n, "addAll", this, 1).apply(this, arguments);
        } }, { key: "clone", value: function() {
          for (var i = M(n, "clone", this, 1).call(this), a = 0; a < this.size(); a++) i.add(a, this.get(a).clone());
          return i;
        } }, { key: "toCoordinateArray", value: function() {
          if (arguments.length === 0) return this.toArray(n.coordArrayType);
          if (arguments.length === 1) {
            if (arguments[0]) return this.toArray(n.coordArrayType);
            for (var i = this.size(), a = new Array(i).fill(null), c = 0; c < i; c++) a[c] = this.get(i - c - 1);
            return a;
          }
        } }, { key: "add", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0];
            return M(n, "add", this, 1).call(this, i);
          }
          if (arguments.length === 2) {
            if (arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
              var a = arguments[0], c = arguments[1];
              return this.add(a, c, !0), !0;
            }
            if (arguments[0] instanceof V && typeof arguments[1] == "boolean") {
              var g = arguments[0];
              if (!arguments[1] && this.size() >= 1 && this.get(this.size() - 1).equals2D(g)) return null;
              M(n, "add", this, 1).call(this, g);
            } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
              var m = arguments[0], y = arguments[1];
              return this.add(m, y), !0;
            }
          } else if (arguments.length === 3) {
            if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
              var w = arguments[0], A = arguments[1];
              if (arguments[2]) for (var z = 0; z < w.length; z++) this.add(w[z], A);
              else for (var X = w.length - 1; X >= 0; X--) this.add(w[X], A);
              return !0;
            }
            if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof V) {
              var ee = arguments[0], ce = arguments[1];
              if (!arguments[2]) {
                var ge = this.size();
                if (ge > 0 && (ee > 0 && this.get(ee - 1).equals2D(ce) || ee < ge && this.get(ee).equals2D(ce)))
                  return null;
              }
              M(n, "add", this, 1).call(this, ee, ce);
            }
          } else if (arguments.length === 4) {
            var me = arguments[0], Te = arguments[1], be = arguments[2], Ge = arguments[3], ft = 1;
            be > Ge && (ft = -1);
            for (var pt = be; pt !== Ge; pt += ft) this.add(me[pt], Te);
            return !0;
          }
        } }, { key: "closeRing", value: function() {
          if (this.size() > 0) {
            var i = this.get(0).copy();
            this.add(i, !1);
          }
        } }], [{ key: "constructor_", value: function() {
          if (arguments.length !== 0) {
            if (arguments.length === 1) {
              var i = arguments[0];
              this.ensureCapacity(i.length), this.add(i, !0);
            } else if (arguments.length === 2) {
              var a = arguments[0], c = arguments[1];
              this.ensureCapacity(a.length), this.add(a, c);
            }
          }
        } }]);
      })(pe);
      G.coordArrayType = new Array(0).fill(null);
      var Q = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "isRing", value: function(n) {
          return !(n.length < 4) && !!n[0].equals2D(n[n.length - 1]);
        } }, { key: "ptNotInList", value: function(n, i) {
          for (var a = 0; a < n.length; a++) {
            var c = n[a];
            if (o.indexOf(c, i) < 0) return c;
          }
          return null;
        } }, { key: "scroll", value: function(n, i) {
          var a = o.indexOf(i, n);
          if (a < 0) return null;
          var c = new Array(n.length).fill(null);
          Ot.arraycopy(n, a, c, 0, n.length - a), Ot.arraycopy(n, 0, c, n.length - a, a), Ot.arraycopy(c, 0, n, 0, n.length);
        } }, { key: "equals", value: function() {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            if (n === i) return !0;
            if (n === null || i === null || n.length !== i.length) return !1;
            for (var a = 0; a < n.length; a++) if (!n[a].equals(i[a])) return !1;
            return !0;
          }
          if (arguments.length === 3) {
            var c = arguments[0], g = arguments[1], m = arguments[2];
            if (c === g) return !0;
            if (c === null || g === null || c.length !== g.length) return !1;
            for (var y = 0; y < c.length; y++) if (m.compare(c[y], g[y]) !== 0) return !1;
            return !0;
          }
        } }, { key: "intersection", value: function(n, i) {
          for (var a = new G(), c = 0; c < n.length; c++) i.intersects(n[c]) && a.add(n[c], !0);
          return a.toCoordinateArray();
        } }, { key: "measures", value: function(n) {
          if (n === null || n.length === 0) return 0;
          var i, a = 0, c = p(n);
          try {
            for (c.s(); !(i = c.n()).done; ) {
              var g = i.value;
              a = Math.max(a, de.measures(g));
            }
          } catch (m) {
            c.e(m);
          } finally {
            c.f();
          }
          return a;
        } }, { key: "hasRepeatedPoints", value: function(n) {
          for (var i = 1; i < n.length; i++) if (n[i - 1].equals(n[i])) return !0;
          return !1;
        } }, { key: "removeRepeatedPoints", value: function(n) {
          return o.hasRepeatedPoints(n) ? new G(n, !1).toCoordinateArray() : n;
        } }, { key: "reverse", value: function(n) {
          for (var i = n.length - 1, a = Math.trunc(i / 2), c = 0; c <= a; c++) {
            var g = n[c];
            n[c] = n[i - c], n[i - c] = g;
          }
        } }, { key: "removeNull", value: function(n) {
          for (var i = 0, a = 0; a < n.length; a++) n[a] !== null && i++;
          var c = new Array(i).fill(null);
          if (i === 0) return c;
          for (var g = 0, m = 0; m < n.length; m++) n[m] !== null && (c[g++] = n[m]);
          return c;
        } }, { key: "copyDeep", value: function() {
          if (arguments.length === 1) {
            for (var n = arguments[0], i = new Array(n.length).fill(null), a = 0; a < n.length; a++) i[a] = n[a].copy();
            return i;
          }
          if (arguments.length === 5) for (var c = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3], w = arguments[4], A = 0; A < w; A++) m[y + A] = c[g + A].copy();
        } }, { key: "isEqualReversed", value: function(n, i) {
          for (var a = 0; a < n.length; a++) {
            var c = n[a], g = i[n.length - a - 1];
            if (c.compareTo(g) !== 0) return !1;
          }
          return !0;
        } }, { key: "envelope", value: function(n) {
          for (var i = new Ie(), a = 0; a < n.length; a++) i.expandToInclude(n[a]);
          return i;
        } }, { key: "toCoordinateArray", value: function(n) {
          return n.toArray(o.coordArrayType);
        } }, { key: "dimension", value: function(n) {
          if (n === null || n.length === 0) return 3;
          var i, a = 0, c = p(n);
          try {
            for (c.s(); !(i = c.n()).done; ) {
              var g = i.value;
              a = Math.max(a, de.dimension(g));
            }
          } catch (m) {
            c.e(m);
          } finally {
            c.f();
          }
          return a;
        } }, { key: "atLeastNCoordinatesOrNothing", value: function(n, i) {
          return i.length >= n ? i : [];
        } }, { key: "indexOf", value: function(n, i) {
          for (var a = 0; a < i.length; a++) if (n.equals(i[a])) return a;
          return -1;
        } }, { key: "increasingDirection", value: function(n) {
          for (var i = 0; i < Math.trunc(n.length / 2); i++) {
            var a = n.length - 1 - i, c = n[i].compareTo(n[a]);
            if (c !== 0) return c;
          }
          return 1;
        } }, { key: "compare", value: function(n, i) {
          for (var a = 0; a < n.length && a < i.length; ) {
            var c = n[a].compareTo(i[a]);
            if (c !== 0) return c;
            a++;
          }
          return a < i.length ? -1 : a < n.length ? 1 : 0;
        } }, { key: "minCoordinate", value: function(n) {
          for (var i = null, a = 0; a < n.length; a++) (i === null || i.compareTo(n[a]) > 0) && (i = n[a]);
          return i;
        } }, { key: "extract", value: function(n, i, a) {
          i = Tn.clamp(i, 0, n.length);
          var c = (a = Tn.clamp(a, -1, n.length)) - i + 1;
          a < 0 && (c = 0), i >= n.length && (c = 0), a < i && (c = 0);
          var g = new Array(c).fill(null);
          if (c === 0) return g;
          for (var m = 0, y = i; y <= a; y++) g[m++] = n[y];
          return g;
        } }]);
      })(), fe = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "compare", value: function(o, n) {
          var i = o, a = n;
          return Q.compare(i, a);
        } }, { key: "interfaces_", get: function() {
          return [ne];
        } }]);
      })(), Ue = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "compare", value: function(o, n) {
          var i = o, a = n;
          if (i.length < a.length) return -1;
          if (i.length > a.length) return 1;
          if (i.length === 0) return 0;
          var c = Q.compare(i, a);
          return Q.isEqualReversed(i, a) ? 0 : c;
        } }, { key: "OLDcompare", value: function(o, n) {
          var i = o, a = n;
          if (i.length < a.length) return -1;
          if (i.length > a.length) return 1;
          if (i.length === 0) return 0;
          for (var c = Q.increasingDirection(i), g = Q.increasingDirection(a), m = c > 0 ? 0 : i.length - 1, y = g > 0 ? 0 : i.length - 1, w = 0; w < i.length; w++) {
            var A = i[m].compareTo(a[y]);
            if (A !== 0) return A;
            m += c, y += g;
          }
          return 0;
        } }, { key: "interfaces_", get: function() {
          return [ne];
        } }]);
      })();
      Q.ForwardComparator = fe, Q.BidirectionalComparator = Ue, Q.coordArrayType = new Array(0).fill(null);
      var Qe = (function() {
        return h((function o(n) {
          u(this, o), this.str = n;
        }), [{ key: "append", value: function(o) {
          this.str += o;
        } }, { key: "setCharAt", value: function(o, n) {
          this.str = this.str.substr(0, o) + n + this.str.substr(o + 1);
        } }, { key: "toString", value: function() {
          return this.str;
        } }]);
      })(), ze = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getM", value: function(n) {
          return this.hasM() ? this._coordinates[n].getM() : Z.NaN;
        } }, { key: "setOrdinate", value: function(n, i, a) {
          switch (i) {
            case Me.X:
              this._coordinates[n].x = a;
              break;
            case Me.Y:
              this._coordinates[n].y = a;
              break;
            default:
              this._coordinates[n].setOrdinate(i, a);
          }
        } }, { key: "getZ", value: function(n) {
          return this.hasZ() ? this._coordinates[n].getZ() : Z.NaN;
        } }, { key: "size", value: function() {
          return this._coordinates.length;
        } }, { key: "getOrdinate", value: function(n, i) {
          switch (i) {
            case Me.X:
              return this._coordinates[n].x;
            case Me.Y:
              return this._coordinates[n].y;
            default:
              return this._coordinates[n].getOrdinate(i);
          }
        } }, { key: "getCoordinate", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            return this._coordinates[n];
          }
          if (arguments.length === 2) {
            var i = arguments[0];
            arguments[1].setCoordinate(this._coordinates[i]);
          }
        } }, { key: "getCoordinateCopy", value: function(n) {
          var i = this.createCoordinate();
          return i.setCoordinate(this._coordinates[n]), i;
        } }, { key: "createCoordinate", value: function() {
          return de.create(this.getDimension(), this.getMeasures());
        } }, { key: "getDimension", value: function() {
          return this._dimension;
        } }, { key: "getX", value: function(n) {
          return this._coordinates[n].x;
        } }, { key: "getMeasures", value: function() {
          return this._measures;
        } }, { key: "expandEnvelope", value: function(n) {
          for (var i = 0; i < this._coordinates.length; i++) n.expandToInclude(this._coordinates[i]);
          return n;
        } }, { key: "copy", value: function() {
          for (var n = new Array(this.size()).fill(null), i = 0; i < this._coordinates.length; i++) {
            var a = this.createCoordinate();
            a.setCoordinate(this._coordinates[i]), n[i] = a;
          }
          return new o(n, this._dimension, this._measures);
        } }, { key: "toString", value: function() {
          if (this._coordinates.length > 0) {
            var n = new Qe(17 * this._coordinates.length);
            n.append("("), n.append(this._coordinates[0]);
            for (var i = 1; i < this._coordinates.length; i++) n.append(", "), n.append(this._coordinates[i]);
            return n.append(")"), n.toString();
          }
          return "()";
        } }, { key: "getY", value: function(n) {
          return this._coordinates[n].y;
        } }, { key: "toCoordinateArray", value: function() {
          return this._coordinates;
        } }, { key: "interfaces_", get: function() {
          return [Me, S];
        } }], [{ key: "constructor_", value: function() {
          if (this._dimension = 3, this._measures = 0, this._coordinates = null, arguments.length === 1) {
            if (arguments[0] instanceof Array) {
              var n = arguments[0];
              o.constructor_.call(this, n, Q.dimension(n), Q.measures(n));
            } else if (Number.isInteger(arguments[0])) {
              var i = arguments[0];
              this._coordinates = new Array(i).fill(null);
              for (var a = 0; a < i; a++) this._coordinates[a] = new V();
            } else if (Ee(arguments[0], Me)) {
              var c = arguments[0];
              if (c === null) return this._coordinates = new Array(0).fill(null), null;
              this._dimension = c.getDimension(), this._measures = c.getMeasures(), this._coordinates = new Array(c.size()).fill(null);
              for (var g = 0; g < this._coordinates.length; g++) this._coordinates[g] = c.getCoordinateCopy(g);
            }
          } else if (arguments.length === 2) {
            if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
              var m = arguments[0], y = arguments[1];
              o.constructor_.call(this, m, y, Q.measures(m));
            } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
              var w = arguments[0], A = arguments[1];
              this._coordinates = new Array(w).fill(null), this._dimension = A;
              for (var z = 0; z < w; z++) this._coordinates[z] = de.create(A);
            }
          } else if (arguments.length === 3) {
            if (Number.isInteger(arguments[2]) && arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
              var X = arguments[0], ee = arguments[1], ce = arguments[2];
              this._dimension = ee, this._measures = ce, this._coordinates = X === null ? new Array(0).fill(null) : X;
            } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
              var ge = arguments[0], me = arguments[1], Te = arguments[2];
              this._coordinates = new Array(ge).fill(null), this._dimension = me, this._measures = Te;
              for (var be = 0; be < ge; be++) this._coordinates[be] = this.createCoordinate();
            }
          }
        } }]);
      })(), it = (function() {
        function o() {
          u(this, o);
        }
        return h(o, [{ key: "readResolve", value: function() {
          return o.instance();
        } }, { key: "create", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof Array) return new ze(arguments[0]);
            if (Ee(arguments[0], Me)) return new ze(arguments[0]);
          } else {
            if (arguments.length === 2) {
              var n = arguments[1];
              return n > 3 && (n = 3), n < 2 && (n = 2), new ze(arguments[0], n);
            }
            if (arguments.length === 3) {
              var i = arguments[2], a = arguments[1] - i;
              return i > 1 && (i = 1), a > 3 && (a = 3), a < 2 && (a = 2), new ze(arguments[0], a + i, i);
            }
          }
        } }, { key: "interfaces_", get: function() {
          return [ua, S];
        } }], [{ key: "instance", value: function() {
          return o.instanceObject;
        } }]);
      })();
      it.instanceObject = new it();
      var Gt = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "copyInternal", value: function() {
          for (var i = new Array(this._geometries.length).fill(null), a = 0; a < i.length; a++) i[a] = this._geometries[a].copy();
          return new n(i, this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof he) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && M(n, "equalsExact", this, 1).call(this, i, a);
          }
          return M(n, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "getBoundaryDimension", value: function() {
          return 1;
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_MULTIPOLYGON;
        } }, { key: "getDimension", value: function() {
          return 2;
        } }, { key: "getBoundary", value: function() {
          if (this.isEmpty()) return this.getFactory().createMultiLineString();
          for (var i = new pe(), a = 0; a < this._geometries.length; a++) for (var c = this._geometries[a].getBoundary(), g = 0; g < c.getNumGeometries(); g++) i.add(c.getGeometryN(g));
          var m = new Array(i.size()).fill(null);
          return this.getFactory().createMultiLineString(i.toArray(m));
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_MULTIPOLYGON;
        } }, { key: "interfaces_", get: function() {
          return [Cn];
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          Ve.constructor_.call(this, i, a);
        } }]);
      })(Ve), jn = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "get", value: function() {
        } }, { key: "put", value: function() {
        } }, { key: "size", value: function() {
        } }, { key: "values", value: function() {
        } }, { key: "entrySet", value: function() {
        } }]);
      })(), as = (function(o) {
        function n() {
          var i;
          return u(this, n), (i = s(this, n)).map = /* @__PURE__ */ new Map(), i;
        }
        return _(n, o), h(n, [{ key: "get", value: function(i) {
          return this.map.get(i) || null;
        } }, { key: "put", value: function(i, a) {
          return this.map.set(i, a), a;
        } }, { key: "values", value: function() {
          for (var i = new pe(), a = this.map.values(), c = a.next(); !c.done; ) i.add(c.value), c = a.next();
          return i;
        } }, { key: "entrySet", value: function() {
          var i = new Gr();
          return this.map.entries().forEach((function(a) {
            return i.add(a);
          })), i;
        } }, { key: "size", value: function() {
          return this.map.size();
        } }]);
      })(jn), Re = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "equals", value: function(n) {
          if (!(n instanceof o)) return !1;
          var i = n;
          return this._modelType === i._modelType && this._scale === i._scale;
        } }, { key: "compareTo", value: function(n) {
          var i = n, a = this.getMaximumSignificantDigits(), c = i.getMaximumSignificantDigits();
          return hn.compare(a, c);
        } }, { key: "getScale", value: function() {
          return this._scale;
        } }, { key: "isFloating", value: function() {
          return this._modelType === o.FLOATING || this._modelType === o.FLOATING_SINGLE;
        } }, { key: "getType", value: function() {
          return this._modelType;
        } }, { key: "toString", value: function() {
          var n = "UNKNOWN";
          return this._modelType === o.FLOATING ? n = "Floating" : this._modelType === o.FLOATING_SINGLE ? n = "Floating-Single" : this._modelType === o.FIXED && (n = "Fixed (Scale=" + this.getScale() + ")"), n;
        } }, { key: "makePrecise", value: function() {
          if (typeof arguments[0] == "number") {
            var n = arguments[0];
            return Z.isNaN(n) || this._modelType === o.FLOATING_SINGLE ? n : this._modelType === o.FIXED ? Math.round(n * this._scale) / this._scale : n;
          }
          if (arguments[0] instanceof V) {
            var i = arguments[0];
            if (this._modelType === o.FLOATING) return null;
            i.x = this.makePrecise(i.x), i.y = this.makePrecise(i.y);
          }
        } }, { key: "getMaximumSignificantDigits", value: function() {
          var n = 16;
          return this._modelType === o.FLOATING ? n = 16 : this._modelType === o.FLOATING_SINGLE ? n = 6 : this._modelType === o.FIXED && (n = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), n;
        } }, { key: "setScale", value: function(n) {
          this._scale = Math.abs(n);
        } }, { key: "interfaces_", get: function() {
          return [S, W];
        } }], [{ key: "constructor_", value: function() {
          if (this._modelType = null, this._scale = null, arguments.length === 0) this._modelType = o.FLOATING;
          else if (arguments.length === 1) {
            if (arguments[0] instanceof Zn) {
              var n = arguments[0];
              this._modelType = n, n === o.FIXED && this.setScale(1);
            } else if (typeof arguments[0] == "number") {
              var i = arguments[0];
              this._modelType = o.FIXED, this.setScale(i);
            } else if (arguments[0] instanceof o) {
              var a = arguments[0];
              this._modelType = a._modelType, this._scale = a._scale;
            }
          }
        } }, { key: "mostPrecise", value: function(n, i) {
          return n.compareTo(i) >= 0 ? n : i;
        } }]);
      })(), Zn = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "readResolve", value: function() {
          return o.nameToTypeMap.get(this._name);
        } }, { key: "toString", value: function() {
          return this._name;
        } }, { key: "interfaces_", get: function() {
          return [S];
        } }], [{ key: "constructor_", value: function() {
          this._name = null;
          var n = arguments[0];
          this._name = n, o.nameToTypeMap.put(n, this);
        } }]);
      })();
      Zn.nameToTypeMap = new as(), Re.Type = Zn, Re.FIXED = new Zn("FIXED"), Re.FLOATING = new Zn("FLOATING"), Re.FLOATING_SINGLE = new Zn("FLOATING SINGLE"), Re.maximumPreciseValue = 9007199254740992;
      var yi = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "copyInternal", value: function() {
          for (var i = new Array(this._geometries.length).fill(null), a = 0; a < i.length; a++) i[a] = this._geometries[a].copy();
          return new n(i, this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof he) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && M(n, "equalsExact", this, 1).call(this, i, a);
          }
          return M(n, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "getBoundaryDimension", value: function() {
          return this.isClosed() ? se.FALSE : 0;
        } }, { key: "isClosed", value: function() {
          if (this.isEmpty()) return !1;
          for (var i = 0; i < this._geometries.length; i++) if (!this._geometries[i].isClosed()) return !1;
          return !0;
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_MULTILINESTRING;
        } }, { key: "getDimension", value: function() {
          return 1;
        } }, { key: "getBoundary", value: function() {
          throw new ke();
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_MULTILINESTRING;
        } }, { key: "interfaces_", get: function() {
          return [la];
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          Ve.constructor_.call(this, i, a);
        } }]);
      })(Ve), _i = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "createEmpty", value: function(n) {
          switch (n) {
            case -1:
              return this.createGeometryCollection();
            case 0:
              return this.createPoint();
            case 1:
              return this.createLineString();
            case 2:
              return this.createPolygon();
            default:
              throw new J("Invalid dimension: " + n);
          }
        } }, { key: "toGeometry", value: function(n) {
          return n.isNull() ? this.createPoint() : n.getMinX() === n.getMaxX() && n.getMinY() === n.getMaxY() ? this.createPoint(new V(n.getMinX(), n.getMinY())) : n.getMinX() === n.getMaxX() || n.getMinY() === n.getMaxY() ? this.createLineString([new V(n.getMinX(), n.getMinY()), new V(n.getMaxX(), n.getMaxY())]) : this.createPolygon(this.createLinearRing([new V(n.getMinX(), n.getMinY()), new V(n.getMinX(), n.getMaxY()), new V(n.getMaxX(), n.getMaxY()), new V(n.getMaxX(), n.getMinY()), new V(n.getMinX(), n.getMinY())]), null);
        } }, { key: "createLineString", value: function() {
          if (arguments.length === 0) return this.createLineString(this.getCoordinateSequenceFactory().create([]));
          if (arguments.length === 1) {
            if (arguments[0] instanceof Array) {
              var n = arguments[0];
              return this.createLineString(n !== null ? this.getCoordinateSequenceFactory().create(n) : null);
            }
            if (Ee(arguments[0], Me)) return new Wn(arguments[0], this);
          }
        } }, { key: "createMultiLineString", value: function() {
          return arguments.length === 0 ? new yi(null, this) : arguments.length === 1 ? new yi(arguments[0], this) : void 0;
        } }, { key: "buildGeometry", value: function(n) {
          for (var i = null, a = !1, c = !1, g = n.iterator(); g.hasNext(); ) {
            var m = g.next(), y = m.getTypeCode();
            i === null && (i = y), y !== i && (a = !0), m instanceof Ve && (c = !0);
          }
          if (i === null) return this.createGeometryCollection();
          if (a || c) return this.createGeometryCollection(o.toGeometryArray(n));
          var w = n.iterator().next();
          if (n.size() > 1) {
            if (w instanceof qr) return this.createMultiPolygon(o.toPolygonArray(n));
            if (w instanceof Wn) return this.createMultiLineString(o.toLineStringArray(n));
            if (w instanceof pi) return this.createMultiPoint(o.toPointArray(n));
            ie.shouldNeverReachHere("Unhandled geometry type: " + w.getGeometryType());
          }
          return w;
        } }, { key: "createMultiPointFromCoords", value: function(n) {
          return this.createMultiPoint(n !== null ? this.getCoordinateSequenceFactory().create(n) : null);
        } }, { key: "createPoint", value: function() {
          if (arguments.length === 0) return this.createPoint(this.getCoordinateSequenceFactory().create([]));
          if (arguments.length === 1) {
            if (arguments[0] instanceof V) {
              var n = arguments[0];
              return this.createPoint(n !== null ? this.getCoordinateSequenceFactory().create([n]) : null);
            }
            if (Ee(arguments[0], Me)) return new pi(arguments[0], this);
          }
        } }, { key: "getCoordinateSequenceFactory", value: function() {
          return this._coordinateSequenceFactory;
        } }, { key: "createPolygon", value: function() {
          if (arguments.length === 0) return this.createPolygon(null, null);
          if (arguments.length === 1) {
            if (Ee(arguments[0], Me)) {
              var n = arguments[0];
              return this.createPolygon(this.createLinearRing(n));
            }
            if (arguments[0] instanceof Array) {
              var i = arguments[0];
              return this.createPolygon(this.createLinearRing(i));
            }
            if (arguments[0] instanceof xr) {
              var a = arguments[0];
              return this.createPolygon(a, null);
            }
          } else if (arguments.length === 2)
            return new qr(arguments[0], arguments[1], this);
        } }, { key: "getSRID", value: function() {
          return this._SRID;
        } }, { key: "createGeometryCollection", value: function() {
          return arguments.length === 0 ? new Ve(null, this) : arguments.length === 1 ? new Ve(arguments[0], this) : void 0;
        } }, { key: "getPrecisionModel", value: function() {
          return this._precisionModel;
        } }, { key: "createLinearRing", value: function() {
          if (arguments.length === 0) return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
          if (arguments.length === 1) {
            if (arguments[0] instanceof Array) {
              var n = arguments[0];
              return this.createLinearRing(n !== null ? this.getCoordinateSequenceFactory().create(n) : null);
            }
            if (Ee(arguments[0], Me)) return new xr(arguments[0], this);
          }
        } }, { key: "createMultiPolygon", value: function() {
          return arguments.length === 0 ? new Gt(null, this) : arguments.length === 1 ? new Gt(arguments[0], this) : void 0;
        } }, { key: "createMultiPoint", value: function() {
          if (arguments.length === 0) return new vi(null, this);
          if (arguments.length === 1) {
            if (arguments[0] instanceof Array) return new vi(arguments[0], this);
            if (Ee(arguments[0], Me)) {
              var n = arguments[0];
              if (n === null) return this.createMultiPoint(new Array(0).fill(null));
              for (var i = new Array(n.size()).fill(null), a = 0; a < n.size(); a++) {
                var c = this.getCoordinateSequenceFactory().create(1, n.getDimension(), n.getMeasures());
                Fe.copy(n, a, c, 0, 1), i[a] = this.createPoint(c);
              }
              return this.createMultiPoint(i);
            }
          }
        } }, { key: "interfaces_", get: function() {
          return [S];
        } }], [{ key: "constructor_", value: function() {
          if (this._precisionModel = null, this._coordinateSequenceFactory = null, this._SRID = null, arguments.length === 0) o.constructor_.call(this, new Re(), 0);
          else if (arguments.length === 1) {
            if (Ee(arguments[0], ua)) {
              var n = arguments[0];
              o.constructor_.call(this, new Re(), 0, n);
            } else if (arguments[0] instanceof Re) {
              var i = arguments[0];
              o.constructor_.call(this, i, 0, o.getDefaultCoordinateSequenceFactory());
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            o.constructor_.call(this, a, c, o.getDefaultCoordinateSequenceFactory());
          } else if (arguments.length === 3) {
            var g = arguments[0], m = arguments[1], y = arguments[2];
            this._precisionModel = g, this._coordinateSequenceFactory = y, this._SRID = m;
          }
        } }, { key: "toMultiPolygonArray", value: function(n) {
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "toGeometryArray", value: function(n) {
          if (n === null) return null;
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "getDefaultCoordinateSequenceFactory", value: function() {
          return it.instance();
        } }, { key: "toMultiLineStringArray", value: function(n) {
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "toLineStringArray", value: function(n) {
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "toMultiPointArray", value: function(n) {
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "toLinearRingArray", value: function(n) {
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "toPointArray", value: function(n) {
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "toPolygonArray", value: function(n) {
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "createPointFromInternalCoord", value: function(n, i) {
          return i.getPrecisionModel().makePrecise(n), i.getFactory().createPoint(n);
        } }]);
      })(), Oo = "XY", Dp = "XYZ", Fp = "XYM", Gp = "XYZM", ac = { POINT: "Point", LINE_STRING: "LineString", LINEAR_RING: "LinearRing", POLYGON: "Polygon", MULTI_POINT: "MultiPoint", MULTI_LINE_STRING: "MultiLineString", MULTI_POLYGON: "MultiPolygon", GEOMETRY_COLLECTION: "GeometryCollection", CIRCLE: "Circle" }, oc = "EMPTY", ga = 1, Kn = 2, wr = 3, uc = 4, Ei = 5, Bp = 6;
      for (var Up in ac) ac[Up].toUpperCase();
      var zp = (function() {
        return h((function o(n) {
          u(this, o), this.wkt = n, this.index_ = -1;
        }), [{ key: "isAlpha_", value: function(o) {
          return o >= "a" && o <= "z" || o >= "A" && o <= "Z";
        } }, { key: "isNumeric_", value: function(o, n) {
          return o >= "0" && o <= "9" || o == "." && !(n !== void 0 && n);
        } }, { key: "isWhiteSpace_", value: function(o) {
          return o == " " || o == "	" || o == "\r" || o == `
`;
        } }, { key: "nextChar_", value: function() {
          return this.wkt.charAt(++this.index_);
        } }, { key: "nextToken", value: function() {
          var o, n = this.nextChar_(), i = this.index_, a = n;
          if (n == "(") o = Kn;
          else if (n == ",") o = Ei;
          else if (n == ")") o = wr;
          else if (this.isNumeric_(n) || n == "-") o = uc, a = this.readNumber_();
          else if (this.isAlpha_(n)) o = ga, a = this.readText_();
          else {
            if (this.isWhiteSpace_(n)) return this.nextToken();
            if (n !== "") throw new Error("Unexpected character: " + n);
            o = Bp;
          }
          return { position: i, value: a, type: o };
        } }, { key: "readNumber_", value: function() {
          var o, n = this.index_, i = !1, a = !1;
          do
            o == "." ? i = !0 : o != "e" && o != "E" || (a = !0), o = this.nextChar_();
          while (this.isNumeric_(o, i) || !a && (o == "e" || o == "E") || a && (o == "-" || o == "+"));
          return parseFloat(this.wkt.substring(n, this.index_--));
        } }, { key: "readText_", value: function() {
          var o, n = this.index_;
          do
            o = this.nextChar_();
          while (this.isAlpha_(o));
          return this.wkt.substring(n, this.index_--).toUpperCase();
        } }]);
      })(), qp = (function() {
        return h((function o(n, i) {
          u(this, o), this.lexer_ = n, this.token_, this.layout_ = Oo, this.factory = i;
        }), [{ key: "consume_", value: function() {
          this.token_ = this.lexer_.nextToken();
        } }, { key: "isTokenType", value: function(o) {
          return this.token_.type == o;
        } }, { key: "match", value: function(o) {
          var n = this.isTokenType(o);
          return n && this.consume_(), n;
        } }, { key: "parse", value: function() {
          return this.consume_(), this.parseGeometry_();
        } }, { key: "parseGeometryLayout_", value: function() {
          var o = Oo, n = this.token_;
          if (this.isTokenType(ga)) {
            var i = n.value;
            i === "Z" ? o = Dp : i === "M" ? o = Fp : i === "ZM" && (o = Gp), o !== Oo && this.consume_();
          }
          return o;
        } }, { key: "parseGeometryCollectionText_", value: function() {
          if (this.match(Kn)) {
            var o = [];
            do
              o.push(this.parseGeometry_());
            while (this.match(Ei));
            if (this.match(wr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePointText_", value: function() {
          if (this.match(Kn)) {
            var o = this.parsePoint_();
            if (this.match(wr)) return o;
          } else if (this.isEmptyGeometry_()) return null;
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseLineStringText_", value: function() {
          if (this.match(Kn)) {
            var o = this.parsePointList_();
            if (this.match(wr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePolygonText_", value: function() {
          if (this.match(Kn)) {
            var o = this.parseLineStringTextList_();
            if (this.match(wr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseMultiPointText_", value: function() {
          var o;
          if (this.match(Kn)) {
            if (o = this.token_.type == Kn ? this.parsePointTextList_() : this.parsePointList_(), this.match(wr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseMultiLineStringText_", value: function() {
          if (this.match(Kn)) {
            var o = this.parseLineStringTextList_();
            if (this.match(wr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseMultiPolygonText_", value: function() {
          if (this.match(Kn)) {
            var o = this.parsePolygonTextList_();
            if (this.match(wr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePoint_", value: function() {
          for (var o = [], n = this.layout_.length, i = 0; i < n; ++i) {
            var a = this.token_;
            if (!this.match(uc)) break;
            o.push(a.value);
          }
          if (o.length == n) return o;
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePointList_", value: function() {
          for (var o = [this.parsePoint_()]; this.match(Ei); ) o.push(this.parsePoint_());
          return o;
        } }, { key: "parsePointTextList_", value: function() {
          for (var o = [this.parsePointText_()]; this.match(Ei); ) o.push(this.parsePointText_());
          return o;
        } }, { key: "parseLineStringTextList_", value: function() {
          for (var o = [this.parseLineStringText_()]; this.match(Ei); ) o.push(this.parseLineStringText_());
          return o;
        } }, { key: "parsePolygonTextList_", value: function() {
          for (var o = [this.parsePolygonText_()]; this.match(Ei); ) o.push(this.parsePolygonText_());
          return o;
        } }, { key: "isEmptyGeometry_", value: function() {
          var o = this.isTokenType(ga) && this.token_.value == oc;
          return o && this.consume_(), o;
        } }, { key: "formatErrorMessage_", value: function() {
          return "Unexpected `" + this.token_.value + "` at position " + this.token_.position + " in `" + this.lexer_.wkt + "`";
        } }, { key: "parseGeometry_", value: function() {
          var o = this.factory, n = function(me) {
            return l(V, R(me));
          }, i = function(me) {
            var Te = me.map((function(be) {
              return o.createLinearRing(be.map(n));
            }));
            return Te.length > 1 ? o.createPolygon(Te[0], Te.slice(1)) : o.createPolygon(Te[0]);
          }, a = this.token_;
          if (this.match(ga)) {
            var c = a.value;
            if (this.layout_ = this.parseGeometryLayout_(), c == "GEOMETRYCOLLECTION") {
              var g = this.parseGeometryCollectionText_();
              return o.createGeometryCollection(g);
            }
            switch (c) {
              case "POINT":
                var m = this.parsePointText_();
                return m ? o.createPoint(l(V, R(m))) : o.createPoint();
              case "LINESTRING":
                var y = this.parseLineStringText_().map(n);
                return o.createLineString(y);
              case "LINEARRING":
                var w = this.parseLineStringText_().map(n);
                return o.createLinearRing(w);
              case "POLYGON":
                var A = this.parsePolygonText_();
                return A && A.length !== 0 ? i(A) : o.createPolygon();
              case "MULTIPOINT":
                var z = this.parseMultiPointText_();
                if (!z || z.length === 0) return o.createMultiPoint();
                var X = z.map(n).map((function(me) {
                  return o.createPoint(me);
                }));
                return o.createMultiPoint(X);
              case "MULTILINESTRING":
                var ee = this.parseMultiLineStringText_().map((function(me) {
                  return o.createLineString(me.map(n));
                }));
                return o.createMultiLineString(ee);
              case "MULTIPOLYGON":
                var ce = this.parseMultiPolygonText_();
                if (!ce || ce.length === 0) return o.createMultiPolygon();
                var ge = ce.map(i);
                return o.createMultiPolygon(ge);
              default:
                throw new Error("Invalid geometry type: " + c);
            }
          }
          throw new Error(this.formatErrorMessage_());
        } }]);
      })();
      function lc(o) {
        if (o.isEmpty()) return "";
        var n = o.getCoordinate(), i = [n.x, n.y];
        return n.z === void 0 || Number.isNaN(n.z) || i.push(n.z), n.m === void 0 || Number.isNaN(n.m) || i.push(n.m), i.join(" ");
      }
      function os(o) {
        for (var n = o.getCoordinates().map((function(g) {
          var m = [g.x, g.y];
          return g.z === void 0 || Number.isNaN(g.z) || m.push(g.z), g.m === void 0 || Number.isNaN(g.m) || m.push(g.m), m;
        })), i = [], a = 0, c = n.length; a < c; ++a) i.push(n[a].join(" "));
        return i.join(", ");
      }
      function cc(o) {
        var n = [];
        n.push("(" + os(o.getExteriorRing()) + ")");
        for (var i = 0, a = o.getNumInteriorRing(); i < a; ++i) n.push("(" + os(o.getInteriorRingN(i)) + ")");
        return n.join(", ");
      }
      var Yp = { Point: lc, LineString: os, LinearRing: os, Polygon: cc, MultiPoint: function(o) {
        for (var n = [], i = 0, a = o.getNumGeometries(); i < a; ++i) n.push("(" + lc(o.getGeometryN(i)) + ")");
        return n.join(", ");
      }, MultiLineString: function(o) {
        for (var n = [], i = 0, a = o.getNumGeometries(); i < a; ++i) n.push("(" + os(o.getGeometryN(i)) + ")");
        return n.join(", ");
      }, MultiPolygon: function(o) {
        for (var n = [], i = 0, a = o.getNumGeometries(); i < a; ++i) n.push("(" + cc(o.getGeometryN(i)) + ")");
        return n.join(", ");
      }, GeometryCollection: function(o) {
        for (var n = [], i = 0, a = o.getNumGeometries(); i < a; ++i) n.push(hc(o.getGeometryN(i)));
        return n.join(", ");
      } };
      function hc(o) {
        var n = o.getGeometryType(), i = Yp[n];
        n = n.toUpperCase();
        var a = (function(c) {
          var g = "";
          if (c.isEmpty()) return g;
          var m = c.getCoordinate();
          return m.z === void 0 || Number.isNaN(m.z) || (g += "Z"), m.m === void 0 || Number.isNaN(m.m) || (g += "M"), g;
        })(o);
        return a.length > 0 && (n += " " + a), o.isEmpty() ? n + " " + oc : n + " (" + i(o) + ")";
      }
      var Hp = (function() {
        return h((function o(n) {
          u(this, o), this.geometryFactory = n || new _i(), this.precisionModel = this.geometryFactory.getPrecisionModel();
        }), [{ key: "read", value: function(o) {
          var n = new zp(o);
          return new qp(n, this.geometryFactory).parse();
        } }, { key: "write", value: function(o) {
          return hc(o);
        } }]);
      })(), Ro = (function() {
        return h((function o(n) {
          u(this, o), this.parser = new Hp(n);
        }), [{ key: "write", value: function(o) {
          return this.parser.write(o);
        } }], [{ key: "toLineString", value: function(o, n) {
          if (arguments.length !== 2) throw new Error("Not implemented");
          return "LINESTRING ( " + o.x + " " + o.y + ", " + n.x + " " + n.y + " )";
        } }]);
      })(), $e = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getIndexAlongSegment", value: function(n, i) {
          return this.computeIntLineIndex(), this._intLineIndex[n][i];
        } }, { key: "getTopologySummary", value: function() {
          var n = new Qe();
          return this.isEndPoint() && n.append(" endpoint"), this._isProper && n.append(" proper"), this.isCollinear() && n.append(" collinear"), n.toString();
        } }, { key: "computeIntersection", value: function(n, i, a, c) {
          this._inputLines[0][0] = n, this._inputLines[0][1] = i, this._inputLines[1][0] = a, this._inputLines[1][1] = c, this._result = this.computeIntersect(n, i, a, c);
        } }, { key: "getIntersectionNum", value: function() {
          return this._result;
        } }, { key: "computeIntLineIndex", value: function() {
          if (arguments.length === 0) this._intLineIndex === null && (this._intLineIndex = Array(2).fill().map((function() {
            return Array(2);
          })), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
          else if (arguments.length === 1) {
            var n = arguments[0];
            this.getEdgeDistance(n, 0) > this.getEdgeDistance(n, 1) ? (this._intLineIndex[n][0] = 0, this._intLineIndex[n][1] = 1) : (this._intLineIndex[n][0] = 1, this._intLineIndex[n][1] = 0);
          }
        } }, { key: "isProper", value: function() {
          return this.hasIntersection() && this._isProper;
        } }, { key: "setPrecisionModel", value: function(n) {
          this._precisionModel = n;
        } }, { key: "isInteriorIntersection", value: function() {
          if (arguments.length === 0) return !!this.isInteriorIntersection(0) || !!this.isInteriorIntersection(1);
          if (arguments.length === 1) {
            for (var n = arguments[0], i = 0; i < this._result; i++) if (!this._intPt[i].equals2D(this._inputLines[n][0]) && !this._intPt[i].equals2D(this._inputLines[n][1])) return !0;
            return !1;
          }
        } }, { key: "getIntersection", value: function(n) {
          return this._intPt[n];
        } }, { key: "isEndPoint", value: function() {
          return this.hasIntersection() && !this._isProper;
        } }, { key: "hasIntersection", value: function() {
          return this._result !== o.NO_INTERSECTION;
        } }, { key: "getEdgeDistance", value: function(n, i) {
          return o.computeEdgeDistance(this._intPt[i], this._inputLines[n][0], this._inputLines[n][1]);
        } }, { key: "isCollinear", value: function() {
          return this._result === o.COLLINEAR_INTERSECTION;
        } }, { key: "toString", value: function() {
          return Ro.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + Ro.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
        } }, { key: "getEndpoint", value: function(n, i) {
          return this._inputLines[n][i];
        } }, { key: "isIntersection", value: function(n) {
          for (var i = 0; i < this._result; i++) if (this._intPt[i].equals2D(n)) return !0;
          return !1;
        } }, { key: "getIntersectionAlongSegment", value: function(n, i) {
          return this.computeIntLineIndex(), this._intPt[this._intLineIndex[n][i]];
        } }], [{ key: "constructor_", value: function() {
          this._result = null, this._inputLines = Array(2).fill().map((function() {
            return Array(2);
          })), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new V(), this._intPt[1] = new V(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
        } }, { key: "computeEdgeDistance", value: function(n, i, a) {
          var c = Math.abs(a.x - i.x), g = Math.abs(a.y - i.y), m = -1;
          if (n.equals(i)) m = 0;
          else if (n.equals(a)) m = c > g ? c : g;
          else {
            var y = Math.abs(n.x - i.x), w = Math.abs(n.y - i.y);
            (m = c > g ? y : w) !== 0 || n.equals(i) || (m = Math.max(y, w));
          }
          return ie.isTrue(!(m === 0 && !n.equals(i)), "Bad distance calculation"), m;
        } }, { key: "nonRobustComputeEdgeDistance", value: function(n, i, a) {
          var c = n.x - i.x, g = n.y - i.y, m = Math.sqrt(c * c + g * g);
          return ie.isTrue(!(m === 0 && !n.equals(i)), "Invalid distance calculation"), m;
        } }]);
      })();
      $e.DONT_INTERSECT = 0, $e.DO_INTERSECT = 1, $e.COLLINEAR = 2, $e.NO_INTERSECTION = 0, $e.POINT_INTERSECTION = 1, $e.COLLINEAR_INTERSECTION = 2;
      var Yr = (function(o) {
        function n() {
          return u(this, n), s(this, n);
        }
        return _(n, o), h(n, [{ key: "isInSegmentEnvelopes", value: function(i) {
          var a = new Ie(this._inputLines[0][0], this._inputLines[0][1]), c = new Ie(this._inputLines[1][0], this._inputLines[1][1]);
          return a.contains(i) && c.contains(i);
        } }, { key: "computeIntersection", value: function() {
          if (arguments.length !== 3) return M(n, "computeIntersection", this, 1).apply(this, arguments);
          var i = arguments[0], a = arguments[1], c = arguments[2];
          if (this._isProper = !1, Ie.intersects(a, c, i) && ye.index(a, c, i) === 0 && ye.index(c, a, i) === 0) return this._isProper = !0, (i.equals(a) || i.equals(c)) && (this._isProper = !1), this._result = $e.POINT_INTERSECTION, null;
          this._result = $e.NO_INTERSECTION;
        } }, { key: "intersection", value: function(i, a, c, g) {
          var m = this.intersectionSafe(i, a, c, g);
          return this.isInSegmentEnvelopes(m) || (m = new V(n.nearestEndpoint(i, a, c, g))), this._precisionModel !== null && this._precisionModel.makePrecise(m), m;
        } }, { key: "checkDD", value: function(i, a, c, g, m) {
          var y = fi.intersection(i, a, c, g), w = this.isInSegmentEnvelopes(y);
          Ot.out.println("DD in env = " + w + "  --------------------- " + y), m.distance(y) > 1e-4 && Ot.out.println("Distance = " + m.distance(y));
        } }, { key: "intersectionSafe", value: function(i, a, c, g) {
          var m = Ur.intersection(i, a, c, g);
          return m === null && (m = n.nearestEndpoint(i, a, c, g)), m;
        } }, { key: "computeCollinearIntersection", value: function(i, a, c, g) {
          var m = Ie.intersects(i, a, c), y = Ie.intersects(i, a, g), w = Ie.intersects(c, g, i), A = Ie.intersects(c, g, a);
          return m && y ? (this._intPt[0] = c, this._intPt[1] = g, $e.COLLINEAR_INTERSECTION) : w && A ? (this._intPt[0] = i, this._intPt[1] = a, $e.COLLINEAR_INTERSECTION) : m && w ? (this._intPt[0] = c, this._intPt[1] = i, !c.equals(i) || y || A ? $e.COLLINEAR_INTERSECTION : $e.POINT_INTERSECTION) : m && A ? (this._intPt[0] = c, this._intPt[1] = a, !c.equals(a) || y || w ? $e.COLLINEAR_INTERSECTION : $e.POINT_INTERSECTION) : y && w ? (this._intPt[0] = g, this._intPt[1] = i, !g.equals(i) || m || A ? $e.COLLINEAR_INTERSECTION : $e.POINT_INTERSECTION) : y && A ? (this._intPt[0] = g, this._intPt[1] = a, !g.equals(a) || m || w ? $e.COLLINEAR_INTERSECTION : $e.POINT_INTERSECTION) : $e.NO_INTERSECTION;
        } }, { key: "computeIntersect", value: function(i, a, c, g) {
          if (this._isProper = !1, !Ie.intersects(i, a, c, g)) return $e.NO_INTERSECTION;
          var m = ye.index(i, a, c), y = ye.index(i, a, g);
          if (m > 0 && y > 0 || m < 0 && y < 0) return $e.NO_INTERSECTION;
          var w = ye.index(c, g, i), A = ye.index(c, g, a);
          return w > 0 && A > 0 || w < 0 && A < 0 ? $e.NO_INTERSECTION : m === 0 && y === 0 && w === 0 && A === 0 ? this.computeCollinearIntersection(i, a, c, g) : (m === 0 || y === 0 || w === 0 || A === 0 ? (this._isProper = !1, i.equals2D(c) || i.equals2D(g) ? this._intPt[0] = i : a.equals2D(c) || a.equals2D(g) ? this._intPt[0] = a : m === 0 ? this._intPt[0] = new V(c) : y === 0 ? this._intPt[0] = new V(g) : w === 0 ? this._intPt[0] = new V(i) : A === 0 && (this._intPt[0] = new V(a))) : (this._isProper = !0, this._intPt[0] = this.intersection(i, a, c, g)), $e.POINT_INTERSECTION);
        } }], [{ key: "nearestEndpoint", value: function(i, a, c, g) {
          var m = i, y = Et.pointToSegment(i, c, g), w = Et.pointToSegment(a, c, g);
          return w < y && (y = w, m = a), (w = Et.pointToSegment(c, i, a)) < y && (y = w, m = c), (w = Et.pointToSegment(g, i, a)) < y && (y = w, m = g), m;
        } }]);
      })($e), Jp = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "countSegment", value: function(n, i) {
          if (n.x < this._p.x && i.x < this._p.x) return null;
          if (this._p.x === i.x && this._p.y === i.y) return this._isPointOnSegment = !0, null;
          if (n.y === this._p.y && i.y === this._p.y) {
            var a = n.x, c = i.x;
            return a > c && (a = i.x, c = n.x), this._p.x >= a && this._p.x <= c && (this._isPointOnSegment = !0), null;
          }
          if (n.y > this._p.y && i.y <= this._p.y || i.y > this._p.y && n.y <= this._p.y) {
            var g = ye.index(n, i, this._p);
            if (g === ye.COLLINEAR) return this._isPointOnSegment = !0, null;
            i.y < n.y && (g = -g), g === ye.LEFT && this._crossingCount++;
          }
        } }, { key: "isPointInPolygon", value: function() {
          return this.getLocation() !== N.EXTERIOR;
        } }, { key: "getLocation", value: function() {
          return this._isPointOnSegment ? N.BOUNDARY : this._crossingCount % 2 == 1 ? N.INTERIOR : N.EXTERIOR;
        } }, { key: "isOnSegment", value: function() {
          return this._isPointOnSegment;
        } }], [{ key: "constructor_", value: function() {
          this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
          var n = arguments[0];
          this._p = n;
        } }, { key: "locatePointInRing", value: function() {
          if (arguments[0] instanceof V && Ee(arguments[1], Me)) {
            for (var n = arguments[1], i = new o(arguments[0]), a = new V(), c = new V(), g = 1; g < n.size(); g++) if (n.getCoordinate(g, a), n.getCoordinate(g - 1, c), i.countSegment(a, c), i.isOnSegment()) return i.getLocation();
            return i.getLocation();
          }
          if (arguments[0] instanceof V && arguments[1] instanceof Array) {
            for (var m = arguments[1], y = new o(arguments[0]), w = 1; w < m.length; w++) {
              var A = m[w], z = m[w - 1];
              if (y.countSegment(A, z), y.isOnSegment()) return y.getLocation();
            }
            return y.getLocation();
          }
        } }]);
      })(), Do = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "isOnLine", value: function() {
          if (arguments[0] instanceof V && Ee(arguments[1], Me)) {
            for (var n = arguments[0], i = arguments[1], a = new Yr(), c = new V(), g = new V(), m = i.size(), y = 1; y < m; y++) if (i.getCoordinate(y - 1, c), i.getCoordinate(y, g), a.computeIntersection(n, c, g), a.hasIntersection()) return !0;
            return !1;
          }
          if (arguments[0] instanceof V && arguments[1] instanceof Array) {
            for (var w = arguments[0], A = arguments[1], z = new Yr(), X = 1; X < A.length; X++) {
              var ee = A[X - 1], ce = A[X];
              if (z.computeIntersection(w, ee, ce), z.hasIntersection()) return !0;
            }
            return !1;
          }
        } }, { key: "locateInRing", value: function(n, i) {
          return Jp.locatePointInRing(n, i);
        } }, { key: "isInRing", value: function(n, i) {
          return o.locateInRing(n, i) !== N.EXTERIOR;
        } }]);
      })(), Vt = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "setAllLocations", value: function(n) {
          for (var i = 0; i < this.location.length; i++) this.location[i] = n;
        } }, { key: "isNull", value: function() {
          for (var n = 0; n < this.location.length; n++) if (this.location[n] !== N.NONE) return !1;
          return !0;
        } }, { key: "setAllLocationsIfNull", value: function(n) {
          for (var i = 0; i < this.location.length; i++) this.location[i] === N.NONE && (this.location[i] = n);
        } }, { key: "isLine", value: function() {
          return this.location.length === 1;
        } }, { key: "merge", value: function(n) {
          if (n.location.length > this.location.length) {
            var i = new Array(3).fill(null);
            i[re.ON] = this.location[re.ON], i[re.LEFT] = N.NONE, i[re.RIGHT] = N.NONE, this.location = i;
          }
          for (var a = 0; a < this.location.length; a++) this.location[a] === N.NONE && a < n.location.length && (this.location[a] = n.location[a]);
        } }, { key: "getLocations", value: function() {
          return this.location;
        } }, { key: "flip", value: function() {
          if (this.location.length <= 1) return null;
          var n = this.location[re.LEFT];
          this.location[re.LEFT] = this.location[re.RIGHT], this.location[re.RIGHT] = n;
        } }, { key: "toString", value: function() {
          var n = new cn();
          return this.location.length > 1 && n.append(N.toLocationSymbol(this.location[re.LEFT])), n.append(N.toLocationSymbol(this.location[re.ON])), this.location.length > 1 && n.append(N.toLocationSymbol(this.location[re.RIGHT])), n.toString();
        } }, { key: "setLocations", value: function(n, i, a) {
          this.location[re.ON] = n, this.location[re.LEFT] = i, this.location[re.RIGHT] = a;
        } }, { key: "get", value: function(n) {
          return n < this.location.length ? this.location[n] : N.NONE;
        } }, { key: "isArea", value: function() {
          return this.location.length > 1;
        } }, { key: "isAnyNull", value: function() {
          for (var n = 0; n < this.location.length; n++) if (this.location[n] === N.NONE) return !0;
          return !1;
        } }, { key: "setLocation", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            this.setLocation(re.ON, n);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.location[i] = a;
          }
        } }, { key: "init", value: function(n) {
          this.location = new Array(n).fill(null), this.setAllLocations(N.NONE);
        } }, { key: "isEqualOnSide", value: function(n, i) {
          return this.location[i] === n.location[i];
        } }, { key: "allPositionsEqual", value: function(n) {
          for (var i = 0; i < this.location.length; i++) if (this.location[i] !== n) return !1;
          return !0;
        } }], [{ key: "constructor_", value: function() {
          if (this.location = null, arguments.length === 1) {
            if (arguments[0] instanceof Array) {
              var n = arguments[0];
              this.init(n.length);
            } else if (Number.isInteger(arguments[0])) {
              var i = arguments[0];
              this.init(1), this.location[re.ON] = i;
            } else if (arguments[0] instanceof o) {
              var a = arguments[0];
              if (this.init(a.location.length), a !== null) for (var c = 0; c < this.location.length; c++) this.location[c] = a.location[c];
            }
          } else if (arguments.length === 3) {
            var g = arguments[0], m = arguments[1], y = arguments[2];
            this.init(3), this.location[re.ON] = g, this.location[re.LEFT] = m, this.location[re.RIGHT] = y;
          }
        } }]);
      })(), Xt = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getGeometryCount", value: function() {
          var n = 0;
          return this.elt[0].isNull() || n++, this.elt[1].isNull() || n++, n;
        } }, { key: "setAllLocations", value: function(n, i) {
          this.elt[n].setAllLocations(i);
        } }, { key: "isNull", value: function(n) {
          return this.elt[n].isNull();
        } }, { key: "setAllLocationsIfNull", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            this.setAllLocationsIfNull(0, n), this.setAllLocationsIfNull(1, n);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.elt[i].setAllLocationsIfNull(a);
          }
        } }, { key: "isLine", value: function(n) {
          return this.elt[n].isLine();
        } }, { key: "merge", value: function(n) {
          for (var i = 0; i < 2; i++) this.elt[i] === null && n.elt[i] !== null ? this.elt[i] = new Vt(n.elt[i]) : this.elt[i].merge(n.elt[i]);
        } }, { key: "flip", value: function() {
          this.elt[0].flip(), this.elt[1].flip();
        } }, { key: "getLocation", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            return this.elt[n].get(re.ON);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            return this.elt[i].get(a);
          }
        } }, { key: "toString", value: function() {
          var n = new cn();
          return this.elt[0] !== null && (n.append("A:"), n.append(this.elt[0].toString())), this.elt[1] !== null && (n.append(" B:"), n.append(this.elt[1].toString())), n.toString();
        } }, { key: "isArea", value: function() {
          if (arguments.length === 0) return this.elt[0].isArea() || this.elt[1].isArea();
          if (arguments.length === 1) {
            var n = arguments[0];
            return this.elt[n].isArea();
          }
        } }, { key: "isAnyNull", value: function(n) {
          return this.elt[n].isAnyNull();
        } }, { key: "setLocation", value: function() {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            this.elt[n].setLocation(re.ON, i);
          } else if (arguments.length === 3) {
            var a = arguments[0], c = arguments[1], g = arguments[2];
            this.elt[a].setLocation(c, g);
          }
        } }, { key: "isEqualOnSide", value: function(n, i) {
          return this.elt[0].isEqualOnSide(n.elt[0], i) && this.elt[1].isEqualOnSide(n.elt[1], i);
        } }, { key: "allPositionsEqual", value: function(n, i) {
          return this.elt[n].allPositionsEqual(i);
        } }, { key: "toLine", value: function(n) {
          this.elt[n].isArea() && (this.elt[n] = new Vt(this.elt[n].location[0]));
        } }], [{ key: "constructor_", value: function() {
          if (this.elt = new Array(2).fill(null), arguments.length === 1) {
            if (Number.isInteger(arguments[0])) {
              var n = arguments[0];
              this.elt[0] = new Vt(n), this.elt[1] = new Vt(n);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this.elt[0] = new Vt(i.elt[0]), this.elt[1] = new Vt(i.elt[1]);
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            this.elt[0] = new Vt(N.NONE), this.elt[1] = new Vt(N.NONE), this.elt[a].setLocation(c);
          } else if (arguments.length === 3) {
            var g = arguments[0], m = arguments[1], y = arguments[2];
            this.elt[0] = new Vt(g, m, y), this.elt[1] = new Vt(g, m, y);
          } else if (arguments.length === 4) {
            var w = arguments[0], A = arguments[1], z = arguments[2], X = arguments[3];
            this.elt[0] = new Vt(N.NONE, N.NONE, N.NONE), this.elt[1] = new Vt(N.NONE, N.NONE, N.NONE), this.elt[w].setLocations(A, z, X);
          }
        } }, { key: "toLineLabel", value: function(n) {
          for (var i = new o(N.NONE), a = 0; a < 2; a++) i.setLocation(a, n.getLocation(a));
          return i;
        } }]);
      })(), da = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "computeRing", value: function() {
          if (this._ring !== null) return null;
          for (var o = new Array(this._pts.size()).fill(null), n = 0; n < this._pts.size(); n++) o[n] = this._pts.get(n);
          this._ring = this._geometryFactory.createLinearRing(o), this._isHole = ye.isCCW(this._ring.getCoordinates());
        } }, { key: "isIsolated", value: function() {
          return this._label.getGeometryCount() === 1;
        } }, { key: "computePoints", value: function(o) {
          this._startDe = o;
          var n = o, i = !0;
          do {
            if (n === null) throw new Pt("Found null DirectedEdge");
            if (n.getEdgeRing() === this) throw new Pt("Directed Edge visited twice during ring-building at " + n.getCoordinate());
            this._edges.add(n);
            var a = n.getLabel();
            ie.isTrue(a.isArea()), this.mergeLabel(a), this.addPoints(n.getEdge(), n.isForward(), i), i = !1, this.setEdgeRing(n, this), n = this.getNext(n);
          } while (n !== this._startDe);
        } }, { key: "getLinearRing", value: function() {
          return this._ring;
        } }, { key: "getCoordinate", value: function(o) {
          return this._pts.get(o);
        } }, { key: "computeMaxNodeDegree", value: function() {
          this._maxNodeDegree = 0;
          var o = this._startDe;
          do {
            var n = o.getNode().getEdges().getOutgoingDegree(this);
            n > this._maxNodeDegree && (this._maxNodeDegree = n), o = this.getNext(o);
          } while (o !== this._startDe);
          this._maxNodeDegree *= 2;
        } }, { key: "addPoints", value: function(o, n, i) {
          var a = o.getCoordinates();
          if (n) {
            var c = 1;
            i && (c = 0);
            for (var g = c; g < a.length; g++) this._pts.add(a[g]);
          } else {
            var m = a.length - 2;
            i && (m = a.length - 1);
            for (var y = m; y >= 0; y--) this._pts.add(a[y]);
          }
        } }, { key: "isHole", value: function() {
          return this._isHole;
        } }, { key: "setInResult", value: function() {
          var o = this._startDe;
          do
            o.getEdge().setInResult(!0), o = o.getNext();
          while (o !== this._startDe);
        } }, { key: "containsPoint", value: function(o) {
          var n = this.getLinearRing();
          if (!n.getEnvelopeInternal().contains(o) || !Do.isInRing(o, n.getCoordinates())) return !1;
          for (var i = this._holes.iterator(); i.hasNext(); )
            if (i.next().containsPoint(o)) return !1;
          return !0;
        } }, { key: "addHole", value: function(o) {
          this._holes.add(o);
        } }, { key: "isShell", value: function() {
          return this._shell === null;
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "getEdges", value: function() {
          return this._edges;
        } }, { key: "getMaxNodeDegree", value: function() {
          return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
        } }, { key: "getShell", value: function() {
          return this._shell;
        } }, { key: "mergeLabel", value: function() {
          if (arguments.length === 1) {
            var o = arguments[0];
            this.mergeLabel(o, 0), this.mergeLabel(o, 1);
          } else if (arguments.length === 2) {
            var n = arguments[1], i = arguments[0].getLocation(n, re.RIGHT);
            if (i === N.NONE) return null;
            if (this._label.getLocation(n) === N.NONE) return this._label.setLocation(n, i), null;
          }
        } }, { key: "setShell", value: function(o) {
          this._shell = o, o !== null && o.addHole(this);
        } }, { key: "toPolygon", value: function(o) {
          for (var n = new Array(this._holes.size()).fill(null), i = 0; i < this._holes.size(); i++) n[i] = this._holes.get(i).getLinearRing();
          return o.createPolygon(this.getLinearRing(), n);
        } }], [{ key: "constructor_", value: function() {
          if (this._startDe = null, this._maxNodeDegree = -1, this._edges = new pe(), this._pts = new pe(), this._label = new Xt(N.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new pe(), this._geometryFactory = null, arguments.length !== 0) {
            if (arguments.length === 2) {
              var o = arguments[0], n = arguments[1];
              this._geometryFactory = n, this.computePoints(o), this.computeRing();
            }
          }
        } }]);
      })(), $p = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "setEdgeRing", value: function(i, a) {
          i.setMinEdgeRing(a);
        } }, { key: "getNext", value: function(i) {
          return i.getNextMin();
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          da.constructor_.call(this, i, a);
        } }]);
      })(da), Vp = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "buildMinimalRings", value: function() {
          var i = new pe(), a = this._startDe;
          do {
            if (a.getMinEdgeRing() === null) {
              var c = new $p(a, this._geometryFactory);
              i.add(c);
            }
            a = a.getNext();
          } while (a !== this._startDe);
          return i;
        } }, { key: "setEdgeRing", value: function(i, a) {
          i.setEdgeRing(a);
        } }, { key: "linkDirectedEdgesForMinimalEdgeRings", value: function() {
          var i = this._startDe;
          do
            i.getNode().getEdges().linkMinimalDirectedEdges(this), i = i.getNext();
          while (i !== this._startDe);
        } }, { key: "getNext", value: function(i) {
          return i.getNext();
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          da.constructor_.call(this, i, a);
        } }]);
      })(da), fc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "setVisited", value: function(o) {
          this._isVisited = o;
        } }, { key: "setInResult", value: function(o) {
          this._isInResult = o;
        } }, { key: "isCovered", value: function() {
          return this._isCovered;
        } }, { key: "isCoveredSet", value: function() {
          return this._isCoveredSet;
        } }, { key: "setLabel", value: function(o) {
          this._label = o;
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "setCovered", value: function(o) {
          this._isCovered = o, this._isCoveredSet = !0;
        } }, { key: "updateIM", value: function(o) {
          ie.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(o);
        } }, { key: "isInResult", value: function() {
          return this._isInResult;
        } }, { key: "isVisited", value: function() {
          return this._isVisited;
        } }], [{ key: "constructor_", value: function() {
          if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, arguments.length !== 0) {
            if (arguments.length === 1) {
              var o = arguments[0];
              this._label = o;
            }
          }
        } }]);
      })(), pa = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "isIncidentEdgeInResult", value: function() {
          for (var i = this.getEdges().getEdges().iterator(); i.hasNext(); )
            if (i.next().getEdge().isInResult()) return !0;
          return !1;
        } }, { key: "isIsolated", value: function() {
          return this._label.getGeometryCount() === 1;
        } }, { key: "getCoordinate", value: function() {
          return this._coord;
        } }, { key: "print", value: function(i) {
          i.println("node " + this._coord + " lbl: " + this._label);
        } }, { key: "computeIM", value: function(i) {
        } }, { key: "computeMergedLocation", value: function(i, a) {
          var c = N.NONE;
          if (c = this._label.getLocation(a), !i.isNull(a)) {
            var g = i.getLocation(a);
            c !== N.BOUNDARY && (c = g);
          }
          return c;
        } }, { key: "setLabel", value: function() {
          if (arguments.length !== 2 || !Number.isInteger(arguments[1]) || !Number.isInteger(arguments[0])) return M(n, "setLabel", this, 1).apply(this, arguments);
          var i = arguments[0], a = arguments[1];
          this._label === null ? this._label = new Xt(i, a) : this._label.setLocation(i, a);
        } }, { key: "getEdges", value: function() {
          return this._edges;
        } }, { key: "mergeLabel", value: function() {
          if (arguments[0] instanceof n) {
            var i = arguments[0];
            this.mergeLabel(i._label);
          } else if (arguments[0] instanceof Xt) for (var a = arguments[0], c = 0; c < 2; c++) {
            var g = this.computeMergedLocation(a, c);
            this._label.getLocation(c) === N.NONE && this._label.setLocation(c, g);
          }
        } }, { key: "add", value: function(i) {
          this._edges.insert(i), i.setNode(this);
        } }, { key: "setLabelBoundary", value: function(i) {
          if (this._label === null) return null;
          var a = N.NONE;
          this._label !== null && (a = this._label.getLocation(i));
          var c = null;
          switch (a) {
            case N.BOUNDARY:
              c = N.INTERIOR;
              break;
            case N.INTERIOR:
            default:
              c = N.BOUNDARY;
          }
          this._label.setLocation(i, c);
        } }], [{ key: "constructor_", value: function() {
          this._coord = null, this._edges = null;
          var i = arguments[0], a = arguments[1];
          this._coord = i, this._edges = a, this._label = new Xt(0, N.NONE);
        } }]);
      })(fc), Xp = (function(o) {
        function n() {
          return u(this, n), s(this, n, arguments);
        }
        return _(n, o), h(n);
      })(jn);
      function gc(o) {
        return o == null ? 0 : o.color;
      }
      function Pe(o) {
        return o == null ? null : o.parent;
      }
      function On(o, n) {
        o !== null && (o.color = n);
      }
      function Fo(o) {
        return o == null ? null : o.left;
      }
      function dc(o) {
        return o == null ? null : o.right;
      }
      var us = (function(o) {
        function n() {
          var i;
          return u(this, n), (i = s(this, n)).root_ = null, i.size_ = 0, i;
        }
        return _(n, o), h(n, [{ key: "get", value: function(i) {
          for (var a = this.root_; a !== null; ) {
            var c = i.compareTo(a.key);
            if (c < 0) a = a.left;
            else {
              if (!(c > 0)) return a.value;
              a = a.right;
            }
          }
          return null;
        } }, { key: "put", value: function(i, a) {
          if (this.root_ === null) return this.root_ = { key: i, value: a, left: null, right: null, parent: null, color: 0, getValue: function() {
            return this.value;
          }, getKey: function() {
            return this.key;
          } }, this.size_ = 1, null;
          var c, g, m = this.root_;
          do
            if (c = m, (g = i.compareTo(m.key)) < 0) m = m.left;
            else {
              if (!(g > 0)) {
                var y = m.value;
                return m.value = a, y;
              }
              m = m.right;
            }
          while (m !== null);
          var w = { key: i, left: null, right: null, value: a, parent: c, color: 0, getValue: function() {
            return this.value;
          }, getKey: function() {
            return this.key;
          } };
          return g < 0 ? c.left = w : c.right = w, this.fixAfterInsertion(w), this.size_++, null;
        } }, { key: "fixAfterInsertion", value: function(i) {
          var a;
          for (i.color = 1; i != null && i !== this.root_ && i.parent.color === 1; ) Pe(i) === Fo(Pe(Pe(i))) ? gc(a = dc(Pe(Pe(i)))) === 1 ? (On(Pe(i), 0), On(a, 0), On(Pe(Pe(i)), 1), i = Pe(Pe(i))) : (i === dc(Pe(i)) && (i = Pe(i), this.rotateLeft(i)), On(Pe(i), 0), On(Pe(Pe(i)), 1), this.rotateRight(Pe(Pe(i)))) : gc(a = Fo(Pe(Pe(i)))) === 1 ? (On(Pe(i), 0), On(a, 0), On(Pe(Pe(i)), 1), i = Pe(Pe(i))) : (i === Fo(Pe(i)) && (i = Pe(i), this.rotateRight(i)), On(Pe(i), 0), On(Pe(Pe(i)), 1), this.rotateLeft(Pe(Pe(i))));
          this.root_.color = 0;
        } }, { key: "values", value: function() {
          var i = new pe(), a = this.getFirstEntry();
          if (a !== null) for (i.add(a.value); (a = n.successor(a)) !== null; ) i.add(a.value);
          return i;
        } }, { key: "entrySet", value: function() {
          var i = new Gr(), a = this.getFirstEntry();
          if (a !== null) for (i.add(a); (a = n.successor(a)) !== null; ) i.add(a);
          return i;
        } }, { key: "rotateLeft", value: function(i) {
          if (i != null) {
            var a = i.right;
            i.right = a.left, a.left != null && (a.left.parent = i), a.parent = i.parent, i.parent == null ? this.root_ = a : i.parent.left === i ? i.parent.left = a : i.parent.right = a, a.left = i, i.parent = a;
          }
        } }, { key: "rotateRight", value: function(i) {
          if (i != null) {
            var a = i.left;
            i.left = a.right, a.right != null && (a.right.parent = i), a.parent = i.parent, i.parent == null ? this.root_ = a : i.parent.right === i ? i.parent.right = a : i.parent.left = a, a.right = i, i.parent = a;
          }
        } }, { key: "getFirstEntry", value: function() {
          var i = this.root_;
          if (i != null) for (; i.left != null; ) i = i.left;
          return i;
        } }, { key: "size", value: function() {
          return this.size_;
        } }, { key: "containsKey", value: function(i) {
          for (var a = this.root_; a !== null; ) {
            var c = i.compareTo(a.key);
            if (c < 0) a = a.left;
            else {
              if (!(c > 0)) return !0;
              a = a.right;
            }
          }
          return !1;
        } }], [{ key: "successor", value: function(i) {
          var a;
          if (i === null) return null;
          if (i.right !== null) {
            for (a = i.right; a.left !== null; ) a = a.left;
            return a;
          }
          a = i.parent;
          for (var c = i; a !== null && c === a.right; ) c = a, a = a.parent;
          return a;
        } }]);
      })(Xp), pc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "find", value: function(o) {
          return this.nodeMap.get(o);
        } }, { key: "addNode", value: function() {
          if (arguments[0] instanceof V) {
            var o = arguments[0], n = this.nodeMap.get(o);
            return n === null && (n = this.nodeFact.createNode(o), this.nodeMap.put(o, n)), n;
          }
          if (arguments[0] instanceof pa) {
            var i = arguments[0], a = this.nodeMap.get(i.getCoordinate());
            return a === null ? (this.nodeMap.put(i.getCoordinate(), i), i) : (a.mergeLabel(i), a);
          }
        } }, { key: "print", value: function(o) {
          for (var n = this.iterator(); n.hasNext(); )
            n.next().print(o);
        } }, { key: "iterator", value: function() {
          return this.nodeMap.values().iterator();
        } }, { key: "values", value: function() {
          return this.nodeMap.values();
        } }, { key: "getBoundaryNodes", value: function(o) {
          for (var n = new pe(), i = this.iterator(); i.hasNext(); ) {
            var a = i.next();
            a.getLabel().getLocation(o) === N.BOUNDARY && n.add(a);
          }
          return n;
        } }, { key: "add", value: function(o) {
          var n = o.getCoordinate();
          this.addNode(n).add(o);
        } }], [{ key: "constructor_", value: function() {
          this.nodeMap = new us(), this.nodeFact = null;
          var o = arguments[0];
          this.nodeFact = o;
        } }]);
      })(), xt = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "isNorthern", value: function(n) {
          return n === o.NE || n === o.NW;
        } }, { key: "isOpposite", value: function(n, i) {
          return n !== i && (n - i + 4) % 4 === 2;
        } }, { key: "commonHalfPlane", value: function(n, i) {
          if (n === i) return n;
          if ((n - i + 4) % 4 === 2) return -1;
          var a = n < i ? n : i;
          return a === 0 && (n > i ? n : i) === 3 ? 3 : a;
        } }, { key: "isInHalfPlane", value: function(n, i) {
          return i === o.SE ? n === o.SE || n === o.SW : n === i || n === i + 1;
        } }, { key: "quadrant", value: function() {
          if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var n = arguments[0], i = arguments[1];
            if (n === 0 && i === 0) throw new J("Cannot compute the quadrant for point ( " + n + ", " + i + " )");
            return n >= 0 ? i >= 0 ? o.NE : o.SE : i >= 0 ? o.NW : o.SW;
          }
          if (arguments[0] instanceof V && arguments[1] instanceof V) {
            var a = arguments[0], c = arguments[1];
            if (c.x === a.x && c.y === a.y) throw new J("Cannot compute the quadrant for two identical points " + a);
            return c.x >= a.x ? c.y >= a.y ? o.NE : o.SE : c.y >= a.y ? o.NW : o.SW;
          }
        } }]);
      })();
      xt.NE = 0, xt.NW = 1, xt.SW = 2, xt.SE = 3;
      var mc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "compareDirection", value: function(n) {
          return this._dx === n._dx && this._dy === n._dy ? 0 : this._quadrant > n._quadrant ? 1 : this._quadrant < n._quadrant ? -1 : ye.index(n._p0, n._p1, this._p1);
        } }, { key: "getDy", value: function() {
          return this._dy;
        } }, { key: "getCoordinate", value: function() {
          return this._p0;
        } }, { key: "setNode", value: function(n) {
          this._node = n;
        } }, { key: "print", value: function(n) {
          var i = Math.atan2(this._dy, this._dx), a = this.getClass().getName(), c = a.lastIndexOf("."), g = a.substring(c + 1);
          n.print("  " + g + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + i + "   " + this._label);
        } }, { key: "compareTo", value: function(n) {
          var i = n;
          return this.compareDirection(i);
        } }, { key: "getDirectedCoordinate", value: function() {
          return this._p1;
        } }, { key: "getDx", value: function() {
          return this._dx;
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "getEdge", value: function() {
          return this._edge;
        } }, { key: "getQuadrant", value: function() {
          return this._quadrant;
        } }, { key: "getNode", value: function() {
          return this._node;
        } }, { key: "toString", value: function() {
          var n = Math.atan2(this._dy, this._dx), i = this.getClass().getName(), a = i.lastIndexOf(".");
          return "  " + i.substring(a + 1) + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + n + "   " + this._label;
        } }, { key: "computeLabel", value: function(n) {
        } }, { key: "init", value: function(n, i) {
          this._p0 = n, this._p1 = i, this._dx = i.x - n.x, this._dy = i.y - n.y, this._quadrant = xt.quadrant(this._dx, this._dy), ie.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
            var n = arguments[0];
            this._edge = n;
          } else if (arguments.length === 3) {
            var i = arguments[0], a = arguments[1], c = arguments[2];
            o.constructor_.call(this, i, a, c, null);
          } else if (arguments.length === 4) {
            var g = arguments[0], m = arguments[1], y = arguments[2], w = arguments[3];
            o.constructor_.call(this, g), this.init(m, y), this._label = w;
          }
        } }]);
      })(), Go = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "getNextMin", value: function() {
          return this._nextMin;
        } }, { key: "getDepth", value: function(i) {
          return this._depth[i];
        } }, { key: "setVisited", value: function(i) {
          this._isVisited = i;
        } }, { key: "computeDirectedLabel", value: function() {
          this._label = new Xt(this._edge.getLabel()), this._isForward || this._label.flip();
        } }, { key: "getNext", value: function() {
          return this._next;
        } }, { key: "setDepth", value: function(i, a) {
          if (this._depth[i] !== -999 && this._depth[i] !== a) throw new Pt("assigned depths do not match", this.getCoordinate());
          this._depth[i] = a;
        } }, { key: "isInteriorAreaEdge", value: function() {
          for (var i = !0, a = 0; a < 2; a++) this._label.isArea(a) && this._label.getLocation(a, re.LEFT) === N.INTERIOR && this._label.getLocation(a, re.RIGHT) === N.INTERIOR || (i = !1);
          return i;
        } }, { key: "setNextMin", value: function(i) {
          this._nextMin = i;
        } }, { key: "print", value: function(i) {
          M(n, "print", this, 1).call(this, i), i.print(" " + this._depth[re.LEFT] + "/" + this._depth[re.RIGHT]), i.print(" (" + this.getDepthDelta() + ")"), this._isInResult && i.print(" inResult");
        } }, { key: "setMinEdgeRing", value: function(i) {
          this._minEdgeRing = i;
        } }, { key: "isLineEdge", value: function() {
          var i = this._label.isLine(0) || this._label.isLine(1), a = !this._label.isArea(0) || this._label.allPositionsEqual(0, N.EXTERIOR), c = !this._label.isArea(1) || this._label.allPositionsEqual(1, N.EXTERIOR);
          return i && a && c;
        } }, { key: "setEdgeRing", value: function(i) {
          this._edgeRing = i;
        } }, { key: "getMinEdgeRing", value: function() {
          return this._minEdgeRing;
        } }, { key: "getDepthDelta", value: function() {
          var i = this._edge.getDepthDelta();
          return this._isForward || (i = -i), i;
        } }, { key: "setInResult", value: function(i) {
          this._isInResult = i;
        } }, { key: "getSym", value: function() {
          return this._sym;
        } }, { key: "isForward", value: function() {
          return this._isForward;
        } }, { key: "getEdge", value: function() {
          return this._edge;
        } }, { key: "printEdge", value: function(i) {
          this.print(i), i.print(" "), this._isForward ? this._edge.print(i) : this._edge.printReverse(i);
        } }, { key: "setSym", value: function(i) {
          this._sym = i;
        } }, { key: "setVisitedEdge", value: function(i) {
          this.setVisited(i), this._sym.setVisited(i);
        } }, { key: "setEdgeDepths", value: function(i, a) {
          var c = this.getEdge().getDepthDelta();
          this._isForward || (c = -c);
          var g = 1;
          i === re.LEFT && (g = -1);
          var m = re.opposite(i), y = a + c * g;
          this.setDepth(i, a), this.setDepth(m, y);
        } }, { key: "getEdgeRing", value: function() {
          return this._edgeRing;
        } }, { key: "isInResult", value: function() {
          return this._isInResult;
        } }, { key: "setNext", value: function(i) {
          this._next = i;
        } }, { key: "isVisited", value: function() {
          return this._isVisited;
        } }], [{ key: "constructor_", value: function() {
          this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999];
          var i = arguments[0], a = arguments[1];
          if (mc.constructor_.call(this, i), this._isForward = a, a) this.init(i.getCoordinate(0), i.getCoordinate(1));
          else {
            var c = i.getNumPoints() - 1;
            this.init(i.getCoordinate(c), i.getCoordinate(c - 1));
          }
          this.computeDirectedLabel();
        } }, { key: "depthFactor", value: function(i, a) {
          return i === N.EXTERIOR && a === N.INTERIOR ? 1 : i === N.INTERIOR && a === N.EXTERIOR ? -1 : 0;
        } }]);
      })(mc), vc = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "createNode", value: function(o) {
          return new pa(o, null);
        } }]);
      })(), yc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "printEdges", value: function(o) {
          o.println("Edges:");
          for (var n = 0; n < this._edges.size(); n++) {
            o.println("edge " + n + ":");
            var i = this._edges.get(n);
            i.print(o), i.eiList.print(o);
          }
        } }, { key: "find", value: function(o) {
          return this._nodes.find(o);
        } }, { key: "addNode", value: function() {
          if (arguments[0] instanceof pa) {
            var o = arguments[0];
            return this._nodes.addNode(o);
          }
          if (arguments[0] instanceof V) {
            var n = arguments[0];
            return this._nodes.addNode(n);
          }
        } }, { key: "getNodeIterator", value: function() {
          return this._nodes.iterator();
        } }, { key: "linkResultDirectedEdges", value: function() {
          for (var o = this._nodes.iterator(); o.hasNext(); )
            o.next().getEdges().linkResultDirectedEdges();
        } }, { key: "debugPrintln", value: function(o) {
          Ot.out.println(o);
        } }, { key: "isBoundaryNode", value: function(o, n) {
          var i = this._nodes.find(n);
          if (i === null) return !1;
          var a = i.getLabel();
          return a !== null && a.getLocation(o) === N.BOUNDARY;
        } }, { key: "linkAllDirectedEdges", value: function() {
          for (var o = this._nodes.iterator(); o.hasNext(); )
            o.next().getEdges().linkAllDirectedEdges();
        } }, { key: "matchInSameDirection", value: function(o, n, i, a) {
          return !!o.equals(i) && ye.index(o, n, a) === ye.COLLINEAR && xt.quadrant(o, n) === xt.quadrant(i, a);
        } }, { key: "getEdgeEnds", value: function() {
          return this._edgeEndList;
        } }, { key: "debugPrint", value: function(o) {
          Ot.out.print(o);
        } }, { key: "getEdgeIterator", value: function() {
          return this._edges.iterator();
        } }, { key: "findEdgeInSameDirection", value: function(o, n) {
          for (var i = 0; i < this._edges.size(); i++) {
            var a = this._edges.get(i), c = a.getCoordinates();
            if (this.matchInSameDirection(o, n, c[0], c[1]) || this.matchInSameDirection(o, n, c[c.length - 1], c[c.length - 2])) return a;
          }
          return null;
        } }, { key: "insertEdge", value: function(o) {
          this._edges.add(o);
        } }, { key: "findEdgeEnd", value: function(o) {
          for (var n = this.getEdgeEnds().iterator(); n.hasNext(); ) {
            var i = n.next();
            if (i.getEdge() === o) return i;
          }
          return null;
        } }, { key: "addEdges", value: function(o) {
          for (var n = o.iterator(); n.hasNext(); ) {
            var i = n.next();
            this._edges.add(i);
            var a = new Go(i, !0), c = new Go(i, !1);
            a.setSym(c), c.setSym(a), this.add(a), this.add(c);
          }
        } }, { key: "add", value: function(o) {
          this._nodes.add(o), this._edgeEndList.add(o);
        } }, { key: "getNodes", value: function() {
          return this._nodes.values();
        } }, { key: "findEdge", value: function(o, n) {
          for (var i = 0; i < this._edges.size(); i++) {
            var a = this._edges.get(i), c = a.getCoordinates();
            if (o.equals(c[0]) && n.equals(c[1])) return a;
          }
          return null;
        } }], [{ key: "constructor_", value: function() {
          if (this._edges = new pe(), this._nodes = null, this._edgeEndList = new pe(), arguments.length === 0) this._nodes = new pc(new vc());
          else if (arguments.length === 1) {
            var o = arguments[0];
            this._nodes = new pc(o);
          }
        } }, { key: "linkResultDirectedEdges", value: function(o) {
          for (var n = o.iterator(); n.hasNext(); )
            n.next().getEdges().linkResultDirectedEdges();
        } }]);
      })(), Wp = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "sortShellsAndHoles", value: function(n, i, a) {
          for (var c = n.iterator(); c.hasNext(); ) {
            var g = c.next();
            g.isHole() ? a.add(g) : i.add(g);
          }
        } }, { key: "computePolygons", value: function(n) {
          for (var i = new pe(), a = n.iterator(); a.hasNext(); ) {
            var c = a.next().toPolygon(this._geometryFactory);
            i.add(c);
          }
          return i;
        } }, { key: "placeFreeHoles", value: function(n, i) {
          for (var a = i.iterator(); a.hasNext(); ) {
            var c = a.next();
            if (c.getShell() === null) {
              var g = o.findEdgeRingContaining(c, n);
              if (g === null) throw new Pt("unable to assign hole to a shell", c.getCoordinate(0));
              c.setShell(g);
            }
          }
        } }, { key: "buildMinimalEdgeRings", value: function(n, i, a) {
          for (var c = new pe(), g = n.iterator(); g.hasNext(); ) {
            var m = g.next();
            if (m.getMaxNodeDegree() > 2) {
              m.linkDirectedEdgesForMinimalEdgeRings();
              var y = m.buildMinimalRings(), w = this.findShell(y);
              w !== null ? (this.placePolygonHoles(w, y), i.add(w)) : a.addAll(y);
            } else c.add(m);
          }
          return c;
        } }, { key: "buildMaximalEdgeRings", value: function(n) {
          for (var i = new pe(), a = n.iterator(); a.hasNext(); ) {
            var c = a.next();
            if (c.isInResult() && c.getLabel().isArea() && c.getEdgeRing() === null) {
              var g = new Vp(c, this._geometryFactory);
              i.add(g), g.setInResult();
            }
          }
          return i;
        } }, { key: "placePolygonHoles", value: function(n, i) {
          for (var a = i.iterator(); a.hasNext(); ) {
            var c = a.next();
            c.isHole() && c.setShell(n);
          }
        } }, { key: "getPolygons", value: function() {
          return this.computePolygons(this._shellList);
        } }, { key: "findShell", value: function(n) {
          for (var i = 0, a = null, c = n.iterator(); c.hasNext(); ) {
            var g = c.next();
            g.isHole() || (a = g, i++);
          }
          return ie.isTrue(i <= 1, "found two shells in MinimalEdgeRing list"), a;
        } }, { key: "add", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            this.add(n.getEdgeEnds(), n.getNodes());
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            yc.linkResultDirectedEdges(a);
            var c = this.buildMaximalEdgeRings(i), g = new pe(), m = this.buildMinimalEdgeRings(c, this._shellList, g);
            this.sortShellsAndHoles(m, this._shellList, g), this.placeFreeHoles(this._shellList, g);
          }
        } }], [{ key: "constructor_", value: function() {
          this._geometryFactory = null, this._shellList = new pe();
          var n = arguments[0];
          this._geometryFactory = n;
        } }, { key: "findEdgeRingContaining", value: function(n, i) {
          for (var a = n.getLinearRing(), c = a.getEnvelopeInternal(), g = a.getCoordinateN(0), m = null, y = null, w = i.iterator(); w.hasNext(); ) {
            var A = w.next(), z = A.getLinearRing(), X = z.getEnvelopeInternal();
            if (!X.equals(c) && X.contains(c)) {
              g = Q.ptNotInList(a.getCoordinates(), z.getCoordinates());
              var ee = !1;
              Do.isInRing(g, z.getCoordinates()) && (ee = !0), ee && (m === null || y.contains(X)) && (y = (m = A).getLinearRing().getEnvelopeInternal());
            }
          }
          return m;
        } }]);
      })(), _c = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "getBounds", value: function() {
        } }]);
      })(), Qn = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getItem", value: function() {
          return this._item;
        } }, { key: "getBounds", value: function() {
          return this._bounds;
        } }, { key: "interfaces_", get: function() {
          return [_c, S];
        } }], [{ key: "constructor_", value: function() {
          this._bounds = null, this._item = null;
          var o = arguments[0], n = arguments[1];
          this._bounds = o, this._item = n;
        } }]);
      })(), ma = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "poll", value: function() {
          if (this.isEmpty()) return null;
          var o = this._items.get(1);
          return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), o;
        } }, { key: "size", value: function() {
          return this._size;
        } }, { key: "reorder", value: function(o) {
          for (var n = null, i = this._items.get(o); 2 * o <= this._size && ((n = 2 * o) !== this._size && this._items.get(n + 1).compareTo(this._items.get(n)) < 0 && n++, this._items.get(n).compareTo(i) < 0); o = n) this._items.set(o, this._items.get(n));
          this._items.set(o, i);
        } }, { key: "clear", value: function() {
          this._size = 0, this._items.clear();
        } }, { key: "peek", value: function() {
          return this.isEmpty() ? null : this._items.get(1);
        } }, { key: "isEmpty", value: function() {
          return this._size === 0;
        } }, { key: "add", value: function(o) {
          this._items.add(null), this._size += 1;
          var n = this._size;
          for (this._items.set(0, o); o.compareTo(this._items.get(Math.trunc(n / 2))) < 0; n /= 2) this._items.set(n, this._items.get(Math.trunc(n / 2)));
          this._items.set(n, o);
        } }], [{ key: "constructor_", value: function() {
          this._size = null, this._items = null, this._size = 0, this._items = new pe(), this._items.add(null);
        } }]);
      })(), jp = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "insert", value: function(o, n) {
        } }, { key: "remove", value: function(o, n) {
        } }, { key: "query", value: function() {
        } }]);
      })(), Wt = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getLevel", value: function() {
          return this._level;
        } }, { key: "size", value: function() {
          return this._childBoundables.size();
        } }, { key: "getChildBoundables", value: function() {
          return this._childBoundables;
        } }, { key: "addChildBoundable", value: function(o) {
          ie.isTrue(this._bounds === null), this._childBoundables.add(o);
        } }, { key: "isEmpty", value: function() {
          return this._childBoundables.isEmpty();
        } }, { key: "getBounds", value: function() {
          return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
        } }, { key: "interfaces_", get: function() {
          return [_c, S];
        } }], [{ key: "constructor_", value: function() {
          if (this._childBoundables = new pe(), this._bounds = null, this._level = null, arguments.length !== 0) {
            if (arguments.length === 1) {
              var o = arguments[0];
              this._level = o;
            }
          }
        } }]);
      })(), xi = { reverseOrder: function() {
        return { compare: function(o, n) {
          return n.compareTo(o);
        } };
      }, min: function(o) {
        return xi.sort(o), o.get(0);
      }, sort: function(o, n) {
        var i = o.toArray();
        n ? rt.sort(i, n) : rt.sort(i);
        for (var a = o.iterator(), c = 0, g = i.length; c < g; c++) a.next(), a.set(i[c]);
      }, singletonList: function(o) {
        var n = new pe();
        return n.add(o), n;
      } }, Zp = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "maxDistance", value: function(n, i, a, c, g, m, y, w) {
          var A = o.distance(n, i, g, m);
          return A = Math.max(A, o.distance(n, i, y, w)), A = Math.max(A, o.distance(a, c, g, m)), A = Math.max(A, o.distance(a, c, y, w));
        } }, { key: "distance", value: function(n, i, a, c) {
          var g = a - n, m = c - i;
          return Math.sqrt(g * g + m * m);
        } }, { key: "maximumDistance", value: function(n, i) {
          var a = Math.min(n.getMinX(), i.getMinX()), c = Math.min(n.getMinY(), i.getMinY()), g = Math.max(n.getMaxX(), i.getMaxX()), m = Math.max(n.getMaxY(), i.getMaxY());
          return o.distance(a, c, g, m);
        } }, { key: "minMaxDistance", value: function(n, i) {
          var a = n.getMinX(), c = n.getMinY(), g = n.getMaxX(), m = n.getMaxY(), y = i.getMinX(), w = i.getMinY(), A = i.getMaxX(), z = i.getMaxY(), X = o.maxDistance(a, c, a, m, y, w, y, z);
          return X = Math.min(X, o.maxDistance(a, c, a, m, y, w, A, w)), X = Math.min(X, o.maxDistance(a, c, a, m, A, z, y, z)), X = Math.min(X, o.maxDistance(a, c, a, m, A, z, A, w)), X = Math.min(X, o.maxDistance(a, c, g, c, y, w, y, z)), X = Math.min(X, o.maxDistance(a, c, g, c, y, w, A, w)), X = Math.min(X, o.maxDistance(a, c, g, c, A, z, y, z)), X = Math.min(X, o.maxDistance(a, c, g, c, A, z, A, w)), X = Math.min(X, o.maxDistance(g, m, a, m, y, w, y, z)), X = Math.min(X, o.maxDistance(g, m, a, m, y, w, A, w)), X = Math.min(X, o.maxDistance(g, m, a, m, A, z, y, z)), X = Math.min(X, o.maxDistance(g, m, a, m, A, z, A, w)), X = Math.min(X, o.maxDistance(g, m, g, c, y, w, y, z)), X = Math.min(X, o.maxDistance(g, m, g, c, y, w, A, w)), X = Math.min(X, o.maxDistance(g, m, g, c, A, z, y, z)), X = Math.min(X, o.maxDistance(g, m, g, c, A, z, A, w));
        } }]);
      })(), wi = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "maximumDistance", value: function() {
          return Zp.maximumDistance(this._boundable1.getBounds(), this._boundable2.getBounds());
        } }, { key: "expandToQueue", value: function(n, i) {
          var a = o.isComposite(this._boundable1), c = o.isComposite(this._boundable2);
          if (a && c) return o.area(this._boundable1) > o.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, !1, n, i), null) : (this.expand(this._boundable2, this._boundable1, !0, n, i), null);
          if (a) return this.expand(this._boundable1, this._boundable2, !1, n, i), null;
          if (c) return this.expand(this._boundable2, this._boundable1, !0, n, i), null;
          throw new J("neither boundable is composite");
        } }, { key: "isLeaves", value: function() {
          return !(o.isComposite(this._boundable1) || o.isComposite(this._boundable2));
        } }, { key: "compareTo", value: function(n) {
          var i = n;
          return this._distance < i._distance ? -1 : this._distance > i._distance ? 1 : 0;
        } }, { key: "expand", value: function(n, i, a, c, g) {
          for (var m = n.getChildBoundables().iterator(); m.hasNext(); ) {
            var y = m.next(), w = null;
            (w = a ? new o(i, y, this._itemDistance) : new o(y, i, this._itemDistance)).getDistance() < g && c.add(w);
          }
        } }, { key: "getBoundable", value: function(n) {
          return n === 0 ? this._boundable1 : this._boundable2;
        } }, { key: "getDistance", value: function() {
          return this._distance;
        } }, { key: "distance", value: function() {
          return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
          var n = arguments[0], i = arguments[1], a = arguments[2];
          this._boundable1 = n, this._boundable2 = i, this._itemDistance = a, this._distance = this.distance();
        } }, { key: "area", value: function(n) {
          return n.getBounds().getArea();
        } }, { key: "isComposite", value: function(n) {
          return n instanceof Wt;
        } }]);
      })(), Ec = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "visitItem", value: function(o) {
        } }]);
      })(), ki = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "queryInternal", value: function() {
          if (Ee(arguments[2], Ec) && arguments[0] instanceof Object && arguments[1] instanceof Wt) for (var n = arguments[0], i = arguments[2], a = arguments[1].getChildBoundables(), c = 0; c < a.size(); c++) {
            var g = a.get(c);
            this.getIntersectsOp().intersects(g.getBounds(), n) && (g instanceof Wt ? this.queryInternal(n, g, i) : g instanceof Qn ? i.visitItem(g.getItem()) : ie.shouldNeverReachHere());
          }
          else if (Ee(arguments[2], An) && arguments[0] instanceof Object && arguments[1] instanceof Wt) for (var m = arguments[0], y = arguments[2], w = arguments[1].getChildBoundables(), A = 0; A < w.size(); A++) {
            var z = w.get(A);
            this.getIntersectsOp().intersects(z.getBounds(), m) && (z instanceof Wt ? this.queryInternal(m, z, y) : z instanceof Qn ? y.add(z.getItem()) : ie.shouldNeverReachHere());
          }
        } }, { key: "getNodeCapacity", value: function() {
          return this._nodeCapacity;
        } }, { key: "lastNode", value: function(n) {
          return n.get(n.size() - 1);
        } }, { key: "size", value: function() {
          if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
          if (arguments.length === 1) {
            for (var n = 0, i = arguments[0].getChildBoundables().iterator(); i.hasNext(); ) {
              var a = i.next();
              a instanceof Wt ? n += this.size(a) : a instanceof Qn && (n += 1);
            }
            return n;
          }
        } }, { key: "removeItem", value: function(n, i) {
          for (var a = null, c = n.getChildBoundables().iterator(); c.hasNext(); ) {
            var g = c.next();
            g instanceof Qn && g.getItem() === i && (a = g);
          }
          return a !== null && (n.getChildBoundables().remove(a), !0);
        } }, { key: "itemsTree", value: function() {
          if (arguments.length === 0) {
            this.build();
            var n = this.itemsTree(this._root);
            return n === null ? new pe() : n;
          }
          if (arguments.length === 1) {
            for (var i = arguments[0], a = new pe(), c = i.getChildBoundables().iterator(); c.hasNext(); ) {
              var g = c.next();
              if (g instanceof Wt) {
                var m = this.itemsTree(g);
                m !== null && a.add(m);
              } else g instanceof Qn ? a.add(g.getItem()) : ie.shouldNeverReachHere();
            }
            return a.size() <= 0 ? null : a;
          }
        } }, { key: "insert", value: function(n, i) {
          ie.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new Qn(n, i));
        } }, { key: "boundablesAtLevel", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0], i = new pe();
            return this.boundablesAtLevel(n, this._root, i), i;
          }
          if (arguments.length === 3) {
            var a = arguments[0], c = arguments[1], g = arguments[2];
            if (ie.isTrue(a > -2), c.getLevel() === a) return g.add(c), null;
            for (var m = c.getChildBoundables().iterator(); m.hasNext(); ) {
              var y = m.next();
              y instanceof Wt ? this.boundablesAtLevel(a, y, g) : (ie.isTrue(y instanceof Qn), a === -1 && g.add(y));
            }
            return null;
          }
        } }, { key: "query", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            this.build();
            var i = new pe();
            return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), n) && this.queryInternal(n, this._root, i), i;
          }
          if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            if (this.build(), this.isEmpty()) return null;
            this.getIntersectsOp().intersects(this._root.getBounds(), a) && this.queryInternal(a, this._root, c);
          }
        } }, { key: "build", value: function() {
          if (this._built) return null;
          this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0;
        } }, { key: "getRoot", value: function() {
          return this.build(), this._root;
        } }, { key: "remove", value: function() {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            return this.build(), !!this.getIntersectsOp().intersects(this._root.getBounds(), n) && this.remove(n, this._root, i);
          }
          if (arguments.length === 3) {
            var a = arguments[0], c = arguments[1], g = arguments[2], m = this.removeItem(c, g);
            if (m) return !0;
            for (var y = null, w = c.getChildBoundables().iterator(); w.hasNext(); ) {
              var A = w.next();
              if (this.getIntersectsOp().intersects(A.getBounds(), a) && A instanceof Wt && (m = this.remove(a, A, g))) {
                y = A;
                break;
              }
            }
            return y !== null && y.getChildBoundables().isEmpty() && c.getChildBoundables().remove(y), m;
          }
        } }, { key: "createHigherLevels", value: function(n, i) {
          ie.isTrue(!n.isEmpty());
          var a = this.createParentBoundables(n, i + 1);
          return a.size() === 1 ? a.get(0) : this.createHigherLevels(a, i + 1);
        } }, { key: "depth", value: function() {
          if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
          if (arguments.length === 1) {
            for (var n = 0, i = arguments[0].getChildBoundables().iterator(); i.hasNext(); ) {
              var a = i.next();
              if (a instanceof Wt) {
                var c = this.depth(a);
                c > n && (n = c);
              }
            }
            return n + 1;
          }
        } }, { key: "createParentBoundables", value: function(n, i) {
          ie.isTrue(!n.isEmpty());
          var a = new pe();
          a.add(this.createNode(i));
          var c = new pe(n);
          xi.sort(c, this.getComparator());
          for (var g = c.iterator(); g.hasNext(); ) {
            var m = g.next();
            this.lastNode(a).getChildBoundables().size() === this.getNodeCapacity() && a.add(this.createNode(i)), this.lastNode(a).addChildBoundable(m);
          }
          return a;
        } }, { key: "isEmpty", value: function() {
          return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
        } }, { key: "interfaces_", get: function() {
          return [S];
        } }], [{ key: "constructor_", value: function() {
          if (this._root = null, this._built = !1, this._itemBoundables = new pe(), this._nodeCapacity = null, arguments.length === 0) o.constructor_.call(this, o.DEFAULT_NODE_CAPACITY);
          else if (arguments.length === 1) {
            var n = arguments[0];
            ie.isTrue(n > 1, "Node capacity must be greater than 1"), this._nodeCapacity = n;
          }
        } }, { key: "compareDoubles", value: function(n, i) {
          return n > i ? 1 : n < i ? -1 : 0;
        } }]);
      })();
      ki.IntersectsOp = function() {
      }, ki.DEFAULT_NODE_CAPACITY = 10;
      var Kp = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "distance", value: function(o, n) {
        } }]);
      })(), Rn = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "createParentBoundablesFromVerticalSlices", value: function(i, a) {
          ie.isTrue(i.length > 0);
          for (var c = new pe(), g = 0; g < i.length; g++) c.addAll(this.createParentBoundablesFromVerticalSlice(i[g], a));
          return c;
        } }, { key: "nearestNeighbourK", value: function() {
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            return this.nearestNeighbourK(i, Z.POSITIVE_INFINITY, a);
          }
          if (arguments.length === 3) {
            var c = arguments[0], g = arguments[2], m = arguments[1], y = new ma();
            y.add(c);
            for (var w = new ma(); !y.isEmpty() && m >= 0; ) {
              var A = y.poll(), z = A.getDistance();
              if (z >= m) break;
              A.isLeaves() ? w.size() < g ? w.add(A) : (w.peek().getDistance() > z && (w.poll(), w.add(A)), m = w.peek().getDistance()) : A.expandToQueue(y, m);
            }
            return n.getItems(w);
          }
        } }, { key: "createNode", value: function(i) {
          return new xc(i);
        } }, { key: "size", value: function() {
          return arguments.length === 0 ? M(n, "size", this, 1).call(this) : M(n, "size", this, 1).apply(this, arguments);
        } }, { key: "insert", value: function() {
          if (!(arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof Ie)) return M(n, "insert", this, 1).apply(this, arguments);
          var i = arguments[0], a = arguments[1];
          if (i.isNull()) return null;
          M(n, "insert", this, 1).call(this, i, a);
        } }, { key: "getIntersectsOp", value: function() {
          return n.intersectsOp;
        } }, { key: "verticalSlices", value: function(i, a) {
          for (var c = Math.trunc(Math.ceil(i.size() / a)), g = new Array(a).fill(null), m = i.iterator(), y = 0; y < a; y++) {
            g[y] = new pe();
            for (var w = 0; m.hasNext() && w < c; ) {
              var A = m.next();
              g[y].add(A), w++;
            }
          }
          return g;
        } }, { key: "query", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0];
            return M(n, "query", this, 1).call(this, i);
          }
          if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            M(n, "query", this, 1).call(this, a, c);
          }
        } }, { key: "getComparator", value: function() {
          return n.yComparator;
        } }, { key: "createParentBoundablesFromVerticalSlice", value: function(i, a) {
          return M(n, "createParentBoundables", this, 1).call(this, i, a);
        } }, { key: "remove", value: function() {
          if (arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof Ie) {
            var i = arguments[0], a = arguments[1];
            return M(n, "remove", this, 1).call(this, i, a);
          }
          return M(n, "remove", this, 1).apply(this, arguments);
        } }, { key: "depth", value: function() {
          return arguments.length === 0 ? M(n, "depth", this, 1).call(this) : M(n, "depth", this, 1).apply(this, arguments);
        } }, { key: "createParentBoundables", value: function(i, a) {
          ie.isTrue(!i.isEmpty());
          var c = Math.trunc(Math.ceil(i.size() / this.getNodeCapacity())), g = new pe(i);
          xi.sort(g, n.xComparator);
          var m = this.verticalSlices(g, Math.trunc(Math.ceil(Math.sqrt(c))));
          return this.createParentBoundablesFromVerticalSlices(m, a);
        } }, { key: "nearestNeighbour", value: function() {
          if (arguments.length === 1) {
            if (Ee(arguments[0], Kp)) {
              var i = arguments[0];
              if (this.isEmpty()) return null;
              var a = new wi(this.getRoot(), this.getRoot(), i);
              return this.nearestNeighbour(a);
            }
            if (arguments[0] instanceof wi) {
              var c = arguments[0], g = Z.POSITIVE_INFINITY, m = null, y = new ma();
              for (y.add(c); !y.isEmpty() && g > 0; ) {
                var w = y.poll(), A = w.getDistance();
                if (A >= g) break;
                w.isLeaves() ? (g = A, m = w) : w.expandToQueue(y, g);
              }
              return m === null ? null : [m.getBoundable(0).getItem(), m.getBoundable(1).getItem()];
            }
          } else {
            if (arguments.length === 2) {
              var z = arguments[0], X = arguments[1];
              if (this.isEmpty() || z.isEmpty()) return null;
              var ee = new wi(this.getRoot(), z.getRoot(), X);
              return this.nearestNeighbour(ee);
            }
            if (arguments.length === 3) {
              var ce = arguments[2], ge = new Qn(arguments[0], arguments[1]), me = new wi(this.getRoot(), ge, ce);
              return this.nearestNeighbour(me)[0];
            }
            if (arguments.length === 4) {
              var Te = arguments[2], be = arguments[3], Ge = new Qn(arguments[0], arguments[1]), ft = new wi(this.getRoot(), Ge, Te);
              return this.nearestNeighbourK(ft, be);
            }
          }
        } }, { key: "isWithinDistance", value: function() {
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1], c = Z.POSITIVE_INFINITY, g = new ma();
            for (g.add(i); !g.isEmpty(); ) {
              var m = g.poll(), y = m.getDistance();
              if (y > a) return !1;
              if (m.maximumDistance() <= a) return !0;
              if (m.isLeaves()) {
                if ((c = y) <= a) return !0;
              } else m.expandToQueue(g, c);
            }
            return !1;
          }
          if (arguments.length === 3) {
            var w = arguments[0], A = arguments[1], z = arguments[2], X = new wi(this.getRoot(), w.getRoot(), A);
            return this.isWithinDistance(X, z);
          }
        } }, { key: "interfaces_", get: function() {
          return [jp, S];
        } }], [{ key: "constructor_", value: function() {
          if (arguments.length === 0) n.constructor_.call(this, n.DEFAULT_NODE_CAPACITY);
          else if (arguments.length === 1) {
            var i = arguments[0];
            ki.constructor_.call(this, i);
          }
        } }, { key: "centreX", value: function(i) {
          return n.avg(i.getMinX(), i.getMaxX());
        } }, { key: "avg", value: function(i, a) {
          return (i + a) / 2;
        } }, { key: "getItems", value: function(i) {
          for (var a = new Array(i.size()).fill(null), c = 0; !i.isEmpty(); ) {
            var g = i.poll();
            a[c] = g.getBoundable(0).getItem(), c++;
          }
          return a;
        } }, { key: "centreY", value: function(i) {
          return n.avg(i.getMinY(), i.getMaxY());
        } }]);
      })(ki), xc = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "computeBounds", value: function() {
          for (var i = null, a = this.getChildBoundables().iterator(); a.hasNext(); ) {
            var c = a.next();
            i === null ? i = new Ie(c.getBounds()) : i.expandToInclude(c.getBounds());
          }
          return i;
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0];
          Wt.constructor_.call(this, i);
        } }]);
      })(Wt);
      Rn.STRtreeNode = xc, Rn.xComparator = new ((function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "interfaces_", get: function() {
          return [ne];
        } }, { key: "compare", value: function(o, n) {
          return ki.compareDoubles(Rn.centreX(o.getBounds()), Rn.centreX(n.getBounds()));
        } }]);
      })())(), Rn.yComparator = new ((function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "interfaces_", get: function() {
          return [ne];
        } }, { key: "compare", value: function(o, n) {
          return ki.compareDoubles(Rn.centreY(o.getBounds()), Rn.centreY(n.getBounds()));
        } }]);
      })())(), Rn.intersectsOp = new ((function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "interfaces_", get: function() {
          return [IntersectsOp];
        } }, { key: "intersects", value: function(o, n) {
          return o.intersects(n);
        } }]);
      })())(), Rn.DEFAULT_NODE_CAPACITY = 10;
      var Qp = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "relativeSign", value: function(n, i) {
          return n < i ? -1 : n > i ? 1 : 0;
        } }, { key: "compare", value: function(n, i, a) {
          if (i.equals2D(a)) return 0;
          var c = o.relativeSign(i.x, a.x), g = o.relativeSign(i.y, a.y);
          switch (n) {
            case 0:
              return o.compareValue(c, g);
            case 1:
              return o.compareValue(g, c);
            case 2:
              return o.compareValue(g, -c);
            case 3:
              return o.compareValue(-c, g);
            case 4:
              return o.compareValue(-c, -g);
            case 5:
              return o.compareValue(-g, -c);
            case 6:
              return o.compareValue(-g, c);
            case 7:
              return o.compareValue(c, -g);
          }
          return ie.shouldNeverReachHere("invalid octant value"), 0;
        } }, { key: "compareValue", value: function(n, i) {
          return n < 0 ? -1 : n > 0 ? 1 : i < 0 ? -1 : i > 0 ? 1 : 0;
        } }]);
      })(), em = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getCoordinate", value: function() {
          return this.coord;
        } }, { key: "print", value: function(o) {
          o.print(this.coord), o.print(" seg # = " + this.segmentIndex);
        } }, { key: "compareTo", value: function(o) {
          var n = o;
          return this.segmentIndex < n.segmentIndex ? -1 : this.segmentIndex > n.segmentIndex ? 1 : this.coord.equals2D(n.coord) ? 0 : this._isInterior ? n._isInterior ? Qp.compare(this._segmentOctant, this.coord, n.coord) : 1 : -1;
        } }, { key: "isEndPoint", value: function(o) {
          return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === o;
        } }, { key: "toString", value: function() {
          return this.segmentIndex + ":" + this.coord.toString();
        } }, { key: "isInterior", value: function() {
          return this._isInterior;
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
          var o = arguments[0], n = arguments[1], i = arguments[2], a = arguments[3];
          this._segString = o, this.coord = new V(n), this.segmentIndex = i, this._segmentOctant = a, this._isInterior = !n.equals2D(o.getCoordinate(i));
        } }]);
      })(), tm = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "hasNext", value: function() {
        } }, { key: "next", value: function() {
        } }, { key: "remove", value: function() {
        } }]);
      })(), nm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getSplitCoordinates", value: function() {
          var o = new G();
          this.addEndpoints();
          for (var n = this.iterator(), i = n.next(); n.hasNext(); ) {
            var a = n.next();
            this.addEdgeCoordinates(i, a, o), i = a;
          }
          return o.toCoordinateArray();
        } }, { key: "addCollapsedNodes", value: function() {
          var o = new pe();
          this.findCollapsesFromInsertedNodes(o), this.findCollapsesFromExistingVertices(o);
          for (var n = o.iterator(); n.hasNext(); ) {
            var i = n.next().intValue();
            this.add(this._edge.getCoordinate(i), i);
          }
        } }, { key: "createSplitEdgePts", value: function(o, n) {
          var i = n.segmentIndex - o.segmentIndex + 2;
          if (i === 2) return [new V(o.coord), new V(n.coord)];
          var a = this._edge.getCoordinate(n.segmentIndex), c = n.isInterior() || !n.coord.equals2D(a);
          c || i--;
          var g = new Array(i).fill(null), m = 0;
          g[m++] = new V(o.coord);
          for (var y = o.segmentIndex + 1; y <= n.segmentIndex; y++) g[m++] = this._edge.getCoordinate(y);
          return c && (g[m] = new V(n.coord)), g;
        } }, { key: "print", value: function(o) {
          o.println("Intersections:");
          for (var n = this.iterator(); n.hasNext(); )
            n.next().print(o);
        } }, { key: "findCollapsesFromExistingVertices", value: function(o) {
          for (var n = 0; n < this._edge.size() - 2; n++) {
            var i = this._edge.getCoordinate(n);
            this._edge.getCoordinate(n + 1);
            var a = this._edge.getCoordinate(n + 2);
            i.equals2D(a) && o.add(hn.valueOf(n + 1));
          }
        } }, { key: "addEdgeCoordinates", value: function(o, n, i) {
          var a = this.createSplitEdgePts(o, n);
          i.add(a, !1);
        } }, { key: "iterator", value: function() {
          return this._nodeMap.values().iterator();
        } }, { key: "addSplitEdges", value: function(o) {
          this.addEndpoints(), this.addCollapsedNodes();
          for (var n = this.iterator(), i = n.next(); n.hasNext(); ) {
            var a = n.next(), c = this.createSplitEdge(i, a);
            o.add(c), i = a;
          }
        } }, { key: "findCollapseIndex", value: function(o, n, i) {
          if (!o.coord.equals2D(n.coord)) return !1;
          var a = n.segmentIndex - o.segmentIndex;
          return n.isInterior() || a--, a === 1 && (i[0] = o.segmentIndex + 1, !0);
        } }, { key: "findCollapsesFromInsertedNodes", value: function(o) {
          for (var n = new Array(1).fill(null), i = this.iterator(), a = i.next(); i.hasNext(); ) {
            var c = i.next();
            this.findCollapseIndex(a, c, n) && o.add(hn.valueOf(n[0])), a = c;
          }
        } }, { key: "getEdge", value: function() {
          return this._edge;
        } }, { key: "addEndpoints", value: function() {
          var o = this._edge.size() - 1;
          this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(o), o);
        } }, { key: "createSplitEdge", value: function(o, n) {
          var i = this.createSplitEdgePts(o, n);
          return new Hr(i, this._edge.getData());
        } }, { key: "add", value: function(o, n) {
          var i = new em(this._edge, o, n, this._edge.getSegmentOctant(n)), a = this._nodeMap.get(i);
          return a !== null ? (ie.isTrue(a.coord.equals2D(o), "Found equal nodes with different coordinates"), a) : (this._nodeMap.put(i, i), i);
        } }, { key: "checkSplitEdgesCorrectness", value: function(o) {
          var n = this._edge.getCoordinates(), i = o.get(0).getCoordinate(0);
          if (!i.equals2D(n[0])) throw new le("bad split edge start point at " + i);
          var a = o.get(o.size() - 1).getCoordinates(), c = a[a.length - 1];
          if (!c.equals2D(n[n.length - 1])) throw new le("bad split edge end point at " + c);
        } }], [{ key: "constructor_", value: function() {
          this._nodeMap = new us(), this._edge = null;
          var o = arguments[0];
          this._edge = o;
        } }]);
      })(), rm = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "octant", value: function() {
          if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var n = arguments[0], i = arguments[1];
            if (n === 0 && i === 0) throw new J("Cannot compute the octant for point ( " + n + ", " + i + " )");
            var a = Math.abs(n), c = Math.abs(i);
            return n >= 0 ? i >= 0 ? a >= c ? 0 : 1 : a >= c ? 7 : 6 : i >= 0 ? a >= c ? 3 : 2 : a >= c ? 4 : 5;
          }
          if (arguments[0] instanceof V && arguments[1] instanceof V) {
            var g = arguments[0], m = arguments[1], y = m.x - g.x, w = m.y - g.y;
            if (y === 0 && w === 0) throw new J("Cannot compute the octant for two identical points " + g);
            return o.octant(y, w);
          }
        } }]);
      })(), im = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "getCoordinates", value: function() {
        } }, { key: "size", value: function() {
        } }, { key: "getCoordinate", value: function(o) {
        } }, { key: "isClosed", value: function() {
        } }, { key: "setData", value: function(o) {
        } }, { key: "getData", value: function() {
        } }]);
      })(), sm = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "addIntersection", value: function(o, n) {
        } }, { key: "interfaces_", get: function() {
          return [im];
        } }]);
      })(), Hr = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getCoordinates", value: function() {
          return this._pts;
        } }, { key: "size", value: function() {
          return this._pts.length;
        } }, { key: "getCoordinate", value: function(n) {
          return this._pts[n];
        } }, { key: "isClosed", value: function() {
          return this._pts[0].equals(this._pts[this._pts.length - 1]);
        } }, { key: "getSegmentOctant", value: function(n) {
          return n === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(n), this.getCoordinate(n + 1));
        } }, { key: "setData", value: function(n) {
          this._data = n;
        } }, { key: "safeOctant", value: function(n, i) {
          return n.equals2D(i) ? 0 : rm.octant(n, i);
        } }, { key: "getData", value: function() {
          return this._data;
        } }, { key: "addIntersection", value: function() {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            this.addIntersectionNode(n, i);
          } else if (arguments.length === 4) {
            var a = arguments[1], c = arguments[3], g = new V(arguments[0].getIntersection(c));
            this.addIntersection(g, a);
          }
        } }, { key: "toString", value: function() {
          return Ro.toLineString(new ze(this._pts));
        } }, { key: "getNodeList", value: function() {
          return this._nodeList;
        } }, { key: "addIntersectionNode", value: function(n, i) {
          var a = i, c = a + 1;
          if (c < this._pts.length) {
            var g = this._pts[c];
            n.equals2D(g) && (a = c);
          }
          return this._nodeList.add(n, a);
        } }, { key: "addIntersections", value: function(n, i, a) {
          for (var c = 0; c < n.getIntersectionNum(); c++) this.addIntersection(n, i, a, c);
        } }, { key: "interfaces_", get: function() {
          return [sm];
        } }], [{ key: "constructor_", value: function() {
          this._nodeList = new nm(this), this._pts = null, this._data = null;
          var n = arguments[0], i = arguments[1];
          this._pts = n, this._data = i;
        } }, { key: "getNodedSubstrings", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0], i = new pe();
            return o.getNodedSubstrings(n, i), i;
          }
          if (arguments.length === 2) for (var a = arguments[1], c = arguments[0].iterator(); c.hasNext(); )
            c.next().getNodeList().addSplitEdges(a);
        } }]);
      })(), Bt = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "minX", value: function() {
          return Math.min(this.p0.x, this.p1.x);
        } }, { key: "orientationIndex", value: function() {
          if (arguments[0] instanceof o) {
            var n = arguments[0], i = ye.index(this.p0, this.p1, n.p0), a = ye.index(this.p0, this.p1, n.p1);
            return i >= 0 && a >= 0 || i <= 0 && a <= 0 ? Math.max(i, a) : 0;
          }
          if (arguments[0] instanceof V) {
            var c = arguments[0];
            return ye.index(this.p0, this.p1, c);
          }
        } }, { key: "toGeometry", value: function(n) {
          return n.createLineString([this.p0, this.p1]);
        } }, { key: "isVertical", value: function() {
          return this.p0.x === this.p1.x;
        } }, { key: "equals", value: function(n) {
          if (!(n instanceof o)) return !1;
          var i = n;
          return this.p0.equals(i.p0) && this.p1.equals(i.p1);
        } }, { key: "intersection", value: function(n) {
          var i = new Yr();
          return i.computeIntersection(this.p0, this.p1, n.p0, n.p1), i.hasIntersection() ? i.getIntersection(0) : null;
        } }, { key: "project", value: function() {
          if (arguments[0] instanceof V) {
            var n = arguments[0];
            if (n.equals(this.p0) || n.equals(this.p1)) return new V(n);
            var i = this.projectionFactor(n), a = new V();
            return a.x = this.p0.x + i * (this.p1.x - this.p0.x), a.y = this.p0.y + i * (this.p1.y - this.p0.y), a;
          }
          if (arguments[0] instanceof o) {
            var c = arguments[0], g = this.projectionFactor(c.p0), m = this.projectionFactor(c.p1);
            if (g >= 1 && m >= 1 || g <= 0 && m <= 0) return null;
            var y = this.project(c.p0);
            g < 0 && (y = this.p0), g > 1 && (y = this.p1);
            var w = this.project(c.p1);
            return m < 0 && (w = this.p0), m > 1 && (w = this.p1), new o(y, w);
          }
        } }, { key: "normalize", value: function() {
          this.p1.compareTo(this.p0) < 0 && this.reverse();
        } }, { key: "angle", value: function() {
          return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
        } }, { key: "getCoordinate", value: function(n) {
          return n === 0 ? this.p0 : this.p1;
        } }, { key: "distancePerpendicular", value: function(n) {
          return Et.pointToLinePerpendicular(n, this.p0, this.p1);
        } }, { key: "minY", value: function() {
          return Math.min(this.p0.y, this.p1.y);
        } }, { key: "midPoint", value: function() {
          return o.midPoint(this.p0, this.p1);
        } }, { key: "projectionFactor", value: function(n) {
          if (n.equals(this.p0)) return 0;
          if (n.equals(this.p1)) return 1;
          var i = this.p1.x - this.p0.x, a = this.p1.y - this.p0.y, c = i * i + a * a;
          return c <= 0 ? Z.NaN : ((n.x - this.p0.x) * i + (n.y - this.p0.y) * a) / c;
        } }, { key: "closestPoints", value: function(n) {
          var i = this.intersection(n);
          if (i !== null) return [i, i];
          var a = new Array(2).fill(null), c = Z.MAX_VALUE, g = null, m = this.closestPoint(n.p0);
          c = m.distance(n.p0), a[0] = m, a[1] = n.p0;
          var y = this.closestPoint(n.p1);
          (g = y.distance(n.p1)) < c && (c = g, a[0] = y, a[1] = n.p1);
          var w = n.closestPoint(this.p0);
          (g = w.distance(this.p0)) < c && (c = g, a[0] = this.p0, a[1] = w);
          var A = n.closestPoint(this.p1);
          return (g = A.distance(this.p1)) < c && (c = g, a[0] = this.p1, a[1] = A), a;
        } }, { key: "closestPoint", value: function(n) {
          var i = this.projectionFactor(n);
          return i > 0 && i < 1 ? this.project(n) : this.p0.distance(n) < this.p1.distance(n) ? this.p0 : this.p1;
        } }, { key: "maxX", value: function() {
          return Math.max(this.p0.x, this.p1.x);
        } }, { key: "getLength", value: function() {
          return this.p0.distance(this.p1);
        } }, { key: "compareTo", value: function(n) {
          var i = n, a = this.p0.compareTo(i.p0);
          return a !== 0 ? a : this.p1.compareTo(i.p1);
        } }, { key: "reverse", value: function() {
          var n = this.p0;
          this.p0 = this.p1, this.p1 = n;
        } }, { key: "equalsTopo", value: function(n) {
          return this.p0.equals(n.p0) && this.p1.equals(n.p1) || this.p0.equals(n.p1) && this.p1.equals(n.p0);
        } }, { key: "lineIntersection", value: function(n) {
          return Ur.intersection(this.p0, this.p1, n.p0, n.p1);
        } }, { key: "maxY", value: function() {
          return Math.max(this.p0.y, this.p1.y);
        } }, { key: "pointAlongOffset", value: function(n, i) {
          var a = this.p0.x + n * (this.p1.x - this.p0.x), c = this.p0.y + n * (this.p1.y - this.p0.y), g = this.p1.x - this.p0.x, m = this.p1.y - this.p0.y, y = Math.sqrt(g * g + m * m), w = 0, A = 0;
          if (i !== 0) {
            if (y <= 0) throw new IllegalStateException("Cannot compute offset from zero-length line segment");
            w = i * g / y, A = i * m / y;
          }
          return new V(a - A, c + w);
        } }, { key: "setCoordinates", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            this.setCoordinates(n.p0, n.p1);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.p0.x = i.x, this.p0.y = i.y, this.p1.x = a.x, this.p1.y = a.y;
          }
        } }, { key: "segmentFraction", value: function(n) {
          var i = this.projectionFactor(n);
          return i < 0 ? i = 0 : (i > 1 || Z.isNaN(i)) && (i = 1), i;
        } }, { key: "toString", value: function() {
          return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
        } }, { key: "isHorizontal", value: function() {
          return this.p0.y === this.p1.y;
        } }, { key: "reflect", value: function(n) {
          var i = this.p1.getY() - this.p0.getY(), a = this.p0.getX() - this.p1.getX(), c = this.p0.getY() * (this.p1.getX() - this.p0.getX()) - this.p0.getX() * (this.p1.getY() - this.p0.getY()), g = i * i + a * a, m = i * i - a * a, y = n.getX(), w = n.getY();
          return new V((-m * y - 2 * i * a * w - 2 * i * c) / g, (m * w - 2 * i * a * y - 2 * a * c) / g);
        } }, { key: "distance", value: function() {
          if (arguments[0] instanceof o) {
            var n = arguments[0];
            return Et.segmentToSegment(this.p0, this.p1, n.p0, n.p1);
          }
          if (arguments[0] instanceof V) {
            var i = arguments[0];
            return Et.pointToSegment(i, this.p0, this.p1);
          }
        } }, { key: "pointAlong", value: function(n) {
          var i = new V();
          return i.x = this.p0.x + n * (this.p1.x - this.p0.x), i.y = this.p0.y + n * (this.p1.y - this.p0.y), i;
        } }, { key: "hashCode", value: function() {
          var n = Z.doubleToLongBits(this.p0.x);
          n ^= 31 * Z.doubleToLongBits(this.p0.y);
          var i = Math.trunc(n) ^ Math.trunc(n >> 32), a = Z.doubleToLongBits(this.p1.x);
          return a ^= 31 * Z.doubleToLongBits(this.p1.y), i ^ (Math.trunc(a) ^ Math.trunc(a >> 32));
        } }, { key: "interfaces_", get: function() {
          return [W, S];
        } }], [{ key: "constructor_", value: function() {
          if (this.p0 = null, this.p1 = null, arguments.length === 0) o.constructor_.call(this, new V(), new V());
          else if (arguments.length === 1) {
            var n = arguments[0];
            o.constructor_.call(this, n.p0, n.p1);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.p0 = i, this.p1 = a;
          } else if (arguments.length === 4) {
            var c = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3];
            o.constructor_.call(this, new V(c, g), new V(m, y));
          }
        } }, { key: "midPoint", value: function(n, i) {
          return new V((n.x + i.x) / 2, (n.y + i.y) / 2);
        } }]);
      })(), am = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "overlap", value: function() {
          if (arguments.length !== 2) {
            if (arguments.length === 4) {
              var o = arguments[1], n = arguments[2], i = arguments[3];
              arguments[0].getLineSegment(o, this._overlapSeg1), n.getLineSegment(i, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
            }
          }
        } }], [{ key: "constructor_", value: function() {
          this._overlapSeg1 = new Bt(), this._overlapSeg2 = new Bt();
        } }]);
      })(), wc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getLineSegment", value: function(o, n) {
          n.p0 = this._pts[o], n.p1 = this._pts[o + 1];
        } }, { key: "computeSelect", value: function(o, n, i, a) {
          var c = this._pts[n], g = this._pts[i];
          if (i - n == 1) return a.select(this, n), null;
          if (!o.intersects(c, g)) return null;
          var m = Math.trunc((n + i) / 2);
          n < m && this.computeSelect(o, n, m, a), m < i && this.computeSelect(o, m, i, a);
        } }, { key: "getCoordinates", value: function() {
          for (var o = new Array(this._end - this._start + 1).fill(null), n = 0, i = this._start; i <= this._end; i++) o[n++] = this._pts[i];
          return o;
        } }, { key: "computeOverlaps", value: function() {
          if (arguments.length === 2) {
            var o = arguments[0], n = arguments[1];
            this.computeOverlaps(this._start, this._end, o, o._start, o._end, n);
          } else if (arguments.length === 6) {
            var i = arguments[0], a = arguments[1], c = arguments[2], g = arguments[3], m = arguments[4], y = arguments[5];
            if (a - i == 1 && m - g == 1) return y.overlap(this, i, c, g), null;
            if (!this.overlaps(i, a, c, g, m)) return null;
            var w = Math.trunc((i + a) / 2), A = Math.trunc((g + m) / 2);
            i < w && (g < A && this.computeOverlaps(i, w, c, g, A, y), A < m && this.computeOverlaps(i, w, c, A, m, y)), w < a && (g < A && this.computeOverlaps(w, a, c, g, A, y), A < m && this.computeOverlaps(w, a, c, A, m, y));
          }
        } }, { key: "setId", value: function(o) {
          this._id = o;
        } }, { key: "select", value: function(o, n) {
          this.computeSelect(o, this._start, this._end, n);
        } }, { key: "getEnvelope", value: function() {
          if (this._env === null) {
            var o = this._pts[this._start], n = this._pts[this._end];
            this._env = new Ie(o, n);
          }
          return this._env;
        } }, { key: "overlaps", value: function(o, n, i, a, c) {
          return Ie.intersects(this._pts[o], this._pts[n], i._pts[a], i._pts[c]);
        } }, { key: "getEndIndex", value: function() {
          return this._end;
        } }, { key: "getStartIndex", value: function() {
          return this._start;
        } }, { key: "getContext", value: function() {
          return this._context;
        } }, { key: "getId", value: function() {
          return this._id;
        } }], [{ key: "constructor_", value: function() {
          this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
          var o = arguments[0], n = arguments[1], i = arguments[2], a = arguments[3];
          this._pts = o, this._start = n, this._end = i, this._context = a;
        } }]);
      })(), om = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "findChainEnd", value: function(n, i) {
          for (var a = i; a < n.length - 1 && n[a].equals2D(n[a + 1]); ) a++;
          if (a >= n.length - 1) return n.length - 1;
          for (var c = xt.quadrant(n[a], n[a + 1]), g = i + 1; g < n.length && !(!n[g - 1].equals2D(n[g]) && xt.quadrant(n[g - 1], n[g]) !== c); )
            g++;
          return g - 1;
        } }, { key: "getChains", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            return o.getChains(n, null);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1], c = new pe(), g = 0;
            do {
              var m = o.findChainEnd(i, g), y = new wc(i, g, m, a);
              c.add(y), g = m;
            } while (g < i.length - 1);
            return c;
          }
        } }]);
      })(), Bo = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "computeNodes", value: function(o) {
        } }, { key: "getNodedSubstrings", value: function() {
        } }]);
      })(), kc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "setSegmentIntersector", value: function(o) {
          this._segInt = o;
        } }, { key: "interfaces_", get: function() {
          return [Bo];
        } }], [{ key: "constructor_", value: function() {
          if (this._segInt = null, arguments.length !== 0) {
            if (arguments.length === 1) {
              var o = arguments[0];
              this.setSegmentIntersector(o);
            }
          }
        } }]);
      })(), Uo = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "getMonotoneChains", value: function() {
          return this._monoChains;
        } }, { key: "getNodedSubstrings", value: function() {
          return Hr.getNodedSubstrings(this._nodedSegStrings);
        } }, { key: "getIndex", value: function() {
          return this._index;
        } }, { key: "add", value: function(i) {
          for (var a = om.getChains(i.getCoordinates(), i).iterator(); a.hasNext(); ) {
            var c = a.next();
            c.setId(this._idCounter++), this._index.insert(c.getEnvelope(), c), this._monoChains.add(c);
          }
        } }, { key: "computeNodes", value: function(i) {
          this._nodedSegStrings = i;
          for (var a = i.iterator(); a.hasNext(); ) this.add(a.next());
          this.intersectChains();
        } }, { key: "intersectChains", value: function() {
          for (var i = new Sc(this._segInt), a = this._monoChains.iterator(); a.hasNext(); ) for (var c = a.next(), g = this._index.query(c.getEnvelope()).iterator(); g.hasNext(); ) {
            var m = g.next();
            if (m.getId() > c.getId() && (c.computeOverlaps(m, i), this._nOverlaps++), this._segInt.isDone()) return null;
          }
        } }], [{ key: "constructor_", value: function() {
          if (this._monoChains = new pe(), this._index = new Rn(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0, arguments.length !== 0) {
            if (arguments.length === 1) {
              var i = arguments[0];
              kc.constructor_.call(this, i);
            }
          }
        } }]);
      })(kc), Sc = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "overlap", value: function() {
          if (arguments.length !== 4) return M(n, "overlap", this, 1).apply(this, arguments);
          var i = arguments[1], a = arguments[2], c = arguments[3], g = arguments[0].getContext(), m = a.getContext();
          this._si.processIntersections(g, i, m, c);
        } }], [{ key: "constructor_", value: function() {
          this._si = null;
          var i = arguments[0];
          this._si = i;
        } }]);
      })(am);
      Uo.SegmentOverlapAction = Sc;
      var fn = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "isDeletable", value: function(n, i, a, c) {
          var g = this._inputLine[n], m = this._inputLine[i], y = this._inputLine[a];
          return !!this.isConcave(g, m, y) && !!this.isShallow(g, m, y, c) && this.isShallowSampled(g, m, n, a, c);
        } }, { key: "deleteShallowConcavities", value: function() {
          for (var n = 1, i = this.findNextNonDeletedIndex(n), a = this.findNextNonDeletedIndex(i), c = !1; a < this._inputLine.length; ) {
            var g = !1;
            this.isDeletable(n, i, a, this._distanceTol) && (this._isDeleted[i] = o.DELETE, g = !0, c = !0), n = g ? a : i, i = this.findNextNonDeletedIndex(n), a = this.findNextNonDeletedIndex(i);
          }
          return c;
        } }, { key: "isShallowConcavity", value: function(n, i, a, c) {
          return ye.index(n, i, a) === this._angleOrientation && Et.pointToSegment(i, n, a) < c;
        } }, { key: "isShallowSampled", value: function(n, i, a, c, g) {
          var m = Math.trunc((c - a) / o.NUM_PTS_TO_CHECK);
          m <= 0 && (m = 1);
          for (var y = a; y < c; y += m) if (!this.isShallow(n, i, this._inputLine[y], g)) return !1;
          return !0;
        } }, { key: "isConcave", value: function(n, i, a) {
          var c = ye.index(n, i, a) === this._angleOrientation;
          return c;
        } }, { key: "simplify", value: function(n) {
          this._distanceTol = Math.abs(n), n < 0 && (this._angleOrientation = ye.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
          var i = !1;
          do
            i = this.deleteShallowConcavities();
          while (i);
          return this.collapseLine();
        } }, { key: "findNextNonDeletedIndex", value: function(n) {
          for (var i = n + 1; i < this._inputLine.length && this._isDeleted[i] === o.DELETE; ) i++;
          return i;
        } }, { key: "isShallow", value: function(n, i, a, c) {
          return Et.pointToSegment(i, n, a) < c;
        } }, { key: "collapseLine", value: function() {
          for (var n = new G(), i = 0; i < this._inputLine.length; i++) this._isDeleted[i] !== o.DELETE && n.add(this._inputLine[i]);
          return n.toCoordinateArray();
        } }], [{ key: "constructor_", value: function() {
          this._inputLine = null, this._distanceTol = null, this._isDeleted = null, this._angleOrientation = ye.COUNTERCLOCKWISE;
          var n = arguments[0];
          this._inputLine = n;
        } }, { key: "simplify", value: function(n, i) {
          return new o(n).simplify(i);
        } }]);
      })();
      fn.INIT = 0, fn.DELETE = 1, fn.KEEP = 1, fn.NUM_PTS_TO_CHECK = 10;
      var Mc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getCoordinates", value: function() {
          return this._ptList.toArray(o.COORDINATE_ARRAY_TYPE);
        } }, { key: "setPrecisionModel", value: function(n) {
          this._precisionModel = n;
        } }, { key: "addPt", value: function(n) {
          var i = new V(n);
          if (this._precisionModel.makePrecise(i), this.isRedundant(i)) return null;
          this._ptList.add(i);
        } }, { key: "reverse", value: function() {
        } }, { key: "addPts", value: function(n, i) {
          if (i) for (var a = 0; a < n.length; a++) this.addPt(n[a]);
          else for (var c = n.length - 1; c >= 0; c--) this.addPt(n[c]);
        } }, { key: "isRedundant", value: function(n) {
          if (this._ptList.size() < 1) return !1;
          var i = this._ptList.get(this._ptList.size() - 1);
          return n.distance(i) < this._minimimVertexDistance;
        } }, { key: "toString", value: function() {
          return new _i().createLineString(this.getCoordinates()).toString();
        } }, { key: "closeRing", value: function() {
          if (this._ptList.size() < 1) return null;
          var n = new V(this._ptList.get(0)), i = this._ptList.get(this._ptList.size() - 1);
          if (n.equals(i)) return null;
          this._ptList.add(n);
        } }, { key: "setMinimumVertexDistance", value: function(n) {
          this._minimimVertexDistance = n;
        } }], [{ key: "constructor_", value: function() {
          this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new pe();
        } }]);
      })();
      Mc.COORDINATE_ARRAY_TYPE = new Array(0).fill(null);
      var Ut = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "toDegrees", value: function(n) {
          return 180 * n / Math.PI;
        } }, { key: "normalize", value: function(n) {
          for (; n > Math.PI; ) n -= o.PI_TIMES_2;
          for (; n <= -Math.PI; ) n += o.PI_TIMES_2;
          return n;
        } }, { key: "angle", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            return Math.atan2(n.y, n.x);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1], c = a.x - i.x, g = a.y - i.y;
            return Math.atan2(g, c);
          }
        } }, { key: "isAcute", value: function(n, i, a) {
          var c = n.x - i.x, g = n.y - i.y;
          return c * (a.x - i.x) + g * (a.y - i.y) > 0;
        } }, { key: "isObtuse", value: function(n, i, a) {
          var c = n.x - i.x, g = n.y - i.y;
          return c * (a.x - i.x) + g * (a.y - i.y) < 0;
        } }, { key: "interiorAngle", value: function(n, i, a) {
          var c = o.angle(i, n), g = o.angle(i, a);
          return Math.abs(g - c);
        } }, { key: "normalizePositive", value: function(n) {
          if (n < 0) {
            for (; n < 0; ) n += o.PI_TIMES_2;
            n >= o.PI_TIMES_2 && (n = 0);
          } else {
            for (; n >= o.PI_TIMES_2; ) n -= o.PI_TIMES_2;
            n < 0 && (n = 0);
          }
          return n;
        } }, { key: "angleBetween", value: function(n, i, a) {
          var c = o.angle(i, n), g = o.angle(i, a);
          return o.diff(c, g);
        } }, { key: "diff", value: function(n, i) {
          var a = null;
          return (a = n < i ? i - n : n - i) > Math.PI && (a = 2 * Math.PI - a), a;
        } }, { key: "toRadians", value: function(n) {
          return n * Math.PI / 180;
        } }, { key: "getTurn", value: function(n, i) {
          var a = Math.sin(i - n);
          return a > 0 ? o.COUNTERCLOCKWISE : a < 0 ? o.CLOCKWISE : o.NONE;
        } }, { key: "angleBetweenOriented", value: function(n, i, a) {
          var c = o.angle(i, n), g = o.angle(i, a) - c;
          return g <= -Math.PI ? g + o.PI_TIMES_2 : g > Math.PI ? g - o.PI_TIMES_2 : g;
        } }]);
      })();
      Ut.PI_TIMES_2 = 2 * Math.PI, Ut.PI_OVER_2 = Math.PI / 2, Ut.PI_OVER_4 = Math.PI / 4, Ut.COUNTERCLOCKWISE = ye.COUNTERCLOCKWISE, Ut.CLOCKWISE = ye.CLOCKWISE, Ut.NONE = ye.COLLINEAR;
      var ls = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "addNextSegment", value: function(n, i) {
          if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = n, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2)) return null;
          var a = ye.index(this._s0, this._s1, this._s2), c = a === ye.CLOCKWISE && this._side === re.LEFT || a === ye.COUNTERCLOCKWISE && this._side === re.RIGHT;
          a === 0 ? this.addCollinear(i) : c ? this.addOutsideTurn(a, i) : this.addInsideTurn(a, i);
        } }, { key: "addLineEndCap", value: function(n, i) {
          var a = new Bt(n, i), c = new Bt();
          this.computeOffsetSegment(a, re.LEFT, this._distance, c);
          var g = new Bt();
          this.computeOffsetSegment(a, re.RIGHT, this._distance, g);
          var m = i.x - n.x, y = i.y - n.y, w = Math.atan2(y, m);
          switch (this._bufParams.getEndCapStyle()) {
            case Y.CAP_ROUND:
              this._segList.addPt(c.p1), this.addDirectedFillet(i, w + Math.PI / 2, w - Math.PI / 2, ye.CLOCKWISE, this._distance), this._segList.addPt(g.p1);
              break;
            case Y.CAP_FLAT:
              this._segList.addPt(c.p1), this._segList.addPt(g.p1);
              break;
            case Y.CAP_SQUARE:
              var A = new V();
              A.x = Math.abs(this._distance) * Math.cos(w), A.y = Math.abs(this._distance) * Math.sin(w);
              var z = new V(c.p1.x + A.x, c.p1.y + A.y), X = new V(g.p1.x + A.x, g.p1.y + A.y);
              this._segList.addPt(z), this._segList.addPt(X);
          }
        } }, { key: "getCoordinates", value: function() {
          return this._segList.getCoordinates();
        } }, { key: "addMitreJoin", value: function(n, i, a, c) {
          var g = Ur.intersection(i.p0, i.p1, a.p0, a.p1);
          if (g !== null && (c <= 0 ? 1 : g.distance(n) / Math.abs(c)) <= this._bufParams.getMitreLimit()) return this._segList.addPt(g), null;
          this.addLimitedMitreJoin(i, a, c, this._bufParams.getMitreLimit());
        } }, { key: "addOutsideTurn", value: function(n, i) {
          if (this._offset0.p1.distance(this._offset1.p0) < this._distance * o.OFFSET_SEGMENT_SEPARATION_FACTOR) return this._segList.addPt(this._offset0.p1), null;
          this._bufParams.getJoinStyle() === Y.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === Y.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (i && this._segList.addPt(this._offset0.p1), this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, n, this._distance), this._segList.addPt(this._offset1.p0));
        } }, { key: "createSquare", value: function(n) {
          this._segList.addPt(new V(n.x + this._distance, n.y + this._distance)), this._segList.addPt(new V(n.x + this._distance, n.y - this._distance)), this._segList.addPt(new V(n.x - this._distance, n.y - this._distance)), this._segList.addPt(new V(n.x - this._distance, n.y + this._distance)), this._segList.closeRing();
        } }, { key: "addSegments", value: function(n, i) {
          this._segList.addPts(n, i);
        } }, { key: "addFirstSegment", value: function() {
          this._segList.addPt(this._offset1.p0);
        } }, { key: "addCornerFillet", value: function(n, i, a, c, g) {
          var m = i.x - n.x, y = i.y - n.y, w = Math.atan2(y, m), A = a.x - n.x, z = a.y - n.y, X = Math.atan2(z, A);
          c === ye.CLOCKWISE ? w <= X && (w += 2 * Math.PI) : w >= X && (w -= 2 * Math.PI), this._segList.addPt(i), this.addDirectedFillet(n, w, X, c, g), this._segList.addPt(a);
        } }, { key: "addLastSegment", value: function() {
          this._segList.addPt(this._offset1.p1);
        } }, { key: "initSideSegments", value: function(n, i, a) {
          this._s1 = n, this._s2 = i, this._side = a, this._seg1.setCoordinates(n, i), this.computeOffsetSegment(this._seg1, a, this._distance, this._offset1);
        } }, { key: "addLimitedMitreJoin", value: function(n, i, a, c) {
          var g = this._seg0.p1, m = Ut.angle(g, this._seg0.p0), y = Ut.angleBetweenOriented(this._seg0.p0, g, this._seg1.p1) / 2, w = Ut.normalize(m + y), A = Ut.normalize(w + Math.PI), z = c * a, X = a - z * Math.abs(Math.sin(y)), ee = g.x + z * Math.cos(A), ce = g.y + z * Math.sin(A), ge = new V(ee, ce), me = new Bt(g, ge), Te = me.pointAlongOffset(1, X), be = me.pointAlongOffset(1, -X);
          this._side === re.LEFT ? (this._segList.addPt(Te), this._segList.addPt(be)) : (this._segList.addPt(be), this._segList.addPt(Te));
        } }, { key: "addDirectedFillet", value: function(n, i, a, c, g) {
          var m = c === ye.CLOCKWISE ? -1 : 1, y = Math.abs(i - a), w = Math.trunc(y / this._filletAngleQuantum + 0.5);
          if (w < 1) return null;
          for (var A = y / w, z = new V(), X = 0; X < w; X++) {
            var ee = i + m * X * A;
            z.x = n.x + g * Math.cos(ee), z.y = n.y + g * Math.sin(ee), this._segList.addPt(z);
          }
        } }, { key: "computeOffsetSegment", value: function(n, i, a, c) {
          var g = i === re.LEFT ? 1 : -1, m = n.p1.x - n.p0.x, y = n.p1.y - n.p0.y, w = Math.sqrt(m * m + y * y), A = g * a * m / w, z = g * a * y / w;
          c.p0.x = n.p0.x - z, c.p0.y = n.p0.y + A, c.p1.x = n.p1.x - z, c.p1.y = n.p1.y + A;
        } }, { key: "addInsideTurn", value: function(n, i) {
          if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection()) this._segList.addPt(this._li.getIntersection(0));
          else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * o.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR) this._segList.addPt(this._offset0.p1);
          else {
            if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
              var a = new V((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
              this._segList.addPt(a);
              var c = new V((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
              this._segList.addPt(c);
            } else this._segList.addPt(this._s1);
            this._segList.addPt(this._offset1.p0);
          }
        } }, { key: "createCircle", value: function(n) {
          var i = new V(n.x + this._distance, n.y);
          this._segList.addPt(i), this.addDirectedFillet(n, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
        } }, { key: "addBevelJoin", value: function(n, i) {
          this._segList.addPt(n.p1), this._segList.addPt(i.p0);
        } }, { key: "init", value: function(n) {
          this._distance = n, this._maxCurveSegmentError = n * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new Mc(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(n * o.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
        } }, { key: "addCollinear", value: function(n) {
          this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2), this._li.getIntersectionNum() >= 2 && (this._bufParams.getJoinStyle() === Y.JOIN_BEVEL || this._bufParams.getJoinStyle() === Y.JOIN_MITRE ? (n && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, ye.CLOCKWISE, this._distance));
        } }, { key: "closeRing", value: function() {
          this._segList.closeRing();
        } }, { key: "hasNarrowConcaveAngle", value: function() {
          return this._hasNarrowConcaveAngle;
        } }], [{ key: "constructor_", value: function() {
          this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new Bt(), this._seg1 = new Bt(), this._offset0 = new Bt(), this._offset1 = new Bt(), this._side = 0, this._hasNarrowConcaveAngle = !1;
          var n = arguments[0], i = arguments[1], a = arguments[2];
          this._precisionModel = n, this._bufParams = i, this._li = new Yr(), this._filletAngleQuantum = Math.PI / 2 / i.getQuadrantSegments(), i.getQuadrantSegments() >= 8 && i.getJoinStyle() === Y.JOIN_ROUND && (this._closingSegLengthFactor = o.MAX_CLOSING_SEG_LEN_FACTOR), this.init(a);
        } }]);
      })();
      ls.OFFSET_SEGMENT_SEPARATION_FACTOR = 1e-3, ls.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = 1e-3, ls.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, ls.MAX_CLOSING_SEG_LEN_FACTOR = 80;
      var um = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getOffsetCurve", value: function(n, i) {
          if (this._distance = i, i === 0) return null;
          var a = i < 0, c = Math.abs(i), g = this.getSegGen(c);
          n.length <= 1 ? this.computePointCurve(n[0], g) : this.computeOffsetCurve(n, a, g);
          var m = g.getCoordinates();
          return a && Q.reverse(m), m;
        } }, { key: "computeSingleSidedBufferCurve", value: function(n, i, a) {
          var c = this.simplifyTolerance(this._distance);
          if (i) {
            a.addSegments(n, !0);
            var g = fn.simplify(n, -c), m = g.length - 1;
            a.initSideSegments(g[m], g[m - 1], re.LEFT), a.addFirstSegment();
            for (var y = m - 2; y >= 0; y--) a.addNextSegment(g[y], !0);
          } else {
            a.addSegments(n, !1);
            var w = fn.simplify(n, c), A = w.length - 1;
            a.initSideSegments(w[0], w[1], re.LEFT), a.addFirstSegment();
            for (var z = 2; z <= A; z++) a.addNextSegment(w[z], !0);
          }
          a.addLastSegment(), a.closeRing();
        } }, { key: "computeRingBufferCurve", value: function(n, i, a) {
          var c = this.simplifyTolerance(this._distance);
          i === re.RIGHT && (c = -c);
          var g = fn.simplify(n, c), m = g.length - 1;
          a.initSideSegments(g[m - 1], g[0], i);
          for (var y = 1; y <= m; y++) {
            var w = y !== 1;
            a.addNextSegment(g[y], w);
          }
          a.closeRing();
        } }, { key: "computeLineBufferCurve", value: function(n, i) {
          var a = this.simplifyTolerance(this._distance), c = fn.simplify(n, a), g = c.length - 1;
          i.initSideSegments(c[0], c[1], re.LEFT);
          for (var m = 2; m <= g; m++) i.addNextSegment(c[m], !0);
          i.addLastSegment(), i.addLineEndCap(c[g - 1], c[g]);
          var y = fn.simplify(n, -a), w = y.length - 1;
          i.initSideSegments(y[w], y[w - 1], re.LEFT);
          for (var A = w - 2; A >= 0; A--) i.addNextSegment(y[A], !0);
          i.addLastSegment(), i.addLineEndCap(y[1], y[0]), i.closeRing();
        } }, { key: "computePointCurve", value: function(n, i) {
          switch (this._bufParams.getEndCapStyle()) {
            case Y.CAP_ROUND:
              i.createCircle(n);
              break;
            case Y.CAP_SQUARE:
              i.createSquare(n);
          }
        } }, { key: "getLineCurve", value: function(n, i) {
          if (this._distance = i, this.isLineOffsetEmpty(i)) return null;
          var a = Math.abs(i), c = this.getSegGen(a);
          if (n.length <= 1) this.computePointCurve(n[0], c);
          else if (this._bufParams.isSingleSided()) {
            var g = i < 0;
            this.computeSingleSidedBufferCurve(n, g, c);
          } else this.computeLineBufferCurve(n, c);
          return c.getCoordinates();
        } }, { key: "getBufferParameters", value: function() {
          return this._bufParams;
        } }, { key: "simplifyTolerance", value: function(n) {
          return n * this._bufParams.getSimplifyFactor();
        } }, { key: "getRingCurve", value: function(n, i, a) {
          if (this._distance = a, n.length <= 2) return this.getLineCurve(n, a);
          if (a === 0) return o.copyCoordinates(n);
          var c = this.getSegGen(a);
          return this.computeRingBufferCurve(n, i, c), c.getCoordinates();
        } }, { key: "computeOffsetCurve", value: function(n, i, a) {
          var c = this.simplifyTolerance(this._distance);
          if (i) {
            var g = fn.simplify(n, -c), m = g.length - 1;
            a.initSideSegments(g[m], g[m - 1], re.LEFT), a.addFirstSegment();
            for (var y = m - 2; y >= 0; y--) a.addNextSegment(g[y], !0);
          } else {
            var w = fn.simplify(n, c), A = w.length - 1;
            a.initSideSegments(w[0], w[1], re.LEFT), a.addFirstSegment();
            for (var z = 2; z <= A; z++) a.addNextSegment(w[z], !0);
          }
          a.addLastSegment();
        } }, { key: "isLineOffsetEmpty", value: function(n) {
          return n === 0 || n < 0 && !this._bufParams.isSingleSided();
        } }, { key: "getSegGen", value: function(n) {
          return new ls(this._precisionModel, this._bufParams, n);
        } }], [{ key: "constructor_", value: function() {
          this._distance = 0, this._precisionModel = null, this._bufParams = null;
          var n = arguments[0], i = arguments[1];
          this._precisionModel = n, this._bufParams = i;
        } }, { key: "copyCoordinates", value: function(n) {
          for (var i = new Array(n.length).fill(null), a = 0; a < i.length; a++) i[a] = new V(n[a]);
          return i;
        } }]);
      })(), Ic = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "findStabbedSegments", value: function() {
          if (arguments.length === 1) {
            for (var o = arguments[0], n = new pe(), i = this._subgraphs.iterator(); i.hasNext(); ) {
              var a = i.next(), c = a.getEnvelope();
              o.y < c.getMinY() || o.y > c.getMaxY() || this.findStabbedSegments(o, a.getDirectedEdges(), n);
            }
            return n;
          }
          if (arguments.length === 3) {
            if (Ee(arguments[2], An) && arguments[0] instanceof V && arguments[1] instanceof Go) {
              for (var g = arguments[0], m = arguments[1], y = arguments[2], w = m.getEdge().getCoordinates(), A = 0; A < w.length - 1; A++)
                if (this._seg.p0 = w[A], this._seg.p1 = w[A + 1], this._seg.p0.y > this._seg.p1.y && this._seg.reverse(), !(Math.max(this._seg.p0.x, this._seg.p1.x) < g.x || this._seg.isHorizontal() || g.y < this._seg.p0.y || g.y > this._seg.p1.y || ye.index(this._seg.p0, this._seg.p1, g) === ye.RIGHT)) {
                  var z = m.getDepth(re.LEFT);
                  this._seg.p0.equals(w[A]) || (z = m.getDepth(re.RIGHT));
                  var X = new bc(this._seg, z);
                  y.add(X);
                }
            } else if (Ee(arguments[2], An) && arguments[0] instanceof V && Ee(arguments[1], An)) for (var ee = arguments[0], ce = arguments[2], ge = arguments[1].iterator(); ge.hasNext(); ) {
              var me = ge.next();
              me.isForward() && this.findStabbedSegments(ee, me, ce);
            }
          }
        } }, { key: "getDepth", value: function(o) {
          var n = this.findStabbedSegments(o);
          return n.size() === 0 ? 0 : xi.min(n)._leftDepth;
        } }], [{ key: "constructor_", value: function() {
          this._subgraphs = null, this._seg = new Bt();
          var o = arguments[0];
          this._subgraphs = o;
        } }]);
      })(), bc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "compareTo", value: function(o) {
          var n = o;
          if (this._upwardSeg.minX() >= n._upwardSeg.maxX()) return 1;
          if (this._upwardSeg.maxX() <= n._upwardSeg.minX()) return -1;
          var i = this._upwardSeg.orientationIndex(n._upwardSeg);
          return i !== 0 || (i = -1 * n._upwardSeg.orientationIndex(this._upwardSeg)) !== 0 ? i : this._upwardSeg.compareTo(n._upwardSeg);
        } }, { key: "compareX", value: function(o, n) {
          var i = o.p0.compareTo(n.p0);
          return i !== 0 ? i : o.p1.compareTo(n.p1);
        } }, { key: "toString", value: function() {
          return this._upwardSeg.toString();
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this._upwardSeg = null, this._leftDepth = null;
          var o = arguments[0], n = arguments[1];
          this._upwardSeg = new Bt(o), this._leftDepth = n;
        } }]);
      })();
      Ic.DepthSegment = bc;
      var Ac = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, null, [{ key: "constructor_", value: function() {
          $.constructor_.call(this, "Projective point not representable on the Cartesian plane.");
        } }]);
      })($), zo = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getY", value: function() {
          var n = this.y / this.w;
          if (Z.isNaN(n) || Z.isInfinite(n)) throw new Ac();
          return n;
        } }, { key: "getX", value: function() {
          var n = this.x / this.w;
          if (Z.isNaN(n) || Z.isInfinite(n)) throw new Ac();
          return n;
        } }, { key: "getCoordinate", value: function() {
          var n = new V();
          return n.x = this.getX(), n.y = this.getY(), n;
        } }], [{ key: "constructor_", value: function() {
          if (this.x = null, this.y = null, this.w = null, arguments.length === 0) this.x = 0, this.y = 0, this.w = 1;
          else if (arguments.length === 1) {
            var n = arguments[0];
            this.x = n.x, this.y = n.y, this.w = 1;
          } else if (arguments.length === 2) {
            if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
              var i = arguments[0], a = arguments[1];
              this.x = i, this.y = a, this.w = 1;
            } else if (arguments[0] instanceof o && arguments[1] instanceof o) {
              var c = arguments[0], g = arguments[1];
              this.x = c.y * g.w - g.y * c.w, this.y = g.x * c.w - c.x * g.w, this.w = c.x * g.y - g.x * c.y;
            } else if (arguments[0] instanceof V && arguments[1] instanceof V) {
              var m = arguments[0], y = arguments[1];
              this.x = m.y - y.y, this.y = y.x - m.x, this.w = m.x * y.y - y.x * m.y;
            }
          } else if (arguments.length === 3) {
            var w = arguments[0], A = arguments[1], z = arguments[2];
            this.x = w, this.y = A, this.w = z;
          } else if (arguments.length === 4) {
            var X = arguments[0], ee = arguments[1], ce = arguments[2], ge = arguments[3], me = X.y - ee.y, Te = ee.x - X.x, be = X.x * ee.y - ee.x * X.y, Ge = ce.y - ge.y, ft = ge.x - ce.x, pt = ce.x * ge.y - ge.x * ce.y;
            this.x = Te * pt - ft * be, this.y = Ge * be - me * pt, this.w = me * ft - Ge * Te;
          }
        } }]);
      })(), lm = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "area", value: function() {
          return o.area(this.p0, this.p1, this.p2);
        } }, { key: "signedArea", value: function() {
          return o.signedArea(this.p0, this.p1, this.p2);
        } }, { key: "interpolateZ", value: function(n) {
          if (n === null) throw new J("Supplied point is null.");
          return o.interpolateZ(n, this.p0, this.p1, this.p2);
        } }, { key: "longestSideLength", value: function() {
          return o.longestSideLength(this.p0, this.p1, this.p2);
        } }, { key: "isAcute", value: function() {
          return o.isAcute(this.p0, this.p1, this.p2);
        } }, { key: "circumcentre", value: function() {
          return o.circumcentre(this.p0, this.p1, this.p2);
        } }, { key: "area3D", value: function() {
          return o.area3D(this.p0, this.p1, this.p2);
        } }, { key: "centroid", value: function() {
          return o.centroid(this.p0, this.p1, this.p2);
        } }, { key: "inCentre", value: function() {
          return o.inCentre(this.p0, this.p1, this.p2);
        } }], [{ key: "constructor_", value: function() {
          this.p0 = null, this.p1 = null, this.p2 = null;
          var n = arguments[0], i = arguments[1], a = arguments[2];
          this.p0 = n, this.p1 = i, this.p2 = a;
        } }, { key: "area", value: function(n, i, a) {
          return Math.abs(((a.x - n.x) * (i.y - n.y) - (i.x - n.x) * (a.y - n.y)) / 2);
        } }, { key: "signedArea", value: function(n, i, a) {
          return ((a.x - n.x) * (i.y - n.y) - (i.x - n.x) * (a.y - n.y)) / 2;
        } }, { key: "det", value: function(n, i, a, c) {
          return n * c - i * a;
        } }, { key: "interpolateZ", value: function(n, i, a, c) {
          var g = i.x, m = i.y, y = a.x - g, w = c.x - g, A = a.y - m, z = c.y - m, X = y * z - w * A, ee = n.x - g, ce = n.y - m, ge = (z * ee - w * ce) / X, me = (-A * ee + y * ce) / X;
          return i.getZ() + ge * (a.getZ() - i.getZ()) + me * (c.getZ() - i.getZ());
        } }, { key: "longestSideLength", value: function(n, i, a) {
          var c = n.distance(i), g = i.distance(a), m = a.distance(n), y = c;
          return g > y && (y = g), m > y && (y = m), y;
        } }, { key: "circumcentreDD", value: function(n, i, a) {
          var c = ve.valueOf(n.x).subtract(a.x), g = ve.valueOf(n.y).subtract(a.y), m = ve.valueOf(i.x).subtract(a.x), y = ve.valueOf(i.y).subtract(a.y), w = ve.determinant(c, g, m, y).multiply(2), A = c.sqr().add(g.sqr()), z = m.sqr().add(y.sqr()), X = ve.determinant(g, A, y, z), ee = ve.determinant(c, A, m, z), ce = ve.valueOf(a.x).subtract(X.divide(w)).doubleValue(), ge = ve.valueOf(a.y).add(ee.divide(w)).doubleValue();
          return new V(ce, ge);
        } }, { key: "isAcute", value: function(n, i, a) {
          return !!Ut.isAcute(n, i, a) && !!Ut.isAcute(i, a, n) && !!Ut.isAcute(a, n, i);
        } }, { key: "circumcentre", value: function(n, i, a) {
          var c = a.x, g = a.y, m = n.x - c, y = n.y - g, w = i.x - c, A = i.y - g, z = 2 * o.det(m, y, w, A), X = o.det(y, m * m + y * y, A, w * w + A * A), ee = o.det(m, m * m + y * y, w, w * w + A * A);
          return new V(c - X / z, g + ee / z);
        } }, { key: "perpendicularBisector", value: function(n, i) {
          var a = i.x - n.x, c = i.y - n.y, g = new zo(n.x + a / 2, n.y + c / 2, 1), m = new zo(n.x - c + a / 2, n.y + a + c / 2, 1);
          return new zo(g, m);
        } }, { key: "angleBisector", value: function(n, i, a) {
          var c = i.distance(n), g = c / (c + i.distance(a)), m = a.x - n.x, y = a.y - n.y;
          return new V(n.x + g * m, n.y + g * y);
        } }, { key: "area3D", value: function(n, i, a) {
          var c = i.x - n.x, g = i.y - n.y, m = i.getZ() - n.getZ(), y = a.x - n.x, w = a.y - n.y, A = a.getZ() - n.getZ(), z = g * A - m * w, X = m * y - c * A, ee = c * w - g * y, ce = z * z + X * X + ee * ee, ge = Math.sqrt(ce) / 2;
          return ge;
        } }, { key: "centroid", value: function(n, i, a) {
          var c = (n.x + i.x + a.x) / 3, g = (n.y + i.y + a.y) / 3;
          return new V(c, g);
        } }, { key: "inCentre", value: function(n, i, a) {
          var c = i.distance(a), g = n.distance(a), m = n.distance(i), y = c + g + m, w = (c * n.x + g * i.x + m * a.x) / y, A = (c * n.y + g * i.y + m * a.y) / y;
          return new V(w, A);
        } }]);
      })(), cm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "addRingSide", value: function(o, n, i, a, c) {
          if (n === 0 && o.length < xr.MINIMUM_VALID_SIZE) return null;
          var g = a, m = c;
          o.length >= xr.MINIMUM_VALID_SIZE && ye.isCCW(o) && (g = c, m = a, i = re.opposite(i));
          var y = this._curveBuilder.getRingCurve(o, i, n);
          this.addCurve(y, g, m);
        } }, { key: "addRingBothSides", value: function(o, n) {
          this.addRingSide(o, n, re.LEFT, N.EXTERIOR, N.INTERIOR), this.addRingSide(o, n, re.RIGHT, N.INTERIOR, N.EXTERIOR);
        } }, { key: "addPoint", value: function(o) {
          if (this._distance <= 0) return null;
          var n = o.getCoordinates(), i = this._curveBuilder.getLineCurve(n, this._distance);
          this.addCurve(i, N.EXTERIOR, N.INTERIOR);
        } }, { key: "addPolygon", value: function(o) {
          var n = this._distance, i = re.LEFT;
          this._distance < 0 && (n = -this._distance, i = re.RIGHT);
          var a = o.getExteriorRing(), c = Q.removeRepeatedPoints(a.getCoordinates());
          if (this._distance < 0 && this.isErodedCompletely(a, this._distance) || this._distance <= 0 && c.length < 3) return null;
          this.addRingSide(c, n, i, N.EXTERIOR, N.INTERIOR);
          for (var g = 0; g < o.getNumInteriorRing(); g++) {
            var m = o.getInteriorRingN(g), y = Q.removeRepeatedPoints(m.getCoordinates());
            this._distance > 0 && this.isErodedCompletely(m, -this._distance) || this.addRingSide(y, n, re.opposite(i), N.INTERIOR, N.EXTERIOR);
          }
        } }, { key: "isTriangleErodedCompletely", value: function(o, n) {
          var i = new lm(o[0], o[1], o[2]), a = i.inCentre();
          return Et.pointToSegment(a, i.p0, i.p1) < Math.abs(n);
        } }, { key: "addLineString", value: function(o) {
          if (this._curveBuilder.isLineOffsetEmpty(this._distance)) return null;
          var n = Q.removeRepeatedPoints(o.getCoordinates());
          if (Q.isRing(n) && !this._curveBuilder.getBufferParameters().isSingleSided()) this.addRingBothSides(n, this._distance);
          else {
            var i = this._curveBuilder.getLineCurve(n, this._distance);
            this.addCurve(i, N.EXTERIOR, N.INTERIOR);
          }
        } }, { key: "addCurve", value: function(o, n, i) {
          if (o === null || o.length < 2) return null;
          var a = new Hr(o, new Xt(0, N.BOUNDARY, n, i));
          this._curveList.add(a);
        } }, { key: "getCurves", value: function() {
          return this.add(this._inputGeom), this._curveList;
        } }, { key: "add", value: function(o) {
          if (o.isEmpty()) return null;
          if (o instanceof qr) this.addPolygon(o);
          else if (o instanceof Wn) this.addLineString(o);
          else if (o instanceof pi) this.addPoint(o);
          else if (o instanceof vi) this.addCollection(o);
          else if (o instanceof yi) this.addCollection(o);
          else if (o instanceof Gt) this.addCollection(o);
          else {
            if (!(o instanceof Ve)) throw new ke(o.getGeometryType());
            this.addCollection(o);
          }
        } }, { key: "isErodedCompletely", value: function(o, n) {
          var i = o.getCoordinates();
          if (i.length < 4) return n < 0;
          if (i.length === 4) return this.isTriangleErodedCompletely(i, n);
          var a = o.getEnvelopeInternal(), c = Math.min(a.getHeight(), a.getWidth());
          return n < 0 && 2 * Math.abs(n) > c;
        } }, { key: "addCollection", value: function(o) {
          for (var n = 0; n < o.getNumGeometries(); n++) {
            var i = o.getGeometryN(n);
            this.add(i);
          }
        } }], [{ key: "constructor_", value: function() {
          this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new pe();
          var o = arguments[0], n = arguments[1], i = arguments[2];
          this._inputGeom = o, this._distance = n, this._curveBuilder = i;
        } }]);
      })(), hm = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "locate", value: function(o) {
        } }]);
      })(), fm = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "next", value: function() {
          if (this._atStart) return this._atStart = !1, o.isAtomic(this._parent) && this._index++, this._parent;
          if (this._subcollectionIterator !== null) {
            if (this._subcollectionIterator.hasNext()) return this._subcollectionIterator.next();
            this._subcollectionIterator = null;
          }
          if (this._index >= this._max) throw new De();
          var n = this._parent.getGeometryN(this._index++);
          return n instanceof Ve ? (this._subcollectionIterator = new o(n), this._subcollectionIterator.next()) : n;
        } }, { key: "remove", value: function() {
          throw new ke(this.getClass().getName());
        } }, { key: "hasNext", value: function() {
          if (this._atStart) return !0;
          if (this._subcollectionIterator !== null) {
            if (this._subcollectionIterator.hasNext()) return !0;
            this._subcollectionIterator = null;
          }
          return !(this._index >= this._max);
        } }, { key: "interfaces_", get: function() {
          return [tm];
        } }], [{ key: "constructor_", value: function() {
          this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
          var n = arguments[0];
          this._parent = n, this._atStart = !0, this._index = 0, this._max = n.getNumGeometries();
        } }, { key: "isAtomic", value: function(n) {
          return !(n instanceof Ve);
        } }]);
      })(), gm = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "locate", value: function(n) {
          return o.locate(n, this._geom);
        } }, { key: "interfaces_", get: function() {
          return [hm];
        } }], [{ key: "constructor_", value: function() {
          this._geom = null;
          var n = arguments[0];
          this._geom = n;
        } }, { key: "locatePointInPolygon", value: function(n, i) {
          if (i.isEmpty()) return N.EXTERIOR;
          var a = i.getExteriorRing(), c = o.locatePointInRing(n, a);
          if (c !== N.INTERIOR) return c;
          for (var g = 0; g < i.getNumInteriorRing(); g++) {
            var m = i.getInteriorRingN(g), y = o.locatePointInRing(n, m);
            if (y === N.BOUNDARY) return N.BOUNDARY;
            if (y === N.INTERIOR) return N.EXTERIOR;
          }
          return N.INTERIOR;
        } }, { key: "locatePointInRing", value: function(n, i) {
          return i.getEnvelopeInternal().intersects(n) ? Do.locateInRing(n, i.getCoordinates()) : N.EXTERIOR;
        } }, { key: "containsPointInPolygon", value: function(n, i) {
          return N.EXTERIOR !== o.locatePointInPolygon(n, i);
        } }, { key: "locateInGeometry", value: function(n, i) {
          if (i instanceof qr) return o.locatePointInPolygon(n, i);
          if (i instanceof Ve) for (var a = new fm(i); a.hasNext(); ) {
            var c = a.next();
            if (c !== i) {
              var g = o.locateInGeometry(n, c);
              if (g !== N.EXTERIOR) return g;
            }
          }
          return N.EXTERIOR;
        } }, { key: "isContained", value: function(n, i) {
          return N.EXTERIOR !== o.locate(n, i);
        } }, { key: "locate", value: function(n, i) {
          return i.isEmpty() ? N.EXTERIOR : i.getEnvelopeInternal().intersects(n) ? o.locateInGeometry(n, i) : N.EXTERIOR;
        } }]);
      })(), dm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getNextCW", value: function(o) {
          this.getEdges();
          var n = this._edgeList.indexOf(o), i = n - 1;
          return n === 0 && (i = this._edgeList.size() - 1), this._edgeList.get(i);
        } }, { key: "propagateSideLabels", value: function(o) {
          for (var n = N.NONE, i = this.iterator(); i.hasNext(); ) {
            var a = i.next().getLabel();
            a.isArea(o) && a.getLocation(o, re.LEFT) !== N.NONE && (n = a.getLocation(o, re.LEFT));
          }
          if (n === N.NONE) return null;
          for (var c = n, g = this.iterator(); g.hasNext(); ) {
            var m = g.next(), y = m.getLabel();
            if (y.getLocation(o, re.ON) === N.NONE && y.setLocation(o, re.ON, c), y.isArea(o)) {
              var w = y.getLocation(o, re.LEFT), A = y.getLocation(o, re.RIGHT);
              if (A !== N.NONE) {
                if (A !== c) throw new Pt("side location conflict", m.getCoordinate());
                w === N.NONE && ie.shouldNeverReachHere("found single null side (at " + m.getCoordinate() + ")"), c = w;
              } else ie.isTrue(y.getLocation(o, re.LEFT) === N.NONE, "found single null side"), y.setLocation(o, re.RIGHT, c), y.setLocation(o, re.LEFT, c);
            }
          }
        } }, { key: "getCoordinate", value: function() {
          var o = this.iterator();
          return o.hasNext() ? o.next().getCoordinate() : null;
        } }, { key: "print", value: function(o) {
          Ot.out.println("EdgeEndStar:   " + this.getCoordinate());
          for (var n = this.iterator(); n.hasNext(); )
            n.next().print(o);
        } }, { key: "isAreaLabelsConsistent", value: function(o) {
          return this.computeEdgeEndLabels(o.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
        } }, { key: "checkAreaLabelsConsistent", value: function(o) {
          var n = this.getEdges();
          if (n.size() <= 0) return !0;
          var i = n.size() - 1, a = n.get(i).getLabel().getLocation(o, re.LEFT);
          ie.isTrue(a !== N.NONE, "Found unlabelled area edge");
          for (var c = a, g = this.iterator(); g.hasNext(); ) {
            var m = g.next().getLabel();
            ie.isTrue(m.isArea(o), "Found non-area edge");
            var y = m.getLocation(o, re.LEFT), w = m.getLocation(o, re.RIGHT);
            if (y === w || w !== c) return !1;
            c = y;
          }
          return !0;
        } }, { key: "findIndex", value: function(o) {
          this.iterator();
          for (var n = 0; n < this._edgeList.size(); n++)
            if (this._edgeList.get(n) === o) return n;
          return -1;
        } }, { key: "iterator", value: function() {
          return this.getEdges().iterator();
        } }, { key: "getEdges", value: function() {
          return this._edgeList === null && (this._edgeList = new pe(this._edgeMap.values())), this._edgeList;
        } }, { key: "getLocation", value: function(o, n, i) {
          return this._ptInAreaLocation[o] === N.NONE && (this._ptInAreaLocation[o] = gm.locate(n, i[o].getGeometry())), this._ptInAreaLocation[o];
        } }, { key: "toString", value: function() {
          var o = new cn();
          o.append("EdgeEndStar:   " + this.getCoordinate()), o.append(`
`);
          for (var n = this.iterator(); n.hasNext(); ) {
            var i = n.next();
            o.append(i), o.append(`
`);
          }
          return o.toString();
        } }, { key: "computeEdgeEndLabels", value: function(o) {
          for (var n = this.iterator(); n.hasNext(); )
            n.next().computeLabel(o);
        } }, { key: "computeLabelling", value: function(o) {
          this.computeEdgeEndLabels(o[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
          for (var n = [!1, !1], i = this.iterator(); i.hasNext(); ) for (var a = i.next().getLabel(), c = 0; c < 2; c++) a.isLine(c) && a.getLocation(c) === N.BOUNDARY && (n[c] = !0);
          for (var g = this.iterator(); g.hasNext(); ) for (var m = g.next(), y = m.getLabel(), w = 0; w < 2; w++) if (y.isAnyNull(w)) {
            var A = N.NONE;
            if (n[w]) A = N.EXTERIOR;
            else {
              var z = m.getCoordinate();
              A = this.getLocation(w, z, o);
            }
            y.setAllLocationsIfNull(w, A);
          }
        } }, { key: "getDegree", value: function() {
          return this._edgeMap.size();
        } }, { key: "insertEdgeEnd", value: function(o, n) {
          this._edgeMap.put(o, n), this._edgeList = null;
        } }], [{ key: "constructor_", value: function() {
          this._edgeMap = new us(), this._edgeList = null, this._ptInAreaLocation = [N.NONE, N.NONE];
        } }]);
      })(), pm = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "linkResultDirectedEdges", value: function() {
          this.getResultAreaEdges();
          for (var i = null, a = null, c = this._SCANNING_FOR_INCOMING, g = 0; g < this._resultAreaEdgeList.size(); g++) {
            var m = this._resultAreaEdgeList.get(g), y = m.getSym();
            if (m.getLabel().isArea()) switch (i === null && m.isInResult() && (i = m), c) {
              case this._SCANNING_FOR_INCOMING:
                if (!y.isInResult()) continue;
                a = y, c = this._LINKING_TO_OUTGOING;
                break;
              case this._LINKING_TO_OUTGOING:
                if (!m.isInResult()) continue;
                a.setNext(m), c = this._SCANNING_FOR_INCOMING;
            }
          }
          if (c === this._LINKING_TO_OUTGOING) {
            if (i === null) throw new Pt("no outgoing dirEdge found", this.getCoordinate());
            ie.isTrue(i.isInResult(), "unable to link last incoming dirEdge"), a.setNext(i);
          }
        } }, { key: "insert", value: function(i) {
          var a = i;
          this.insertEdgeEnd(a, a);
        } }, { key: "getRightmostEdge", value: function() {
          var i = this.getEdges(), a = i.size();
          if (a < 1) return null;
          var c = i.get(0);
          if (a === 1) return c;
          var g = i.get(a - 1), m = c.getQuadrant(), y = g.getQuadrant();
          return xt.isNorthern(m) && xt.isNorthern(y) ? c : xt.isNorthern(m) || xt.isNorthern(y) ? c.getDy() !== 0 ? c : g.getDy() !== 0 ? g : (ie.shouldNeverReachHere("found two horizontal edges incident on node"), null) : g;
        } }, { key: "print", value: function(i) {
          Ot.out.println("DirectedEdgeStar: " + this.getCoordinate());
          for (var a = this.iterator(); a.hasNext(); ) {
            var c = a.next();
            i.print("out "), c.print(i), i.println(), i.print("in "), c.getSym().print(i), i.println();
          }
        } }, { key: "getResultAreaEdges", value: function() {
          if (this._resultAreaEdgeList !== null) return this._resultAreaEdgeList;
          this._resultAreaEdgeList = new pe();
          for (var i = this.iterator(); i.hasNext(); ) {
            var a = i.next();
            (a.isInResult() || a.getSym().isInResult()) && this._resultAreaEdgeList.add(a);
          }
          return this._resultAreaEdgeList;
        } }, { key: "updateLabelling", value: function(i) {
          for (var a = this.iterator(); a.hasNext(); ) {
            var c = a.next().getLabel();
            c.setAllLocationsIfNull(0, i.getLocation(0)), c.setAllLocationsIfNull(1, i.getLocation(1));
          }
        } }, { key: "linkAllDirectedEdges", value: function() {
          this.getEdges();
          for (var i = null, a = null, c = this._edgeList.size() - 1; c >= 0; c--) {
            var g = this._edgeList.get(c), m = g.getSym();
            a === null && (a = m), i !== null && m.setNext(i), i = g;
          }
          a.setNext(i);
        } }, { key: "computeDepths", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0], a = this.findIndex(i), c = i.getDepth(re.LEFT), g = i.getDepth(re.RIGHT), m = this.computeDepths(a + 1, this._edgeList.size(), c);
            if (this.computeDepths(0, a, m) !== g) throw new Pt("depth mismatch at " + i.getCoordinate());
          } else if (arguments.length === 3) {
            for (var y = arguments[1], w = arguments[2], A = arguments[0]; A < y; A++) {
              var z = this._edgeList.get(A);
              z.setEdgeDepths(re.RIGHT, w), w = z.getDepth(re.LEFT);
            }
            return w;
          }
        } }, { key: "mergeSymLabels", value: function() {
          for (var i = this.iterator(); i.hasNext(); ) {
            var a = i.next();
            a.getLabel().merge(a.getSym().getLabel());
          }
        } }, { key: "linkMinimalDirectedEdges", value: function(i) {
          for (var a = null, c = null, g = this._SCANNING_FOR_INCOMING, m = this._resultAreaEdgeList.size() - 1; m >= 0; m--) {
            var y = this._resultAreaEdgeList.get(m), w = y.getSym();
            switch (a === null && y.getEdgeRing() === i && (a = y), g) {
              case this._SCANNING_FOR_INCOMING:
                if (w.getEdgeRing() !== i) continue;
                c = w, g = this._LINKING_TO_OUTGOING;
                break;
              case this._LINKING_TO_OUTGOING:
                if (y.getEdgeRing() !== i) continue;
                c.setNextMin(y), g = this._SCANNING_FOR_INCOMING;
            }
          }
          g === this._LINKING_TO_OUTGOING && (ie.isTrue(a !== null, "found null for first outgoing dirEdge"), ie.isTrue(a.getEdgeRing() === i, "unable to link last incoming dirEdge"), c.setNextMin(a));
        } }, { key: "getOutgoingDegree", value: function() {
          if (arguments.length === 0) {
            for (var i = 0, a = this.iterator(); a.hasNext(); )
              a.next().isInResult() && i++;
            return i;
          }
          if (arguments.length === 1) {
            for (var c = arguments[0], g = 0, m = this.iterator(); m.hasNext(); )
              m.next().getEdgeRing() === c && g++;
            return g;
          }
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "findCoveredLineEdges", value: function() {
          for (var i = N.NONE, a = this.iterator(); a.hasNext(); ) {
            var c = a.next(), g = c.getSym();
            if (!c.isLineEdge()) {
              if (c.isInResult()) {
                i = N.INTERIOR;
                break;
              }
              if (g.isInResult()) {
                i = N.EXTERIOR;
                break;
              }
            }
          }
          if (i === N.NONE) return null;
          for (var m = i, y = this.iterator(); y.hasNext(); ) {
            var w = y.next(), A = w.getSym();
            w.isLineEdge() ? w.getEdge().setCovered(m === N.INTERIOR) : (w.isInResult() && (m = N.EXTERIOR), A.isInResult() && (m = N.INTERIOR));
          }
        } }, { key: "computeLabelling", value: function(i) {
          M(n, "computeLabelling", this, 1).call(this, i), this._label = new Xt(N.NONE);
          for (var a = this.iterator(); a.hasNext(); ) for (var c = a.next().getEdge().getLabel(), g = 0; g < 2; g++) {
            var m = c.getLocation(g);
            m !== N.INTERIOR && m !== N.BOUNDARY || this._label.setLocation(g, N.INTERIOR);
          }
        } }], [{ key: "constructor_", value: function() {
          this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
        } }]);
      })(dm), mm = (function(o) {
        function n() {
          return u(this, n), s(this, n);
        }
        return _(n, o), h(n, [{ key: "createNode", value: function(i) {
          return new pa(i, new pm());
        } }]);
      })(vc), Tc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "compareTo", value: function(n) {
          var i = n;
          return o.compareOriented(this._pts, this._orientation, i._pts, i._orientation);
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this._pts = null, this._orientation = null;
          var n = arguments[0];
          this._pts = n, this._orientation = o.orientation(n);
        } }, { key: "orientation", value: function(n) {
          return Q.increasingDirection(n) === 1;
        } }, { key: "compareOriented", value: function(n, i, a, c) {
          for (var g = i ? 1 : -1, m = c ? 1 : -1, y = i ? n.length : -1, w = c ? a.length : -1, A = i ? 0 : n.length - 1, z = c ? 0 : a.length - 1; ; ) {
            var X = n[A].compareTo(a[z]);
            if (X !== 0) return X;
            var ee = (A += g) === y, ce = (z += m) === w;
            if (ee && !ce) return -1;
            if (!ee && ce) return 1;
            if (ee && ce) return 0;
          }
        } }]);
      })(), vm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "print", value: function(o) {
          o.print("MULTILINESTRING ( ");
          for (var n = 0; n < this._edges.size(); n++) {
            var i = this._edges.get(n);
            n > 0 && o.print(","), o.print("(");
            for (var a = i.getCoordinates(), c = 0; c < a.length; c++) c > 0 && o.print(","), o.print(a[c].x + " " + a[c].y);
            o.println(")");
          }
          o.print(")  ");
        } }, { key: "addAll", value: function(o) {
          for (var n = o.iterator(); n.hasNext(); ) this.add(n.next());
        } }, { key: "findEdgeIndex", value: function(o) {
          for (var n = 0; n < this._edges.size(); n++) if (this._edges.get(n).equals(o)) return n;
          return -1;
        } }, { key: "iterator", value: function() {
          return this._edges.iterator();
        } }, { key: "getEdges", value: function() {
          return this._edges;
        } }, { key: "get", value: function(o) {
          return this._edges.get(o);
        } }, { key: "findEqualEdge", value: function(o) {
          var n = new Tc(o.getCoordinates());
          return this._ocaMap.get(n);
        } }, { key: "add", value: function(o) {
          this._edges.add(o);
          var n = new Tc(o.getCoordinates());
          this._ocaMap.put(n, o);
        } }], [{ key: "constructor_", value: function() {
          this._edges = new pe(), this._ocaMap = new us();
        } }]);
      })(), Lc = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "processIntersections", value: function(o, n, i, a) {
        } }, { key: "isDone", value: function() {
        } }]);
      })(), ym = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "isTrivialIntersection", value: function(n, i, a, c) {
          if (n === a && this._li.getIntersectionNum() === 1) {
            if (o.isAdjacentSegments(i, c)) return !0;
            if (n.isClosed()) {
              var g = n.size() - 1;
              if (i === 0 && c === g || c === 0 && i === g) return !0;
            }
          }
          return !1;
        } }, { key: "getProperIntersectionPoint", value: function() {
          return this._properIntersectionPoint;
        } }, { key: "hasProperInteriorIntersection", value: function() {
          return this._hasProperInterior;
        } }, { key: "getLineIntersector", value: function() {
          return this._li;
        } }, { key: "hasProperIntersection", value: function() {
          return this._hasProper;
        } }, { key: "processIntersections", value: function(n, i, a, c) {
          if (n === a && i === c) return null;
          this.numTests++;
          var g = n.getCoordinates()[i], m = n.getCoordinates()[i + 1], y = a.getCoordinates()[c], w = a.getCoordinates()[c + 1];
          this._li.computeIntersection(g, m, y, w), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(n, i, a, c) || (this._hasIntersection = !0, n.addIntersections(this._li, i, 0), a.addIntersections(this._li, c, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
        } }, { key: "hasIntersection", value: function() {
          return this._hasIntersection;
        } }, { key: "isDone", value: function() {
          return !1;
        } }, { key: "hasInteriorIntersection", value: function() {
          return this._hasInterior;
        } }, { key: "interfaces_", get: function() {
          return [Lc];
        } }], [{ key: "constructor_", value: function() {
          this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
          var n = arguments[0];
          this._li = n;
        } }, { key: "isAdjacentSegments", value: function(n, i) {
          return Math.abs(n - i) === 1;
        } }]);
      })(), _m = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getSegmentIndex", value: function() {
          return this.segmentIndex;
        } }, { key: "getCoordinate", value: function() {
          return this.coord;
        } }, { key: "print", value: function(o) {
          o.print(this.coord), o.print(" seg # = " + this.segmentIndex), o.println(" dist = " + this.dist);
        } }, { key: "compareTo", value: function(o) {
          var n = o;
          return this.compare(n.segmentIndex, n.dist);
        } }, { key: "isEndPoint", value: function(o) {
          return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === o;
        } }, { key: "toString", value: function() {
          return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
        } }, { key: "getDistance", value: function() {
          return this.dist;
        } }, { key: "compare", value: function(o, n) {
          return this.segmentIndex < o ? -1 : this.segmentIndex > o ? 1 : this.dist < n ? -1 : this.dist > n ? 1 : 0;
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this.coord = null, this.segmentIndex = null, this.dist = null;
          var o = arguments[0], n = arguments[1], i = arguments[2];
          this.coord = new V(o), this.segmentIndex = n, this.dist = i;
        } }]);
      })(), Em = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "print", value: function(o) {
          o.println("Intersections:");
          for (var n = this.iterator(); n.hasNext(); )
            n.next().print(o);
        } }, { key: "iterator", value: function() {
          return this._nodeMap.values().iterator();
        } }, { key: "addSplitEdges", value: function(o) {
          this.addEndpoints();
          for (var n = this.iterator(), i = n.next(); n.hasNext(); ) {
            var a = n.next(), c = this.createSplitEdge(i, a);
            o.add(c), i = a;
          }
        } }, { key: "addEndpoints", value: function() {
          var o = this.edge.pts.length - 1;
          this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[o], o, 0);
        } }, { key: "createSplitEdge", value: function(o, n) {
          var i = n.segmentIndex - o.segmentIndex + 2, a = this.edge.pts[n.segmentIndex], c = n.dist > 0 || !n.coord.equals2D(a);
          c || i--;
          var g = new Array(i).fill(null), m = 0;
          g[m++] = new V(o.coord);
          for (var y = o.segmentIndex + 1; y <= n.segmentIndex; y++) g[m++] = this.edge.pts[y];
          return c && (g[m] = n.coord), new Nc(g, new Xt(this.edge._label));
        } }, { key: "add", value: function(o, n, i) {
          var a = new _m(o, n, i), c = this._nodeMap.get(a);
          return c !== null ? c : (this._nodeMap.put(a, a), a);
        } }, { key: "isIntersection", value: function(o) {
          for (var n = this.iterator(); n.hasNext(); )
            if (n.next().coord.equals(o)) return !0;
          return !1;
        } }], [{ key: "constructor_", value: function() {
          this._nodeMap = new us(), this.edge = null;
          var o = arguments[0];
          this.edge = o;
        } }]);
      })(), xm = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "isIntersects", value: function() {
          return !this.isDisjoint();
        } }, { key: "isCovers", value: function() {
          return (o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) || o.isTrue(this._matrix[N.INTERIOR][N.BOUNDARY]) || o.isTrue(this._matrix[N.BOUNDARY][N.INTERIOR]) || o.isTrue(this._matrix[N.BOUNDARY][N.BOUNDARY])) && this._matrix[N.EXTERIOR][N.INTERIOR] === se.FALSE && this._matrix[N.EXTERIOR][N.BOUNDARY] === se.FALSE;
        } }, { key: "isCoveredBy", value: function() {
          return (o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) || o.isTrue(this._matrix[N.INTERIOR][N.BOUNDARY]) || o.isTrue(this._matrix[N.BOUNDARY][N.INTERIOR]) || o.isTrue(this._matrix[N.BOUNDARY][N.BOUNDARY])) && this._matrix[N.INTERIOR][N.EXTERIOR] === se.FALSE && this._matrix[N.BOUNDARY][N.EXTERIOR] === se.FALSE;
        } }, { key: "set", value: function() {
          if (arguments.length === 1) for (var n = arguments[0], i = 0; i < n.length; i++) {
            var a = Math.trunc(i / 3), c = i % 3;
            this._matrix[a][c] = se.toDimensionValue(n.charAt(i));
          }
          else if (arguments.length === 3) {
            var g = arguments[0], m = arguments[1], y = arguments[2];
            this._matrix[g][m] = y;
          }
        } }, { key: "isContains", value: function() {
          return o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && this._matrix[N.EXTERIOR][N.INTERIOR] === se.FALSE && this._matrix[N.EXTERIOR][N.BOUNDARY] === se.FALSE;
        } }, { key: "setAtLeast", value: function() {
          if (arguments.length === 1) for (var n = arguments[0], i = 0; i < n.length; i++) {
            var a = Math.trunc(i / 3), c = i % 3;
            this.setAtLeast(a, c, se.toDimensionValue(n.charAt(i)));
          }
          else if (arguments.length === 3) {
            var g = arguments[0], m = arguments[1], y = arguments[2];
            this._matrix[g][m] < y && (this._matrix[g][m] = y);
          }
        } }, { key: "setAtLeastIfValid", value: function(n, i, a) {
          n >= 0 && i >= 0 && this.setAtLeast(n, i, a);
        } }, { key: "isWithin", value: function() {
          return o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && this._matrix[N.INTERIOR][N.EXTERIOR] === se.FALSE && this._matrix[N.BOUNDARY][N.EXTERIOR] === se.FALSE;
        } }, { key: "isTouches", value: function(n, i) {
          return n > i ? this.isTouches(i, n) : (n === se.A && i === se.A || n === se.L && i === se.L || n === se.L && i === se.A || n === se.P && i === se.A || n === se.P && i === se.L) && this._matrix[N.INTERIOR][N.INTERIOR] === se.FALSE && (o.isTrue(this._matrix[N.INTERIOR][N.BOUNDARY]) || o.isTrue(this._matrix[N.BOUNDARY][N.INTERIOR]) || o.isTrue(this._matrix[N.BOUNDARY][N.BOUNDARY]));
        } }, { key: "isOverlaps", value: function(n, i) {
          return n === se.P && i === se.P || n === se.A && i === se.A ? o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && o.isTrue(this._matrix[N.INTERIOR][N.EXTERIOR]) && o.isTrue(this._matrix[N.EXTERIOR][N.INTERIOR]) : n === se.L && i === se.L && this._matrix[N.INTERIOR][N.INTERIOR] === 1 && o.isTrue(this._matrix[N.INTERIOR][N.EXTERIOR]) && o.isTrue(this._matrix[N.EXTERIOR][N.INTERIOR]);
        } }, { key: "isEquals", value: function(n, i) {
          return n === i && o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && this._matrix[N.INTERIOR][N.EXTERIOR] === se.FALSE && this._matrix[N.BOUNDARY][N.EXTERIOR] === se.FALSE && this._matrix[N.EXTERIOR][N.INTERIOR] === se.FALSE && this._matrix[N.EXTERIOR][N.BOUNDARY] === se.FALSE;
        } }, { key: "toString", value: function() {
          for (var n = new Qe("123456789"), i = 0; i < 3; i++) for (var a = 0; a < 3; a++) n.setCharAt(3 * i + a, se.toDimensionSymbol(this._matrix[i][a]));
          return n.toString();
        } }, { key: "setAll", value: function(n) {
          for (var i = 0; i < 3; i++) for (var a = 0; a < 3; a++) this._matrix[i][a] = n;
        } }, { key: "get", value: function(n, i) {
          return this._matrix[n][i];
        } }, { key: "transpose", value: function() {
          var n = this._matrix[1][0];
          return this._matrix[1][0] = this._matrix[0][1], this._matrix[0][1] = n, n = this._matrix[2][0], this._matrix[2][0] = this._matrix[0][2], this._matrix[0][2] = n, n = this._matrix[2][1], this._matrix[2][1] = this._matrix[1][2], this._matrix[1][2] = n, this;
        } }, { key: "matches", value: function(n) {
          if (n.length !== 9) throw new J("Should be length 9: " + n);
          for (var i = 0; i < 3; i++) for (var a = 0; a < 3; a++) if (!o.matches(this._matrix[i][a], n.charAt(3 * i + a))) return !1;
          return !0;
        } }, { key: "add", value: function(n) {
          for (var i = 0; i < 3; i++) for (var a = 0; a < 3; a++) this.setAtLeast(i, a, n.get(i, a));
        } }, { key: "isDisjoint", value: function() {
          return this._matrix[N.INTERIOR][N.INTERIOR] === se.FALSE && this._matrix[N.INTERIOR][N.BOUNDARY] === se.FALSE && this._matrix[N.BOUNDARY][N.INTERIOR] === se.FALSE && this._matrix[N.BOUNDARY][N.BOUNDARY] === se.FALSE;
        } }, { key: "isCrosses", value: function(n, i) {
          return n === se.P && i === se.L || n === se.P && i === se.A || n === se.L && i === se.A ? o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && o.isTrue(this._matrix[N.INTERIOR][N.EXTERIOR]) : n === se.L && i === se.P || n === se.A && i === se.P || n === se.A && i === se.L ? o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && o.isTrue(this._matrix[N.EXTERIOR][N.INTERIOR]) : n === se.L && i === se.L && this._matrix[N.INTERIOR][N.INTERIOR] === 0;
        } }, { key: "interfaces_", get: function() {
          return [E];
        } }], [{ key: "constructor_", value: function() {
          if (this._matrix = null, arguments.length === 0) this._matrix = Array(3).fill().map((function() {
            return Array(3);
          })), this.setAll(se.FALSE);
          else if (arguments.length === 1) {
            if (typeof arguments[0] == "string") {
              var n = arguments[0];
              o.constructor_.call(this), this.set(n);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              o.constructor_.call(this), this._matrix[N.INTERIOR][N.INTERIOR] = i._matrix[N.INTERIOR][N.INTERIOR], this._matrix[N.INTERIOR][N.BOUNDARY] = i._matrix[N.INTERIOR][N.BOUNDARY], this._matrix[N.INTERIOR][N.EXTERIOR] = i._matrix[N.INTERIOR][N.EXTERIOR], this._matrix[N.BOUNDARY][N.INTERIOR] = i._matrix[N.BOUNDARY][N.INTERIOR], this._matrix[N.BOUNDARY][N.BOUNDARY] = i._matrix[N.BOUNDARY][N.BOUNDARY], this._matrix[N.BOUNDARY][N.EXTERIOR] = i._matrix[N.BOUNDARY][N.EXTERIOR], this._matrix[N.EXTERIOR][N.INTERIOR] = i._matrix[N.EXTERIOR][N.INTERIOR], this._matrix[N.EXTERIOR][N.BOUNDARY] = i._matrix[N.EXTERIOR][N.BOUNDARY], this._matrix[N.EXTERIOR][N.EXTERIOR] = i._matrix[N.EXTERIOR][N.EXTERIOR];
            }
          }
        } }, { key: "matches", value: function() {
          if (Number.isInteger(arguments[0]) && typeof arguments[1] == "string") {
            var n = arguments[0], i = arguments[1];
            return i === se.SYM_DONTCARE || i === se.SYM_TRUE && (n >= 0 || n === se.TRUE) || i === se.SYM_FALSE && n === se.FALSE || i === se.SYM_P && n === se.P || i === se.SYM_L && n === se.L || i === se.SYM_A && n === se.A;
          }
          if (typeof arguments[0] == "string" && typeof arguments[1] == "string") {
            var a = arguments[1];
            return new o(arguments[0]).matches(a);
          }
        } }, { key: "isTrue", value: function(n) {
          return n >= 0 || n === se.TRUE;
        } }]);
      })(), wm = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "size", value: function() {
          return this._size;
        } }, { key: "addAll", value: function(n) {
          return n === null || n.length === 0 ? null : (this.ensureCapacity(this._size + n.length), Ot.arraycopy(n, 0, this._data, this._size, n.length), void (this._size += n.length));
        } }, { key: "ensureCapacity", value: function(n) {
          if (n <= this._data.length) return null;
          var i = Math.max(n, 2 * this._data.length);
          this._data = rt.copyOf(this._data, i);
        } }, { key: "toArray", value: function() {
          var n = new Array(this._size).fill(null);
          return Ot.arraycopy(this._data, 0, n, 0, this._size), n;
        } }, { key: "add", value: function(n) {
          this.ensureCapacity(this._size + 1), this._data[this._size] = n, ++this._size;
        } }], [{ key: "constructor_", value: function() {
          if (this._data = null, this._size = 0, arguments.length === 0) o.constructor_.call(this, 10);
          else if (arguments.length === 1) {
            var n = arguments[0];
            this._data = new Array(n).fill(null);
          }
        } }]);
      })(), km = (function() {
        function o() {
          u(this, o);
        }
        return h(o, [{ key: "getChainStartIndices", value: function(n) {
          var i = 0, a = new wm(Math.trunc(n.length / 2));
          a.add(i);
          do {
            var c = this.findChainEnd(n, i);
            a.add(c), i = c;
          } while (i < n.length - 1);
          return a.toArray();
        } }, { key: "findChainEnd", value: function(n, i) {
          for (var a = xt.quadrant(n[i], n[i + 1]), c = i + 1; c < n.length && xt.quadrant(n[c - 1], n[c]) === a; )
            c++;
          return c - 1;
        } }, { key: "OLDgetChainStartIndices", value: function(n) {
          var i = 0, a = new pe();
          a.add(i);
          do {
            var c = this.findChainEnd(n, i);
            a.add(c), i = c;
          } while (i < n.length - 1);
          return o.toIntArray(a);
        } }], [{ key: "toIntArray", value: function(n) {
          for (var i = new Array(n.size()).fill(null), a = 0; a < i.length; a++) i[a] = n.get(a).intValue();
          return i;
        } }]);
      })(), Sm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getCoordinates", value: function() {
          return this.pts;
        } }, { key: "getMaxX", value: function(o) {
          var n = this.pts[this.startIndex[o]].x, i = this.pts[this.startIndex[o + 1]].x;
          return n > i ? n : i;
        } }, { key: "getMinX", value: function(o) {
          var n = this.pts[this.startIndex[o]].x, i = this.pts[this.startIndex[o + 1]].x;
          return n < i ? n : i;
        } }, { key: "computeIntersectsForChain", value: function() {
          if (arguments.length === 4) {
            var o = arguments[0], n = arguments[1], i = arguments[2], a = arguments[3];
            this.computeIntersectsForChain(this.startIndex[o], this.startIndex[o + 1], n, n.startIndex[i], n.startIndex[i + 1], a);
          } else if (arguments.length === 6) {
            var c = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3], w = arguments[4], A = arguments[5];
            if (g - c == 1 && w - y == 1) return A.addIntersections(this.e, c, m.e, y), null;
            if (!this.overlaps(c, g, m, y, w)) return null;
            var z = Math.trunc((c + g) / 2), X = Math.trunc((y + w) / 2);
            c < z && (y < X && this.computeIntersectsForChain(c, z, m, y, X, A), X < w && this.computeIntersectsForChain(c, z, m, X, w, A)), z < g && (y < X && this.computeIntersectsForChain(z, g, m, y, X, A), X < w && this.computeIntersectsForChain(z, g, m, X, w, A));
          }
        } }, { key: "overlaps", value: function(o, n, i, a, c) {
          return Ie.intersects(this.pts[o], this.pts[n], i.pts[a], i.pts[c]);
        } }, { key: "getStartIndexes", value: function() {
          return this.startIndex;
        } }, { key: "computeIntersects", value: function(o, n) {
          for (var i = 0; i < this.startIndex.length - 1; i++) for (var a = 0; a < o.startIndex.length - 1; a++) this.computeIntersectsForChain(i, o, a, n);
        } }], [{ key: "constructor_", value: function() {
          this.e = null, this.pts = null, this.startIndex = null;
          var o = arguments[0];
          this.e = o, this.pts = o.getCoordinates();
          var n = new km();
          this.startIndex = n.getChainStartIndices(this.pts);
        } }]);
      })(), Cc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getDepth", value: function(n, i) {
          return this._depth[n][i];
        } }, { key: "setDepth", value: function(n, i, a) {
          this._depth[n][i] = a;
        } }, { key: "isNull", value: function() {
          if (arguments.length === 0) {
            for (var n = 0; n < 2; n++) for (var i = 0; i < 3; i++) if (this._depth[n][i] !== o.NULL_VALUE) return !1;
            return !0;
          }
          if (arguments.length === 1) {
            var a = arguments[0];
            return this._depth[a][1] === o.NULL_VALUE;
          }
          if (arguments.length === 2) {
            var c = arguments[0], g = arguments[1];
            return this._depth[c][g] === o.NULL_VALUE;
          }
        } }, { key: "normalize", value: function() {
          for (var n = 0; n < 2; n++) if (!this.isNull(n)) {
            var i = this._depth[n][1];
            this._depth[n][2] < i && (i = this._depth[n][2]), i < 0 && (i = 0);
            for (var a = 1; a < 3; a++) {
              var c = 0;
              this._depth[n][a] > i && (c = 1), this._depth[n][a] = c;
            }
          }
        } }, { key: "getDelta", value: function(n) {
          return this._depth[n][re.RIGHT] - this._depth[n][re.LEFT];
        } }, { key: "getLocation", value: function(n, i) {
          return this._depth[n][i] <= 0 ? N.EXTERIOR : N.INTERIOR;
        } }, { key: "toString", value: function() {
          return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
        } }, { key: "add", value: function() {
          if (arguments.length === 1) for (var n = arguments[0], i = 0; i < 2; i++) for (var a = 1; a < 3; a++) {
            var c = n.getLocation(i, a);
            c !== N.EXTERIOR && c !== N.INTERIOR || (this.isNull(i, a) ? this._depth[i][a] = o.depthAtLocation(c) : this._depth[i][a] += o.depthAtLocation(c));
          }
          else if (arguments.length === 3) {
            var g = arguments[0], m = arguments[1];
            arguments[2] === N.INTERIOR && this._depth[g][m]++;
          }
        } }], [{ key: "constructor_", value: function() {
          this._depth = Array(2).fill().map((function() {
            return Array(3);
          }));
          for (var n = 0; n < 2; n++) for (var i = 0; i < 3; i++) this._depth[n][i] = o.NULL_VALUE;
        } }, { key: "depthAtLocation", value: function(n) {
          return n === N.EXTERIOR ? 0 : n === N.INTERIOR ? 1 : o.NULL_VALUE;
        } }]);
      })();
      Cc.NULL_VALUE = -1;
      var Nc = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "getDepth", value: function() {
          return this._depth;
        } }, { key: "getCollapsedEdge", value: function() {
          var i = new Array(2).fill(null);
          return i[0] = this.pts[0], i[1] = this.pts[1], new n(i, Xt.toLineLabel(this._label));
        } }, { key: "isIsolated", value: function() {
          return this._isIsolated;
        } }, { key: "getCoordinates", value: function() {
          return this.pts;
        } }, { key: "setIsolated", value: function(i) {
          this._isIsolated = i;
        } }, { key: "setName", value: function(i) {
          this._name = i;
        } }, { key: "equals", value: function(i) {
          if (!(i instanceof n)) return !1;
          var a = i;
          if (this.pts.length !== a.pts.length) return !1;
          for (var c = !0, g = !0, m = this.pts.length, y = 0; y < this.pts.length; y++) if (this.pts[y].equals2D(a.pts[y]) || (c = !1), this.pts[y].equals2D(a.pts[--m]) || (g = !1), !c && !g) return !1;
          return !0;
        } }, { key: "getCoordinate", value: function() {
          if (arguments.length === 0) return this.pts.length > 0 ? this.pts[0] : null;
          if (arguments.length === 1) {
            var i = arguments[0];
            return this.pts[i];
          }
        } }, { key: "print", value: function(i) {
          i.print("edge " + this._name + ": "), i.print("LINESTRING (");
          for (var a = 0; a < this.pts.length; a++) a > 0 && i.print(","), i.print(this.pts[a].x + " " + this.pts[a].y);
          i.print(")  " + this._label + " " + this._depthDelta);
        } }, { key: "computeIM", value: function(i) {
          n.updateIM(this._label, i);
        } }, { key: "isCollapsed", value: function() {
          return !!this._label.isArea() && this.pts.length === 3 && !!this.pts[0].equals(this.pts[2]);
        } }, { key: "isClosed", value: function() {
          return this.pts[0].equals(this.pts[this.pts.length - 1]);
        } }, { key: "getMaximumSegmentIndex", value: function() {
          return this.pts.length - 1;
        } }, { key: "getDepthDelta", value: function() {
          return this._depthDelta;
        } }, { key: "getNumPoints", value: function() {
          return this.pts.length;
        } }, { key: "printReverse", value: function(i) {
          i.print("edge " + this._name + ": ");
          for (var a = this.pts.length - 1; a >= 0; a--) i.print(this.pts[a] + " ");
          i.println("");
        } }, { key: "getMonotoneChainEdge", value: function() {
          return this._mce === null && (this._mce = new Sm(this)), this._mce;
        } }, { key: "getEnvelope", value: function() {
          if (this._env === null) {
            this._env = new Ie();
            for (var i = 0; i < this.pts.length; i++) this._env.expandToInclude(this.pts[i]);
          }
          return this._env;
        } }, { key: "addIntersection", value: function(i, a, c, g) {
          var m = new V(i.getIntersection(g)), y = a, w = i.getEdgeDistance(c, g), A = y + 1;
          if (A < this.pts.length) {
            var z = this.pts[A];
            m.equals2D(z) && (y = A, w = 0);
          }
          this.eiList.add(m, y, w);
        } }, { key: "toString", value: function() {
          var i = new Qe();
          i.append("edge " + this._name + ": "), i.append("LINESTRING (");
          for (var a = 0; a < this.pts.length; a++) a > 0 && i.append(","), i.append(this.pts[a].x + " " + this.pts[a].y);
          return i.append(")  " + this._label + " " + this._depthDelta), i.toString();
        } }, { key: "isPointwiseEqual", value: function(i) {
          if (this.pts.length !== i.pts.length) return !1;
          for (var a = 0; a < this.pts.length; a++) if (!this.pts[a].equals2D(i.pts[a])) return !1;
          return !0;
        } }, { key: "setDepthDelta", value: function(i) {
          this._depthDelta = i;
        } }, { key: "getEdgeIntersectionList", value: function() {
          return this.eiList;
        } }, { key: "addIntersections", value: function(i, a, c) {
          for (var g = 0; g < i.getIntersectionNum(); g++) this.addIntersection(i, a, c, g);
        } }], [{ key: "constructor_", value: function() {
          if (this.pts = null, this._env = null, this.eiList = new Em(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new Cc(), this._depthDelta = 0, arguments.length === 1) {
            var i = arguments[0];
            n.constructor_.call(this, i, null);
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            this.pts = a, this._label = c;
          }
        } }, { key: "updateIM", value: function() {
          if (!(arguments.length === 2 && arguments[1] instanceof xm && arguments[0] instanceof Xt)) return M(n, "updateIM", this).apply(this, arguments);
          var i = arguments[0], a = arguments[1];
          a.setAtLeastIfValid(i.getLocation(0, re.ON), i.getLocation(1, re.ON), 1), i.isArea() && (a.setAtLeastIfValid(i.getLocation(0, re.LEFT), i.getLocation(1, re.LEFT), 2), a.setAtLeastIfValid(i.getLocation(0, re.RIGHT), i.getLocation(1, re.RIGHT), 2));
        } }]);
      })(fc), Pc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "setWorkingPrecisionModel", value: function(n) {
          this._workingPrecisionModel = n;
        } }, { key: "insertUniqueEdge", value: function(n) {
          var i = this._edgeList.findEqualEdge(n);
          if (i !== null) {
            var a = i.getLabel(), c = n.getLabel();
            i.isPointwiseEqual(n) || (c = new Xt(n.getLabel())).flip(), a.merge(c);
            var g = o.depthDelta(c), m = i.getDepthDelta() + g;
            i.setDepthDelta(m);
          } else this._edgeList.add(n), n.setDepthDelta(o.depthDelta(n.getLabel()));
        } }, { key: "buildSubgraphs", value: function(n, i) {
          for (var a = new pe(), c = n.iterator(); c.hasNext(); ) {
            var g = c.next(), m = g.getRightmostCoordinate(), y = new Ic(a).getDepth(m);
            g.computeDepth(y), g.findResultEdges(), a.add(g), i.add(g.getDirectedEdges(), g.getNodes());
          }
        } }, { key: "createSubgraphs", value: function(n) {
          for (var i = new pe(), a = n.getNodes().iterator(); a.hasNext(); ) {
            var c = a.next();
            if (!c.isVisited()) {
              var g = new rs();
              g.create(c), i.add(g);
            }
          }
          return xi.sort(i, xi.reverseOrder()), i;
        } }, { key: "createEmptyResultGeometry", value: function() {
          return this._geomFact.createPolygon();
        } }, { key: "getNoder", value: function(n) {
          if (this._workingNoder !== null) return this._workingNoder;
          var i = new Uo(), a = new Yr();
          return a.setPrecisionModel(n), i.setSegmentIntersector(new ym(a)), i;
        } }, { key: "buffer", value: function(n, i) {
          var a = this._workingPrecisionModel;
          a === null && (a = n.getPrecisionModel()), this._geomFact = n.getFactory();
          var c = new um(a, this._bufParams), g = new cm(n, i, c).getCurves();
          if (g.size() <= 0) return this.createEmptyResultGeometry();
          this.computeNodedEdges(g, a), this._graph = new yc(new mm()), this._graph.addEdges(this._edgeList.getEdges());
          var m = this.createSubgraphs(this._graph), y = new Wp(this._geomFact);
          this.buildSubgraphs(m, y);
          var w = y.getPolygons();
          return w.size() <= 0 ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(w);
        } }, { key: "computeNodedEdges", value: function(n, i) {
          var a = this.getNoder(i);
          a.computeNodes(n);
          for (var c = a.getNodedSubstrings().iterator(); c.hasNext(); ) {
            var g = c.next(), m = g.getCoordinates();
            if (m.length !== 2 || !m[0].equals2D(m[1])) {
              var y = g.getData(), w = new Nc(g.getCoordinates(), new Xt(y));
              this.insertUniqueEdge(w);
            }
          }
        } }, { key: "setNoder", value: function(n) {
          this._workingNoder = n;
        } }], [{ key: "constructor_", value: function() {
          this._bufParams = null, this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new vm();
          var n = arguments[0];
          this._bufParams = n;
        } }, { key: "depthDelta", value: function(n) {
          var i = n.getLocation(0, re.LEFT), a = n.getLocation(0, re.RIGHT);
          return i === N.INTERIOR && a === N.EXTERIOR ? 1 : i === N.EXTERIOR && a === N.INTERIOR ? -1 : 0;
        } }, { key: "convertSegStrings", value: function(n) {
          for (var i = new _i(), a = new pe(); n.hasNext(); ) {
            var c = n.next(), g = i.createLineString(c.getCoordinates());
            a.add(g);
          }
          return i.buildGeometry(a);
        } }]);
      })(), Mm = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "rescale", value: function() {
          if (Ee(arguments[0], Ce)) for (var n = arguments[0].iterator(); n.hasNext(); ) {
            var i = n.next();
            this.rescale(i.getCoordinates());
          }
          else if (arguments[0] instanceof Array) {
            for (var a = arguments[0], c = 0; c < a.length; c++) a[c].x = a[c].x / this._scaleFactor + this._offsetX, a[c].y = a[c].y / this._scaleFactor + this._offsetY;
            a.length === 2 && a[0].equals2D(a[1]) && Ot.out.println(a);
          }
        } }, { key: "scale", value: function() {
          if (Ee(arguments[0], Ce)) {
            for (var n = arguments[0], i = new pe(n.size()), a = n.iterator(); a.hasNext(); ) {
              var c = a.next();
              i.add(new Hr(this.scale(c.getCoordinates()), c.getData()));
            }
            return i;
          }
          if (arguments[0] instanceof Array) {
            for (var g = arguments[0], m = new Array(g.length).fill(null), y = 0; y < g.length; y++) m[y] = new V(Math.round((g[y].x - this._offsetX) * this._scaleFactor), Math.round((g[y].y - this._offsetY) * this._scaleFactor), g[y].getZ());
            return Q.removeRepeatedPoints(m);
          }
        } }, { key: "isIntegerPrecision", value: function() {
          return this._scaleFactor === 1;
        } }, { key: "getNodedSubstrings", value: function() {
          var n = this._noder.getNodedSubstrings();
          return this._isScaled && this.rescale(n), n;
        } }, { key: "computeNodes", value: function(n) {
          var i = n;
          this._isScaled && (i = this.scale(n)), this._noder.computeNodes(i);
        } }, { key: "interfaces_", get: function() {
          return [Bo];
        } }], [{ key: "constructor_", value: function() {
          if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            o.constructor_.call(this, n, i, 0, 0);
          } else if (arguments.length === 4) {
            var a = arguments[0], c = arguments[1];
            this._noder = a, this._scaleFactor = c, this._isScaled = !this.isIntegerPrecision();
          }
        } }]);
      })(), Oc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "checkEndPtVertexIntersections", value: function() {
          if (arguments.length === 0) for (var n = this._segStrings.iterator(); n.hasNext(); ) {
            var i = n.next().getCoordinates();
            this.checkEndPtVertexIntersections(i[0], this._segStrings), this.checkEndPtVertexIntersections(i[i.length - 1], this._segStrings);
          }
          else if (arguments.length === 2) {
            for (var a = arguments[0], c = arguments[1].iterator(); c.hasNext(); ) for (var g = c.next().getCoordinates(), m = 1; m < g.length - 1; m++) if (g[m].equals(a)) throw new le("found endpt/interior pt intersection at index " + m + " :pt " + a);
          }
        } }, { key: "checkInteriorIntersections", value: function() {
          if (arguments.length === 0) for (var n = this._segStrings.iterator(); n.hasNext(); ) for (var i = n.next(), a = this._segStrings.iterator(); a.hasNext(); ) {
            var c = a.next();
            this.checkInteriorIntersections(i, c);
          }
          else if (arguments.length === 2) for (var g = arguments[0], m = arguments[1], y = g.getCoordinates(), w = m.getCoordinates(), A = 0; A < y.length - 1; A++) for (var z = 0; z < w.length - 1; z++) this.checkInteriorIntersections(g, A, m, z);
          else if (arguments.length === 4) {
            var X = arguments[0], ee = arguments[1], ce = arguments[2], ge = arguments[3];
            if (X === ce && ee === ge) return null;
            var me = X.getCoordinates()[ee], Te = X.getCoordinates()[ee + 1], be = ce.getCoordinates()[ge], Ge = ce.getCoordinates()[ge + 1];
            if (this._li.computeIntersection(me, Te, be, Ge), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, me, Te) || this.hasInteriorIntersection(this._li, be, Ge))) throw new le("found non-noded intersection at " + me + "-" + Te + " and " + be + "-" + Ge);
          }
        } }, { key: "checkValid", value: function() {
          this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
        } }, { key: "checkCollapses", value: function() {
          if (arguments.length === 0) for (var n = this._segStrings.iterator(); n.hasNext(); ) {
            var i = n.next();
            this.checkCollapses(i);
          }
          else if (arguments.length === 1) for (var a = arguments[0].getCoordinates(), c = 0; c < a.length - 2; c++) this.checkCollapse(a[c], a[c + 1], a[c + 2]);
        } }, { key: "hasInteriorIntersection", value: function(n, i, a) {
          for (var c = 0; c < n.getIntersectionNum(); c++) {
            var g = n.getIntersection(c);
            if (!g.equals(i) && !g.equals(a)) return !0;
          }
          return !1;
        } }, { key: "checkCollapse", value: function(n, i, a) {
          if (n.equals(a)) throw new le("found non-noded collapse at " + o.fact.createLineString([n, i, a]));
        } }], [{ key: "constructor_", value: function() {
          this._li = new Yr(), this._segStrings = null;
          var n = arguments[0];
          this._segStrings = n;
        } }]);
      })();
      Oc.fact = new _i();
      var qo = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "intersectsScaled", value: function(n, i) {
          var a = Math.min(n.x, i.x), c = Math.max(n.x, i.x), g = Math.min(n.y, i.y), m = Math.max(n.y, i.y), y = this._maxx < a || this._minx > c || this._maxy < g || this._miny > m;
          if (y) return !1;
          var w = this.intersectsToleranceSquare(n, i);
          return ie.isTrue(!(y && w), "Found bad envelope test"), w;
        } }, { key: "initCorners", value: function(n) {
          var i = 0.5;
          this._minx = n.x - i, this._maxx = n.x + i, this._miny = n.y - i, this._maxy = n.y + i, this._corner[0] = new V(this._maxx, this._maxy), this._corner[1] = new V(this._minx, this._maxy), this._corner[2] = new V(this._minx, this._miny), this._corner[3] = new V(this._maxx, this._miny);
        } }, { key: "intersects", value: function(n, i) {
          return this._scaleFactor === 1 ? this.intersectsScaled(n, i) : (this.copyScaled(n, this._p0Scaled), this.copyScaled(i, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
        } }, { key: "scale", value: function(n) {
          return Math.round(n * this._scaleFactor);
        } }, { key: "getCoordinate", value: function() {
          return this._originalPt;
        } }, { key: "copyScaled", value: function(n, i) {
          i.x = this.scale(n.x), i.y = this.scale(n.y);
        } }, { key: "getSafeEnvelope", value: function() {
          if (this._safeEnv === null) {
            var n = o.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
            this._safeEnv = new Ie(this._originalPt.x - n, this._originalPt.x + n, this._originalPt.y - n, this._originalPt.y + n);
          }
          return this._safeEnv;
        } }, { key: "intersectsPixelClosure", value: function(n, i) {
          return this._li.computeIntersection(n, i, this._corner[0], this._corner[1]), !!this._li.hasIntersection() || (this._li.computeIntersection(n, i, this._corner[1], this._corner[2]), !!this._li.hasIntersection() || (this._li.computeIntersection(n, i, this._corner[2], this._corner[3]), !!this._li.hasIntersection() || (this._li.computeIntersection(n, i, this._corner[3], this._corner[0]), !!this._li.hasIntersection())));
        } }, { key: "intersectsToleranceSquare", value: function(n, i) {
          var a = !1, c = !1;
          return this._li.computeIntersection(n, i, this._corner[0], this._corner[1]), !!this._li.isProper() || (this._li.computeIntersection(n, i, this._corner[1], this._corner[2]), !!this._li.isProper() || (this._li.hasIntersection() && (a = !0), this._li.computeIntersection(n, i, this._corner[2], this._corner[3]), !!this._li.isProper() || (this._li.hasIntersection() && (c = !0), this._li.computeIntersection(n, i, this._corner[3], this._corner[0]), !!this._li.isProper() || !(!a || !c) || !!n.equals(this._pt) || !!i.equals(this._pt))));
        } }, { key: "addSnappedNode", value: function(n, i) {
          var a = n.getCoordinate(i), c = n.getCoordinate(i + 1);
          return !!this.intersects(a, c) && (n.addIntersection(this.getCoordinate(), i), !0);
        } }], [{ key: "constructor_", value: function() {
          this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
          var n = arguments[0], i = arguments[1], a = arguments[2];
          if (this._originalPt = n, this._pt = n, this._scaleFactor = i, this._li = a, i <= 0) throw new J("Scale factor must be non-zero");
          i !== 1 && (this._pt = new V(this.scale(n.x), this.scale(n.y)), this._p0Scaled = new V(), this._p1Scaled = new V()), this.initCorners(this._pt);
        } }]);
      })();
      qo.SAFE_ENV_EXPANSION_FACTOR = 0.75;
      var Im = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "select", value: function() {
          if (arguments.length !== 1) {
            if (arguments.length === 2) {
              var o = arguments[1];
              arguments[0].getLineSegment(o, this.selectedSegment), this.select(this.selectedSegment);
            }
          }
        } }], [{ key: "constructor_", value: function() {
          this.selectedSegment = new Bt();
        } }]);
      })(), Rc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "snap", value: function() {
          if (arguments.length === 1) {
            var o = arguments[0];
            return this.snap(o, null, -1);
          }
          if (arguments.length === 3) {
            var n = arguments[0], i = arguments[1], a = arguments[2], c = n.getSafeEnvelope(), g = new Dc(n, i, a);
            return this._index.query(c, new ((function() {
              return h((function m() {
                u(this, m);
              }), [{ key: "interfaces_", get: function() {
                return [Ec];
              } }, { key: "visitItem", value: function(m) {
                m.select(c, g);
              } }]);
            })())()), g.isNodeAdded();
          }
        } }], [{ key: "constructor_", value: function() {
          this._index = null;
          var o = arguments[0];
          this._index = o;
        } }]);
      })(), Dc = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "isNodeAdded", value: function() {
          return this._isNodeAdded;
        } }, { key: "select", value: function() {
          if (!(arguments.length === 2 && Number.isInteger(arguments[1]) && arguments[0] instanceof wc)) return M(n, "select", this, 1).apply(this, arguments);
          var i = arguments[1], a = arguments[0].getContext();
          if (this._parentEdge === a && (i === this._hotPixelVertexIndex || i + 1 === this._hotPixelVertexIndex)) return null;
          this._isNodeAdded |= this._hotPixel.addSnappedNode(a, i);
        } }], [{ key: "constructor_", value: function() {
          this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
          var i = arguments[0], a = arguments[1], c = arguments[2];
          this._hotPixel = i, this._parentEdge = a, this._hotPixelVertexIndex = c;
        } }]);
      })(Im);
      Rc.HotPixelSnapAction = Dc;
      var bm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "processIntersections", value: function(o, n, i, a) {
          if (o === i && n === a) return null;
          var c = o.getCoordinates()[n], g = o.getCoordinates()[n + 1], m = i.getCoordinates()[a], y = i.getCoordinates()[a + 1];
          if (this._li.computeIntersection(c, g, m, y), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
            for (var w = 0; w < this._li.getIntersectionNum(); w++) this._interiorIntersections.add(this._li.getIntersection(w));
            o.addIntersections(this._li, n, 0), i.addIntersections(this._li, a, 1);
          }
        } }, { key: "isDone", value: function() {
          return !1;
        } }, { key: "getInteriorIntersections", value: function() {
          return this._interiorIntersections;
        } }, { key: "interfaces_", get: function() {
          return [Lc];
        } }], [{ key: "constructor_", value: function() {
          this._li = null, this._interiorIntersections = null;
          var o = arguments[0];
          this._li = o, this._interiorIntersections = new pe();
        } }]);
      })(), Am = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "checkCorrectness", value: function(o) {
          var n = Hr.getNodedSubstrings(o), i = new Oc(n);
          try {
            i.checkValid();
          } catch (a) {
            if (!(a instanceof $)) throw a;
            a.printStackTrace();
          }
        } }, { key: "getNodedSubstrings", value: function() {
          return Hr.getNodedSubstrings(this._nodedSegStrings);
        } }, { key: "snapRound", value: function(o, n) {
          var i = this.findInteriorIntersections(o, n);
          this.computeIntersectionSnaps(i), this.computeVertexSnaps(o);
        } }, { key: "findInteriorIntersections", value: function(o, n) {
          var i = new bm(n);
          return this._noder.setSegmentIntersector(i), this._noder.computeNodes(o), i.getInteriorIntersections();
        } }, { key: "computeVertexSnaps", value: function() {
          if (Ee(arguments[0], Ce)) for (var o = arguments[0].iterator(); o.hasNext(); ) {
            var n = o.next();
            this.computeVertexSnaps(n);
          }
          else if (arguments[0] instanceof Hr) for (var i = arguments[0], a = i.getCoordinates(), c = 0; c < a.length; c++) {
            var g = new qo(a[c], this._scaleFactor, this._li);
            this._pointSnapper.snap(g, i, c) && i.addIntersection(a[c], c);
          }
        } }, { key: "computeNodes", value: function(o) {
          this._nodedSegStrings = o, this._noder = new Uo(), this._pointSnapper = new Rc(this._noder.getIndex()), this.snapRound(o, this._li);
        } }, { key: "computeIntersectionSnaps", value: function(o) {
          for (var n = o.iterator(); n.hasNext(); ) {
            var i = n.next(), a = new qo(i, this._scaleFactor, this._li);
            this._pointSnapper.snap(a);
          }
        } }, { key: "interfaces_", get: function() {
          return [Bo];
        } }], [{ key: "constructor_", value: function() {
          this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
          var o = arguments[0];
          this._pm = o, this._li = new Yr(), this._li.setPrecisionModel(o), this._scaleFactor = o.getScale();
        } }]);
      })(), Si = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "bufferFixedPrecision", value: function(n) {
          var i = new Mm(new Am(new Re(1)), n.getScale()), a = new Pc(this._bufParams);
          a.setWorkingPrecisionModel(n), a.setNoder(i), this._resultGeometry = a.buffer(this._argGeom, this._distance);
        } }, { key: "bufferReducedPrecision", value: function() {
          if (arguments.length === 0) {
            for (var n = o.MAX_PRECISION_DIGITS; n >= 0; n--) {
              try {
                this.bufferReducedPrecision(n);
              } catch (g) {
                if (!(g instanceof Pt)) throw g;
                this._saveException = g;
              }
              if (this._resultGeometry !== null) return null;
            }
            throw this._saveException;
          }
          if (arguments.length === 1) {
            var i = arguments[0], a = o.precisionScaleFactor(this._argGeom, this._distance, i), c = new Re(a);
            this.bufferFixedPrecision(c);
          }
        } }, { key: "computeGeometry", value: function() {
          if (this.bufferOriginalPrecision(), this._resultGeometry !== null) return null;
          var n = this._argGeom.getFactory().getPrecisionModel();
          n.getType() === Re.FIXED ? this.bufferFixedPrecision(n) : this.bufferReducedPrecision();
        } }, { key: "setQuadrantSegments", value: function(n) {
          this._bufParams.setQuadrantSegments(n);
        } }, { key: "bufferOriginalPrecision", value: function() {
          try {
            var n = new Pc(this._bufParams);
            this._resultGeometry = n.buffer(this._argGeom, this._distance);
          } catch (i) {
            if (!(i instanceof le)) throw i;
            this._saveException = i;
          }
        } }, { key: "getResultGeometry", value: function(n) {
          return this._distance = n, this.computeGeometry(), this._resultGeometry;
        } }, { key: "setEndCapStyle", value: function(n) {
          this._bufParams.setEndCapStyle(n);
        } }], [{ key: "constructor_", value: function() {
          if (this._argGeom = null, this._distance = null, this._bufParams = new Y(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
            var n = arguments[0];
            this._argGeom = n;
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this._argGeom = i, this._bufParams = a;
          }
        } }, { key: "bufferOp", value: function() {
          if (arguments.length === 2) {
            var n = arguments[1];
            return new o(arguments[0]).getResultGeometry(n);
          }
          if (arguments.length === 3) {
            if (Number.isInteger(arguments[2]) && arguments[0] instanceof he && typeof arguments[1] == "number") {
              var i = arguments[1], a = arguments[2], c = new o(arguments[0]);
              return c.setQuadrantSegments(a), c.getResultGeometry(i);
            }
            if (arguments[2] instanceof Y && arguments[0] instanceof he && typeof arguments[1] == "number") {
              var g = arguments[1];
              return new o(arguments[0], arguments[2]).getResultGeometry(g);
            }
          } else if (arguments.length === 4) {
            var m = arguments[1], y = arguments[2], w = arguments[3], A = new o(arguments[0]);
            return A.setQuadrantSegments(y), A.setEndCapStyle(w), A.getResultGeometry(m);
          }
        } }, { key: "precisionScaleFactor", value: function(n, i, a) {
          var c = n.getEnvelopeInternal(), g = Tn.max(Math.abs(c.getMaxX()), Math.abs(c.getMaxY()), Math.abs(c.getMinX()), Math.abs(c.getMinY())) + 2 * (i > 0 ? i : 0), m = a - Math.trunc(Math.log(g) / Math.log(10) + 1);
          return Math.pow(10, m);
        } }]);
      })();
      Si.CAP_ROUND = Y.CAP_ROUND, Si.CAP_BUTT = Y.CAP_FLAT, Si.CAP_FLAT = Y.CAP_FLAT, Si.CAP_SQUARE = Y.CAP_SQUARE, Si.MAX_PRECISION_DIGITS = 12;
      var Tm = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], Fc = (function() {
        return h((function o(n) {
          u(this, o), this.geometryFactory = n || new _i();
        }), [{ key: "read", value: function(o) {
          var n, i = (n = typeof o == "string" ? JSON.parse(o) : o).type;
          if (!jt[i]) throw new Error("Unknown GeoJSON type: " + n.type);
          return Tm.indexOf(i) !== -1 ? jt[i].call(this, n.coordinates) : i === "GeometryCollection" ? jt[i].call(this, n.geometries) : jt[i].call(this, n);
        } }, { key: "write", value: function(o) {
          var n = o.getGeometryType();
          if (!Dn[n]) throw new Error("Geometry is not supported");
          return Dn[n].call(this, o);
        } }]);
      })(), jt = { Feature: function(o) {
        var n = {};
        for (var i in o) n[i] = o[i];
        if (o.geometry) {
          var a = o.geometry.type;
          if (!jt[a]) throw new Error("Unknown GeoJSON type: " + o.type);
          n.geometry = this.read(o.geometry);
        }
        return o.bbox && (n.bbox = jt.bbox.call(this, o.bbox)), n;
      }, FeatureCollection: function(o) {
        var n = {};
        if (o.features) {
          n.features = [];
          for (var i = 0; i < o.features.length; ++i) n.features.push(this.read(o.features[i]));
        }
        return o.bbox && (n.bbox = this.parse.bbox.call(this, o.bbox)), n;
      }, coordinates: function(o) {
        for (var n = [], i = 0; i < o.length; ++i) {
          var a = o[i];
          n.push(l(V, R(a)));
        }
        return n;
      }, bbox: function(o) {
        return this.geometryFactory.createLinearRing([new V(o[0], o[1]), new V(o[2], o[1]), new V(o[2], o[3]), new V(o[0], o[3]), new V(o[0], o[1])]);
      }, Point: function(o) {
        var n = l(V, R(o));
        return this.geometryFactory.createPoint(n);
      }, MultiPoint: function(o) {
        for (var n = [], i = 0; i < o.length; ++i) n.push(jt.Point.call(this, o[i]));
        return this.geometryFactory.createMultiPoint(n);
      }, LineString: function(o) {
        var n = jt.coordinates.call(this, o);
        return this.geometryFactory.createLineString(n);
      }, MultiLineString: function(o) {
        for (var n = [], i = 0; i < o.length; ++i) n.push(jt.LineString.call(this, o[i]));
        return this.geometryFactory.createMultiLineString(n);
      }, Polygon: function(o) {
        for (var n = jt.coordinates.call(this, o[0]), i = this.geometryFactory.createLinearRing(n), a = [], c = 1; c < o.length; ++c) {
          var g = o[c], m = jt.coordinates.call(this, g), y = this.geometryFactory.createLinearRing(m);
          a.push(y);
        }
        return this.geometryFactory.createPolygon(i, a);
      }, MultiPolygon: function(o) {
        for (var n = [], i = 0; i < o.length; ++i) {
          var a = o[i];
          n.push(jt.Polygon.call(this, a));
        }
        return this.geometryFactory.createMultiPolygon(n);
      }, GeometryCollection: function(o) {
        for (var n = [], i = 0; i < o.length; ++i) {
          var a = o[i];
          n.push(this.read(a));
        }
        return this.geometryFactory.createGeometryCollection(n);
      } }, Dn = { coordinate: function(o) {
        var n = [o.x, o.y];
        return o.z && n.push(o.z), o.m && n.push(o.m), n;
      }, Point: function(o) {
        return { type: "Point", coordinates: Dn.coordinate.call(this, o.getCoordinate()) };
      }, MultiPoint: function(o) {
        for (var n = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], c = Dn.Point.call(this, a);
          n.push(c.coordinates);
        }
        return { type: "MultiPoint", coordinates: n };
      }, LineString: function(o) {
        for (var n = [], i = o.getCoordinates(), a = 0; a < i.length; ++a) {
          var c = i[a];
          n.push(Dn.coordinate.call(this, c));
        }
        return { type: "LineString", coordinates: n };
      }, MultiLineString: function(o) {
        for (var n = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], c = Dn.LineString.call(this, a);
          n.push(c.coordinates);
        }
        return { type: "MultiLineString", coordinates: n };
      }, Polygon: function(o) {
        var n = [], i = Dn.LineString.call(this, o._shell);
        n.push(i.coordinates);
        for (var a = 0; a < o._holes.length; ++a) {
          var c = o._holes[a], g = Dn.LineString.call(this, c);
          n.push(g.coordinates);
        }
        return { type: "Polygon", coordinates: n };
      }, MultiPolygon: function(o) {
        for (var n = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], c = Dn.Polygon.call(this, a);
          n.push(c.coordinates);
        }
        return { type: "MultiPolygon", coordinates: n };
      }, GeometryCollection: function(o) {
        for (var n = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], c = a.getGeometryType();
          n.push(Dn[c].call(this, a));
        }
        return { type: "GeometryCollection", geometries: n };
      } };
      return { BufferOp: Si, GeoJSONReader: (function() {
        return h((function o(n) {
          u(this, o), this.parser = new Fc(n || new _i());
        }), [{ key: "read", value: function(o) {
          return this.parser.read(o);
        } }]);
      })(), GeoJSONWriter: (function() {
        return h((function o() {
          u(this, o), this.parser = new Fc(this.geometryFactory);
        }), [{ key: "write", value: function(o) {
          return this.parser.write(o);
        } }]);
      })() };
    }));
  })(qa)), qa.exports;
}
var J2 = H2();
const $2 = /* @__PURE__ */ Tg(J2);
function Fr() {
  return new so();
}
function so() {
  this.reset();
}
so.prototype = {
  constructor: so,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(t) {
    df(Ma, t, this.t), df(this, Ma.s, this.s), this.s ? this.t += Ma.t : this.s = Ma.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var Ma = new so();
function df(t, e, r) {
  var s = t.s = e + r, u = s - e, l = s - u;
  t.t = e - l + (r - u);
}
var Ye = 1e-6, Ne = Math.PI, qn = Ne / 2, pf = Ne / 4, Vn = Ne * 2, Sr = 180 / Ne, nn = Ne / 180, ct = Math.abs, V2 = Math.atan, Ji = Math.atan2, je = Math.cos, Ze = Math.sin, ts = Math.sqrt;
function op(t) {
  return t > 1 ? 0 : t < -1 ? Ne : Math.acos(t);
}
function si(t) {
  return t > 1 ? qn : t < -1 ? -qn : Math.asin(t);
}
function bs() {
}
function ao(t, e) {
  t && vf.hasOwnProperty(t.type) && vf[t.type](t, e);
}
var mf = {
  Feature: function(t, e) {
    ao(t.geometry, e);
  },
  FeatureCollection: function(t, e) {
    for (var r = t.features, s = -1, u = r.length; ++s < u; ) ao(r[s].geometry, e);
  }
}, vf = {
  Sphere: function(t, e) {
    e.sphere();
  },
  Point: function(t, e) {
    t = t.coordinates, e.point(t[0], t[1], t[2]);
  },
  MultiPoint: function(t, e) {
    for (var r = t.coordinates, s = -1, u = r.length; ++s < u; ) t = r[s], e.point(t[0], t[1], t[2]);
  },
  LineString: function(t, e) {
    Qu(t.coordinates, e, 0);
  },
  MultiLineString: function(t, e) {
    for (var r = t.coordinates, s = -1, u = r.length; ++s < u; ) Qu(r[s], e, 0);
  },
  Polygon: function(t, e) {
    yf(t.coordinates, e);
  },
  MultiPolygon: function(t, e) {
    for (var r = t.coordinates, s = -1, u = r.length; ++s < u; ) yf(r[s], e);
  },
  GeometryCollection: function(t, e) {
    for (var r = t.geometries, s = -1, u = r.length; ++s < u; ) ao(r[s], e);
  }
};
function Qu(t, e, r) {
  var s = -1, u = t.length - r, l;
  for (e.lineStart(); ++s < u; ) l = t[s], e.point(l[0], l[1], l[2]);
  e.lineEnd();
}
function yf(t, e) {
  var r = -1, s = t.length;
  for (e.polygonStart(); ++r < s; ) Qu(t[r], e, 1);
  e.polygonEnd();
}
function X2(t, e) {
  t && mf.hasOwnProperty(t.type) ? mf[t.type](t, e) : ao(t, e);
}
Fr();
Fr();
function el(t) {
  return [Ji(t[1], t[0]), si(t[2])];
}
function $i(t) {
  var e = t[0], r = t[1], s = je(r);
  return [s * je(e), s * Ze(e), Ze(r)];
}
function Ia(t, e) {
  return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
}
function oo(t, e) {
  return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
}
function du(t, e) {
  t[0] += e[0], t[1] += e[1], t[2] += e[2];
}
function ba(t, e) {
  return [t[0] * e, t[1] * e, t[2] * e];
}
function tl(t) {
  var e = ts(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
  t[0] /= e, t[1] /= e, t[2] /= e;
}
Fr();
function up(t, e) {
  function r(s, u) {
    return s = t(s, u), e(s[0], s[1]);
  }
  return t.invert && e.invert && (r.invert = function(s, u) {
    return s = e.invert(s, u), s && t.invert(s[0], s[1]);
  }), r;
}
function nl(t, e) {
  return [t > Ne ? t - Vn : t < -Ne ? t + Vn : t, e];
}
nl.invert = nl;
function W2(t, e, r) {
  return (t %= Vn) ? e || r ? up(Ef(t), xf(e, r)) : Ef(t) : e || r ? xf(e, r) : nl;
}
function _f(t) {
  return function(e, r) {
    return e += t, [e > Ne ? e - Vn : e < -Ne ? e + Vn : e, r];
  };
}
function Ef(t) {
  var e = _f(t);
  return e.invert = _f(-t), e;
}
function xf(t, e) {
  var r = je(t), s = Ze(t), u = je(e), l = Ze(e);
  function f(h, p) {
    var d = je(p), v = je(h) * d, _ = Ze(h) * d, x = Ze(p), k = x * r + v * s;
    return [
      Ji(_ * u - k * l, v * r - x * s),
      si(k * u + _ * l)
    ];
  }
  return f.invert = function(h, p) {
    var d = je(p), v = je(h) * d, _ = Ze(h) * d, x = Ze(p), k = x * u - _ * l;
    return [
      Ji(_ * u + x * l, v * r + k * s),
      si(k * r - v * s)
    ];
  }, f;
}
function j2(t, e, r, s, u, l) {
  if (r) {
    var f = je(e), h = Ze(e), p = s * r;
    u == null ? (u = e + s * Vn, l = e - p / 2) : (u = wf(f, u), l = wf(f, l), (s > 0 ? u < l : u > l) && (u += s * Vn));
    for (var d, v = u; s > 0 ? v > l : v < l; v -= p)
      d = el([f, -h * je(v), -h * Ze(v)]), t.point(d[0], d[1]);
  }
}
function wf(t, e) {
  e = $i(e), e[0] -= t, tl(e);
  var r = op(-e[1]);
  return ((-e[2] < 0 ? -r : r) + Vn - Ye) % Vn;
}
function lp() {
  var t = [], e;
  return {
    point: function(r, s) {
      e.push([r, s]);
    },
    lineStart: function() {
      t.push(e = []);
    },
    lineEnd: bs,
    rejoin: function() {
      t.length > 1 && t.push(t.pop().concat(t.shift()));
    },
    result: function() {
      var r = t;
      return t = [], e = null, r;
    }
  };
}
function Z2(t, e, r, s, u, l) {
  var f = t[0], h = t[1], p = e[0], d = e[1], v = 0, _ = 1, x = p - f, k = d - h, M;
  if (M = r - f, !(!x && M > 0)) {
    if (M /= x, x < 0) {
      if (M < v) return;
      M < _ && (_ = M);
    } else if (x > 0) {
      if (M > _) return;
      M > v && (v = M);
    }
    if (M = u - f, !(!x && M < 0)) {
      if (M /= x, x < 0) {
        if (M > _) return;
        M > v && (v = M);
      } else if (x > 0) {
        if (M < v) return;
        M < _ && (_ = M);
      }
      if (M = s - h, !(!k && M > 0)) {
        if (M /= k, k < 0) {
          if (M < v) return;
          M < _ && (_ = M);
        } else if (k > 0) {
          if (M > _) return;
          M > v && (v = M);
        }
        if (M = l - h, !(!k && M < 0)) {
          if (M /= k, k < 0) {
            if (M > _) return;
            M > v && (v = M);
          } else if (k > 0) {
            if (M < v) return;
            M < _ && (_ = M);
          }
          return v > 0 && (t[0] = f + v * x, t[1] = h + v * k), _ < 1 && (e[0] = f + _ * x, e[1] = h + _ * k), !0;
        }
      }
    }
  }
}
function Ya(t, e) {
  return ct(t[0] - e[0]) < Ye && ct(t[1] - e[1]) < Ye;
}
function Aa(t, e, r, s) {
  this.x = t, this.z = e, this.o = r, this.e = s, this.v = !1, this.n = this.p = null;
}
function cp(t, e, r, s, u) {
  var l = [], f = [], h, p;
  if (t.forEach(function(M) {
    if (!((R = M.length - 1) <= 0)) {
      var R, C = M[0], I = M[R], T;
      if (Ya(C, I)) {
        for (u.lineStart(), h = 0; h < R; ++h) u.point((C = M[h])[0], C[1]);
        u.lineEnd();
        return;
      }
      l.push(T = new Aa(C, M, null, !0)), f.push(T.o = new Aa(C, null, T, !1)), l.push(T = new Aa(I, M, null, !1)), f.push(T.o = new Aa(I, null, T, !0));
    }
  }), !!l.length) {
    for (f.sort(e), kf(l), kf(f), h = 0, p = f.length; h < p; ++h)
      f[h].e = r = !r;
    for (var d = l[0], v, _; ; ) {
      for (var x = d, k = !0; x.v; ) if ((x = x.n) === d) return;
      v = x.z, u.lineStart();
      do {
        if (x.v = x.o.v = !0, x.e) {
          if (k)
            for (h = 0, p = v.length; h < p; ++h) u.point((_ = v[h])[0], _[1]);
          else
            s(x.x, x.n.x, 1, u);
          x = x.n;
        } else {
          if (k)
            for (v = x.p.z, h = v.length - 1; h >= 0; --h) u.point((_ = v[h])[0], _[1]);
          else
            s(x.x, x.p.x, -1, u);
          x = x.p;
        }
        x = x.o, v = x.z, k = !k;
      } while (!x.v);
      u.lineEnd();
    }
  }
}
function kf(t) {
  if (e = t.length) {
    for (var e, r = 0, s = t[0], u; ++r < e; )
      s.n = u = t[r], u.p = s, s = u;
    s.n = u = t[0], u.p = s;
  }
}
function hp(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function K2(t) {
  return t.length === 1 && (t = Q2(t)), {
    left: function(e, r, s, u) {
      for (s == null && (s = 0), u == null && (u = e.length); s < u; ) {
        var l = s + u >>> 1;
        t(e[l], r) < 0 ? s = l + 1 : u = l;
      }
      return s;
    },
    right: function(e, r, s, u) {
      for (s == null && (s = 0), u == null && (u = e.length); s < u; ) {
        var l = s + u >>> 1;
        t(e[l], r) > 0 ? u = l : s = l + 1;
      }
      return s;
    }
  };
}
function Q2(t) {
  return function(e, r) {
    return hp(t(e), r);
  };
}
K2(hp);
function fp(t) {
  for (var e = t.length, r, s = -1, u = 0, l, f; ++s < e; ) u += t[s].length;
  for (l = new Array(u); --e >= 0; )
    for (f = t[e], r = f.length; --r >= 0; )
      l[--u] = f[r];
  return l;
}
var As = 1e9, Ta = -As;
function eS(t, e, r, s) {
  function u(d, v) {
    return t <= d && d <= r && e <= v && v <= s;
  }
  function l(d, v, _, x) {
    var k = 0, M = 0;
    if (d == null || (k = f(d, _)) !== (M = f(v, _)) || p(d, v) < 0 ^ _ > 0)
      do
        x.point(k === 0 || k === 3 ? t : r, k > 1 ? s : e);
      while ((k = (k + _ + 4) % 4) !== M);
    else
      x.point(v[0], v[1]);
  }
  function f(d, v) {
    return ct(d[0] - t) < Ye ? v > 0 ? 0 : 3 : ct(d[0] - r) < Ye ? v > 0 ? 2 : 1 : ct(d[1] - e) < Ye ? v > 0 ? 1 : 0 : v > 0 ? 3 : 2;
  }
  function h(d, v) {
    return p(d.x, v.x);
  }
  function p(d, v) {
    var _ = f(d, 1), x = f(v, 1);
    return _ !== x ? _ - x : _ === 0 ? v[1] - d[1] : _ === 1 ? d[0] - v[0] : _ === 2 ? d[1] - v[1] : v[0] - d[0];
  }
  return function(d) {
    var v = d, _ = lp(), x, k, M, R, C, I, T, Y, $, J, q, W = {
      point: E,
      lineStart: P,
      lineEnd: F,
      polygonStart: b,
      polygonEnd: O
    };
    function E(L, B) {
      u(L, B) && v.point(L, B);
    }
    function S() {
      for (var L = 0, B = 0, U = k.length; B < U; ++B)
        for (var H = k[B], j = 1, Z = H.length, ne = H[0], le, ue, ie = ne[0], oe = ne[1]; j < Z; ++j)
          le = ie, ue = oe, ne = H[j], ie = ne[0], oe = ne[1], ue <= s ? oe > s && (ie - le) * (s - ue) > (oe - ue) * (t - le) && ++L : oe <= s && (ie - le) * (s - ue) < (oe - ue) * (t - le) && --L;
      return L;
    }
    function b() {
      v = _, x = [], k = [], q = !0;
    }
    function O() {
      var L = S(), B = q && L, U = (x = fp(x)).length;
      (B || U) && (d.polygonStart(), B && (d.lineStart(), l(null, null, 1, d), d.lineEnd()), U && cp(x, h, L, l, d), d.polygonEnd()), v = d, x = k = M = null;
    }
    function P() {
      W.point = D, k && k.push(M = []), J = !0, $ = !1, T = Y = NaN;
    }
    function F() {
      x && (D(R, C), I && $ && _.rejoin(), x.push(_.result())), W.point = E, $ && v.lineEnd();
    }
    function D(L, B) {
      var U = u(L, B);
      if (k && M.push([L, B]), J)
        R = L, C = B, I = U, J = !1, U && (v.lineStart(), v.point(L, B));
      else if (U && $) v.point(L, B);
      else {
        var H = [T = Math.max(Ta, Math.min(As, T)), Y = Math.max(Ta, Math.min(As, Y))], j = [L = Math.max(Ta, Math.min(As, L)), B = Math.max(Ta, Math.min(As, B))];
        Z2(H, j, t, e, r, s) ? ($ || (v.lineStart(), v.point(H[0], H[1])), v.point(j[0], j[1]), U || v.lineEnd(), q = !1) : U && (v.lineStart(), v.point(L, B), q = !1);
      }
      T = L, Y = B, $ = U;
    }
    return W;
  };
}
var pu = Fr();
function tS(t, e) {
  var r = e[0], s = e[1], u = [Ze(r), -je(r), 0], l = 0, f = 0;
  pu.reset();
  for (var h = 0, p = t.length; h < p; ++h)
    if (v = (d = t[h]).length)
      for (var d, v, _ = d[v - 1], x = _[0], k = _[1] / 2 + pf, M = Ze(k), R = je(k), C = 0; C < v; ++C, x = T, M = $, R = J, _ = I) {
        var I = d[C], T = I[0], Y = I[1] / 2 + pf, $ = Ze(Y), J = je(Y), q = T - x, W = q >= 0 ? 1 : -1, E = W * q, S = E > Ne, b = M * $;
        if (pu.add(Ji(b * W * Ze(E), R * J + b * je(E))), l += S ? q + W * Vn : q, S ^ x >= r ^ T >= r) {
          var O = oo($i(_), $i(I));
          tl(O);
          var P = oo(u, O);
          tl(P);
          var F = (S ^ q >= 0 ? -1 : 1) * si(P[2]);
          (s > F || s === F && (O[0] || O[1])) && (f += S ^ q >= 0 ? 1 : -1);
        }
      }
  return (l < -Ye || l < Ye && pu < -Ye) ^ f & 1;
}
Fr();
function Sf(t) {
  return t;
}
Fr();
Fr();
var Vi = 1 / 0, uo = Vi, Xs = -Vi, lo = Xs, Mf = {
  point: nS,
  lineStart: bs,
  lineEnd: bs,
  polygonStart: bs,
  polygonEnd: bs,
  result: function() {
    var t = [[Vi, uo], [Xs, lo]];
    return Xs = lo = -(uo = Vi = 1 / 0), t;
  }
};
function nS(t, e) {
  t < Vi && (Vi = t), t > Xs && (Xs = t), e < uo && (uo = e), e > lo && (lo = e);
}
Fr();
function gp(t, e, r, s) {
  return function(u, l) {
    var f = e(l), h = u.invert(s[0], s[1]), p = lp(), d = e(p), v = !1, _, x, k, M = {
      point: R,
      lineStart: I,
      lineEnd: T,
      polygonStart: function() {
        M.point = Y, M.lineStart = $, M.lineEnd = J, x = [], _ = [];
      },
      polygonEnd: function() {
        M.point = R, M.lineStart = I, M.lineEnd = T, x = fp(x);
        var q = tS(_, h);
        x.length ? (v || (l.polygonStart(), v = !0), cp(x, iS, q, r, l)) : q && (v || (l.polygonStart(), v = !0), l.lineStart(), r(null, null, 1, l), l.lineEnd()), v && (l.polygonEnd(), v = !1), x = _ = null;
      },
      sphere: function() {
        l.polygonStart(), l.lineStart(), r(null, null, 1, l), l.lineEnd(), l.polygonEnd();
      }
    };
    function R(q, W) {
      var E = u(q, W);
      t(q = E[0], W = E[1]) && l.point(q, W);
    }
    function C(q, W) {
      var E = u(q, W);
      f.point(E[0], E[1]);
    }
    function I() {
      M.point = C, f.lineStart();
    }
    function T() {
      M.point = R, f.lineEnd();
    }
    function Y(q, W) {
      k.push([q, W]);
      var E = u(q, W);
      d.point(E[0], E[1]);
    }
    function $() {
      d.lineStart(), k = [];
    }
    function J() {
      Y(k[0][0], k[0][1]), d.lineEnd();
      var q = d.clean(), W = p.result(), E, S = W.length, b, O, P;
      if (k.pop(), _.push(k), k = null, !!S) {
        if (q & 1) {
          if (O = W[0], (b = O.length - 1) > 0) {
            for (v || (l.polygonStart(), v = !0), l.lineStart(), E = 0; E < b; ++E) l.point((P = O[E])[0], P[1]);
            l.lineEnd();
          }
          return;
        }
        S > 1 && q & 2 && W.push(W.pop().concat(W.shift())), x.push(W.filter(rS));
      }
    }
    return M;
  };
}
function rS(t) {
  return t.length > 1;
}
function iS(t, e) {
  return ((t = t.x)[0] < 0 ? t[1] - qn - Ye : qn - t[1]) - ((e = e.x)[0] < 0 ? e[1] - qn - Ye : qn - e[1]);
}
const If = gp(
  function() {
    return !0;
  },
  sS,
  oS,
  [-Ne, -qn]
);
function sS(t) {
  var e = NaN, r = NaN, s = NaN, u;
  return {
    lineStart: function() {
      t.lineStart(), u = 1;
    },
    point: function(l, f) {
      var h = l > 0 ? Ne : -Ne, p = ct(l - e);
      ct(p - Ne) < Ye ? (t.point(e, r = (r + f) / 2 > 0 ? qn : -qn), t.point(s, r), t.lineEnd(), t.lineStart(), t.point(h, r), t.point(l, r), u = 0) : s !== h && p >= Ne && (ct(e - s) < Ye && (e -= s * Ye), ct(l - h) < Ye && (l -= h * Ye), r = aS(e, r, l, f), t.point(s, r), t.lineEnd(), t.lineStart(), t.point(h, r), u = 0), t.point(e = l, r = f), s = h;
    },
    lineEnd: function() {
      t.lineEnd(), e = r = NaN;
    },
    clean: function() {
      return 2 - u;
    }
  };
}
function aS(t, e, r, s) {
  var u, l, f = Ze(t - r);
  return ct(f) > Ye ? V2((Ze(e) * (l = je(s)) * Ze(r) - Ze(s) * (u = je(e)) * Ze(t)) / (u * l * f)) : (e + s) / 2;
}
function oS(t, e, r, s) {
  var u;
  if (t == null)
    u = r * qn, s.point(-Ne, u), s.point(0, u), s.point(Ne, u), s.point(Ne, 0), s.point(Ne, -u), s.point(0, -u), s.point(-Ne, -u), s.point(-Ne, 0), s.point(-Ne, u);
  else if (ct(t[0] - e[0]) > Ye) {
    var l = t[0] < e[0] ? Ne : -Ne;
    u = r * l / 2, s.point(-l, u), s.point(0, u), s.point(l, u);
  } else
    s.point(e[0], e[1]);
}
function uS(t, e) {
  var r = je(t), s = r > 0, u = ct(r) > Ye;
  function l(v, _, x, k) {
    j2(k, t, e, x, v, _);
  }
  function f(v, _) {
    return je(v) * je(_) > r;
  }
  function h(v) {
    var _, x, k, M, R;
    return {
      lineStart: function() {
        M = k = !1, R = 1;
      },
      point: function(C, I) {
        var T = [C, I], Y, $ = f(C, I), J = s ? $ ? 0 : d(C, I) : $ ? d(C + (C < 0 ? Ne : -Ne), I) : 0;
        if (!_ && (M = k = $) && v.lineStart(), $ !== k && (Y = p(_, T), (!Y || Ya(_, Y) || Ya(T, Y)) && (T[0] += Ye, T[1] += Ye, $ = f(T[0], T[1]))), $ !== k)
          R = 0, $ ? (v.lineStart(), Y = p(T, _), v.point(Y[0], Y[1])) : (Y = p(_, T), v.point(Y[0], Y[1]), v.lineEnd()), _ = Y;
        else if (u && _ && s ^ $) {
          var q;
          !(J & x) && (q = p(T, _, !0)) && (R = 0, s ? (v.lineStart(), v.point(q[0][0], q[0][1]), v.point(q[1][0], q[1][1]), v.lineEnd()) : (v.point(q[1][0], q[1][1]), v.lineEnd(), v.lineStart(), v.point(q[0][0], q[0][1])));
        }
        $ && (!_ || !Ya(_, T)) && v.point(T[0], T[1]), _ = T, k = $, x = J;
      },
      lineEnd: function() {
        k && v.lineEnd(), _ = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return R | (M && k) << 1;
      }
    };
  }
  function p(v, _, x) {
    var k = $i(v), M = $i(_), R = [1, 0, 0], C = oo(k, M), I = Ia(C, C), T = C[0], Y = I - T * T;
    if (!Y) return !x && v;
    var $ = r * I / Y, J = -r * T / Y, q = oo(R, C), W = ba(R, $), E = ba(C, J);
    du(W, E);
    var S = q, b = Ia(W, S), O = Ia(S, S), P = b * b - O * (Ia(W, W) - 1);
    if (!(P < 0)) {
      var F = ts(P), D = ba(S, (-b - F) / O);
      if (du(D, W), D = el(D), !x) return D;
      var L = v[0], B = _[0], U = v[1], H = _[1], j;
      B < L && (j = L, L = B, B = j);
      var Z = B - L, ne = ct(Z - Ne) < Ye, le = ne || Z < Ye;
      if (!ne && H < U && (j = U, U = H, H = j), le ? ne ? U + H > 0 ^ D[1] < (ct(D[0] - L) < Ye ? U : H) : U <= D[1] && D[1] <= H : Z > Ne ^ (L <= D[0] && D[0] <= B)) {
        var ue = ba(S, (-b + F) / O);
        return du(ue, W), [D, el(ue)];
      }
    }
  }
  function d(v, _) {
    var x = s ? t : Ne - t, k = 0;
    return v < -x ? k |= 1 : v > x && (k |= 2), _ < -x ? k |= 4 : _ > x && (k |= 8), k;
  }
  return gp(f, h, l, s ? [0, -t] : [-Ne, t - Ne]);
}
function dp(t) {
  return function(e) {
    var r = new rl();
    for (var s in t) r[s] = t[s];
    return r.stream = e, r;
  };
}
function rl() {
}
rl.prototype = {
  constructor: rl,
  point: function(t, e) {
    this.stream.point(t, e);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function pp(t, e, r) {
  var s = e[1][0] - e[0][0], u = e[1][1] - e[0][1], l = t.clipExtent && t.clipExtent();
  t.scale(150).translate([0, 0]), l != null && t.clipExtent(null), X2(r, t.stream(Mf));
  var f = Mf.result(), h = Math.min(s / (f[1][0] - f[0][0]), u / (f[1][1] - f[0][1])), p = +e[0][0] + (s - h * (f[1][0] + f[0][0])) / 2, d = +e[0][1] + (u - h * (f[1][1] + f[0][1])) / 2;
  return l != null && t.clipExtent(l), t.scale(h * 150).translate([p, d]);
}
function lS(t, e, r) {
  return pp(t, [[0, 0], e], r);
}
var bf = 16, cS = je(30 * nn);
function Af(t, e) {
  return +e ? fS(t, e) : hS(t);
}
function hS(t) {
  return dp({
    point: function(e, r) {
      e = t(e, r), this.stream.point(e[0], e[1]);
    }
  });
}
function fS(t, e) {
  function r(s, u, l, f, h, p, d, v, _, x, k, M, R, C) {
    var I = d - s, T = v - u, Y = I * I + T * T;
    if (Y > 4 * e && R--) {
      var $ = f + x, J = h + k, q = p + M, W = ts($ * $ + J * J + q * q), E = si(q /= W), S = ct(ct(q) - 1) < Ye || ct(l - _) < Ye ? (l + _) / 2 : Ji(J, $), b = t(S, E), O = b[0], P = b[1], F = O - s, D = P - u, L = T * F - I * D;
      (L * L / Y > e || ct((I * F + T * D) / Y - 0.5) > 0.3 || f * x + h * k + p * M < cS) && (r(s, u, l, f, h, p, O, P, S, $ /= W, J /= W, q, R, C), C.point(O, P), r(O, P, S, $, J, q, d, v, _, x, k, M, R, C));
    }
  }
  return function(s) {
    var u, l, f, h, p, d, v, _, x, k, M, R, C = {
      point: I,
      lineStart: T,
      lineEnd: $,
      polygonStart: function() {
        s.polygonStart(), C.lineStart = J;
      },
      polygonEnd: function() {
        s.polygonEnd(), C.lineStart = T;
      }
    };
    function I(E, S) {
      E = t(E, S), s.point(E[0], E[1]);
    }
    function T() {
      _ = NaN, C.point = Y, s.lineStart();
    }
    function Y(E, S) {
      var b = $i([E, S]), O = t(E, S);
      r(_, x, v, k, M, R, _ = O[0], x = O[1], v = E, k = b[0], M = b[1], R = b[2], bf, s), s.point(_, x);
    }
    function $() {
      C.point = I, s.lineEnd();
    }
    function J() {
      T(), C.point = q, C.lineEnd = W;
    }
    function q(E, S) {
      Y(u = E, S), l = _, f = x, h = k, p = M, d = R, C.point = Y;
    }
    function W() {
      r(_, x, v, k, M, R, l, f, u, h, p, d, bf, s), C.lineEnd = $, $();
    }
    return C;
  };
}
var gS = dp({
  point: function(t, e) {
    this.stream.point(t * nn, e * nn);
  }
});
function dS(t) {
  return pS(function() {
    return t;
  })();
}
function pS(t) {
  var e, r = 150, s = 480, u = 250, l, f, h = 0, p = 0, d = 0, v = 0, _ = 0, x, k, M = null, R = If, C = null, I, T, Y, $ = Sf, J = 0.5, q = Af(O, J), W, E;
  function S(D) {
    return D = k(D[0] * nn, D[1] * nn), [D[0] * r + l, f - D[1] * r];
  }
  function b(D) {
    return D = k.invert((D[0] - l) / r, (f - D[1]) / r), D && [D[0] * Sr, D[1] * Sr];
  }
  function O(D, L) {
    return D = e(D, L), [D[0] * r + l, f - D[1] * r];
  }
  S.stream = function(D) {
    return W && E === D ? W : W = gS(R(x, q($(E = D))));
  }, S.clipAngle = function(D) {
    return arguments.length ? (R = +D ? uS(M = D * nn, 6 * nn) : (M = null, If), F()) : M * Sr;
  }, S.clipExtent = function(D) {
    return arguments.length ? ($ = D == null ? (C = I = T = Y = null, Sf) : eS(C = +D[0][0], I = +D[0][1], T = +D[1][0], Y = +D[1][1]), F()) : C == null ? null : [[C, I], [T, Y]];
  }, S.scale = function(D) {
    return arguments.length ? (r = +D, P()) : r;
  }, S.translate = function(D) {
    return arguments.length ? (s = +D[0], u = +D[1], P()) : [s, u];
  }, S.center = function(D) {
    return arguments.length ? (h = D[0] % 360 * nn, p = D[1] % 360 * nn, P()) : [h * Sr, p * Sr];
  }, S.rotate = function(D) {
    return arguments.length ? (d = D[0] % 360 * nn, v = D[1] % 360 * nn, _ = D.length > 2 ? D[2] % 360 * nn : 0, P()) : [d * Sr, v * Sr, _ * Sr];
  }, S.precision = function(D) {
    return arguments.length ? (q = Af(O, J = D * D), F()) : ts(J);
  }, S.fitExtent = function(D, L) {
    return pp(S, D, L);
  }, S.fitSize = function(D, L) {
    return lS(S, D, L);
  };
  function P() {
    k = up(x = W2(d, v, _), e);
    var D = e(h, p);
    return l = s - D[0] * r, f = u + D[1] * r, F();
  }
  function F() {
    return W = E = null, S;
  }
  return function() {
    return e = t.apply(this, arguments), S.invert = e.invert && b, P();
  };
}
function mp(t) {
  return function(e, r) {
    var s = je(e), u = je(r), l = t(s * u);
    return [
      l * u * Ze(e),
      l * Ze(r)
    ];
  };
}
function vp(t) {
  return function(e, r) {
    var s = ts(e * e + r * r), u = t(s), l = Ze(u), f = je(u);
    return [
      Ji(e * l, s * f),
      si(s && r * l / s)
    ];
  };
}
var mS = mp(function(t) {
  return ts(2 / (1 + t));
});
mS.invert = vp(function(t) {
  return 2 * si(t / 2);
});
var yp = mp(function(t) {
  return (t = op(t)) && t / Ze(t);
});
yp.invert = vp(function(t) {
  return t;
});
function vS() {
  return dS(yp).scale(79.4188).clipAngle(180 - 1e-3);
}
function Tf(t, e) {
  return [t, e];
}
Tf.invert = Tf;
var { BufferOp: yS, GeoJSONReader: _S, GeoJSONWriter: ES } = $2;
function xS(t, e, r) {
  r = r || {};
  var s = r.units || "kilometers", u = r.steps || 8;
  if (!t) throw new Error("geojson is required");
  if (typeof r != "object") throw new Error("options must be an object");
  if (typeof u != "number") throw new Error("steps must be an number");
  if (e === void 0) throw new Error("radius is required");
  if (u <= 0) throw new Error("steps must be greater than 0");
  var l = [];
  switch (t.type) {
    case "GeometryCollection":
      return Rr(t, function(f) {
        var h = Ha(f, e, s, u);
        h && l.push(h);
      }), nt(l);
    case "FeatureCollection":
      return $n(t, function(f) {
        var h = Ha(f, e, s, u);
        h && $n(h, function(p) {
          p && l.push(p);
        });
      }), nt(l);
  }
  return Ha(t, e, s, u);
}
function Ha(t, e, r, s) {
  var u = t.properties || {}, l = t.type === "Feature" ? t.geometry : t;
  if (l.type === "GeometryCollection") {
    var f = [];
    return Rr(t, function(R) {
      var C = Ha(R, e, r, s);
      C && f.push(C);
    }), nt(f);
  }
  var h = wS(l), p = {
    type: l.type,
    coordinates: Ep(l.coordinates, h)
  }, d = new _S(), v = d.read(p), _ = zl(ql(e, r), "meters"), x = yS.bufferOp(v, _, s), k = new ES();
  if (x = k.write(x), !_p(x.coordinates)) {
    var M = {
      type: x.type,
      coordinates: xp(x.coordinates, h)
    };
    return un(M, u);
  }
}
function _p(t) {
  return Array.isArray(t[0]) ? _p(t[0]) : isNaN(t[0]);
}
function Ep(t, e) {
  return typeof t[0] != "object" ? e(t) : t.map(function(r) {
    return Ep(r, e);
  });
}
function xp(t, e) {
  return typeof t[0] != "object" ? e.invert(t) : t.map(function(r) {
    return xp(r, e);
  });
}
function wS(t) {
  var e = q2(t).geometry.coordinates, r = [-e[0], -e[1]];
  return vS().rotate(r).scale(ot);
}
var kS = xS;
class wp {
  constructor(e = [], r = SS) {
    if (this.data = e, this.length = this.data.length, this.compare = r, this.length > 0)
      for (let s = (this.length >> 1) - 1; s >= 0; s--) this._down(s);
  }
  push(e) {
    this.data.push(e), this.length++, this._up(this.length - 1);
  }
  pop() {
    if (this.length === 0) return;
    const e = this.data[0], r = this.data.pop();
    return this.length--, this.length > 0 && (this.data[0] = r, this._down(0)), e;
  }
  peek() {
    return this.data[0];
  }
  _up(e) {
    const { data: r, compare: s } = this, u = r[e];
    for (; e > 0; ) {
      const l = e - 1 >> 1, f = r[l];
      if (s(u, f) >= 0) break;
      r[e] = f, e = l;
    }
    r[e] = u;
  }
  _down(e) {
    const { data: r, compare: s } = this, u = this.length >> 1, l = r[e];
    for (; e < u; ) {
      let f = (e << 1) + 1, h = r[f];
      const p = f + 1;
      if (p < this.length && s(r[p], h) < 0 && (f = p, h = r[p]), s(h, l) >= 0) break;
      r[e] = h, e = f;
    }
    r[e] = l;
  }
}
function SS(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function kp(t, e) {
  return t.p.x > e.p.x ? 1 : t.p.x < e.p.x ? -1 : t.p.y !== e.p.y ? t.p.y > e.p.y ? 1 : -1 : 1;
}
function MS(t, e) {
  return t.rightSweepEvent.p.x > e.rightSweepEvent.p.x ? 1 : t.rightSweepEvent.p.x < e.rightSweepEvent.p.x ? -1 : t.rightSweepEvent.p.y !== e.rightSweepEvent.p.y ? t.rightSweepEvent.p.y < e.rightSweepEvent.p.y ? 1 : -1 : 1;
}
class Lf {
  constructor(e, r, s, u) {
    this.p = {
      x: e[0],
      y: e[1]
    }, this.featureId = r, this.ringId = s, this.eventId = u, this.otherEvent = null, this.isLeftEndpoint = null;
  }
  isSamePoint(e) {
    return this.p.x === e.p.x && this.p.y === e.p.y;
  }
}
function IS(t, e) {
  if (t.type === "FeatureCollection") {
    const r = t.features;
    for (let s = 0; s < r.length; s++)
      Cf(r[s], e);
  } else
    Cf(t, e);
}
let La = 0, Ca = 0, Na = 0;
function Cf(t, e) {
  const r = t.type === "Feature" ? t.geometry : t;
  let s = r.coordinates;
  (r.type === "Polygon" || r.type === "MultiLineString") && (s = [s]), r.type === "LineString" && (s = [[s]]);
  for (let u = 0; u < s.length; u++)
    for (let l = 0; l < s[u].length; l++) {
      let f = s[u][l][0], h = null;
      Ca = Ca + 1;
      for (let p = 0; p < s[u][l].length - 1; p++) {
        h = s[u][l][p + 1];
        const d = new Lf(f, La, Ca, Na), v = new Lf(h, La, Ca, Na + 1);
        d.otherEvent = v, v.otherEvent = d, kp(d, v) > 0 ? (v.isLeftEndpoint = !0, d.isLeftEndpoint = !1) : (d.isLeftEndpoint = !0, v.isLeftEndpoint = !1), e.push(d), e.push(v), f = h, Na = Na + 1;
      }
    }
  La = La + 1;
}
let bS = class {
  constructor(e) {
    this.leftSweepEvent = e, this.rightSweepEvent = e.otherEvent;
  }
};
function AS(t, e) {
  if (t === null || e === null || t.leftSweepEvent.ringId === e.leftSweepEvent.ringId && (t.rightSweepEvent.isSamePoint(e.leftSweepEvent) || t.rightSweepEvent.isSamePoint(e.leftSweepEvent) || t.rightSweepEvent.isSamePoint(e.rightSweepEvent) || t.leftSweepEvent.isSamePoint(e.leftSweepEvent) || t.leftSweepEvent.isSamePoint(e.rightSweepEvent))) return !1;
  const r = t.leftSweepEvent.p.x, s = t.leftSweepEvent.p.y, u = t.rightSweepEvent.p.x, l = t.rightSweepEvent.p.y, f = e.leftSweepEvent.p.x, h = e.leftSweepEvent.p.y, p = e.rightSweepEvent.p.x, d = e.rightSweepEvent.p.y, v = (d - h) * (u - r) - (p - f) * (l - s), _ = (p - f) * (s - h) - (d - h) * (r - f), x = (u - r) * (s - h) - (l - s) * (r - f);
  if (v === 0)
    return !1;
  const k = _ / v, M = x / v;
  if (k >= 0 && k <= 1 && M >= 0 && M <= 1) {
    const R = r + k * (u - r), C = s + k * (l - s);
    return [R, C];
  }
  return !1;
}
function TS(t, e) {
  e = e || !1;
  const r = [], s = new wp([], MS);
  for (; t.length; ) {
    const u = t.pop();
    if (u.isLeftEndpoint) {
      const l = new bS(u);
      for (let f = 0; f < s.data.length; f++) {
        const h = s.data[f];
        if (e && h.leftSweepEvent.featureId === u.featureId)
          continue;
        const p = AS(l, h);
        p !== !1 && r.push(p);
      }
      s.push(l);
    } else u.isLeftEndpoint === !1 && s.pop();
  }
  return r;
}
function LS(t, e) {
  const r = new wp([], kp);
  return IS(t, r), TS(r, e);
}
var CS = LS;
function aa(t, e, r = {}) {
  const { removeDuplicates: s = !0, ignoreSelfIntersections: u = !0 } = r;
  let l = [];
  t.type === "FeatureCollection" ? l = l.concat(t.features) : t.type === "Feature" ? l.push(t) : (t.type === "LineString" || t.type === "Polygon" || t.type === "MultiLineString" || t.type === "MultiPolygon") && l.push(un(t)), e.type === "FeatureCollection" ? l = l.concat(e.features) : e.type === "Feature" ? l.push(e) : (e.type === "LineString" || e.type === "Polygon" || e.type === "MultiLineString" || e.type === "MultiPolygon") && l.push(un(e));
  const f = CS(
    nt(l),
    u
  );
  let h = [];
  if (s) {
    const p = {};
    f.forEach((d) => {
      const v = d.join(",");
      p[v] || (p[v] = !0, h.push(d));
    });
  } else
    h = f;
  return nt(h.map((p) => wn(p)));
}
var NS = aa;
function il(t) {
  const e = Ht(t);
  let r = 0, s = 1, u, l;
  for (; s < e.length; )
    u = l || e[0], l = e[s], r += (l[0] - u[0]) * (l[1] + u[1]), s++;
  return r > 0;
}
function PS(t, e = {}) {
  var r, s;
  if (e = e || {}, !Ao(e)) throw new Error("options is invalid");
  const u = (r = e.mutate) != null ? r : !1, l = (s = e.reverse) != null ? s : !1;
  if (!t) throw new Error("<geojson> is required");
  if (typeof l != "boolean")
    throw new Error("<reverse> must be a boolean");
  if (typeof u != "boolean")
    throw new Error("<mutate> must be a boolean");
  !u && t.type !== "Point" && t.type !== "MultiPoint" && (t = To(t));
  const f = [];
  switch (t.type) {
    case "GeometryCollection":
      return Rr(t, function(h) {
        Ja(h, l);
      }), t;
    case "FeatureCollection":
      return $n(t, function(h) {
        const p = Ja(h, l);
        $n(p, function(d) {
          f.push(d);
        });
      }), nt(f);
  }
  return Ja(t, l);
}
function Ja(t, e) {
  switch (t.type === "Feature" ? t.geometry.type : t.type) {
    case "GeometryCollection":
      return Rr(t, function(s) {
        Ja(s, e);
      }), t;
    case "LineString":
      return Nf(Ht(t), e), t;
    case "Polygon":
      return Pf(Ht(t), e), t;
    case "MultiLineString":
      return Ht(t).forEach(function(s) {
        Nf(s, e);
      }), t;
    case "MultiPolygon":
      return Ht(t).forEach(function(s) {
        Pf(s, e);
      }), t;
    case "Point":
    case "MultiPoint":
      return t;
  }
}
function Nf(t, e) {
  il(t) === e && t.reverse();
}
function Pf(t, e) {
  il(t[0]) !== e && t[0].reverse();
  for (let r = 1; r < t.length; r++)
    il(t[r]) === e && t[r].reverse();
}
var OS = PS;
const RS = ["Point", "MultiPoint"], DS = [
  "LineString",
  "MultiLineString",
  "Polygon",
  "MultiPolygon"
], Sp = (t) => RS.includes(t.geometry.type), sl = (t) => DS.includes(t.geometry.type), FS = (t, e) => (ia(t, (r) => {
  const s = r.coordinate;
  s[0] += e.lng, s[1] += e.lat;
}), t), GS = (t, e) => {
  const s = t.getBounds(), u = jd(s[0], s[1], { units: "meters" });
  return kS(e, u * 1e-4, { units: "meters" }) || null;
}, Mp = (t, e) => {
  const r = $t(t.getGeoJson());
  return FS(r, e), r;
}, II = (t, e) => {
  const r = Mp(t, e), s = t.getShapeProperty("center");
  s && (t.setShapeProperty("center", s[0] + e.lng), t.setShapeProperty("center", s[1] + e.lat)), t.updateGeoJsonGeometry(r.geometry);
}, BS = (t, e) => {
  try {
    ia(t, (r) => {
      if (!ii(r.coordinate, e))
        throw new Error("stop");
    });
  } catch {
    return !1;
  }
  return !0;
}, Pa = (t, e) => {
  const r = BS(t, e);
  return Sp(t) ? r : r && sl(t) ? !NS(t, e, { ignoreSelfIntersections: !0 }).features.length : !1;
}, rc = (t) => {
  const e = t.getGeoJson();
  return typeof e != "object" ? null : ep(e);
}, US = (t) => {
  if (sl(t)) {
    const e = OS(t, { mutate: !1 });
    if (e.type === "Feature" && sl(e))
      return {
        ...e,
        properties: t.properties || {}
      };
  }
  return Sp(t) ? t : null;
}, zS = (t, e) => {
  const r = t.properties?.[e];
  return typeof r == "string" || typeof r == "number" ? r : null;
};
class ic extends es {
  mode = "drag";
  previousLngLat = null;
  pointBasedShapes = ["marker", "circle_marker", "text_marker"];
  throttledMethods = ci(
    {
      onMouseMove: this.onMouseMove
    },
    this,
    this.gm.options.settings.throttlingDelay
  );
  eventHandlers = {
    [`${ae}:edit`]: this.handleGmEdit.bind(this),
    mousedown: this.onMouseDown.bind(this),
    touchstart: this.onMouseDown.bind(this),
    mousemove: this.throttledMethods.onMouseMove.bind(this),
    touchmove: this.throttledMethods.onMouseMove.bind(this),
    mouseup: this.onMouseUp.bind(this),
    touchend: this.onMouseUp.bind(this)
  };
  getUpdatedGeoJsonHandlers = {
    marker: this.moveSource.bind(this),
    ellipse: this.moveEllipse.bind(this),
    circle: this.moveCircle.bind(this),
    circle_marker: this.moveSource.bind(this),
    text_marker: this.moveSource.bind(this),
    line: this.moveSource.bind(this),
    rectangle: this.moveSource.bind(this),
    polygon: this.moveSource.bind(this)
  };
  onMouseDown(e) {
    if (!Ke(e))
      return { next: !0 };
    const r = this.getFeatureByMouseEvent({ event: e, sourceNames: [K.main] });
    return r && this.getUpdatedGeoJsonHandlers[r.shape] ? (this.featureData = r, this.featureData.changeSource({ sourceName: K.temporary, atomic: !0 }), this.gm.mapAdapter.setDragPan(!1), this.snappingHelper?.addExcludedFeature(this.featureData), this.fireFeatureEditStartEvent({ feature: this.featureData, forceMode: "drag" }), this.flags.actionInProgress = !0, this.isPointBasedShape() && this.alignShapeCenterWithControlMarker(this.featureData, e), { next: !1 }) : { next: !0 };
  }
  onMouseUp(e) {
    return !this.featureData || !Ke(e, { warning: !0 }) ? { next: !0 } : (this.snappingHelper?.clearExcludedFeatures(), this.featureData.changeSource({ sourceName: K.main, atomic: !0 }), this.previousLngLat = null, this.gm.mapAdapter.setDragPan(!0), this.fireFeatureEditEndEvent({ feature: this.featureData, forceMode: "drag" }), this.flags.actionInProgress = !1, this.featureData = null, { next: !0 });
  }
  onMouseMove(e) {
    if (!this.flags.actionInProgress || !Ke(e, { warning: !0 }))
      return { next: !0 };
    if (this.featureData) {
      const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
      this.moveFeature(this.featureData, r);
    }
    return { next: !1 };
  }
  isPointBasedShape() {
    return !!this.featureData && this.pointBasedShapes.includes(this.featureData.shape);
  }
  alignShapeCenterWithControlMarker(e, r) {
    const s = rc(e);
    s && (this.gm.markerPointer.marker?.setLngLat(s), this.onMouseMove(r));
  }
  moveFeature(e, r) {
    if (!this.flags.actionInProgress)
      return;
    if (!this.previousLngLat) {
      this.previousLngLat = r;
      return;
    }
    const s = this.getUpdatedGeoJsonHandlers[e.shape];
    if (s) {
      const u = s(e, this.previousLngLat, r);
      if (!u) {
        te.error("BaseDrag.moveFeature: invalid updatedGeoJson", e);
        return;
      }
      this.fireBeforeFeatureUpdate({
        features: [e],
        geoJsonFeatures: [u],
        forceMode: "drag"
      });
      const l = this.updateFeatureGeoJson({
        featureData: e,
        featureGeoJson: u,
        forceMode: "drag"
      });
      Wi(e.getGeoJson().properties, u.properties) || e._updateAllProperties(u.properties), l && (this.previousLngLat = r);
    }
  }
  moveSource(e, r, s) {
    const u = uu(r, s);
    return Mp(e, u);
  }
  moveEllipse(e, r, s) {
    if (e.shape !== "ellipse")
      return te.error("BaseDrag.moveCircle: invalid shape type", e), null;
    const u = e.getShapeProperty("center"), l = e.getShapeProperty("xSemiAxis"), f = e.getShapeProperty("ySemiAxis"), h = e.getShapeProperty("angle");
    if (!Array.isArray(u) || typeof l != "number" || typeof f != "number" || typeof h != "number")
      return te.error(
        "BaseDrag.moveEllipse: missing center, xSemiAxis, ySemiAxis or angle in the featureData",
        e
      ), null;
    const p = uu(r, s), d = [
      u[0] + p.lng,
      u[1] + p.lat
    ];
    return Co({
      center: d,
      xSemiAxis: l,
      ySemiAxis: f,
      angle: h
    });
  }
  moveCircle(e, r, s) {
    if (e.shape !== "circle")
      return te.error("BaseDrag.moveCircle: invalid shape type", e), null;
    const u = e.getShapeProperty("center");
    if (!Array.isArray(u))
      return te.error("BaseDrag.moveCircle: missing center in the featureData", e), null;
    const l = e.getGeoJson(), f = uu(r, s), h = ep(l);
    if (!h)
      return te.error("BaseDrag.moveCircle: missing center circleRimLngLat"), null;
    const p = [
      u[0] + f.lng,
      u[1] + f.lat
    ];
    e.setShapeProperty("center", p);
    const d = Wl({
      center: p,
      radius: this.gm.mapAdapter.getDistance(u, h)
    });
    return {
      type: "Feature",
      properties: {
        shape: "circle"
      },
      geometry: d.geometry
    };
  }
}
const qS = {
  imperial: "en-US",
  metric: "nb-NO"
}, Ip = {
  distance: {
    metric: [
      { range: [0, 1], unit: "cm", factor: 100 },
      { range: [1, 1e4], unit: "m", factor: 1 },
      { range: [1e4, 1 / 0], unit: "km", factor: 1e-3 }
    ],
    imperial: [
      { range: [0, 0.3048], factor: 39.3701, unit: "in" },
      { range: [0.3048, 1609.344], factor: 3.28084, unit: "ft" },
      { range: [1609.344, 1 / 0], factor: 621371e-9, unit: "mi" }
    ]
  },
  area: {
    metric: [
      { range: [0, 1], unit: "cm²", factor: 1e4 },
      { range: [1, 1e4], unit: "m²", factor: 1 },
      { range: [1e5, 1 / 0], unit: "km²", factor: 1e-6 }
    ],
    imperial: [
      { range: [0, 0.092903], factor: 1550.0031, unit: "in²" },
      { range: [0.092903, 4046.856], factor: 10.7639, unit: "ft²" },
      { range: [4046.856, 2589988], factor: 247105e-9, unit: "ac" },
      { range: [2589988, 1 / 0], factor: 3861e-10, unit: "mi²" }
    ]
  }
}, YS = (t, e) => (t % e + e) % e, co = (t, e) => new Intl.NumberFormat(qS[e.units], {
  minimumFractionDigits: e.minimumFractionDigits ?? 0,
  maximumFractionDigits: e.maximumFractionDigits ?? 2
}).format(t), bI = (t, e) => {
  const s = Ip.distance[e.units].find((u) => t >= u.range[0] && t < u.range[1]);
  return s ? `${co(t * s.factor, e)} ${s.unit}` : co(t, e);
}, AI = (t, e) => {
  const s = Ip.area[e.units].find((u) => t >= u.range[0] && t < u.range[1]);
  return s ? `${co(t * s.factor, e)} ${s.unit}` : co(t, e);
};
class HS extends ic {
  mode = "change";
  cutVertexShapeTypes = ["line", "polygon", "rectangle"];
  markerData = null;
  shapeUpdateHandlers = {
    marker: this.updateSingleVertex.bind(this),
    circle: this.updateCircle.bind(this),
    circle_marker: this.updateSingleVertex.bind(this),
    ellipse: this.updateEllipse.bind(this),
    text_marker: this.updateSingleVertex.bind(this),
    line: this.updateSingleVertex.bind(this),
    rectangle: this.updateRectangle.bind(this),
    polygon: this.updateSingleVertex.bind(this)
  };
  get snapGuidesInstance() {
    const e = this.gm.actionInstances.helper__snap_guides;
    return sp(e) ? e : null;
  }
  onStartAction() {
  }
  onEndAction() {
    this.snapGuidesInstance?.removeSnapGuides();
  }
  handleGmEdit(e) {
    if (!Qi(e))
      return { next: !0 };
    if (e.action === "marker_move" && e.lngLatStart && e.markerData) {
      if (e.markerData.type === "vertex")
        return this.moveVertex(e), { next: !1 };
      if (e.lngLatEnd)
        return this.moveSource(e.featureData, e.lngLatStart, e.lngLatEnd), { next: !1 };
    }
    return e.action === "marker_right_click" ? (this.cutVertex(e), this.fireFeatureEditEndEvent({ feature: e.featureData })) : e.action === "edge_marker_click" ? this.insertVertex(e) : e.action === "marker_captured" ? (this.setCursorToPointer(), e.featureData.changeSource({ sourceName: K.temporary, atomic: !0 }), this.flags.actionInProgress = !0, this.fireFeatureEditStartEvent({ feature: e.featureData })) : e.action === "marker_released" && (this.markerData = null, this.snapGuidesInstance?.removeSnapGuides(), e.featureData.changeSource({ sourceName: K.main, atomic: !0 }), this.fireFeatureEditEndEvent({ feature: e.featureData }), this.flags.actionInProgress = !1), { next: !0 };
  }
  moveVertex(e) {
    this.markerData || (this.markerData = e.markerData || null, this.snapGuidesInstance?.updateSnapGuides(e.featureData.getGeoJson(), e.lngLatStart));
    const r = e.featureData, s = r.shape, u = this.shapeUpdateHandlers[s]?.(e) || null;
    u ? (this.fireBeforeFeatureUpdate({
      features: [r],
      geoJsonFeatures: [u]
    }), this.updateFeatureGeoJson({ featureData: r, featureGeoJson: u })) : te.error("EditChange.moveVertex: invalid geojson", u, e);
  }
  cutVertex(e) {
    const r = e.featureData;
    if (e.markerData.type !== "vertex" || !this.cutVertexShapeTypes.includes(r.shape))
      return;
    let s = !1;
    const u = r.getGeoJson(), l = e.markerData.instance;
    if (Fs(u)) {
      if (lu(u) <= 2) {
        this.gm.features.delete(r);
        return;
      }
    } else if (Jl(u)) {
      if (lu(u) <= 3) {
        this.gm.features.delete(r);
        return;
      }
    } else if (Hl(u) && lu(u) <= 3) {
      this.gm.features.delete(r);
      return;
    }
    const f = rc(l);
    f && (s = Bk(u, f)), s ? (r.convertToPolygon(), r.updateGeoJsonGeometry(u.geometry), this.fireFeatureUpdatedEvent({
      sourceFeatures: [r],
      targetFeatures: [r],
      markerData: e.markerData
    })) : te.error("EditChange.cutVertex: feature not updated", e);
  }
  insertVertex(e) {
    if (e.markerData.type !== "edge")
      return;
    const r = e.featureData.getGeoJson(), s = e.markerData.segment.end.path, u = s.pop(), l = Ui(r, s);
    typeof u == "number" && (l.splice(u, 0, [...e.markerData.position.coordinate]), e.featureData.updateGeoJsonGeometry(r.geometry), e.featureData.convertToPolygon(), this.fireFeatureUpdatedEvent({
      sourceFeatures: [e.featureData],
      targetFeatures: [e.featureData],
      markerData: e.markerData
    }));
  }
  updateSingleVertex({ featureData: e, lngLatEnd: r, markerData: s }) {
    const u = $t(e.getGeoJson()), l = $t(s.position.path), f = l.pop(), h = Ui(u, l);
    return Array.isArray(h) && typeof f == "number" ? (h[f] = [...r], f === 0 && e.shape === "polygon" && (h[h.length - 1] = [...r])) : te.error("BaseDrag.moveSingleVertex: invalid coordinates", u, l), u;
  }
  updateCircle({ featureData: e, lngLatEnd: r }) {
    const s = e.getShapeProperty("center");
    if (e.shape !== "circle" || !s)
      return te.error("BaseDrag.moveCircle: invalid shape type / missing center", e), null;
    const u = Wl({
      center: s,
      radius: this.gm.mapAdapter.getDistance(s, r)
    });
    return {
      type: "Feature",
      properties: {
        shape: "circle"
      },
      geometry: u.geometry
    };
  }
  updateEllipse(e) {
    const { featureData: r, lngLatEnd: s, markerData: u } = e;
    if (r.shape !== "ellipse")
      return te.error("EditChange.updateEllipse: invalid shape type", r), null;
    const l = r.getShapeProperty("center");
    let f = r.getShapeProperty("xSemiAxis"), h = r.getShapeProperty("ySemiAxis");
    const p = r.getShapeProperty("angle");
    if (!Array.isArray(l) || typeof f != "number" || typeof h != "number" || typeof p != "number")
      return te.error(
        "updateEllipse: missing center, xSemiAxis, ySemiAxis or angle in the featureData",
        r
      ), null;
    const d = this.gm.mapAdapter.getDistance(l, s), v = u.position.path[3], _ = Math.floor(v / tp * 4);
    return (_ === 0 || _ === 2 ? "x" : "y") === "x" ? f = d : h = d, Co({
      center: l,
      xSemiAxis: f,
      ySemiAxis: h,
      angle: p
    });
  }
  updateRectangle({ featureData: e, lngLatStart: r, lngLatEnd: s }) {
    const l = e.getGeoJson(), f = l.geometry.coordinates[0], { absCoordIndex: h } = Lo(l, r);
    if (h === -1)
      return te.error("EditChange.updateRectangle: start vertex not found", e), null;
    const p = YS(h - 2, 4), d = f[p];
    return ju(s, d);
  }
}
function JS(t, e, {
  ignoreSelfIntersections: r = !0
} = { ignoreSelfIntersections: !0 }) {
  let s = !0;
  return Pr(t, (u) => {
    Pr(e, (l) => {
      if (s === !1)
        return !1;
      s = $S(
        u.geometry,
        l.geometry,
        r
      );
    });
  }), s;
}
function $S(t, e, r) {
  switch (t.type) {
    case "Point":
      switch (e.type) {
        case "Point":
          return !jS(t.coordinates, e.coordinates);
        case "LineString":
          return !Of(e, t);
        case "Polygon":
          return !ii(t, e);
      }
      break;
    case "LineString":
      switch (e.type) {
        case "Point":
          return !Of(t, e);
        case "LineString":
          return !VS(t, e, r);
        case "Polygon":
          return !Rf(e, t, r);
      }
      break;
    case "Polygon":
      switch (e.type) {
        case "Point":
          return !ii(e, t);
        case "LineString":
          return !Rf(t, e, r);
        case "Polygon":
          return !XS(e, t, r);
      }
  }
  return !1;
}
function Of(t, e) {
  for (let r = 0; r < t.coordinates.length - 1; r++)
    if (WS(
      t.coordinates[r],
      t.coordinates[r + 1],
      e.coordinates
    ))
      return !0;
  return !1;
}
function VS(t, e, r) {
  return aa(t, e, {
    ignoreSelfIntersections: r
  }).features.length > 0;
}
function Rf(t, e, r) {
  for (const u of e.coordinates)
    if (ii(u, t))
      return !0;
  return aa(e, Wu(t), {
    ignoreSelfIntersections: r
  }).features.length > 0;
}
function XS(t, e, r) {
  for (const u of t.coordinates[0])
    if (ii(u, e))
      return !0;
  for (const u of e.coordinates[0])
    if (ii(u, t))
      return !0;
  return aa(
    Wu(t),
    Wu(e),
    { ignoreSelfIntersections: r }
  ).features.length > 0;
}
function WS(t, e, r) {
  const s = r[0] - t[0], u = r[1] - t[1], l = e[0] - t[0], f = e[1] - t[1];
  return s * f - u * l !== 0 ? !1 : Math.abs(l) >= Math.abs(f) ? l > 0 ? t[0] <= r[0] && r[0] <= e[0] : e[0] <= r[0] && r[0] <= t[0] : f > 0 ? t[1] <= r[1] && r[1] <= e[1] : e[1] <= r[1] && r[1] <= t[1];
}
function jS(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function ZS(t, e, {
  ignoreSelfIntersections: r = !0
} = {}) {
  let s = !1;
  return Pr(t, (u) => {
    Pr(e, (l) => {
      if (s === !0)
        return !0;
      s = !JS(u.geometry, l.geometry, {
        ignoreSelfIntersections: r
      });
    });
  }), s;
}
var bp = ZS, KS = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mu = Math.ceil, Qt = Math.floor, Rt = "[BigNumber Error] ", Df = Rt + "Number primitive has more than 15 significant digits: ", gn = 1e14, we = 14, vu = 9007199254740991, yu = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Mr = 1e7, st = 1e9;
function Ap(t) {
  var e, r, s, u = T.prototype = { constructor: T, toString: null, valueOf: null }, l = new T(1), f = 20, h = 4, p = -7, d = 21, v = -1e7, _ = 1e7, x = !1, k = 1, M = 0, R = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, C = "0123456789abcdefghijklmnopqrstuvwxyz", I = !0;
  function T(E, S) {
    var b, O, P, F, D, L, B, U, H = this;
    if (!(H instanceof T)) return new T(E, S);
    if (S == null) {
      if (E && E._isBigNumber === !0) {
        H.s = E.s, !E.c || E.e > _ ? H.c = H.e = null : E.e < v ? H.c = [H.e = 0] : (H.e = E.e, H.c = E.c.slice());
        return;
      }
      if ((L = typeof E == "number") && E * 0 == 0) {
        if (H.s = 1 / E < 0 ? (E = -E, -1) : 1, E === ~~E) {
          for (F = 0, D = E; D >= 10; D /= 10, F++) ;
          F > _ ? H.c = H.e = null : (H.e = F, H.c = [E]);
          return;
        }
        U = String(E);
      } else {
        if (!KS.test(U = String(E))) return s(H, U, L);
        H.s = U.charCodeAt(0) == 45 ? (U = U.slice(1), -1) : 1;
      }
      (F = U.indexOf(".")) > -1 && (U = U.replace(".", "")), (D = U.search(/e/i)) > 0 ? (F < 0 && (F = D), F += +U.slice(D + 1), U = U.substring(0, D)) : F < 0 && (F = U.length);
    } else {
      if (Xe(S, 2, C.length, "Base"), S == 10 && I)
        return H = new T(E), q(H, f + H.e + 1, h);
      if (U = String(E), L = typeof E == "number") {
        if (E * 0 != 0) return s(H, U, L, S);
        if (H.s = 1 / E < 0 ? (U = U.slice(1), -1) : 1, T.DEBUG && U.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Df + E);
      } else
        H.s = U.charCodeAt(0) === 45 ? (U = U.slice(1), -1) : 1;
      for (b = C.slice(0, S), F = D = 0, B = U.length; D < B; D++)
        if (b.indexOf(O = U.charAt(D)) < 0) {
          if (O == ".") {
            if (D > F) {
              F = B;
              continue;
            }
          } else if (!P && (U == U.toUpperCase() && (U = U.toLowerCase()) || U == U.toLowerCase() && (U = U.toUpperCase()))) {
            P = !0, D = -1, F = 0;
            continue;
          }
          return s(H, String(E), L, S);
        }
      L = !1, U = r(U, S, 10, H.s), (F = U.indexOf(".")) > -1 ? U = U.replace(".", "") : F = U.length;
    }
    for (D = 0; U.charCodeAt(D) === 48; D++) ;
    for (B = U.length; U.charCodeAt(--B) === 48; ) ;
    if (U = U.slice(D, ++B)) {
      if (B -= D, L && T.DEBUG && B > 15 && (E > vu || E !== Qt(E)))
        throw Error(Df + H.s * E);
      if ((F = F - D - 1) > _)
        H.c = H.e = null;
      else if (F < v)
        H.c = [H.e = 0];
      else {
        if (H.e = F, H.c = [], D = (F + 1) % we, F < 0 && (D += we), D < B) {
          for (D && H.c.push(+U.slice(0, D)), B -= we; D < B; )
            H.c.push(+U.slice(D, D += we));
          D = we - (U = U.slice(D)).length;
        } else
          D -= B;
        for (; D--; U += "0") ;
        H.c.push(+U);
      }
    } else
      H.c = [H.e = 0];
  }
  T.clone = Ap, T.ROUND_UP = 0, T.ROUND_DOWN = 1, T.ROUND_CEIL = 2, T.ROUND_FLOOR = 3, T.ROUND_HALF_UP = 4, T.ROUND_HALF_DOWN = 5, T.ROUND_HALF_EVEN = 6, T.ROUND_HALF_CEIL = 7, T.ROUND_HALF_FLOOR = 8, T.EUCLID = 9, T.config = T.set = function(E) {
    var S, b;
    if (E != null)
      if (typeof E == "object") {
        if (E.hasOwnProperty(S = "DECIMAL_PLACES") && (b = E[S], Xe(b, 0, st, S), f = b), E.hasOwnProperty(S = "ROUNDING_MODE") && (b = E[S], Xe(b, 0, 8, S), h = b), E.hasOwnProperty(S = "EXPONENTIAL_AT") && (b = E[S], b && b.pop ? (Xe(b[0], -st, 0, S), Xe(b[1], 0, st, S), p = b[0], d = b[1]) : (Xe(b, -st, st, S), p = -(d = b < 0 ? -b : b))), E.hasOwnProperty(S = "RANGE"))
          if (b = E[S], b && b.pop)
            Xe(b[0], -st, -1, S), Xe(b[1], 1, st, S), v = b[0], _ = b[1];
          else if (Xe(b, -st, st, S), b)
            v = -(_ = b < 0 ? -b : b);
          else
            throw Error(Rt + S + " cannot be zero: " + b);
        if (E.hasOwnProperty(S = "CRYPTO"))
          if (b = E[S], b === !!b)
            if (b)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                x = b;
              else
                throw x = !b, Error(Rt + "crypto unavailable");
            else
              x = b;
          else
            throw Error(Rt + S + " not true or false: " + b);
        if (E.hasOwnProperty(S = "MODULO_MODE") && (b = E[S], Xe(b, 0, 9, S), k = b), E.hasOwnProperty(S = "POW_PRECISION") && (b = E[S], Xe(b, 0, st, S), M = b), E.hasOwnProperty(S = "FORMAT"))
          if (b = E[S], typeof b == "object") R = b;
          else throw Error(Rt + S + " not an object: " + b);
        if (E.hasOwnProperty(S = "ALPHABET"))
          if (b = E[S], typeof b == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(b))
            I = b.slice(0, 10) == "0123456789", C = b;
          else
            throw Error(Rt + S + " invalid: " + b);
      } else
        throw Error(Rt + "Object expected: " + E);
    return {
      DECIMAL_PLACES: f,
      ROUNDING_MODE: h,
      EXPONENTIAL_AT: [p, d],
      RANGE: [v, _],
      CRYPTO: x,
      MODULO_MODE: k,
      POW_PRECISION: M,
      FORMAT: R,
      ALPHABET: C
    };
  }, T.isBigNumber = function(E) {
    if (!E || E._isBigNumber !== !0) return !1;
    if (!T.DEBUG) return !0;
    var S, b, O = E.c, P = E.e, F = E.s;
    e: if ({}.toString.call(O) == "[object Array]") {
      if ((F === 1 || F === -1) && P >= -st && P <= st && P === Qt(P)) {
        if (O[0] === 0) {
          if (P === 0 && O.length === 1) return !0;
          break e;
        }
        if (S = (P + 1) % we, S < 1 && (S += we), String(O[0]).length == S) {
          for (S = 0; S < O.length; S++)
            if (b = O[S], b < 0 || b >= gn || b !== Qt(b)) break e;
          if (b !== 0) return !0;
        }
      }
    } else if (O === null && P === null && (F === null || F === 1 || F === -1))
      return !0;
    throw Error(Rt + "Invalid BigNumber: " + E);
  }, T.maximum = T.max = function() {
    return $(arguments, -1);
  }, T.minimum = T.min = function() {
    return $(arguments, 1);
  }, T.random = (function() {
    var E = 9007199254740992, S = Math.random() * E & 2097151 ? function() {
      return Qt(Math.random() * E);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(b) {
      var O, P, F, D, L, B = 0, U = [], H = new T(l);
      if (b == null ? b = f : Xe(b, 0, st), D = mu(b / we), x)
        if (crypto.getRandomValues) {
          for (O = crypto.getRandomValues(new Uint32Array(D *= 2)); B < D; )
            L = O[B] * 131072 + (O[B + 1] >>> 11), L >= 9e15 ? (P = crypto.getRandomValues(new Uint32Array(2)), O[B] = P[0], O[B + 1] = P[1]) : (U.push(L % 1e14), B += 2);
          B = D / 2;
        } else if (crypto.randomBytes) {
          for (O = crypto.randomBytes(D *= 7); B < D; )
            L = (O[B] & 31) * 281474976710656 + O[B + 1] * 1099511627776 + O[B + 2] * 4294967296 + O[B + 3] * 16777216 + (O[B + 4] << 16) + (O[B + 5] << 8) + O[B + 6], L >= 9e15 ? crypto.randomBytes(7).copy(O, B) : (U.push(L % 1e14), B += 7);
          B = D / 7;
        } else
          throw x = !1, Error(Rt + "crypto unavailable");
      if (!x)
        for (; B < D; )
          L = S(), L < 9e15 && (U[B++] = L % 1e14);
      for (D = U[--B], b %= we, D && b && (L = yu[we - b], U[B] = Qt(D / L) * L); U[B] === 0; U.pop(), B--) ;
      if (B < 0)
        U = [F = 0];
      else {
        for (F = -1; U[0] === 0; U.splice(0, 1), F -= we) ;
        for (B = 1, L = U[0]; L >= 10; L /= 10, B++) ;
        B < we && (F -= we - B);
      }
      return H.e = F, H.c = U, H;
    };
  })(), T.sum = function() {
    for (var E = 1, S = arguments, b = new T(S[0]); E < S.length; ) b = b.plus(S[E++]);
    return b;
  }, r = /* @__PURE__ */ (function() {
    var E = "0123456789";
    function S(b, O, P, F) {
      for (var D, L = [0], B, U = 0, H = b.length; U < H; ) {
        for (B = L.length; B--; L[B] *= O) ;
        for (L[0] += F.indexOf(b.charAt(U++)), D = 0; D < L.length; D++)
          L[D] > P - 1 && (L[D + 1] == null && (L[D + 1] = 0), L[D + 1] += L[D] / P | 0, L[D] %= P);
      }
      return L.reverse();
    }
    return function(b, O, P, F, D) {
      var L, B, U, H, j, Z, ne, le, ue = b.indexOf("."), ie = f, oe = h;
      for (ue >= 0 && (H = M, M = 0, b = b.replace(".", ""), le = new T(O), Z = le.pow(b.length - ue), M = H, le.c = S(
        er(Kt(Z.c), Z.e, "0"),
        10,
        P,
        E
      ), le.e = le.c.length), ne = S(b, O, P, D ? (L = C, E) : (L = E, C)), U = H = ne.length; ne[--H] == 0; ne.pop()) ;
      if (!ne[0]) return L.charAt(0);
      if (ue < 0 ? --U : (Z.c = ne, Z.e = U, Z.s = F, Z = e(Z, le, ie, oe, P), ne = Z.c, j = Z.r, U = Z.e), B = U + ie + 1, ue = ne[B], H = P / 2, j = j || B < 0 || ne[B + 1] != null, j = oe < 4 ? (ue != null || j) && (oe == 0 || oe == (Z.s < 0 ? 3 : 2)) : ue > H || ue == H && (oe == 4 || j || oe == 6 && ne[B - 1] & 1 || oe == (Z.s < 0 ? 8 : 7)), B < 1 || !ne[0])
        b = j ? er(L.charAt(1), -ie, L.charAt(0)) : L.charAt(0);
      else {
        if (ne.length = B, j)
          for (--P; ++ne[--B] > P; )
            ne[B] = 0, B || (++U, ne = [1].concat(ne));
        for (H = ne.length; !ne[--H]; ) ;
        for (ue = 0, b = ""; ue <= H; b += L.charAt(ne[ue++])) ;
        b = er(b, U, L.charAt(0));
      }
      return b;
    };
  })(), e = /* @__PURE__ */ (function() {
    function E(O, P, F) {
      var D, L, B, U, H = 0, j = O.length, Z = P % Mr, ne = P / Mr | 0;
      for (O = O.slice(); j--; )
        B = O[j] % Mr, U = O[j] / Mr | 0, D = ne * B + U * Z, L = Z * B + D % Mr * Mr + H, H = (L / F | 0) + (D / Mr | 0) + ne * U, O[j] = L % F;
      return H && (O = [H].concat(O)), O;
    }
    function S(O, P, F, D) {
      var L, B;
      if (F != D)
        B = F > D ? 1 : -1;
      else
        for (L = B = 0; L < F; L++)
          if (O[L] != P[L]) {
            B = O[L] > P[L] ? 1 : -1;
            break;
          }
      return B;
    }
    function b(O, P, F, D) {
      for (var L = 0; F--; )
        O[F] -= L, L = O[F] < P[F] ? 1 : 0, O[F] = L * D + O[F] - P[F];
      for (; !O[0] && O.length > 1; O.splice(0, 1)) ;
    }
    return function(O, P, F, D, L) {
      var B, U, H, j, Z, ne, le, ue, ie, oe, xe, Le, V, bn, Ie, he, N, Ce = O.s == P.s ? 1 : -1, De = O.c, ke = P.c;
      if (!De || !De[0] || !ke || !ke[0])
        return new T(
          // Return NaN if either NaN, or both Infinity or 0.
          !O.s || !P.s || (De ? ke && De[0] == ke[0] : !ke) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            De && De[0] == 0 || !ke ? Ce * 0 : Ce / 0
          )
        );
      for (ue = new T(Ce), ie = ue.c = [], U = O.e - P.e, Ce = F + U + 1, L || (L = gn, U = en(O.e / we) - en(P.e / we), Ce = Ce / we | 0), H = 0; ke[H] == (De[H] || 0); H++) ;
      if (ke[H] > (De[H] || 0) && U--, Ce < 0)
        ie.push(1), j = !0;
      else {
        for (bn = De.length, he = ke.length, H = 0, Ce += 2, Z = Qt(L / (ke[0] + 1)), Z > 1 && (ke = E(ke, Z, L), De = E(De, Z, L), he = ke.length, bn = De.length), V = he, oe = De.slice(0, he), xe = oe.length; xe < he; oe[xe++] = 0) ;
        N = ke.slice(), N = [0].concat(N), Ie = ke[0], ke[1] >= L / 2 && Ie++;
        do {
          if (Z = 0, B = S(ke, oe, he, xe), B < 0) {
            if (Le = oe[0], he != xe && (Le = Le * L + (oe[1] || 0)), Z = Qt(Le / Ie), Z > 1)
              for (Z >= L && (Z = L - 1), ne = E(ke, Z, L), le = ne.length, xe = oe.length; S(ne, oe, le, xe) == 1; )
                Z--, b(ne, he < le ? N : ke, le, L), le = ne.length, B = 1;
            else
              Z == 0 && (B = Z = 1), ne = ke.slice(), le = ne.length;
            if (le < xe && (ne = [0].concat(ne)), b(oe, ne, xe, L), xe = oe.length, B == -1)
              for (; S(ke, oe, he, xe) < 1; )
                Z++, b(oe, he < xe ? N : ke, xe, L), xe = oe.length;
          } else B === 0 && (Z++, oe = [0]);
          ie[H++] = Z, oe[0] ? oe[xe++] = De[V] || 0 : (oe = [De[V]], xe = 1);
        } while ((V++ < bn || oe[0] != null) && Ce--);
        j = oe[0] != null, ie[0] || ie.splice(0, 1);
      }
      if (L == gn) {
        for (H = 1, Ce = ie[0]; Ce >= 10; Ce /= 10, H++) ;
        q(ue, F + (ue.e = H + U * we - 1) + 1, D, j);
      } else
        ue.e = U, ue.r = +j;
      return ue;
    };
  })();
  function Y(E, S, b, O) {
    var P, F, D, L, B;
    if (b == null ? b = h : Xe(b, 0, 8), !E.c) return E.toString();
    if (P = E.c[0], D = E.e, S == null)
      B = Kt(E.c), B = O == 1 || O == 2 && (D <= p || D >= d) ? Ra(B, D) : er(B, D, "0");
    else if (E = q(new T(E), S, b), F = E.e, B = Kt(E.c), L = B.length, O == 1 || O == 2 && (S <= F || F <= p)) {
      for (; L < S; B += "0", L++) ;
      B = Ra(B, F);
    } else if (S -= D, B = er(B, F, "0"), F + 1 > L) {
      if (--S > 0) for (B += "."; S--; B += "0") ;
    } else if (S += F - L, S > 0)
      for (F + 1 == L && (B += "."); S--; B += "0") ;
    return E.s < 0 && P ? "-" + B : B;
  }
  function $(E, S) {
    for (var b, O, P = 1, F = new T(E[0]); P < E.length; P++)
      O = new T(E[P]), (!O.s || (b = $r(F, O)) === S || b === 0 && F.s === S) && (F = O);
    return F;
  }
  function J(E, S, b) {
    for (var O = 1, P = S.length; !S[--P]; S.pop()) ;
    for (P = S[0]; P >= 10; P /= 10, O++) ;
    return (b = O + b * we - 1) > _ ? E.c = E.e = null : b < v ? E.c = [E.e = 0] : (E.e = b, E.c = S), E;
  }
  s = /* @__PURE__ */ (function() {
    var E = /^(-?)0([xbo])(?=\w[\w.]*$)/i, S = /^([^.]+)\.$/, b = /^\.([^.]+)$/, O = /^-?(Infinity|NaN)$/, P = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(F, D, L, B) {
      var U, H = L ? D : D.replace(P, "");
      if (O.test(H))
        F.s = isNaN(H) ? null : H < 0 ? -1 : 1;
      else {
        if (!L && (H = H.replace(E, function(j, Z, ne) {
          return U = (ne = ne.toLowerCase()) == "x" ? 16 : ne == "b" ? 2 : 8, !B || B == U ? Z : j;
        }), B && (U = B, H = H.replace(S, "$1").replace(b, "0.$1")), D != H))
          return new T(H, U);
        if (T.DEBUG)
          throw Error(Rt + "Not a" + (B ? " base " + B : "") + " number: " + D);
        F.s = null;
      }
      F.c = F.e = null;
    };
  })();
  function q(E, S, b, O) {
    var P, F, D, L, B, U, H, j = E.c, Z = yu;
    if (j) {
      e: {
        for (P = 1, L = j[0]; L >= 10; L /= 10, P++) ;
        if (F = S - P, F < 0)
          F += we, D = S, B = j[U = 0], H = Qt(B / Z[P - D - 1] % 10);
        else if (U = mu((F + 1) / we), U >= j.length)
          if (O) {
            for (; j.length <= U; j.push(0)) ;
            B = H = 0, P = 1, F %= we, D = F - we + 1;
          } else
            break e;
        else {
          for (B = L = j[U], P = 1; L >= 10; L /= 10, P++) ;
          F %= we, D = F - we + P, H = D < 0 ? 0 : Qt(B / Z[P - D - 1] % 10);
        }
        if (O = O || S < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        j[U + 1] != null || (D < 0 ? B : B % Z[P - D - 1]), O = b < 4 ? (H || O) && (b == 0 || b == (E.s < 0 ? 3 : 2)) : H > 5 || H == 5 && (b == 4 || O || b == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (F > 0 ? D > 0 ? B / Z[P - D] : 0 : j[U - 1]) % 10 & 1 || b == (E.s < 0 ? 8 : 7)), S < 1 || !j[0])
          return j.length = 0, O ? (S -= E.e + 1, j[0] = Z[(we - S % we) % we], E.e = -S || 0) : j[0] = E.e = 0, E;
        if (F == 0 ? (j.length = U, L = 1, U--) : (j.length = U + 1, L = Z[we - F], j[U] = D > 0 ? Qt(B / Z[P - D] % Z[D]) * L : 0), O)
          for (; ; )
            if (U == 0) {
              for (F = 1, D = j[0]; D >= 10; D /= 10, F++) ;
              for (D = j[0] += L, L = 1; D >= 10; D /= 10, L++) ;
              F != L && (E.e++, j[0] == gn && (j[0] = 1));
              break;
            } else {
              if (j[U] += L, j[U] != gn) break;
              j[U--] = 0, L = 1;
            }
        for (F = j.length; j[--F] === 0; j.pop()) ;
      }
      E.e > _ ? E.c = E.e = null : E.e < v && (E.c = [E.e = 0]);
    }
    return E;
  }
  function W(E) {
    var S, b = E.e;
    return b === null ? E.toString() : (S = Kt(E.c), S = b <= p || b >= d ? Ra(S, b) : er(S, b, "0"), E.s < 0 ? "-" + S : S);
  }
  return u.absoluteValue = u.abs = function() {
    var E = new T(this);
    return E.s < 0 && (E.s = 1), E;
  }, u.comparedTo = function(E, S) {
    return $r(this, new T(E, S));
  }, u.decimalPlaces = u.dp = function(E, S) {
    var b, O, P, F = this;
    if (E != null)
      return Xe(E, 0, st), S == null ? S = h : Xe(S, 0, 8), q(new T(F), E + F.e + 1, S);
    if (!(b = F.c)) return null;
    if (O = ((P = b.length - 1) - en(this.e / we)) * we, P = b[P]) for (; P % 10 == 0; P /= 10, O--) ;
    return O < 0 && (O = 0), O;
  }, u.dividedBy = u.div = function(E, S) {
    return e(this, new T(E, S), f, h);
  }, u.dividedToIntegerBy = u.idiv = function(E, S) {
    return e(this, new T(E, S), 0, 1);
  }, u.exponentiatedBy = u.pow = function(E, S) {
    var b, O, P, F, D, L, B, U, H, j = this;
    if (E = new T(E), E.c && !E.isInteger())
      throw Error(Rt + "Exponent not an integer: " + W(E));
    if (S != null && (S = new T(S)), L = E.e > 14, !j.c || !j.c[0] || j.c[0] == 1 && !j.e && j.c.length == 1 || !E.c || !E.c[0])
      return H = new T(Math.pow(+W(j), L ? E.s * (2 - Oa(E)) : +W(E))), S ? H.mod(S) : H;
    if (B = E.s < 0, S) {
      if (S.c ? !S.c[0] : !S.s) return new T(NaN);
      O = !B && j.isInteger() && S.isInteger(), O && (j = j.mod(S));
    } else {
      if (E.e > 9 && (j.e > 0 || j.e < -1 || (j.e == 0 ? j.c[0] > 1 || L && j.c[1] >= 24e7 : j.c[0] < 8e13 || L && j.c[0] <= 9999975e7)))
        return F = j.s < 0 && Oa(E) ? -0 : 0, j.e > -1 && (F = 1 / F), new T(B ? 1 / F : F);
      M && (F = mu(M / we + 2));
    }
    for (L ? (b = new T(0.5), B && (E.s = 1), U = Oa(E)) : (P = Math.abs(+W(E)), U = P % 2), H = new T(l); ; ) {
      if (U) {
        if (H = H.times(j), !H.c) break;
        F ? H.c.length > F && (H.c.length = F) : O && (H = H.mod(S));
      }
      if (P) {
        if (P = Qt(P / 2), P === 0) break;
        U = P % 2;
      } else if (E = E.times(b), q(E, E.e + 1, 1), E.e > 14)
        U = Oa(E);
      else {
        if (P = +W(E), P === 0) break;
        U = P % 2;
      }
      j = j.times(j), F ? j.c && j.c.length > F && (j.c.length = F) : O && (j = j.mod(S));
    }
    return O ? H : (B && (H = l.div(H)), S ? H.mod(S) : F ? q(H, M, h, D) : H);
  }, u.integerValue = function(E) {
    var S = new T(this);
    return E == null ? E = h : Xe(E, 0, 8), q(S, S.e + 1, E);
  }, u.isEqualTo = u.eq = function(E, S) {
    return $r(this, new T(E, S)) === 0;
  }, u.isFinite = function() {
    return !!this.c;
  }, u.isGreaterThan = u.gt = function(E, S) {
    return $r(this, new T(E, S)) > 0;
  }, u.isGreaterThanOrEqualTo = u.gte = function(E, S) {
    return (S = $r(this, new T(E, S))) === 1 || S === 0;
  }, u.isInteger = function() {
    return !!this.c && en(this.e / we) > this.c.length - 2;
  }, u.isLessThan = u.lt = function(E, S) {
    return $r(this, new T(E, S)) < 0;
  }, u.isLessThanOrEqualTo = u.lte = function(E, S) {
    return (S = $r(this, new T(E, S))) === -1 || S === 0;
  }, u.isNaN = function() {
    return !this.s;
  }, u.isNegative = function() {
    return this.s < 0;
  }, u.isPositive = function() {
    return this.s > 0;
  }, u.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, u.minus = function(E, S) {
    var b, O, P, F, D = this, L = D.s;
    if (E = new T(E, S), S = E.s, !L || !S) return new T(NaN);
    if (L != S)
      return E.s = -S, D.plus(E);
    var B = D.e / we, U = E.e / we, H = D.c, j = E.c;
    if (!B || !U) {
      if (!H || !j) return H ? (E.s = -S, E) : new T(j ? D : NaN);
      if (!H[0] || !j[0])
        return j[0] ? (E.s = -S, E) : new T(H[0] ? D : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          h == 3 ? -0 : 0
        ));
    }
    if (B = en(B), U = en(U), H = H.slice(), L = B - U) {
      for ((F = L < 0) ? (L = -L, P = H) : (U = B, P = j), P.reverse(), S = L; S--; P.push(0)) ;
      P.reverse();
    } else
      for (O = (F = (L = H.length) < (S = j.length)) ? L : S, L = S = 0; S < O; S++)
        if (H[S] != j[S]) {
          F = H[S] < j[S];
          break;
        }
    if (F && (P = H, H = j, j = P, E.s = -E.s), S = (O = j.length) - (b = H.length), S > 0) for (; S--; H[b++] = 0) ;
    for (S = gn - 1; O > L; ) {
      if (H[--O] < j[O]) {
        for (b = O; b && !H[--b]; H[b] = S) ;
        --H[b], H[O] += gn;
      }
      H[O] -= j[O];
    }
    for (; H[0] == 0; H.splice(0, 1), --U) ;
    return H[0] ? J(E, H, U) : (E.s = h == 3 ? -1 : 1, E.c = [E.e = 0], E);
  }, u.modulo = u.mod = function(E, S) {
    var b, O, P = this;
    return E = new T(E, S), !P.c || !E.s || E.c && !E.c[0] ? new T(NaN) : !E.c || P.c && !P.c[0] ? new T(P) : (k == 9 ? (O = E.s, E.s = 1, b = e(P, E, 0, 3), E.s = O, b.s *= O) : b = e(P, E, 0, k), E = P.minus(b.times(E)), !E.c[0] && k == 1 && (E.s = P.s), E);
  }, u.multipliedBy = u.times = function(E, S) {
    var b, O, P, F, D, L, B, U, H, j, Z, ne, le, ue, ie, oe = this, xe = oe.c, Le = (E = new T(E, S)).c;
    if (!xe || !Le || !xe[0] || !Le[0])
      return !oe.s || !E.s || xe && !xe[0] && !Le || Le && !Le[0] && !xe ? E.c = E.e = E.s = null : (E.s *= oe.s, !xe || !Le ? E.c = E.e = null : (E.c = [0], E.e = 0)), E;
    for (O = en(oe.e / we) + en(E.e / we), E.s *= oe.s, B = xe.length, j = Le.length, B < j && (le = xe, xe = Le, Le = le, P = B, B = j, j = P), P = B + j, le = []; P--; le.push(0)) ;
    for (ue = gn, ie = Mr, P = j; --P >= 0; ) {
      for (b = 0, Z = Le[P] % ie, ne = Le[P] / ie | 0, D = B, F = P + D; F > P; )
        U = xe[--D] % ie, H = xe[D] / ie | 0, L = ne * U + H * Z, U = Z * U + L % ie * ie + le[F] + b, b = (U / ue | 0) + (L / ie | 0) + ne * H, le[F--] = U % ue;
      le[F] = b;
    }
    return b ? ++O : le.splice(0, 1), J(E, le, O);
  }, u.negated = function() {
    var E = new T(this);
    return E.s = -E.s || null, E;
  }, u.plus = function(E, S) {
    var b, O = this, P = O.s;
    if (E = new T(E, S), S = E.s, !P || !S) return new T(NaN);
    if (P != S)
      return E.s = -S, O.minus(E);
    var F = O.e / we, D = E.e / we, L = O.c, B = E.c;
    if (!F || !D) {
      if (!L || !B) return new T(P / 0);
      if (!L[0] || !B[0]) return B[0] ? E : new T(L[0] ? O : P * 0);
    }
    if (F = en(F), D = en(D), L = L.slice(), P = F - D) {
      for (P > 0 ? (D = F, b = B) : (P = -P, b = L), b.reverse(); P--; b.push(0)) ;
      b.reverse();
    }
    for (P = L.length, S = B.length, P - S < 0 && (b = B, B = L, L = b, S = P), P = 0; S; )
      P = (L[--S] = L[S] + B[S] + P) / gn | 0, L[S] = gn === L[S] ? 0 : L[S] % gn;
    return P && (L = [P].concat(L), ++D), J(E, L, D);
  }, u.precision = u.sd = function(E, S) {
    var b, O, P, F = this;
    if (E != null && E !== !!E)
      return Xe(E, 1, st), S == null ? S = h : Xe(S, 0, 8), q(new T(F), E, S);
    if (!(b = F.c)) return null;
    if (P = b.length - 1, O = P * we + 1, P = b[P]) {
      for (; P % 10 == 0; P /= 10, O--) ;
      for (P = b[0]; P >= 10; P /= 10, O++) ;
    }
    return E && F.e + 1 > O && (O = F.e + 1), O;
  }, u.shiftedBy = function(E) {
    return Xe(E, -vu, vu), this.times("1e" + E);
  }, u.squareRoot = u.sqrt = function() {
    var E, S, b, O, P, F = this, D = F.c, L = F.s, B = F.e, U = f + 4, H = new T("0.5");
    if (L !== 1 || !D || !D[0])
      return new T(!L || L < 0 && (!D || D[0]) ? NaN : D ? F : 1 / 0);
    if (L = Math.sqrt(+W(F)), L == 0 || L == 1 / 0 ? (S = Kt(D), (S.length + B) % 2 == 0 && (S += "0"), L = Math.sqrt(+S), B = en((B + 1) / 2) - (B < 0 || B % 2), L == 1 / 0 ? S = "5e" + B : (S = L.toExponential(), S = S.slice(0, S.indexOf("e") + 1) + B), b = new T(S)) : b = new T(L + ""), b.c[0]) {
      for (B = b.e, L = B + U, L < 3 && (L = 0); ; )
        if (P = b, b = H.times(P.plus(e(F, P, U, 1))), Kt(P.c).slice(0, L) === (S = Kt(b.c)).slice(0, L))
          if (b.e < B && --L, S = S.slice(L - 3, L + 1), S == "9999" || !O && S == "4999") {
            if (!O && (q(P, P.e + f + 2, 0), P.times(P).eq(F))) {
              b = P;
              break;
            }
            U += 4, L += 4, O = 1;
          } else {
            (!+S || !+S.slice(1) && S.charAt(0) == "5") && (q(b, b.e + f + 2, 1), E = !b.times(b).eq(F));
            break;
          }
    }
    return q(b, b.e + f + 1, h, E);
  }, u.toExponential = function(E, S) {
    return E != null && (Xe(E, 0, st), E++), Y(this, E, S, 1);
  }, u.toFixed = function(E, S) {
    return E != null && (Xe(E, 0, st), E = E + this.e + 1), Y(this, E, S);
  }, u.toFormat = function(E, S, b) {
    var O, P = this;
    if (b == null)
      E != null && S && typeof S == "object" ? (b = S, S = null) : E && typeof E == "object" ? (b = E, E = S = null) : b = R;
    else if (typeof b != "object")
      throw Error(Rt + "Argument not an object: " + b);
    if (O = P.toFixed(E, S), P.c) {
      var F, D = O.split("."), L = +b.groupSize, B = +b.secondaryGroupSize, U = b.groupSeparator || "", H = D[0], j = D[1], Z = P.s < 0, ne = Z ? H.slice(1) : H, le = ne.length;
      if (B && (F = L, L = B, B = F, le -= F), L > 0 && le > 0) {
        for (F = le % L || L, H = ne.substr(0, F); F < le; F += L) H += U + ne.substr(F, L);
        B > 0 && (H += U + ne.slice(F)), Z && (H = "-" + H);
      }
      O = j ? H + (b.decimalSeparator || "") + ((B = +b.fractionGroupSize) ? j.replace(
        new RegExp("\\d{" + B + "}\\B", "g"),
        "$&" + (b.fractionGroupSeparator || "")
      ) : j) : H;
    }
    return (b.prefix || "") + O + (b.suffix || "");
  }, u.toFraction = function(E) {
    var S, b, O, P, F, D, L, B, U, H, j, Z, ne = this, le = ne.c;
    if (E != null && (L = new T(E), !L.isInteger() && (L.c || L.s !== 1) || L.lt(l)))
      throw Error(Rt + "Argument " + (L.isInteger() ? "out of range: " : "not an integer: ") + W(L));
    if (!le) return new T(ne);
    for (S = new T(l), U = b = new T(l), O = B = new T(l), Z = Kt(le), F = S.e = Z.length - ne.e - 1, S.c[0] = yu[(D = F % we) < 0 ? we + D : D], E = !E || L.comparedTo(S) > 0 ? F > 0 ? S : U : L, D = _, _ = 1 / 0, L = new T(Z), B.c[0] = 0; H = e(L, S, 0, 1), P = b.plus(H.times(O)), P.comparedTo(E) != 1; )
      b = O, O = P, U = B.plus(H.times(P = U)), B = P, S = L.minus(H.times(P = S)), L = P;
    return P = e(E.minus(b), O, 0, 1), B = B.plus(P.times(U)), b = b.plus(P.times(O)), B.s = U.s = ne.s, F = F * 2, j = e(U, O, F, h).minus(ne).abs().comparedTo(
      e(B, b, F, h).minus(ne).abs()
    ) < 1 ? [U, O] : [B, b], _ = D, j;
  }, u.toNumber = function() {
    return +W(this);
  }, u.toPrecision = function(E, S) {
    return E != null && Xe(E, 1, st), Y(this, E, S, 2);
  }, u.toString = function(E) {
    var S, b = this, O = b.s, P = b.e;
    return P === null ? O ? (S = "Infinity", O < 0 && (S = "-" + S)) : S = "NaN" : (E == null ? S = P <= p || P >= d ? Ra(Kt(b.c), P) : er(Kt(b.c), P, "0") : E === 10 && I ? (b = q(new T(b), f + P + 1, h), S = er(Kt(b.c), b.e, "0")) : (Xe(E, 2, C.length, "Base"), S = r(er(Kt(b.c), P, "0"), 10, E, O, !0)), O < 0 && b.c[0] && (S = "-" + S)), S;
  }, u.valueOf = u.toJSON = function() {
    return W(this);
  }, u._isBigNumber = !0, u[Symbol.toStringTag] = "BigNumber", u[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = u.valueOf, t != null && T.set(t), T;
}
function en(t) {
  var e = t | 0;
  return t > 0 || t === e ? e : e - 1;
}
function Kt(t) {
  for (var e, r, s = 1, u = t.length, l = t[0] + ""; s < u; ) {
    for (e = t[s++] + "", r = we - e.length; r--; e = "0" + e) ;
    l += e;
  }
  for (u = l.length; l.charCodeAt(--u) === 48; ) ;
  return l.slice(0, u + 1 || 1);
}
function $r(t, e) {
  var r, s, u = t.c, l = e.c, f = t.s, h = e.s, p = t.e, d = e.e;
  if (!f || !h) return null;
  if (r = u && !u[0], s = l && !l[0], r || s) return r ? s ? 0 : -h : f;
  if (f != h) return f;
  if (r = f < 0, s = p == d, !u || !l) return s ? 0 : !u ^ r ? 1 : -1;
  if (!s) return p > d ^ r ? 1 : -1;
  for (h = (p = u.length) < (d = l.length) ? p : d, f = 0; f < h; f++) if (u[f] != l[f]) return u[f] > l[f] ^ r ? 1 : -1;
  return p == d ? 0 : p > d ^ r ? 1 : -1;
}
function Xe(t, e, r, s) {
  if (t < e || t > r || t !== Qt(t))
    throw Error(Rt + (s || "Argument") + (typeof t == "number" ? t < e || t > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(t));
}
function Oa(t) {
  var e = t.c.length - 1;
  return en(t.e / we) == e && t.c[e] % 2 != 0;
}
function Ra(t, e) {
  return (t.length > 1 ? t.charAt(0) + "." + t.slice(1) : t) + (e < 0 ? "e" : "e+") + e;
}
function er(t, e, r) {
  var s, u;
  if (e < 0) {
    for (u = r + "."; ++e; u += r) ;
    t = u + t;
  } else if (s = t.length, ++e > s) {
    for (u = r, e -= s; --e; u += r) ;
    t += u;
  } else e < s && (t = t.slice(0, e) + "." + t.slice(e));
  return t;
}
var Yn = Ap(), QS = class {
  key;
  left = null;
  right = null;
  constructor(t) {
    this.key = t;
  }
}, ys = class extends QS {
  constructor(t) {
    super(t);
  }
}, eM = class {
  size = 0;
  modificationCount = 0;
  splayCount = 0;
  splay(t) {
    const e = this.root;
    if (e == null)
      return this.compare(t, t), -1;
    let r = null, s = null, u = null, l = null, f = e;
    const h = this.compare;
    let p;
    for (; ; )
      if (p = h(f.key, t), p > 0) {
        let d = f.left;
        if (d == null || (p = h(d.key, t), p > 0 && (f.left = d.right, d.right = f, f = d, d = f.left, d == null)))
          break;
        r == null ? s = f : r.left = f, r = f, f = d;
      } else if (p < 0) {
        let d = f.right;
        if (d == null || (p = h(d.key, t), p < 0 && (f.right = d.left, d.left = f, f = d, d = f.right, d == null)))
          break;
        u == null ? l = f : u.right = f, u = f, f = d;
      } else
        break;
    return u != null && (u.right = f.left, f.left = l), r != null && (r.left = f.right, f.right = s), this.root !== f && (this.root = f, this.splayCount++), p;
  }
  splayMin(t) {
    let e = t, r = e.left;
    for (; r != null; ) {
      const s = r;
      e.left = s.right, s.right = e, e = s, r = e.left;
    }
    return e;
  }
  splayMax(t) {
    let e = t, r = e.right;
    for (; r != null; ) {
      const s = r;
      e.right = s.left, s.left = e, e = s, r = e.right;
    }
    return e;
  }
  _delete(t) {
    if (this.root == null || this.splay(t) != 0) return null;
    let r = this.root;
    const s = r, u = r.left;
    if (this.size--, u == null)
      this.root = r.right;
    else {
      const l = r.right;
      r = this.splayMax(u), r.right = l, this.root = r;
    }
    return this.modificationCount++, s;
  }
  addNewRoot(t, e) {
    this.size++, this.modificationCount++;
    const r = this.root;
    if (r == null) {
      this.root = t;
      return;
    }
    e < 0 ? (t.left = r, t.right = r.right, r.right = null) : (t.right = r, t.left = r.left, r.left = null), this.root = t;
  }
  _first() {
    const t = this.root;
    return t == null ? null : (this.root = this.splayMin(t), this.root);
  }
  _last() {
    const t = this.root;
    return t == null ? null : (this.root = this.splayMax(t), this.root);
  }
  clear() {
    this.root = null, this.size = 0, this.modificationCount++;
  }
  has(t) {
    return this.validKey(t) && this.splay(t) == 0;
  }
  defaultCompare() {
    return (t, e) => t < e ? -1 : t > e ? 1 : 0;
  }
  wrap() {
    return {
      getRoot: () => this.root,
      setRoot: (t) => {
        this.root = t;
      },
      getSize: () => this.size,
      getModificationCount: () => this.modificationCount,
      getSplayCount: () => this.splayCount,
      setSplayCount: (t) => {
        this.splayCount = t;
      },
      splay: (t) => this.splay(t),
      has: (t) => this.has(t)
    };
  }
}, ho = class Ts extends eM {
  root = null;
  compare;
  validKey;
  constructor(e, r) {
    super(), this.compare = e ?? this.defaultCompare(), this.validKey = r ?? ((s) => s != null && s != null);
  }
  delete(e) {
    return this.validKey(e) ? this._delete(e) != null : !1;
  }
  deleteAll(e) {
    for (const r of e)
      this.delete(r);
  }
  forEach(e) {
    const r = this[Symbol.iterator]();
    let s;
    for (; s = r.next(), !s.done; )
      e(s.value, s.value, this);
  }
  add(e) {
    const r = this.splay(e);
    return r != 0 && this.addNewRoot(new ys(e), r), this;
  }
  addAndReturn(e) {
    const r = this.splay(e);
    return r != 0 && this.addNewRoot(new ys(e), r), this.root.key;
  }
  addAll(e) {
    for (const r of e)
      this.add(r);
  }
  isEmpty() {
    return this.root == null;
  }
  isNotEmpty() {
    return this.root != null;
  }
  single() {
    if (this.size == 0) throw "Bad state: No element";
    if (this.size > 1) throw "Bad state: Too many element";
    return this.root.key;
  }
  first() {
    if (this.size == 0) throw "Bad state: No element";
    return this._first().key;
  }
  last() {
    if (this.size == 0) throw "Bad state: No element";
    return this._last().key;
  }
  lastBefore(e) {
    if (e == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(e) < 0) return this.root.key;
    let s = this.root.left;
    if (s == null) return null;
    let u = s.right;
    for (; u != null; )
      s = u, u = s.right;
    return s.key;
  }
  firstAfter(e) {
    if (e == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(e) > 0) return this.root.key;
    let s = this.root.right;
    if (s == null) return null;
    let u = s.left;
    for (; u != null; )
      s = u, u = s.left;
    return s.key;
  }
  retainAll(e) {
    const r = new Ts(this.compare, this.validKey), s = this.modificationCount;
    for (const u of e) {
      if (s != this.modificationCount)
        throw "Concurrent modification during iteration.";
      this.validKey(u) && this.splay(u) == 0 && r.add(this.root.key);
    }
    r.size != this.size && (this.root = r.root, this.size = r.size, this.modificationCount++);
  }
  lookup(e) {
    return !this.validKey(e) || this.splay(e) != 0 ? null : this.root.key;
  }
  intersection(e) {
    const r = new Ts(this.compare, this.validKey);
    for (const s of this)
      e.has(s) && r.add(s);
    return r;
  }
  difference(e) {
    const r = new Ts(this.compare, this.validKey);
    for (const s of this)
      e.has(s) || r.add(s);
    return r;
  }
  union(e) {
    const r = this.clone();
    return r.addAll(e), r;
  }
  clone() {
    const e = new Ts(this.compare, this.validKey);
    return e.size = this.size, e.root = this.copyNode(this.root), e;
  }
  copyNode(e) {
    if (e == null) return null;
    function r(u, l) {
      let f, h;
      do {
        if (f = u.left, h = u.right, f != null) {
          const p = new ys(f.key);
          l.left = p, r(f, p);
        }
        if (h != null) {
          const p = new ys(h.key);
          l.right = p, u = h, l = p;
        }
      } while (h != null);
    }
    const s = new ys(e.key);
    return r(e, s), s;
  }
  toSet() {
    return this.clone();
  }
  entries() {
    return new nM(this.wrap());
  }
  keys() {
    return this[Symbol.iterator]();
  }
  values() {
    return this[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return new tM(this.wrap());
  }
  [Symbol.toStringTag] = "[object Set]";
}, Tp = class {
  tree;
  path = new Array();
  modificationCount = null;
  splayCount;
  constructor(t) {
    this.tree = t, this.splayCount = t.getSplayCount();
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    return this.moveNext() ? { done: !1, value: this.current() } : { done: !0, value: null };
  }
  current() {
    if (!this.path.length) return null;
    const t = this.path[this.path.length - 1];
    return this.getValue(t);
  }
  rebuildPath(t) {
    this.path.splice(0, this.path.length), this.tree.splay(t), this.path.push(this.tree.getRoot()), this.splayCount = this.tree.getSplayCount();
  }
  findLeftMostDescendent(t) {
    for (; t != null; )
      this.path.push(t), t = t.left;
  }
  moveNext() {
    if (this.modificationCount != this.tree.getModificationCount()) {
      if (this.modificationCount == null) {
        this.modificationCount = this.tree.getModificationCount();
        let r = this.tree.getRoot();
        for (; r != null; )
          this.path.push(r), r = r.left;
        return this.path.length > 0;
      }
      throw "Concurrent modification during iteration.";
    }
    if (!this.path.length) return !1;
    this.splayCount != this.tree.getSplayCount() && this.rebuildPath(this.path[this.path.length - 1].key);
    let t = this.path[this.path.length - 1], e = t.right;
    if (e != null) {
      for (; e != null; )
        this.path.push(e), e = e.left;
      return !0;
    }
    for (this.path.pop(); this.path.length && this.path[this.path.length - 1].right === t; )
      t = this.path.pop();
    return this.path.length > 0;
  }
}, tM = class extends Tp {
  getValue(t) {
    return t.key;
  }
}, nM = class extends Tp {
  getValue(t) {
    return [t.key, t.key];
  }
}, Lp = (t) => () => t, al = (t) => {
  const e = t ? (r, s) => s.minus(r).abs().isLessThanOrEqualTo(t) : Lp(!1);
  return (r, s) => e(r, s) ? 0 : r.comparedTo(s);
};
function rM(t) {
  const e = t ? (r, s, u, l, f) => r.exponentiatedBy(2).isLessThanOrEqualTo(
    l.minus(s).exponentiatedBy(2).plus(f.minus(u).exponentiatedBy(2)).times(t)
  ) : Lp(!1);
  return (r, s, u) => {
    const l = r.x, f = r.y, h = u.x, p = u.y, d = f.minus(p).times(s.x.minus(h)).minus(l.minus(h).times(s.y.minus(p)));
    return e(d, l, f, h, p) ? 0 : d.comparedTo(0);
  };
}
var iM = (t) => t, sM = (t) => {
  if (t) {
    const e = new ho(al(t)), r = new ho(al(t)), s = (l, f) => f.addAndReturn(l), u = (l) => ({
      x: s(l.x, e),
      y: s(l.y, r)
    });
    return u({ x: new Yn(0), y: new Yn(0) }), u;
  }
  return iM;
}, ol = (t) => ({
  set: (e) => {
    fr = ol(e);
  },
  reset: () => ol(t),
  compare: al(t),
  snap: sM(t),
  orient: rM(t)
}), fr = ol(), _s = (t, e) => t.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(t.ur.x) && t.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(t.ur.y), ul = (t, e) => {
  if (e.ur.x.isLessThan(t.ll.x) || t.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(t.ll.y) || t.ur.y.isLessThan(e.ll.y))
    return null;
  const r = t.ll.x.isLessThan(e.ll.x) ? e.ll.x : t.ll.x, s = t.ur.x.isLessThan(e.ur.x) ? t.ur.x : e.ur.x, u = t.ll.y.isLessThan(e.ll.y) ? e.ll.y : t.ll.y, l = t.ur.y.isLessThan(e.ur.y) ? t.ur.y : e.ur.y;
  return { ll: { x: r, y: u }, ur: { x: s, y: l } };
}, $a = (t, e) => t.x.times(e.y).minus(t.y.times(e.x)), Cp = (t, e) => t.x.times(e.x).plus(t.y.times(e.y)), fo = (t) => Cp(t, t).sqrt(), aM = (t, e, r) => {
  const s = { x: e.x.minus(t.x), y: e.y.minus(t.y) }, u = { x: r.x.minus(t.x), y: r.y.minus(t.y) };
  return $a(u, s).div(fo(u)).div(fo(s));
}, oM = (t, e, r) => {
  const s = { x: e.x.minus(t.x), y: e.y.minus(t.y) }, u = { x: r.x.minus(t.x), y: r.y.minus(t.y) };
  return Cp(u, s).div(fo(u)).div(fo(s));
}, Ff = (t, e, r) => e.y.isZero() ? null : { x: t.x.plus(e.x.div(e.y).times(r.minus(t.y))), y: r }, Gf = (t, e, r) => e.x.isZero() ? null : { x: r, y: t.y.plus(e.y.div(e.x).times(r.minus(t.x))) }, uM = (t, e, r, s) => {
  if (e.x.isZero()) return Gf(r, s, t.x);
  if (s.x.isZero()) return Gf(t, e, r.x);
  if (e.y.isZero()) return Ff(r, s, t.y);
  if (s.y.isZero()) return Ff(t, e, r.y);
  const u = $a(e, s);
  if (u.isZero()) return null;
  const l = { x: r.x.minus(t.x), y: r.y.minus(t.y) }, f = $a(l, e).div(u), h = $a(l, s).div(u), p = t.x.plus(h.times(e.x)), d = r.x.plus(f.times(s.x)), v = t.y.plus(h.times(e.y)), _ = r.y.plus(f.times(s.y)), x = p.plus(d).div(2), k = v.plus(_).div(2);
  return { x, y: k };
}, Un = class Np {
  point;
  isLeft;
  segment;
  otherSE;
  consumedBy;
  // for ordering sweep events in the sweep event queue
  static compare(e, r) {
    const s = Np.comparePoints(e.point, r.point);
    return s !== 0 ? s : (e.point !== r.point && e.link(r), e.isLeft !== r.isLeft ? e.isLeft ? 1 : -1 : po.compare(e.segment, r.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(e, r) {
    return e.x.isLessThan(r.x) ? -1 : e.x.isGreaterThan(r.x) ? 1 : e.y.isLessThan(r.y) ? -1 : e.y.isGreaterThan(r.y) ? 1 : 0;
  }
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(e, r) {
    e.events === void 0 ? e.events = [this] : e.events.push(this), this.point = e, this.isLeft = r;
  }
  link(e) {
    if (e.point === this.point)
      throw new Error("Tried to link already linked events");
    const r = e.point.events;
    for (let s = 0, u = r.length; s < u; s++) {
      const l = r[s];
      this.point.events.push(l), l.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const e = this.point.events.length;
    for (let r = 0; r < e; r++) {
      const s = this.point.events[r];
      if (s.segment.consumedBy === void 0)
        for (let u = r + 1; u < e; u++) {
          const l = this.point.events[u];
          l.consumedBy === void 0 && s.otherSE.point.events === l.otherSE.point.events && s.segment.consume(l.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const e = [];
    for (let r = 0, s = this.point.events.length; r < s; r++) {
      const u = this.point.events[r];
      u !== this && !u.segment.ringOut && u.segment.isInResult() && e.push(u);
    }
    return e;
  }
  /**
   * Returns a comparator function for sorting linked events that will
   * favor the event that will give us the smallest left-side angle.
   * All ring construction starts as low as possible heading to the right,
   * so by always turning left as sharp as possible we'll get polygons
   * without uncessary loops & holes.
   *
   * The comparator function has a compute cache such that it avoids
   * re-computing already-computed values.
   */
  getLeftmostComparator(e) {
    const r = /* @__PURE__ */ new Map(), s = (u) => {
      const l = u.otherSE;
      r.set(u, {
        sine: aM(this.point, e.point, l.point),
        cosine: oM(this.point, e.point, l.point)
      });
    };
    return (u, l) => {
      r.has(u) || s(u), r.has(l) || s(l);
      const { sine: f, cosine: h } = r.get(u), { sine: p, cosine: d } = r.get(l);
      return f.isGreaterThanOrEqualTo(0) && p.isGreaterThanOrEqualTo(0) ? h.isLessThan(d) ? 1 : h.isGreaterThan(d) ? -1 : 0 : f.isLessThan(0) && p.isLessThan(0) ? h.isLessThan(d) ? -1 : h.isGreaterThan(d) ? 1 : 0 : p.isLessThan(f) ? -1 : p.isGreaterThan(f) ? 1 : 0;
    };
  }
}, lM = class ll {
  events;
  poly;
  _isExteriorRing;
  _enclosingRing;
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(e) {
    const r = [];
    for (let s = 0, u = e.length; s < u; s++) {
      const l = e[s];
      if (!l.isInResult() || l.ringOut) continue;
      let f = null, h = l.leftSE, p = l.rightSE;
      const d = [h], v = h.point, _ = [];
      for (; f = h, h = p, d.push(h), h.point !== v; )
        for (; ; ) {
          const x = h.getAvailableLinkedEvents();
          if (x.length === 0) {
            const R = d[0].point, C = d[d.length - 1].point;
            throw new Error(
              `Unable to complete output ring starting at [${R.x}, ${R.y}]. Last matching segment found ends at [${C.x}, ${C.y}].`
            );
          }
          if (x.length === 1) {
            p = x[0].otherSE;
            break;
          }
          let k = null;
          for (let R = 0, C = _.length; R < C; R++)
            if (_[R].point === h.point) {
              k = R;
              break;
            }
          if (k !== null) {
            const R = _.splice(k)[0], C = d.splice(R.index);
            C.unshift(C[0].otherSE), r.push(new ll(C.reverse()));
            continue;
          }
          _.push({
            index: d.length,
            point: h.point
          });
          const M = h.getLeftmostComparator(f);
          p = x.sort(M)[0].otherSE;
          break;
        }
      r.push(new ll(d));
    }
    return r;
  }
  constructor(e) {
    this.events = e;
    for (let r = 0, s = e.length; r < s; r++)
      e[r].segment.ringOut = this;
    this.poly = null;
  }
  getGeom() {
    let e = this.events[0].point;
    const r = [e];
    for (let d = 1, v = this.events.length - 1; d < v; d++) {
      const _ = this.events[d].point, x = this.events[d + 1].point;
      fr.orient(_, e, x) !== 0 && (r.push(_), e = _);
    }
    if (r.length === 1) return null;
    const s = r[0], u = r[1];
    fr.orient(s, e, u) === 0 && r.shift(), r.push(r[0]);
    const l = this.isExteriorRing() ? 1 : -1, f = this.isExteriorRing() ? 0 : r.length - 1, h = this.isExteriorRing() ? r.length : -1, p = [];
    for (let d = f; d != h; d += l)
      p.push([r[d].x.toNumber(), r[d].y.toNumber()]);
    return p;
  }
  isExteriorRing() {
    if (this._isExteriorRing === void 0) {
      const e = this.enclosingRing();
      this._isExteriorRing = e ? !e.isExteriorRing() : !0;
    }
    return this._isExteriorRing;
  }
  enclosingRing() {
    return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
  }
  /* Returns the ring that encloses this one, if any */
  _calcEnclosingRing() {
    let e = this.events[0];
    for (let u = 1, l = this.events.length; u < l; u++) {
      const f = this.events[u];
      Un.compare(e, f) > 0 && (e = f);
    }
    let r = e.segment.prevInResult(), s = r ? r.prevInResult() : null;
    for (; ; ) {
      if (!r) return null;
      if (!s) return r.ringOut;
      if (s.ringOut !== r.ringOut)
        return s.ringOut?.enclosingRing() !== r.ringOut ? r.ringOut : r.ringOut?.enclosingRing();
      r = s.prevInResult(), s = r ? r.prevInResult() : null;
    }
  }
}, Bf = class {
  exteriorRing;
  interiorRings;
  constructor(t) {
    this.exteriorRing = t, t.poly = this, this.interiorRings = [];
  }
  addInterior(t) {
    this.interiorRings.push(t), t.poly = this;
  }
  getGeom() {
    const t = this.exteriorRing.getGeom();
    if (t === null) return null;
    const e = [t];
    for (let r = 0, s = this.interiorRings.length; r < s; r++) {
      const u = this.interiorRings[r].getGeom();
      u !== null && e.push(u);
    }
    return e;
  }
}, cM = class {
  rings;
  polys;
  constructor(t) {
    this.rings = t, this.polys = this._composePolys(t);
  }
  getGeom() {
    const t = [];
    for (let e = 0, r = this.polys.length; e < r; e++) {
      const s = this.polys[e].getGeom();
      s !== null && t.push(s);
    }
    return t;
  }
  _composePolys(t) {
    const e = [];
    for (let r = 0, s = t.length; r < s; r++) {
      const u = t[r];
      if (!u.poly)
        if (u.isExteriorRing()) e.push(new Bf(u));
        else {
          const l = u.enclosingRing();
          l?.poly || e.push(new Bf(l)), l?.poly?.addInterior(u);
        }
    }
    return e;
  }
}, hM = class {
  queue;
  tree;
  segments;
  constructor(t, e = po.compare) {
    this.queue = t, this.tree = new ho(e), this.segments = [];
  }
  process(t) {
    const e = t.segment, r = [];
    if (t.consumedBy)
      return t.isLeft ? this.queue.delete(t.otherSE) : this.tree.delete(e), r;
    t.isLeft && this.tree.add(e);
    let s = e, u = e;
    do
      s = this.tree.lastBefore(s);
    while (s != null && s.consumedBy != null);
    do
      u = this.tree.firstAfter(u);
    while (u != null && u.consumedBy != null);
    if (t.isLeft) {
      let l = null;
      if (s) {
        const h = s.getIntersection(e);
        if (h !== null && (e.isAnEndpoint(h) || (l = h), !s.isAnEndpoint(h))) {
          const p = this._splitSafely(s, h);
          for (let d = 0, v = p.length; d < v; d++)
            r.push(p[d]);
        }
      }
      let f = null;
      if (u) {
        const h = u.getIntersection(e);
        if (h !== null && (e.isAnEndpoint(h) || (f = h), !u.isAnEndpoint(h))) {
          const p = this._splitSafely(u, h);
          for (let d = 0, v = p.length; d < v; d++)
            r.push(p[d]);
        }
      }
      if (l !== null || f !== null) {
        let h = null;
        l === null ? h = f : f === null ? h = l : h = Un.comparePoints(
          l,
          f
        ) <= 0 ? l : f, this.queue.delete(e.rightSE), r.push(e.rightSE);
        const p = e.split(h);
        for (let d = 0, v = p.length; d < v; d++)
          r.push(p[d]);
      }
      r.length > 0 ? (this.tree.delete(e), r.push(t)) : (this.segments.push(e), e.prev = s);
    } else {
      if (s && u) {
        const l = s.getIntersection(u);
        if (l !== null) {
          if (!s.isAnEndpoint(l)) {
            const f = this._splitSafely(s, l);
            for (let h = 0, p = f.length; h < p; h++)
              r.push(f[h]);
          }
          if (!u.isAnEndpoint(l)) {
            const f = this._splitSafely(u, l);
            for (let h = 0, p = f.length; h < p; h++)
              r.push(f[h]);
          }
        }
      }
      this.tree.delete(e);
    }
    return r;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(t, e) {
    this.tree.delete(t);
    const r = t.rightSE;
    this.queue.delete(r);
    const s = t.split(e);
    return s.push(r), t.consumedBy === void 0 && this.tree.add(t), s;
  }
}, fM = class {
  type;
  numMultiPolys;
  run(t, e, r) {
    Ls.type = t;
    const s = [new zf(e, !0)];
    for (let d = 0, v = r.length; d < v; d++)
      s.push(new zf(r[d], !1));
    if (Ls.numMultiPolys = s.length, Ls.type === "difference") {
      const d = s[0];
      let v = 1;
      for (; v < s.length; )
        ul(s[v].bbox, d.bbox) !== null ? v++ : s.splice(v, 1);
    }
    if (Ls.type === "intersection")
      for (let d = 0, v = s.length; d < v; d++) {
        const _ = s[d];
        for (let x = d + 1, k = s.length; x < k; x++)
          if (ul(_.bbox, s[x].bbox) === null) return [];
      }
    const u = new ho(Un.compare);
    for (let d = 0, v = s.length; d < v; d++) {
      const _ = s[d].getSweepEvents();
      for (let x = 0, k = _.length; x < k; x++)
        u.add(_[x]);
    }
    const l = new hM(u);
    let f = null;
    for (u.size != 0 && (f = u.first(), u.delete(f)); f; ) {
      const d = l.process(f);
      for (let v = 0, _ = d.length; v < _; v++) {
        const x = d[v];
        x.consumedBy === void 0 && u.add(x);
      }
      u.size != 0 ? (f = u.first(), u.delete(f)) : f = null;
    }
    fr.reset();
    const h = lM.factory(l.segments);
    return new cM(h).getGeom();
  }
}, Ls = new fM(), go = Ls, gM = 0, po = class Va {
  id;
  leftSE;
  rightSE;
  rings;
  windings;
  ringOut;
  consumedBy;
  prev;
  _prevInResult;
  _beforeState;
  _afterState;
  _isInResult;
  /* This compare() function is for ordering segments in the sweep
   * line tree, and does so according to the following criteria:
   *
   * Consider the vertical line that lies an infinestimal step to the
   * right of the right-more of the two left endpoints of the input
   * segments. Imagine slowly moving a point up from negative infinity
   * in the increasing y direction. Which of the two segments will that
   * point intersect first? That segment comes 'before' the other one.
   *
   * If neither segment would be intersected by such a line, (if one
   * or more of the segments are vertical) then the line to be considered
   * is directly on the right-more of the two left inputs.
   */
  static compare(e, r) {
    const s = e.leftSE.point.x, u = r.leftSE.point.x, l = e.rightSE.point.x, f = r.rightSE.point.x;
    if (f.isLessThan(s)) return 1;
    if (l.isLessThan(u)) return -1;
    const h = e.leftSE.point.y, p = r.leftSE.point.y, d = e.rightSE.point.y, v = r.rightSE.point.y;
    if (s.isLessThan(u)) {
      if (p.isLessThan(h) && p.isLessThan(d)) return 1;
      if (p.isGreaterThan(h) && p.isGreaterThan(d)) return -1;
      const _ = e.comparePoint(r.leftSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
      const x = r.comparePoint(e.rightSE.point);
      return x !== 0 ? x : -1;
    }
    if (s.isGreaterThan(u)) {
      if (h.isLessThan(p) && h.isLessThan(v)) return -1;
      if (h.isGreaterThan(p) && h.isGreaterThan(v)) return 1;
      const _ = r.comparePoint(e.leftSE.point);
      if (_ !== 0) return _;
      const x = e.comparePoint(r.rightSE.point);
      return x < 0 ? 1 : x > 0 ? -1 : 1;
    }
    if (h.isLessThan(p)) return -1;
    if (h.isGreaterThan(p)) return 1;
    if (l.isLessThan(f)) {
      const _ = r.comparePoint(e.rightSE.point);
      if (_ !== 0) return _;
    }
    if (l.isGreaterThan(f)) {
      const _ = e.comparePoint(r.rightSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
    }
    if (!l.eq(f)) {
      const _ = d.minus(h), x = l.minus(s), k = v.minus(p), M = f.minus(u);
      if (_.isGreaterThan(x) && k.isLessThan(M)) return 1;
      if (_.isLessThan(x) && k.isGreaterThan(M)) return -1;
    }
    return l.isGreaterThan(f) ? 1 : l.isLessThan(f) || d.isLessThan(v) ? -1 : d.isGreaterThan(v) ? 1 : e.id < r.id ? -1 : e.id > r.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, r, s, u) {
    this.id = ++gM, this.leftSE = e, e.segment = this, e.otherSE = r, this.rightSE = r, r.segment = this, r.otherSE = e, this.rings = s, this.windings = u;
  }
  static fromRing(e, r, s) {
    let u, l, f;
    const h = Un.comparePoints(e, r);
    if (h < 0)
      u = e, l = r, f = 1;
    else if (h > 0)
      u = r, l = e, f = -1;
    else
      throw new Error(
        `Tried to create degenerate segment at [${e.x}, ${e.y}]`
      );
    const p = new Un(u, !0), d = new Un(l, !1);
    return new Va(p, d, [s], [f]);
  }
  /* When a segment is split, the rightSE is replaced with a new sweep event */
  replaceRightSE(e) {
    this.rightSE = e, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
  }
  bbox() {
    const e = this.leftSE.point.y, r = this.rightSE.point.y;
    return {
      ll: { x: this.leftSE.point.x, y: e.isLessThan(r) ? e : r },
      ur: { x: this.rightSE.point.x, y: e.isGreaterThan(r) ? e : r }
    };
  }
  /* A vector from the left point to the right */
  vector() {
    return {
      x: this.rightSE.point.x.minus(this.leftSE.point.x),
      y: this.rightSE.point.y.minus(this.leftSE.point.y)
    };
  }
  isAnEndpoint(e) {
    return e.x.eq(this.leftSE.point.x) && e.y.eq(this.leftSE.point.y) || e.x.eq(this.rightSE.point.x) && e.y.eq(this.rightSE.point.y);
  }
  /* Compare this segment with a point.
   *
   * A point P is considered to be colinear to a segment if there
   * exists a distance D such that if we travel along the segment
   * from one * endpoint towards the other a distance D, we find
   * ourselves at point P.
   *
   * Return value indicates:
   *
   *   1: point lies above the segment (to the left of vertical)
   *   0: point is colinear to segment
   *  -1: point lies below the segment (to the right of vertical)
   */
  comparePoint(e) {
    return fr.orient(this.leftSE.point, e, this.rightSE.point);
  }
  /**
   * Given another segment, returns the first non-trivial intersection
   * between the two segments (in terms of sweep line ordering), if it exists.
   *
   * A 'non-trivial' intersection is one that will cause one or both of the
   * segments to be split(). As such, 'trivial' vs. 'non-trivial' intersection:
   *
   *   * endpoint of segA with endpoint of segB --> trivial
   *   * endpoint of segA with point along segB --> non-trivial
   *   * endpoint of segB with point along segA --> non-trivial
   *   * point along segA with point along segB --> non-trivial
   *
   * If no non-trivial intersection exists, return null
   * Else, return null.
   */
  getIntersection(e) {
    const r = this.bbox(), s = e.bbox(), u = ul(r, s);
    if (u === null) return null;
    const l = this.leftSE.point, f = this.rightSE.point, h = e.leftSE.point, p = e.rightSE.point, d = _s(r, h) && this.comparePoint(h) === 0, v = _s(s, l) && e.comparePoint(l) === 0, _ = _s(r, p) && this.comparePoint(p) === 0, x = _s(s, f) && e.comparePoint(f) === 0;
    if (v && d)
      return x && !_ ? f : !x && _ ? p : null;
    if (v)
      return _ && l.x.eq(p.x) && l.y.eq(p.y) ? null : l;
    if (d)
      return x && f.x.eq(h.x) && f.y.eq(h.y) ? null : h;
    if (x && _) return null;
    if (x) return f;
    if (_) return p;
    const k = uM(l, this.vector(), h, e.vector());
    return k === null || !_s(u, k) ? null : fr.snap(k);
  }
  /**
   * Split the given segment into multiple segments on the given points.
   *  * Each existing segment will retain its leftSE and a new rightSE will be
   *    generated for it.
   *  * A new segment will be generated which will adopt the original segment's
   *    rightSE, and a new leftSE will be generated for it.
   *  * If there are more than two points given to split on, new segments
   *    in the middle will be generated with new leftSE and rightSE's.
   *  * An array of the newly generated SweepEvents will be returned.
   *
   * Warning: input array of points is modified
   */
  split(e) {
    const r = [], s = e.events !== void 0, u = new Un(e, !0), l = new Un(e, !1), f = this.rightSE;
    this.replaceRightSE(l), r.push(l), r.push(u);
    const h = new Va(
      u,
      f,
      this.rings.slice(),
      this.windings.slice()
    );
    return Un.comparePoints(h.leftSE.point, h.rightSE.point) > 0 && h.swapEvents(), Un.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), s && (u.checkForConsuming(), l.checkForConsuming()), r;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const e = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let r = 0, s = this.windings.length; r < s; r++)
      this.windings[r] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(e) {
    let r = this, s = e;
    for (; r.consumedBy; ) r = r.consumedBy;
    for (; s.consumedBy; ) s = s.consumedBy;
    const u = Va.compare(r, s);
    if (u !== 0) {
      if (u > 0) {
        const l = r;
        r = s, s = l;
      }
      if (r.prev === s) {
        const l = r;
        r = s, s = l;
      }
      for (let l = 0, f = s.rings.length; l < f; l++) {
        const h = s.rings[l], p = s.windings[l], d = r.rings.indexOf(h);
        d === -1 ? (r.rings.push(h), r.windings.push(p)) : r.windings[d] += p;
      }
      s.rings = null, s.windings = null, s.consumedBy = r, s.leftSE.consumedBy = r.leftSE, s.rightSE.consumedBy = r.rightSE;
    }
  }
  /* The first segment previous segment chain that is in the result */
  prevInResult() {
    return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult);
  }
  beforeState() {
    if (this._beforeState !== void 0) return this._beforeState;
    if (!this.prev)
      this._beforeState = {
        rings: [],
        windings: [],
        multiPolys: []
      };
    else {
      const e = this.prev.consumedBy || this.prev;
      this._beforeState = e.afterState();
    }
    return this._beforeState;
  }
  afterState() {
    if (this._afterState !== void 0) return this._afterState;
    const e = this.beforeState();
    this._afterState = {
      rings: e.rings.slice(0),
      windings: e.windings.slice(0),
      multiPolys: []
    };
    const r = this._afterState.rings, s = this._afterState.windings, u = this._afterState.multiPolys;
    for (let h = 0, p = this.rings.length; h < p; h++) {
      const d = this.rings[h], v = this.windings[h], _ = r.indexOf(d);
      _ === -1 ? (r.push(d), s.push(v)) : s[_] += v;
    }
    const l = [], f = [];
    for (let h = 0, p = r.length; h < p; h++) {
      if (s[h] === 0) continue;
      const d = r[h], v = d.poly;
      if (f.indexOf(v) === -1)
        if (d.isExterior) l.push(v);
        else {
          f.indexOf(v) === -1 && f.push(v);
          const _ = l.indexOf(d.poly);
          _ !== -1 && l.splice(_, 1);
        }
    }
    for (let h = 0, p = l.length; h < p; h++) {
      const d = l[h].multiPoly;
      u.indexOf(d) === -1 && u.push(d);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const e = this.beforeState().multiPolys, r = this.afterState().multiPolys;
    switch (go.type) {
      case "union": {
        const s = e.length === 0, u = r.length === 0;
        this._isInResult = s !== u;
        break;
      }
      case "intersection": {
        let s, u;
        e.length < r.length ? (s = e.length, u = r.length) : (s = r.length, u = e.length), this._isInResult = u === go.numMultiPolys && s < u;
        break;
      }
      case "xor": {
        const s = Math.abs(e.length - r.length);
        this._isInResult = s % 2 === 1;
        break;
      }
      case "difference": {
        const s = (u) => u.length === 1 && u[0].isSubject;
        this._isInResult = s(e) !== s(r);
        break;
      }
    }
    return this._isInResult;
  }
}, Uf = class {
  poly;
  isExterior;
  segments;
  bbox;
  constructor(t, e, r) {
    if (!Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = r, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const s = fr.snap({ x: new Yn(t[0][0]), y: new Yn(t[0][1]) });
    this.bbox = {
      ll: { x: s.x, y: s.y },
      ur: { x: s.x, y: s.y }
    };
    let u = s;
    for (let l = 1, f = t.length; l < f; l++) {
      if (typeof t[l][0] != "number" || typeof t[l][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      const h = fr.snap({ x: new Yn(t[l][0]), y: new Yn(t[l][1]) });
      h.x.eq(u.x) && h.y.eq(u.y) || (this.segments.push(po.fromRing(u, h, this)), h.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = h.x), h.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = h.y), h.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = h.x), h.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = h.y), u = h);
    }
    (!s.x.eq(u.x) || !s.y.eq(u.y)) && this.segments.push(po.fromRing(u, s, this));
  }
  getSweepEvents() {
    const t = [];
    for (let e = 0, r = this.segments.length; e < r; e++) {
      const s = this.segments[e];
      t.push(s.leftSE), t.push(s.rightSE);
    }
    return t;
  }
}, dM = class {
  multiPoly;
  exteriorRing;
  interiorRings;
  bbox;
  constructor(t, e) {
    if (!Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Uf(t[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let r = 1, s = t.length; r < s; r++) {
      const u = new Uf(t[r], this, !1);
      u.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = u.bbox.ll.x), u.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = u.bbox.ll.y), u.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = u.bbox.ur.x), u.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = u.bbox.ur.y), this.interiorRings.push(u);
    }
    this.multiPoly = e;
  }
  getSweepEvents() {
    const t = this.exteriorRing.getSweepEvents();
    for (let e = 0, r = this.interiorRings.length; e < r; e++) {
      const s = this.interiorRings[e].getSweepEvents();
      for (let u = 0, l = s.length; u < l; u++)
        t.push(s[u]);
    }
    return t;
  }
}, zf = class {
  isSubject;
  polys;
  bbox;
  constructor(t, e) {
    if (!Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof t[0][0][0] == "number" && (t = [t]);
    } catch {
    }
    this.polys = [], this.bbox = {
      ll: { x: new Yn(Number.POSITIVE_INFINITY), y: new Yn(Number.POSITIVE_INFINITY) },
      ur: { x: new Yn(Number.NEGATIVE_INFINITY), y: new Yn(Number.NEGATIVE_INFINITY) }
    };
    for (let r = 0, s = t.length; r < s; r++) {
      const u = new dM(t[r], this);
      u.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = u.bbox.ll.x), u.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = u.bbox.ll.y), u.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = u.bbox.ur.x), u.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = u.bbox.ur.y), this.polys.push(u);
    }
    this.isSubject = e;
  }
  getSweepEvents() {
    const t = [];
    for (let e = 0, r = this.polys.length; e < r; e++) {
      const s = this.polys[e].getSweepEvents();
      for (let u = 0, l = s.length; u < l; u++)
        t.push(s[u]);
    }
    return t;
  }
}, pM = (t, ...e) => go.run("union", t, e), mM = (t, ...e) => go.run("difference", t, e);
fr.set;
function vM(t) {
  const e = [];
  if (Rr(t, (u) => {
    e.push(u.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const r = t.features[0].properties || {}, s = mM(e[0], ...e.slice(1));
  return s.length === 0 ? null : s.length === 1 ? hr(s[0], r) : Ul(s, r);
}
var Pp = vM;
function _u(t) {
  var e;
  if (t.bbox) e = t.bbox;
  else if (Array.isArray(t) && t.length === 4) e = t;
  else if (Array.isArray(t) && t.length === 6)
    e = [t[0], t[1], t[3], t[4]];
  else if (t.type === "Feature") e = sr(t);
  else if (t.type === "FeatureCollection") e = sr(t);
  else throw new Error("invalid geojson");
  return {
    minX: e[0],
    minY: e[1],
    maxX: e[2],
    maxY: e[3]
  };
}
var yM = class {
  constructor(t = 9) {
    this.tree = new nc(t), this.tree.toBBox = _u;
  }
  /**
   * [insert](https://github.com/mourner/rbush#data-format)
   *
   * @memberof rbush
   * @param {Feature} feature insert single GeoJSON Feature
   * @returns {RBush} GeoJSON RBush
   * @example
   * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
   * tree.insert(poly)
   */
  insert(t) {
    if (t.type !== "Feature") throw new Error("invalid feature");
    return t.bbox = t.bbox ? t.bbox : sr(t), this.tree.insert(t), this;
  }
  /**
   * [load](https://github.com/mourner/rbush#bulk-inserting-data)
   *
   * @memberof rbush
   * @param {FeatureCollection|Array<Feature>} features load entire GeoJSON FeatureCollection
   * @returns {RBush} GeoJSON RBush
   * @example
   * var polys = turf.polygons([
   *     [[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]],
   *     [[[-93, 32], [-83, 32], [-83, 39], [-93, 39], [-93, 32]]]
   * ]);
   * tree.load(polys);
   */
  load(t) {
    var e = [];
    return Array.isArray(t) ? t.forEach(function(r) {
      if (r.type !== "Feature") throw new Error("invalid features");
      r.bbox = r.bbox ? r.bbox : sr(r), e.push(r);
    }) : $n(t, function(r) {
      if (r.type !== "Feature") throw new Error("invalid features");
      r.bbox = r.bbox ? r.bbox : sr(r), e.push(r);
    }), this.tree.load(e), this;
  }
  /**
   * [remove](https://github.com/mourner/rbush#removing-data)
   *
   * @memberof rbush
   * @param {Feature} feature remove single GeoJSON Feature
   * @param {Function} equals Pass a custom equals function to compare by value for removal.
   * @returns {RBush} GeoJSON RBush
   * @example
   * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
   *
   * tree.remove(poly);
   */
  remove(t, e) {
    if (t.type !== "Feature") throw new Error("invalid feature");
    return t.bbox = t.bbox ? t.bbox : sr(t), this.tree.remove(t, e), this;
  }
  /**
   * [clear](https://github.com/mourner/rbush#removing-data)
   *
   * @memberof rbush
   * @returns {RBush} GeoJSON Rbush
   * @example
   * tree.clear()
   */
  clear() {
    return this.tree.clear(), this;
  }
  /**
   * [search](https://github.com/mourner/rbush#search)
   *
   * @memberof rbush
   * @param {BBox|FeatureCollection|Feature} geojson search with GeoJSON
   * @returns {FeatureCollection} all features that intersects with the given GeoJSON.
   * @example
   * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
   *
   * tree.search(poly);
   */
  search(t) {
    var e = this.tree.search(_u(t));
    return nt(e);
  }
  /**
   * [collides](https://github.com/mourner/rbush#collisions)
   *
   * @memberof rbush
   * @param {BBox|FeatureCollection|Feature} geojson collides with GeoJSON
   * @returns {boolean} true if there are any items intersecting the given GeoJSON, otherwise false.
   * @example
   * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
   *
   * tree.collides(poly);
   */
  collides(t) {
    return this.tree.collides(_u(t));
  }
  /**
   * [all](https://github.com/mourner/rbush#search)
   *
   * @memberof rbush
   * @returns {FeatureCollection} all the features in RBush
   * @example
   * tree.all()
   */
  all() {
    const t = this.tree.all();
    return nt(t);
  }
  /**
   * [toJSON](https://github.com/mourner/rbush#export-and-import)
   *
   * @memberof rbush
   * @returns {any} export data as JSON object
   * @example
   * var exported = tree.toJSON()
   */
  toJSON() {
    return this.tree.toJSON();
  }
  /**
   * [fromJSON](https://github.com/mourner/rbush#export-and-import)
   *
   * @memberof rbush
   * @param {any} json import previously exported data
   * @returns {RBush} GeoJSON RBush
   * @example
   * var exported = {
   *   "children": [
   *     {
   *       "type": "Feature",
   *       "geometry": {
   *         "type": "Point",
   *         "coordinates": [110, 50]
   *       },
   *       "properties": {},
   *       "bbox": [110, 50, 110, 50]
   *     }
   *   ],
   *   "height": 1,
   *   "leaf": true,
   *   "minX": 110,
   *   "minY": 50,
   *   "maxX": 110,
   *   "maxY": 50
   * }
   * tree.fromJSON(exported)
   */
  fromJSON(t) {
    return this.tree.fromJSON(t), this;
  }
};
function Op(t) {
  return new yM(t);
}
function _M(t, e) {
  if (e = e ?? {}, !Ao(e)) throw new Error("options is invalid");
  var r = e.precision, s = e.coordinates, u = e.mutate;
  if (r = r == null || isNaN(r) ? 6 : r, s = s == null || isNaN(s) ? 3 : s, !t) throw new Error("<geojson> is required");
  if (typeof r != "number")
    throw new Error("<precision> must be a number");
  if (typeof s != "number")
    throw new Error("<coordinates> must be a number");
  (u === !1 || u === void 0) && (t = JSON.parse(JSON.stringify(t)));
  var l = Math.pow(10, r);
  return Or(t, function(f) {
    EM(f, l, s);
  }), t;
}
function EM(t, e, r) {
  t.length > r && t.splice(r, t.length);
  for (var s = 0; s < t.length; s++)
    t[s] = Math.round(t[s] * e) / e;
  return t;
}
function xM(t) {
  if (!t)
    throw new Error("geojson is required");
  const e = [];
  return Pr(t, (r) => {
    wM(r, e);
  }), nt(e);
}
function wM(t, e) {
  let r = [];
  const s = t.geometry;
  if (s !== null) {
    switch (s.type) {
      case "Polygon":
        r = Ht(s);
        break;
      case "LineString":
        r = [Ht(s)];
    }
    r.forEach((u) => {
      kM(u, t.properties).forEach((f) => {
        f.id = e.length, e.push(f);
      });
    });
  }
}
function kM(t, e) {
  const r = [];
  return t.reduce((s, u) => {
    const l = Nr([s, u], e);
    return l.bbox = SM(s, u), r.push(l), u;
  }), r;
}
function SM(t, e) {
  const r = t[0], s = t[1], u = e[0], l = e[1], f = r < u ? r : u, h = s < l ? s : l, p = r > u ? r : u, d = s > l ? s : l;
  return [f, h, p, d];
}
var MM = Object.defineProperty, IM = Object.defineProperties, bM = Object.getOwnPropertyDescriptors, qf = Object.getOwnPropertySymbols, AM = Object.prototype.hasOwnProperty, TM = Object.prototype.propertyIsEnumerable, Yf = (t, e, r) => e in t ? MM(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, LM = (t, e) => {
  for (var r in e || (e = {}))
    AM.call(e, r) && Yf(t, r, e[r]);
  if (qf)
    for (var r of qf(e))
      TM.call(e, r) && Yf(t, r, e[r]);
  return t;
}, CM = (t, e) => IM(t, bM(e));
function NM(t, e, r = {}) {
  if (!t || !e)
    throw new Error("lines and inputPoint are required arguments");
  const s = tt(e);
  let u = wn([1 / 0, 1 / 0], {
    lineStringIndex: -1,
    segmentIndex: -1,
    totalDistance: -1,
    lineDistance: -1,
    segmentDistance: -1,
    pointDistance: 1 / 0,
    // deprecated properties START
    multiFeatureIndex: -1,
    index: -1,
    location: -1,
    dist: 1 / 0
    // deprecated properties END
  }), l = 0, f = 0, h = -1;
  return Pr(
    t,
    function(p, d, v) {
      h !== v && (h = v, f = 0);
      const _ = Ht(p), x = _.length - 2;
      for (let k = 0; k < _.length - 1; k++) {
        const M = wn(_[k]), R = tt(M), C = wn(_[k + 1]), I = tt(C), T = Zr(M, C, r);
        let Y, $;
        I[0] === s[0] && I[1] === s[1] ? [Y, $] = [I, !0] : R[0] === s[0] && R[1] === s[1] ? [Y, $] = [R, !1] : [Y, $] = RM(
          R,
          I,
          s
        );
        const J = Zr(e, Y, r);
        if (J < u.properties.pointDistance) {
          const q = Zr(M, Y, r);
          u = wn(Y, {
            lineStringIndex: v,
            // Legacy behaviour where index progresses to next segment if we
            // went with the end point this iteration. Though make sure we
            // only progress to the beginning of the next segment if one
            // actually exists.
            segmentIndex: $ && k + 1 <= x ? k + 1 : k,
            totalDistance: l + q,
            lineDistance: f + q,
            segmentDistance: q,
            pointDistance: J,
            // deprecated properties START
            multiFeatureIndex: -1,
            index: -1,
            location: -1,
            dist: 1 / 0
            // deprecated properties END
          }), u.properties = CM(LM({}, u.properties), {
            multiFeatureIndex: u.properties.lineStringIndex,
            index: u.properties.segmentIndex,
            location: u.properties.totalDistance,
            dist: u.properties.pointDistance
            // deprecated properties END
          });
        }
        l += T, f += T;
      }
    }
  ), u;
}
function Vr(t, e) {
  const [r, s, u] = t, [l, f, h] = e;
  return r * l + s * f + u * h;
}
function Es(t, e) {
  const [r, s, u] = t, [l, f, h] = e;
  return [s * h - u * f, u * l - r * h, r * f - s * l];
}
function PM(t) {
  return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2));
}
function Hf(t) {
  const e = PM(t);
  return [t[0] / e, t[1] / e, t[2] / e];
}
function Eu(t) {
  const e = lt(t[1]), r = lt(t[0]);
  return [
    Math.cos(e) * Math.cos(r),
    Math.cos(e) * Math.sin(r),
    Math.sin(e)
  ];
}
function OM(t) {
  const [e, r, s] = t, u = Math.min(Math.max(s, -1), 1), l = ri(Math.asin(u));
  return [ri(Math.atan2(r, e)), l];
}
function RM(t, e, r) {
  const s = Eu(t), u = Eu(e), l = Eu(r), f = Es(s, u);
  if (f[0] === 0 && f[1] === 0 && f[2] === 0)
    return Vr(s, u) > 0 ? [[...e], !0] : [[...r], !1];
  const h = Es(f, l);
  if (h[0] === 0 && h[1] === 0 && h[2] === 0)
    return [[...e], !0];
  const p = Es(h, f), d = Hf(p), v = [-d[0], -d[1], -d[2]], _ = Vr(l, d) > Vr(l, v) ? d : v, x = Hf(f), k = Vr(Es(s, _), x), M = Vr(Es(_, u), x);
  return k >= 0 && M >= 0 ? [OM(_), !1] : Vr(s, l) > Vr(u, l) ? [[...t], !1] : [[...e], !0];
}
function DM(t, e) {
  if (!t) throw new Error("line is required");
  if (!e) throw new Error("splitter is required");
  const r = Xh(t), s = Xh(e);
  if (r !== "LineString") throw new Error("line must be LineString");
  if (s === "FeatureCollection")
    throw new Error("splitter cannot be a FeatureCollection");
  if (s === "GeometryCollection")
    throw new Error("splitter cannot be a GeometryCollection");
  var u = _M(e, { precision: 7 });
  switch (t.type !== "Feature" && (t = un(t)), s) {
    case "Point":
      return cl(
        t,
        u
      );
    case "MultiPoint":
      return Jf(
        t,
        u
      );
    case "LineString":
    case "MultiLineString":
    case "Polygon":
    case "MultiPolygon":
      return Jf(
        t,
        aa(
          t,
          u,
          {
            ignoreSelfIntersections: !0
          }
        )
      );
  }
}
function Jf(t, e) {
  var r = [], s = Op();
  return Pr(
    e,
    // this cast should be unnecessary (and is wrong, it could contain MultiPoints), but is a workaround for bad flattenEach typings
    function(u) {
      if (r.forEach(function(h, p) {
        h.id = p;
      }), !r.length)
        r = cl(t, u).features, s.load(nt(r));
      else {
        var l = s.search(u);
        if (l.features.length) {
          var f = Rp(u, l);
          r = r.filter(function(h) {
            return h.id !== f.id;
          }), s.remove(f), $n(cl(f, u), function(h) {
            r.push(h), s.insert(h);
          });
        }
      }
    }
  ), nt(r);
}
function cl(t, e) {
  var r = [], s = Ht(t)[0], u = Ht(t)[t.geometry.coordinates.length - 1];
  if (xu(s, tt(e)) || xu(u, tt(e)))
    return nt([t]);
  var l = Op(), f = xM(t);
  l.load(f);
  var h = l.search(e);
  if (!h.features.length) return nt([t]);
  var p = Rp(e, h), d = [s], v = yk(
    f,
    function(_, x, k) {
      var M = Ht(x)[1], R = tt(e);
      return k === p.id ? (_.push(R), r.push(Nr(_)), xu(R, M) ? [R] : [R, M]) : (_.push(M), _);
    },
    d
  );
  return v.length > 1 && r.push(Nr(v)), nt(r);
}
function Rp(t, e) {
  if (!e.features.length) throw new Error("lines must contain features");
  if (e.features.length === 1) return e.features[0];
  var r, s = 1 / 0;
  return $n(e, function(u) {
    var l = NM(u, t), f = l.properties.dist;
    f < s && (r = u, s = f);
  }), r;
}
function xu(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
var $f = DM;
class FM extends es {
  mode = "cut";
  lineDrawer = new tc(this.gm, { snappingMarkers: "first", targetShape: "polygon" });
  cutShapesAllowed = ["circle", "ellipse", "line", "rectangle", "polygon"];
  eventHandlers = {
    [`${ae}:draw`]: this.forwardLineDrawerEvent.bind(this),
    mousemove: this.onMouseMove.bind(this)
  };
  onStartAction() {
    this.lineDrawer.startAction(), this.lineDrawer.on("firstMarkerClick", this.cutPolygonFinished.bind(this));
  }
  onEndAction() {
    this.lineDrawer.endAction();
  }
  onMouseMove(e) {
    return Ke(e) ? (this.lineDrawer.featureData || this.fireMarkerPointerUpdateEvent(), { next: !0 }) : { next: !0 };
  }
  cutPolygonFinished(e) {
    this.lineDrawer.endShape();
    const r = ec(e.geoJson), s = this.getBBoxFeaturesByPolygon(r);
    this.cutFeaturesByPolygon(s, r);
  }
  getBBoxFeaturesByPolygon(e) {
    const r = Vl(e), s = this.gm.mapAdapter.coordBoundsToScreenBounds(r);
    return this.gm.mapAdapter.queryFeaturesByScreenCoordinates({
      queryCoordinates: s,
      sourceNames: [K.main]
    });
  }
  cutFeaturesByPolygon(e, r) {
    e.forEach((s) => {
      if (s.getShapeProperty("disableEdit") !== !0) {
        if (Pa(s.getGeoJson(), r)) {
          this.gm.features.delete(s), this.fireFeatureRemovedEvent(s);
          return;
        }
        if (bp(s.getGeoJson(), r) && this.cutShapesAllowed.includes(s.shape)) {
          if (s.shape === "line") {
            this.cutLineFeatureByPolygon(s, r);
            return;
          }
          this.cutPolygonFeatureByPolygon(s.id, r);
        }
      }
    });
  }
  cutLineFeatureByPolygon(e, r) {
    const s = e.getGeoJson(), u = GS(this.gm.mapAdapter, r);
    let l = !1, f = [];
    if (u) {
      if (s.geometry.type === "MultiLineString")
        s.geometry.coordinates.forEach((h) => {
          if (Pa(Nr(h), r))
            return;
          const p = $f(Nr(h), r);
          if (p.features.length === 0) {
            f.push(h);
            return;
          }
          p.features.filter((d) => !Pa(d, u)).forEach((d) => {
            l = !0, f.push(d.geometry.coordinates);
          });
        });
      else if (s.geometry.type === "LineString") {
        const h = $f(s, r);
        f = h.features.filter(
          (p) => !Pa(p, u) && p.geometry.type === "LineString"
        ).map((p) => p.geometry.coordinates), h.features.length > 0 && (l = !0);
      }
      l && f.length && (f.length === 1 ? e.updateGeoJsonGeometry({ type: "LineString", coordinates: f[0] }) : e.updateGeoJsonGeometry({ type: "MultiLineString", coordinates: f }), this.fireFeatureUpdatedEvent({
        sourceFeatures: [e],
        targetFeatures: [e]
      }));
    }
  }
  cutPolygonFeatureByPolygon(e, r) {
    const s = this.gm.features.get(K.main, e);
    if (!s) {
      te.warn("cutPolygonFeatureByPolygon: featureData not found", e);
      return;
    }
    s.convertToPolygon();
    const u = s.getGeoJson(), l = this.getGeoJsonDifference(u, r);
    l && (s.updateGeoJsonGeometry(l.geometry), this.fireFeatureUpdatedEvent({
      sourceFeatures: [s],
      targetFeatures: [s]
    }));
  }
  getGeoJsonDifference(e, r) {
    const s = nt([e, r]), u = Pp(s);
    return u ? u.type === "Feature" ? u : (u.type === "FeatureCollection" && te.error("getGeoJsonDifference: FeatureCollection detected (not supported)", u), null) : null;
  }
}
class GM extends es {
  mode = "delete";
  allowedShapes = [...ir];
  eventHandlers = {
    click: this.onMouseClick.bind(this)
  };
  onStartAction() {
    this.gm.markerPointer.enable({ invisibleMarker: !0 }), this.gm.markerPointer.pauseSnapping();
  }
  onEndAction() {
    this.gm.markerPointer.resumeSnapping(), this.gm.markerPointer.disable();
  }
  onMouseClick(e) {
    if (!Ke(e, { warning: !0 }))
      return { next: !1 };
    const r = this.getFeatureByMouseEvent({ event: e, sourceNames: [K.main] });
    return r && this.allowedShapes.includes(r.shape) && (this.gm.features.delete(r), this.fireFeatureRemovedEvent(r)), { next: !1 };
  }
}
class BM extends ic {
  mode = "drag";
  onStartAction() {
  }
  onEndAction() {
  }
  handleGmEdit(e) {
    return Qi(e) ? e.action === "marker_move" && e.lngLatStart && e.lngLatEnd ? (this.previousLngLat || (this.previousLngLat = e.lngLatStart), this.moveFeature(e.featureData, e.lngLatEnd), { next: !1 }) : (e.action === "marker_captured" ? (e.featureData.changeSource({ sourceName: K.temporary, atomic: !0 }), this.flags.actionInProgress = !0, this.fireFeatureEditStartEvent({ feature: e.featureData }), this.setCursorToPointer()) : e.action === "marker_released" && (this.previousLngLat = null, e.featureData.changeSource({ sourceName: K.main, atomic: !0 }), this.fireFeatureEditEndEvent({ feature: e.featureData }), this.flags.actionInProgress = !1), { next: !0 }) : (te.error("EditDrag.handleGmEdit: not an edit event", e), { next: !0 });
  }
}
class UM extends ic {
  mode = "rotate";
  allowedShapes = ["line", "rectangle", "polygon", "ellipse"];
  convertFeaturesTypes = ["rectangle"];
  shapeRotateHandlers = {
    marker: this.rotateFeature.bind(this),
    circle: this.rotateFeature.bind(this),
    circle_marker: this.rotateFeature.bind(this),
    text_marker: this.rotateFeature.bind(this),
    line: this.rotateFeature.bind(this),
    rectangle: this.rotateFeature.bind(this),
    polygon: this.rotateFeature.bind(this),
    ellipse: this.rotateEllipse.bind(this)
  };
  onStartAction() {
  }
  onEndAction() {
  }
  handleGmEdit(e) {
    return Qi(e) ? this.isFeatureAllowed(e) ? { next: !0 } : e.action === "marker_move" && e.lngLatStart && e.lngLatEnd ? (e.markerData?.type === "vertex" ? this.moveVertex(e) : this.moveSource(e.featureData, e.lngLatStart, e.lngLatEnd), { next: !1 }) : (e.action === "marker_captured" ? (e.featureData.changeSource({ sourceName: K.temporary, atomic: !0 }), this.setCursorToPointer(), this.flags.actionInProgress = !0, this.fireFeatureEditStartEvent({ feature: e.featureData })) : e.action === "marker_released" && (e.featureData.changeSource({ sourceName: K.main, atomic: !0 }), this.fireFeatureEditEndEvent({ feature: e.featureData }), this.flags.actionInProgress = !1), { next: !0 }) : (te.error("EditChange.handleGmEdit: not an edit event", e), { next: !1 });
  }
  isFeatureAllowed(e) {
    return "featureData" in e && !this.allowedShapes.includes(e.featureData.shape);
  }
  moveVertex(e) {
    const r = e.featureData, s = this.shapeRotateHandlers[r.shape]?.(e) || null;
    s ? (this.fireBeforeFeatureUpdate({
      features: [r],
      geoJsonFeatures: [s]
    }), this.updateFeatureGeoJson({ featureData: r, featureGeoJson: s }) && this.convertFeaturesTypes.includes(r.shape) && r.convertToPolygon()) : te.error("EditRotate.moveVertex: invalid geojson", s, e);
  }
  rotateEllipse(e) {
    const { featureData: r } = e;
    if (r.shape !== "ellipse")
      return te.error("EditRotate.rotateEllipse: invalid shape type", r), null;
    const s = r.getShapeProperty("center"), u = r.getShapeProperty("xSemiAxis"), l = r.getShapeProperty("ySemiAxis"), f = r.getShapeProperty("angle");
    if (!Array.isArray(s) || typeof u != "number" || typeof l != "number" || typeof f != "number")
      return te.error(
        "rotateEllipse: missing center, xSemiAxis, ySemiAxis or angle in the featureData",
        r
      ), null;
    const h = this.calculateRotationAngle(
      s,
      e.lngLatStart,
      e.lngLatEnd,
      !1
    );
    return Co({
      center: s,
      xSemiAxis: u,
      ySemiAxis: l,
      angle: f + h
    });
  }
  rotateFeature(e) {
    const r = e.featureData, s = $t(r.getGeoJson()), u = Zu(Xu(s)), l = this.calculateRotationAngle(u, e.lngLatStart, e.lngLatEnd);
    return s.geometry = Tk(s, l, { pivot: u }).geometry, s;
  }
  calculateRotationAngle(e, r, s, u = !0) {
    const l = ro(e, r), h = ro(e, s) - l;
    return u ? (h + 360) % 360 : h;
  }
}
const hl = {
  drag: BM,
  change: HS,
  rotate: UM,
  scale: null,
  copy: null,
  cut: FM,
  split: null,
  union: null,
  difference: null,
  line_simplification: null,
  lasso: null,
  delete: GM
}, zM = (t, e) => hl[e] ? new hl[e](t) : (te.error(`Edit "${e}" is not available`), null);
class qM extends bo {
  eventHandlers = {
    [`${ae}:edit`]: this.handleEditEvent.bind(this)
  };
  constructor(e, r) {
    super(e), r.attachEvents(this.eventHandlers);
  }
  handleEditEvent(e) {
    if (!Qi(e))
      return { next: !0 };
    const r = `${e.actionType}__${e.mode}`;
    return e.action === "mode_start" ? (this.trackExclusiveModes(e), this.start(r, e), this.trackRelatedModes(e)) : e.action === "mode_end" && (this.trackRelatedModes(e), this.end(r)), { next: !0 };
  }
  start(e, r) {
    if (r.action !== "mode_start")
      return;
    const s = zM(this.gm, r.mode);
    s && (e in this.gm.actionInstances && te.error(`Action instance "${e}" already exists`), this.gm.actionInstances[e] = s, s.startAction());
  }
  end(e) {
    const r = this.gm.actionInstances[e];
    r instanceof es ? (r.endAction(), delete this.gm.actionInstances[e]) : console.error(
      `Wrong action instance for edit event "${e}": `,
      r
    );
  }
}
class YM extends Dr {
  mode = "shape_markers";
  pinEnabled = this.gm.options.controls.helper.pin?.active || !1;
  previousPosition = null;
  activeMarker = null;
  activeFeatureData = null;
  sharedMarkers = [];
  allowedShapes = ["circle", "line", "rectangle", "polygon", "ellipse"];
  edgeMarkersAllowed = !1;
  edgeMarkerAllowedShapes = ["line", "rectangle", "polygon"];
  shapeMarkerAllowedModes = ["drag", "change", "cut", "split"];
  eventHandlers = {
    [`${ae}:draw`]: this.handleGmDraw.bind(this),
    [`${ae}:edit`]: this.handleGmEdit.bind(this),
    mousedown: this.onMouseDown.bind(this),
    touchstart: this.onMouseDown.bind(this),
    mouseup: this.onMouseUp.bind(this),
    touchend: this.onMouseUp.bind(this),
    mousemove: this.onMouseMove.bind(this),
    touchmove: this.onMouseMove.bind(this),
    contextmenu: this.onMouseRightButtonClick.bind(this)
  };
  throttledMethods = ci(
    {
      sendMarkerMoveEvent: this.sendMarkerMoveEvent,
      sendMarkerRightClickEvent: this.sendMarkerRightClickEvent
    },
    this,
    this.gm.options.settings.throttlingDelay
  );
  debouncedMethods = Jk(
    {
      refreshMarkers: this.refreshMarkers
    },
    this,
    this.gm.options.settings.throttlingDelay * 10
  );
  get pinHelperInstance() {
    return this.pinEnabled && Object.values(this.gm.actionInstances).find(Kk) || null;
  }
  onStartAction() {
    this.isShapeMarkerAllowed() && this.gm.markerPointer.enable({ invisibleMarker: !0 }), this.edgeMarkersAllowed = this.gm.getActiveEditModes().includes("change"), this.addMarkers();
  }
  onEndAction() {
    this.gm.markerPointer.disable(), this.removeMarkers();
  }
  setPin(e) {
    this.pinEnabled = e;
  }
  onMouseDown(e) {
    const r = ["mousedown", "touchstart"];
    if (!Ke(e, { warning: !0 }) || !r.includes(e.type) || Xk(e))
      return { next: !0 };
    if (e.type === "mousedown" && e.originalEvent.button !== 0)
      return { next: !0 };
    const s = this.getFeatureMarkerByMouseEvent(e);
    return this.activeMarker = s || null, this.activeFeatureData = s?.instance.parent || null, this.activeMarker && this.activeFeatureData ? (this.previousPosition = rc(this.activeMarker.instance), this.gm.mapAdapter.setDragPan(!1), this.activeMarker.type === "edge" && this.sendMarkerEvent("edge_marker_click", this.activeFeatureData, this.activeMarker), this.pinEnabled && this.pinHelperInstance ? (this.sharedMarkers = this.pinHelperInstance.getSharedMarkers(
      this.activeMarker.position.coordinate
    ), this.sharedMarkers.forEach(
      (u) => this.snappingHelper?.addExcludedFeature(u.featureData)
    )) : this.snappingHelper?.addExcludedFeature(this.activeFeatureData), this.sendMarkerEvent("marker_captured", this.activeFeatureData, this.activeMarker), { next: !1 }) : { next: !0 };
  }
  onMouseUp() {
    if (!this.activeMarker)
      return { next: !0 };
    const e = {
      featureData: this.activeFeatureData,
      markerData: this.activeMarker
    };
    return this.activeMarker = null, this.activeFeatureData = null, this.sharedMarkers = [], this.snappingHelper?.clearExcludedFeatures(), this.previousPosition = null, this.gm.mapAdapter.setDragPan(!0), e.featureData && e.markerData ? (this.sendMarkerEvent("marker_released", e.featureData, e.markerData), { next: !1 }) : (te.debug("ShapeMarkersHelper.onMouseUp: no active marker or featureData", e), { next: !0 });
  }
  onMouseMove(e) {
    return !this.activeMarker || !Ke(e, { warning: !0 }) ? { next: !0 } : (this.throttledMethods.sendMarkerMoveEvent(e), { next: !1 });
  }
  onMouseRightButtonClick(e) {
    if (!Ke(e, { warning: !0 }))
      return { next: !0 };
    const r = this.getFeatureMarkerByMouseEvent(e);
    return r && r.instance.parent ? (this.throttledMethods.sendMarkerRightClickEvent(
      r.instance.parent,
      r
    ), { next: !1 }) : { next: !0 };
  }
  isShapeMarkerAllowed() {
    return wE(this.shapeMarkerAllowedModes, this.gm.getActiveEditModes()).length > 0;
  }
  convertToVertexMarker(e) {
    if (e.type === "edge" && e.instance.parent) {
      const r = e.position, s = e.instance.parent;
      this.removeMarker(e);
      const u = this.createMarker({
        type: "vertex",
        positionData: r,
        parentFeature: s
      }), l = s.getGeoJson(), f = Ck(l, r.coordinate);
      if (f) {
        const h = f.path.join("."), p = s.markers.get(h);
        return p && this.removeMarker(p), s.markers.set(h, u), u;
      }
    }
    return te.error("ShapeMarkersHelper.convertToVertexMarker: invalid marker type", e), e;
  }
  getFeatureMarkerByMouseEvent(e) {
    const r = this.gm.features.getFeatureByMouseEvent({
      event: e,
      sourceNames: [K.main]
    });
    if (r?.parent?.markers) {
      const s = BE(
        r.parent.markers,
        (u) => u.instance === r
      );
      if (s?.type !== "dom")
        return s;
    }
    return null;
  }
  addMarkers() {
    this.gm.features.forEach((e) => {
      if (!e || !this.allowedShapes.includes(e.shape) || e.getShapeProperty("disableEdit") === !0)
        return;
      this.addCenterMarker(e);
      const r = this.getAllShapeSegments(e), s = this.getEndMarkerIndexes(e);
      r.forEach((u, l) => {
        if (this.isMarkerIndexAllowed(
          e.shape,
          l,
          r.length
        )) {
          const h = this.createOrUpdateVertexMarker(u.segment.start, e);
          if (e.markers.set(h.markerKey, h.markerData), s.has(l)) {
            const p = this.createOrUpdateVertexMarker(
              u.segment.end,
              e
            );
            e.markers.set(p.markerKey, p.markerData);
          }
        }
        if (this.isEdgeMarkerAllowed(e)) {
          const h = this.createOrUpdateEdgeMarker(u, e);
          e.markers.set(h.markerKey, h.markerData);
        }
      });
    });
  }
  addCenterMarker(e) {
    const r = e.getShapeProperty("center");
    if (r) {
      const s = this.createMarker({
        type: "center",
        positionData: {
          path: [],
          coordinate: r
        },
        parentFeature: e
      });
      e.markers.set("center", s);
    }
  }
  getAllShapeSegments(e) {
    const r = e.getGeoJson(), s = [];
    return $l(r, (u, l) => {
      s.push({
        segment: u,
        middle: this.getSegmentMiddlePosition(u),
        edgeMarkerKey: this.getEdgeMarkerKey(l)
      });
    }), s;
  }
  isEdgeMarkerAllowed(e) {
    return this.edgeMarkersAllowed && this.edgeMarkerAllowedShapes.includes(e.shape);
  }
  isMarkerIndexAllowed(e, r, s) {
    const u = Math.floor(s / 4);
    return e === "circle" ? (r + u / 2) % u === 0 : e === "ellipse" ? r % u === 0 : !0;
  }
  getEdgeMarkerKey(e) {
    return `edge.${e}`;
  }
  getEndMarkerIndexes(e) {
    const r = e.getGeoJson().geometry;
    return e.shape !== "line" || !["LineString", "MultiLineString"].includes(r.type) ? /* @__PURE__ */ new Set() : r.type === "MultiLineString" ? r.coordinates.reduce(
      (u, l) => (u.indexes.add(u.sum + l.length - 2), u.sum += l.length - 1, u),
      { sum: 0, indexes: /* @__PURE__ */ new Set() }
    ).indexes : /* @__PURE__ */ new Set([r.coordinates.length - 2]);
  }
  getSegmentMiddlePosition(e) {
    const r = this.gm.mapAdapter.project(e.start.coordinate), s = this.gm.mapAdapter.project(e.end.coordinate), u = [
      (r[0] + s[0]) / 2,
      (r[1] + s[1]) / 2
    ], l = e.start.path.slice(0, e.start.path.length - 1).concat([-1]);
    return {
      coordinate: this.gm.mapAdapter.unproject(u),
      path: l
    };
  }
  removeMarkers() {
    this.gm.features.forEach((e, r) => {
      const s = this.gm.features.get(K.main, r);
      s && (s.markers.forEach((u) => {
        u.type !== "dom" ? this.gm.features.delete(u.instance) : te.error("Non a FeatureData marker", u);
      }), s.markers = /* @__PURE__ */ new Map());
    });
  }
  removeMarker(e) {
    if (e.type === "dom") {
      te.error("Wrong marker type", e);
      return;
    }
    const r = e.instance.parent;
    if (!r) {
      te.error("Missing parent feature data", e);
      return;
    }
    try {
      r.markers.forEach((s, u) => {
        if (s === e)
          throw this.gm.features.delete(s.instance), r.markers.delete(u), new Error("break");
      });
    } catch {
    }
  }
  handleGmDraw(e) {
    return Kl(e) ? (["feature_created", "mode_start"].includes(e.action) && this.debouncedMethods.refreshMarkers(), { next: !0 }) : (te.error("ShapeMarkersHelper.handleGmDraw: not a draw event", e), { next: !0 });
  }
  refreshMarkers() {
    this.gm.options.isModeEnabled("helper", "shape_markers") && (this.removeMarkers(), this.addMarkers());
  }
  handleGmEdit(e) {
    return Qi(e) ? (e.action === "feature_updated" && this.handleShapeUpdate(e), { next: !0 }) : (te.error("ShapeMarkersHelper.handleGmEdit: not an edit event", e), { next: !0 });
  }
  handleShapeUpdate(e) {
    const r = e.targetFeatures[0];
    if (!r) {
      te.error("ShapeMarkersHelper.handleShapeUpdate: no featureData", e);
      return;
    }
    this.activeMarker?.type === "edge" && (this.activeMarker = this.convertToVertexMarker(this.activeMarker));
    const s = this.getAllShapeSegments(r), u = new Set(r.markers.keys()), l = this.getEndMarkerIndexes(r);
    s.forEach((f, h) => {
      if (this.isMarkerIndexAllowed(
        r.shape,
        h,
        s.length
      )) {
        const d = this.createOrUpdateVertexMarker(f.segment.start, r);
        if (u.delete(d.markerKey), l.has(h)) {
          const v = this.createOrUpdateVertexMarker(
            f.segment.end,
            r
          );
          u.delete(v.markerKey);
        }
      }
      if (this.isEdgeMarkerAllowed(r)) {
        const d = this.createOrUpdateEdgeMarker(f, r);
        u.delete(d.markerKey);
      }
    }), this.updateCenterMarkerPosition(r), u.delete("center"), u.forEach((f) => {
      const h = r.markers.get(f);
      h && h.type !== "dom" ? this.gm.features.delete(h.instance) : te.error("Non a FeatureData marker"), r.markers.delete(f);
    });
  }
  createOrUpdateVertexMarker(e, r) {
    const s = e.path.join(".");
    let u = r.markers.get(s) || null;
    if (u && u?.type !== "vertex")
      throw new Error(`Invalid marker type "${u?.type}" for edge marker`);
    return u ? (Zh(u.position.coordinate, e.coordinate) || this.gm.features.updateMarkerFeaturePosition(u.instance, e.coordinate), u.position = e) : (u = this.createMarker({
      type: "vertex",
      positionData: e,
      parentFeature: r
    }), r.markers.set(s, u)), { markerKey: s, markerData: u };
  }
  createOrUpdateEdgeMarker(e, r) {
    let s = r.markers.get(e.edgeMarkerKey) || null;
    if (s && s?.type !== "edge")
      throw new Error(`Invalid marker type "${s?.type}" for edge marker`);
    return s ? (Zh(s.position.coordinate, e.middle.coordinate) || s.instance.updateGeoJsonGeometry({
      type: "Point",
      coordinates: e.middle.coordinate
    }), s.position = e.middle, s.segment = e.segment) : (s = this.createMarker({
      type: "edge",
      positionData: e.middle,
      segment: e.segment,
      parentFeature: r
    }), r.markers.set(e.edgeMarkerKey, s)), { markerKey: e.edgeMarkerKey, markerData: s };
  }
  updateCenterMarkerPosition(e) {
    const r = e.markers.get("center") || null, s = e.getShapeProperty("center");
    r && r.type !== "dom" && s && (r.instance.updateGeoJsonGeometry({
      type: "Point",
      coordinates: s
    }), r.position.coordinate = s);
  }
  sendMarkerEvent(e, r, s) {
    const u = {
      name: `${ae}:edit:marker`,
      level: "system",
      actionType: "edit",
      mode: "change",
      action: e,
      featureData: r,
      markerData: s
    };
    this.gm.events.fire(`${ae}:edit`, u);
  }
  sendMarkerRightClickEvent(e, r) {
    const s = {
      name: `${ae}:edit:marker`,
      level: "system",
      actionType: "edit",
      mode: "change",
      action: "marker_right_click",
      featureData: e,
      markerData: r
    };
    this.gm.events.fire(`${ae}:edit`, s);
  }
  sendMarkerMoveEvent(e) {
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    this.activeMarker && this.activeFeatureData && (this.pinEnabled ? this.sharedMarkers : [
      {
        markerData: this.activeMarker,
        featureData: this.activeFeatureData
      }
    ]).forEach((u) => {
      if (this.previousPosition) {
        const l = {
          name: `${ae}:edit:marker_move`,
          level: "system",
          actionType: "edit",
          mode: "drag",
          action: "marker_move",
          featureData: u.featureData,
          markerData: u.markerData,
          lngLatStart: this.previousPosition,
          lngLatEnd: r
        };
        this.gm.events.fire(`${ae}:edit`, l);
      }
    }), this.previousPosition = r;
  }
  createMarker({
    type: e,
    segment: r,
    positionData: s,
    parentFeature: u
  }) {
    const l = s.coordinate, f = this.gm.features.createMarkerFeature({
      sourceName: u.sourceName,
      parentFeature: u,
      type: e,
      coordinate: l
    });
    if (!f)
      throw new Error(`Missine feature data for the "${e}" marker`);
    if (e === "edge" && r)
      return {
        type: e,
        instance: f,
        position: $t(s),
        segment: r
      };
    if (e === "vertex" || e === "center")
      return {
        type: e,
        instance: f,
        position: $t(s)
      };
    throw new Error(`Invalid marker type "${e}" with segment: ${r}`);
  }
}
class HM extends Dr {
  mode = "snapping";
  tolerance = 18;
  lineSnappingShapes = [
    "circle",
    "line",
    "rectangle",
    "polygon",
    "snap_guide"
  ];
  eventHandlers = {};
  shapeSnappingHandlers = {
    marker: this.getPointsSnapping.bind(this),
    circle: this.getLineSnapping.bind(this),
    circle_marker: this.getPointsSnapping.bind(this),
    text_marker: this.getPointsSnapping.bind(this),
    line: this.getLineSnapping.bind(this),
    rectangle: this.getLineSnapping.bind(this),
    polygon: this.getLineSnapping.bind(this),
    snap_guide: this.getLineSnapping.bind(this)
  };
  excludedFeature = /* @__PURE__ */ new Set();
  customSnappingLngLats = /* @__PURE__ */ new Map();
  customSnappingFeatures = /* @__PURE__ */ new Set();
  onStartAction() {
    this.gm.markerPointer.setSnapping(!0);
  }
  onEndAction() {
    this.gm.markerPointer.setSnapping(!1);
  }
  addExcludedFeature(e) {
    this.excludedFeature.add(e);
  }
  clearExcludedFeatures() {
    this.excludedFeature.clear();
  }
  addCustomSnappingFeature(e) {
    this.customSnappingFeatures.add(e);
  }
  removeCustomSnappingFeature(e) {
    this.customSnappingFeatures.delete(e);
  }
  clearCustomSnappingFeature() {
    this.customSnappingFeatures.clear();
  }
  setCustomSnappingCoordinates(e, r) {
    this.customSnappingLngLats.set(e, r);
  }
  clearCustomSnappingCoordinates(e) {
    this.customSnappingLngLats.delete(e);
  }
  getSnappedLngLat(e, r) {
    let s = this.getCustomLngLatsSnapping(r);
    if (s)
      return s;
    const u = this.getFeaturesInPointBounds(r).filter(
      (l) => !this.excludedFeature.has(l)
    );
    return s = this.getFeaturePointsSnapping(u, e, r), s || (s = this.getFeatureLinesSnapping(u, e, r), s) ? s : e;
  }
  getCustomLngLatsSnapping(e) {
    const r = {
      distance: 1 / 0,
      lngLat: null
    };
    return this.customSnappingLngLats.forEach((s) => {
      s.forEach((u) => {
        const l = this.gm.mapAdapter.project(u), f = Ua(e, l);
        f < this.tolerance && f < r.distance && (r.distance = f, r.lngLat = u);
      });
    }), r.lngLat;
  }
  getFeaturePointsSnapping(e, r, s) {
    let u = e.map((l) => ({
      shape: l.shape,
      ...this.getPointsSnapping(l, r, s)
    })).filter((l) => l.distance < this.tolerance);
    return u.length ? (u = xh(u, ["distance"]), u[0].lngLat) : null;
  }
  getFeatureLinesSnapping(e, r, s) {
    let u = e.filter((l) => this.lineSnappingShapes.includes(l.shape)).map((l) => {
      const f = this.shapeSnappingHandlers[l.shape];
      return f ? {
        shape: l.shape,
        ...f(l, r, s)
      } : null;
    }).filter((l) => l !== null && l.distance < this.tolerance);
    return u.length ? (u = xh(u, ["distance"]), u[0].lngLat) : null;
  }
  getFeaturesInPointBounds(e) {
    const r = [
      [e[0] - this.tolerance, e[1] - this.tolerance],
      [e[0] + this.tolerance, e[1] + this.tolerance]
    ];
    return this.gm.features.getFeaturesByScreenBounds({ bounds: r, sourceNames: [K.main, K.temporary] }).filter((s) => s.temporary ? this.customSnappingFeatures.has(s) : !0) || [];
  }
  getPointsSnapping(e, r, s) {
    const u = e.getGeoJson(), l = {
      distance: 1 / 0,
      coord: null
      // lngLat coords
    };
    return ia(
      u,
      (f) => {
        const h = this.gm.mapAdapter.project(f.coordinate), p = Ua(s, h);
        p < this.tolerance && p < l.distance && (l.distance = p, l.coord = f.coordinate);
      },
      !0
    ), {
      lngLat: l.coord ? l.coord : r,
      distance: l.distance
    };
  }
  getLineSnapping(e, r, s) {
    const u = e.getGeoJson();
    return this.getNearestLinePointData(u, r, s);
  }
  getNearestLinePointData(e, r, s) {
    const u = {
      lngLat: r,
      distance: 1 / 0
    }, l = this.gm.mapAdapter.getEuclideanNearestLngLat(e, r), f = this.gm.mapAdapter.project(l);
    return u.distance = Ua(f, s), u.distance < this.tolerance && (u.lngLat = l), u;
  }
}
class JM extends Dr {
  mode = "zoom_to_features";
  eventHandlers = {};
  onStartAction() {
    this.fitMapToFeatures(), setTimeout(() => {
      this.gm.options.disableMode("helper", "zoom_to_features");
    });
  }
  onEndAction() {
  }
  fitMapToFeatures() {
    const e = this.gm.features.asGeoJsonFeatureCollection({
      sourceNames: [K.main, ...at ? [K.standby] : []]
    }), r = qd(e), s = [
      [r[0], r[1]],
      [r[2], r[3]]
    ];
    try {
      this.gm.mapAdapter.fitBounds(s, { padding: 20 });
    } catch {
      te.warn("Wrong bounds for zooming to features", s, e);
    }
  }
}
const fl = {
  shape_markers: YM,
  pin: null,
  snapping: HM,
  snap_guides: null,
  measurements: null,
  auto_trace: null,
  geofencing: null,
  zoom_to_features: JM,
  click_to_edit: null
}, $M = (t, e) => fl[e] ? new fl[e](t) : (te.error(`Helper "${e}" is not available`), null);
class VM extends bo {
  eventHandlers = {
    [`${ae}:helper`]: this.handleHelperEvent.bind(this)
  };
  constructor(e, r) {
    super(e), r.attachEvents(this.eventHandlers);
  }
  handleHelperEvent(e) {
    if (!jl(e))
      return { next: !0 };
    const r = `${e.actionType}__${e.mode}`;
    return e.action === "mode_start" ? (this.trackExclusiveModes(e), this.start(r, e), this.trackRelatedModes(e)) : e.action === "mode_end" && (this.trackRelatedModes(e), this.end(r)), { next: !0 };
  }
  start(e, r) {
    const s = $M(this.gm, r.mode);
    s && (e in this.gm.actionInstances && te.error(`Action instance "${e}" already exists`), this.gm.actionInstances[e] = s, s.startAction());
  }
  end(e) {
    const r = this.gm.actionInstances[e];
    r instanceof Dr ? (r.endAction(), delete this.gm.actionInstances[e]) : console.error(`Wrong action instance for edit event "${e}":`, r);
  }
}
class XM {
  gm;
  bus;
  listeners = {};
  constructor(e) {
    this.gm = e, this.bus = new hk(this.gm), this.listeners = {
      draw: new z2(this.gm, this.bus),
      edit: new qM(this.gm, this.bus),
      helper: new VM(this.gm, this.bus),
      control: new fk(this.gm, this.bus)
    };
  }
  fire(e, r) {
    this.listeners[r.actionType] || te.error(`Can't find event listener for "${r.actionType}" event type`), this.bus.fireEvent(e, r);
  }
}
const Vf = 5e3;
class WM {
  gm;
  updateStorage;
  autoUpdatesEnabled = !0;
  delayedSourceUpdateMethods;
  // Track pending update promises per source to allow waiting for MapLibre to commit data
  // Using an array to track multiple concurrent promises (prevents overwriting if rapid updates occur)
  pendingUpdatePromises;
  constructor(e) {
    this.gm = e, this.updateStorage = Object.fromEntries(Vu(K).map((r) => [r, []])), this.pendingUpdatePromises = {}, this.delayedSourceUpdateMethods = Object.fromEntries(
      Vu(K).map((r) => [
        r,
        Ag(
          () => this.updateSourceActual(r),
          this.gm.options.settings.throttlingDelay
        )
      ])
    );
  }
  updatesPending(e) {
    return !!this.updateStorage[e]?.length || !!(this.pendingUpdatePromises[e]?.length ?? 0);
  }
  getFeatureId(e) {
    const r = e.properties?.[qt] ?? e.id;
    return r == null && console.warn("Feature id is null or undefined", e), r;
  }
  updateSource({
    sourceName: e,
    diff: r
  }) {
    r && this.updateStorage[e].push(r), this.delayedSourceUpdateMethods[e]();
  }
  updateSourceActual(e) {
    const r = this.gm.features.sources[e];
    if (this.autoUpdatesEnabled && r) {
      if (!r.loaded) {
        setTimeout(() => {
          this.updateSourceActual(e);
        }, this.gm.options.settings.throttlingDelay);
        return;
      }
      const s = this.getCombinedDiff(e);
      if (s) {
        const u = r.updateData(s);
        this.addPendingPromise(e, u);
      }
      this.updateStorage[e].length > 0 && setTimeout(
        () => this.updateSourceActual(e),
        this.gm.options.settings.throttlingDelay
      );
    }
  }
  /**
   * Add a pending promise to the tracking array for a source.
   * Automatically removes the promise from the array when it resolves.
   */
  addPendingPromise(e, r) {
    this.pendingUpdatePromises[e] || (this.pendingUpdatePromises[e] = []), this.pendingUpdatePromises[e].push(r), r.finally(() => {
      const s = this.pendingUpdatePromises[e];
      if (s) {
        const u = s.indexOf(r);
        u !== -1 && s.splice(u, 1), s.length === 0 && delete this.pendingUpdatePromises[e];
      }
    });
  }
  /**
   * Wait for any pending MapLibre source updates to complete.
   * This ensures data is committed before events are fired.
   *
   * When there are queued updates in updateStorage that haven't been processed yet
   * (due to throttling), this method flushes them immediately and waits for completion.
   *
   * Note: We call updateData() directly here rather than going through updateSourceActual()
   * because updateSourceActual() checks `!source.loaded` and may delay processing.
   * When waiting for pending updates (e.g., for event handlers), we need immediate processing.
   *
   * This is safe and won't cause duplicates because getCombinedDiff() atomically drains
   * the storage - whoever calls it first gets the diffs, subsequent calls get null.
   *
   * IMPORTANT: MapLibre's _updateWorkerData() has a guard that returns early if already
   * updating (`if (this._isUpdatingWorker) return`). This means updateData() can return
   * a promise that resolves before the data is actually committed to serialize().
   * To handle this, we loop until both storage and pending promises are empty, with
   * a microtask yield between iterations to allow MapLibre's recursive updates to run.
   */
  async waitForPendingUpdates(e) {
    const r = this.gm.features.sources[e];
    if (r) {
      for (; this.updateStorage[e]?.length || this.pendingUpdatePromises[e]?.length; ) {
        if (this.updateStorage[e]?.length) {
          const u = this.getCombinedDiff(e);
          if (u) {
            const l = r.updateData(u);
            this.addPendingPromise(e, l);
          }
        }
        const s = this.pendingUpdatePromises[e];
        s?.length && await Promise.all(s), await new Promise((u) => setTimeout(u, 0));
      }
      await new Promise((s) => requestAnimationFrame(s));
    }
  }
  withAtomicSourcesUpdate(e) {
    try {
      return this.autoUpdatesEnabled = !1, e();
    } finally {
      et(this.gm.features.sources).forEach((r) => {
        this.updateSource({ sourceName: r });
      }), this.autoUpdatesEnabled = !0;
    }
  }
  getCombinedDiff(e) {
    let r = {
      remove: [],
      add: [],
      update: []
    };
    for (let s = 0; s < Vf && this.updateStorage[e][s] !== void 0; s += 1)
      r = this.mergeGeoJsonDiff(r, this.updateStorage[e][s]);
    return this.updateStorage[e] = this.updateStorage[e].slice(Vf), Object.values(r).find((s) => s.length) ? r : null;
  }
  mergeGeoJsonDiff(e, r) {
    const s = e ?? { add: [], update: [], remove: [] }, u = r ?? { add: [], update: [], remove: [] }, l = new Set(u.remove), f = s.add?.filter((d) => !l.has(this.getFeatureId(d))) || [], h = s.update?.filter((d) => !l.has(this.getFeatureId(d))) || [], p = [];
    return u.update?.forEach((d) => {
      const v = f.findIndex(
        (x) => this.getFeatureId(x) === this.getFeatureId(d)
      ), _ = h.findIndex(
        (x) => this.getFeatureId(x) === this.getFeatureId(d)
      );
      if (v === -1 && _ === -1) {
        p.push(d);
        return;
      }
      v !== -1 && (f[v] = d), _ !== -1 && (h[_] = d);
    }), {
      add: [...f, ...u.add || []],
      update: [...h, ...p],
      remove: [...s.remove || [], ...u.remove || []]
    };
  }
}
class jM {
  isInstanceAvailable() {
    return this.sourceInstance ? !0 : (te.error("Source instance is not available"), !1);
  }
}
class ZM {
  gm;
  featureCounter = 0;
  featureStore = /* @__PURE__ */ new Map();
  featureStoreAllowedSources = [K.main, K.temporary];
  sources;
  defaultSourceName = K.main;
  updateManager;
  layers;
  constructor(e) {
    this.gm = e, this.updateManager = new WM(e), this.sources = Object.fromEntries(
      Vu(K).map((r) => [r, null])
    ), this.layers = [];
  }
  get forEach() {
    return this.filteredForEach((e) => !e.temporary);
  }
  get tmpForEach() {
    return this.filteredForEach((e) => e.temporary);
  }
  init() {
    if (Object.values(this.sources).some((e) => e !== null)) {
      te.warn("features.init(): features are already initialized");
      return;
    }
    et(this.sources).forEach((e) => {
      this.sources[e] = this.createSource(e);
    }), this.hydrateFromExistingSources(), this.gm.options.settings.useDefaultLayers && (this.layers = this.createLayers());
  }
  /**
   * Hydrates the feature store from existing sources and syncs the ID counter.
   * This is called during init to restore state when remounting on preserved sources.
   */
  hydrateFromExistingSources() {
    let e = 0;
    et(this.sources).forEach((r) => {
      const s = this.sources[r];
      if (s)
        try {
          const u = s.getGeoJson();
          if (u && "features" in u)
            for (const l of u.features) {
              const f = l.properties?.[qt];
              if (!f) continue;
              if (typeof f == "string" && f.startsWith("feature-")) {
                const d = parseInt(f.replace("feature-", ""), 10);
                !isNaN(d) && d > e && (e = d);
              }
              if (this.featureStore.has(f)) continue;
              const h = l, p = new Gs({
                gm: this.gm,
                id: f,
                parent: null,
                source: s,
                geoJsonShapeFeature: $t(h),
                skipSourceUpdate: !0
              });
              this.featureStore.set(f, p);
            }
        } catch {
        }
    }), e > this.featureCounter && (this.featureCounter = e);
  }
  getNewFeatureId(e) {
    if (this.featureCounter += 1, this.gm.options.settings.idGenerator)
      return this.gm.options.settings.idGenerator(e);
    let r = `feature-${this.featureCounter}`;
    for (; this.featureStore.has(r); )
      this.featureCounter += 1, r = `feature-${this.featureCounter}`;
    return r;
  }
  filteredForEach(e) {
    return (r) => {
      this.featureStore.forEach((s, u, l) => {
        e(s) && r(s, u, l);
      });
    };
  }
  has(e, r) {
    const s = this.featureStore.get(r);
    return !!s && s?.source === this.sources[e];
  }
  get(e, r) {
    const s = this.featureStore.get(r) || null;
    return s?.source === this.sources[e] ? s : null;
  }
  add(e) {
    if (this.featureStore.has(e.id)) {
      te.error(`features.add: feature with the id "${e.id}" already exists`);
      return;
    }
    this.featureStoreAllowedSources.includes(e.source.id) && this.featureStore.set(e.id, e);
  }
  setDefaultSourceName(e) {
    this.defaultSourceName = e;
  }
  createSource(e) {
    const r = this.gm.mapAdapter.addSource(e, {
      type: "FeatureCollection",
      features: []
    });
    if (r)
      return r;
    throw new Error(`Features: failed to create the source: "${e}"`);
  }
  delete(e) {
    let r;
    e instanceof Gs ? r = e : r = this.featureStore.get(e) || null, r ? (this.featureStore.delete(r.id), r.delete()) : te.error(`features.delete: feature "${e}" not found`);
  }
  deleteAll() {
    this.featureStore.forEach((e) => {
      e.delete();
    }), this.featureStore.clear();
  }
  getFeatureByMouseEvent({
    event: e,
    sourceNames: r
  }) {
    if (!Ke(e, { warning: !0 }))
      return null;
    const s = [e.point.x, e.point.y], u = this.gm.mapAdapter.queryFeaturesByScreenCoordinates({
      queryCoordinates: s,
      sourceNames: r
    });
    return u.length ? u[0] : null;
  }
  getFeaturesByGeoJsonBounds({
    geoJson: e,
    sourceNames: r
  }) {
    const s = Vl(e), u = this.gm.mapAdapter.coordBoundsToScreenBounds(s);
    return this.getFeaturesByScreenBounds({ bounds: u, sourceNames: r });
  }
  getFeaturesByScreenBounds({
    bounds: e,
    sourceNames: r
  }) {
    return this.gm.mapAdapter.queryFeaturesByScreenCoordinates({
      queryCoordinates: e,
      sourceNames: r
    });
  }
  createFeature({
    featureId: e,
    shapeGeoJson: r,
    parent: s,
    sourceName: u,
    imported: l
  }) {
    const f = this.sources[u];
    if (!f)
      return te.error("Features.createFeature Missing source for feature creation"), null;
    const h = e ?? r.properties[qt] ?? this.getNewFeatureId(r);
    if (this.featureStore.get(h))
      return te.error(
        `Features.createFeature: feature with the id "${h}" already exists`,
        this.featureStore.get(h)
      ), null;
    const p = new Gs({
      gm: this.gm,
      id: h,
      parent: s || null,
      source: f,
      geoJsonShapeFeature: $t(r)
    });
    return this.add(p), !p.temporary && !l && this.fireFeatureCreatedEvent(p), this.featureCounter += 1, p;
  }
  importGeoJson(e, r) {
    const s = r ?? {}, u = "features" in e ? e.features : [e], l = {
      stats: {
        total: 0,
        success: 0,
        failed: 0,
        overwritten: 0
      },
      addedFeatures: []
    };
    return u.forEach((f) => {
      let h = null;
      l.stats.total += 1;
      const p = US(f);
      if (p) {
        if (s.idPropertyName) {
          const d = zS(p, s.idPropertyName);
          d && (p.id = d);
        }
        if (s.overwrite) {
          const d = p.id ?? p.properties?.[qt];
          d && this.featureStore.has(d) && (this.delete(d), l.stats.overwritten += 1);
        }
        h = this.importGeoJsonFeature(p);
      }
      h ? (l.addedFeatures.push(h), l.stats.success += 1) : l.stats.failed += 1;
    }), l;
  }
  importGeoJsonFeature(e) {
    const r = this.defaultSourceName, s = this.getFeatureShapeByGeoJson(e);
    return s ? this.createFeature({
      featureId: e.id,
      shapeGeoJson: e,
      sourceName: r,
      imported: !0
    }) : (te.error("features.addGeoJsonFeature: unknown shape", s), null);
  }
  getAll() {
    return this.exportGeoJson();
  }
  /**
   * Exports GeoJSON from Geoman's internal state.
   *
   * This is the recommended method for most use cases as it always returns the latest
   * feature data, even during event handlers before MapLibre has committed changes.
   *
   * @param options - Export options
   * @param options.allowedShapes - Filter to only include specific shape types
   * @param options.idPropertyName - Property name to use for feature IDs (default: 'gm_id')
   * @returns GeoJSON FeatureCollection with all features
   *
   * @example
   * // Export all features
   * const geoJson = geoman.features.exportGeoJson();
   *
   * // Export only polygons and circles
   * const shapes = geoman.features.exportGeoJson({ allowedShapes: ['polygon', 'circle'] });
   */
  exportGeoJson({
    allowedShapes: e,
    idPropertyName: r
  } = { allowedShapes: void 0 }) {
    return this.asGeoJsonFeatureCollection({
      sourceNames: [K.main, ...at ? [K.standby] : []],
      shapeTypes: e || [...ir],
      idPropertyName: r,
      useMapLibreSource: !1
    });
  }
  /**
   * Exports GeoJSON directly from MapLibre's underlying source data.
   *
   * This method reads from MapLibre's serialized source state, which may lag slightly
   * behind Geoman's internal state during rapid updates or in event handlers.
   *
   * Use this method when you specifically need to verify what MapLibre has committed
   * to its source, for debugging, or for synchronization with external systems that
   * read directly from MapLibre sources.
   *
   * For most use cases, prefer `exportGeoJson()` which uses Geoman's internal state
   * and is always up-to-date.
   *
   * @param options - Export options
   * @param options.allowedShapes - Filter to only include specific shape types
   * @param options.idPropertyName - Property name to use for feature IDs (default: 'gm_id')
   * @returns GeoJSON FeatureCollection from MapLibre's source
   *
   * @example
   * // Export features as stored in MapLibre source
   * const geoJson = geoman.features.exportGeoJsonFromSource();
   *
   * // Verify MapLibre has committed the data
   * await geoman.features.waitForPendingUpdates();
   * const committed = geoman.features.exportGeoJsonFromSource();
   */
  exportGeoJsonFromSource({
    allowedShapes: e,
    idPropertyName: r
  } = { allowedShapes: void 0 }) {
    return this.asGeoJsonFeatureCollection({
      sourceNames: [K.main, ...at ? [K.standby] : []],
      shapeTypes: e || [...ir],
      idPropertyName: r,
      useMapLibreSource: !0
    });
  }
  asGeoJsonFeatureCollection({
    shapeTypes: e,
    sourceNames: r,
    idPropertyName: s,
    useMapLibreSource: u = !1
  }) {
    const l = {
      type: "FeatureCollection",
      features: []
    };
    return s ??= qt, r.forEach((f) => {
      const h = this.sources[f];
      h && (u ? h.getGeoJson() : h.getGmGeoJson()).features.filter((d) => !!d).forEach((d) => {
        const v = this.get(f, d.id);
        if (!v)
          return;
        const _ = d.properties[qt];
        s !== qt && (d.properties[s] = _, delete d.properties[qt]), (e === void 0 || e.includes(v.shape)) && l.features.push({ ...d, id: _ });
      });
    }), l;
  }
  convertSourceToGm(e) {
    const r = [], s = e.getGeoJson(), u = "features" in s ? s.features : [s];
    return this.gm.mapAdapter.getSource(e.id).remove(), u.forEach((f) => {
      const h = this.addGeoJsonFeature({
        shapeGeoJson: f,
        defaultSource: !0
      });
      h && r.push(h);
    }), r;
  }
  addGeoJsonFeature({
    shapeGeoJson: e,
    sourceName: r,
    defaultSource: s
  }) {
    let u;
    if (s ? (u = this.defaultSourceName, r && te.warn("features.addGeoJsonFeature: default source is set, sourceName is ignored")) : u = r || null, !u)
      return te.error("features.addGeoJsonFeature: missing sourceName"), null;
    const l = this.getFeatureShapeByGeoJson(e);
    return l ? this.createFeature({
      featureId: e.id,
      shapeGeoJson: {
        ...e,
        properties: { ...e.properties, shape: l }
      },
      sourceName: u
    }) : (te.error("features.addGeoJsonFeature: unknown shape", l), null);
  }
  createLayers() {
    const e = [];
    return et(this.sources).forEach((r) => {
      et(this.gm.options.layerStyles).forEach((s) => {
        this.gm.options.layerStyles[s][r].forEach((l) => {
          const f = this.createGenericLayer({
            sourceName: r,
            shapeNames: [s],
            partialStyle: l
          });
          f && e.push(f);
        });
      });
    }), e;
  }
  createGenericLayer({
    sourceName: e,
    shapeNames: r,
    partialStyle: s
  }) {
    const u = this.getGenericLayerName({ sourceName: e, shapeNames: r, partialStyle: s });
    if (!u)
      throw new Error(`Can't create a layer, for ${{ sourceName: e, shapeNames: r, partialStyle: s }}`);
    const l = {
      ...s,
      id: u,
      source: e,
      filter: ["in", ["get", `${vt}shape`], ["literal", r]]
    };
    return this.gm.mapAdapter.addLayer(l);
  }
  getGenericLayerName({
    sourceName: e,
    shapeNames: r,
    partialStyle: s
  }) {
    const l = r.length === 1 ? r[0] : "mixed", f = (p) => `${e}-${l}__${s.type}-layer-${p}`;
    let h = null;
    for (let p = 0; p < 100; p += 1) {
      const d = f(p);
      if (!this.gm.mapAdapter.getLayer(d))
        return h = d, h;
    }
    return null;
  }
  getFeatureShapeByGeoJson(e) {
    const r = {
      Point: "marker",
      LineString: "line",
      MultiLineString: "line",
      Polygon: "polygon",
      MultiPolygon: "polygon"
    }, s = e.properties;
    return s?.shape && ir.includes(s?.shape) ? s?.shape : r[e.geometry.type] || null;
  }
  createMarkerFeature({
    parentFeature: e,
    coordinate: r,
    type: s,
    sourceName: u
  }) {
    return this.createFeature({
      sourceName: u,
      parent: e,
      shapeGeoJson: {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: r
        },
        properties: {
          [`${vt}shape`]: `${s}_marker`
        }
      }
    });
  }
  updateMarkerFeaturePosition(e, r) {
    e.updateGeoJsonGeometry({
      type: "Point",
      coordinates: r
    });
  }
  fireFeatureCreatedEvent(e) {
    if (Cr(e.shape, ir)) {
      const r = {
        name: `${ae}:draw:feature_created`,
        level: "system",
        actionType: "draw",
        mode: e.shape,
        action: "feature_created",
        featureData: e
      };
      this.gm.events.fire(`${ae}:draw`, r);
    }
  }
}
class KM {
  getEuclideanNearestLngLat(e, r) {
    const s = this.project(r);
    let u = [0, 0], l = 1 / 0;
    return $l(e, (f) => {
      const h = this.project(f.start.coordinate), p = this.project(f.end.coordinate), d = Rk(
        h,
        p,
        s
      ), v = Ua(s, d);
      v < l && (l = v, u = [d[0], d[1]]);
    }), this.unproject(u);
  }
  getDistance(e, r) {
    return jd(e, r, { units: "meters" });
  }
}
class QM {
  isInstanceAvailable() {
    return this.layerInstance ? !0 : (te.error("layerInstance is not available"), !1);
  }
}
class wu extends QM {
  gm;
  layerInstance = null;
  mapInstance;
  constructor({
    gm: e,
    layerId: r,
    options: s
  }) {
    super(), this.gm = e, this.mapInstance = this.gm.mapAdapter.mapInstance, s ? this.layerInstance = this.createLayer(s) : this.layerInstance = this.mapInstance.getLayer(r) || null;
  }
  get id() {
    if (!this.isInstanceAvailable())
      throw new Error("Layer instance is not available");
    return this.layerInstance.id;
  }
  get source() {
    if (!this.isInstanceAvailable())
      throw new Error("Layer instance is not available");
    return this.layerInstance.source;
  }
  createLayer(e) {
    let r = this.mapInstance.getLayer(e.id);
    return r ? te.warn(`Layer "${e.id}" already exists, skipping`) : (this.mapInstance.addLayer(e), r = this.mapInstance.getLayer(e.id)), r ?? null;
  }
  remove() {
    this.isInstanceAvailable() && this.mapInstance.removeLayer(this.id), this.layerInstance = null;
  }
}
class eI extends Bl {
  markerInstance;
  constructor({
    mapInstance: e,
    options: r,
    lngLat: s
  }) {
    super(), this.markerInstance = new gl.Marker(r).setLngLat(s).addTo(e);
  }
  getElement() {
    return this.isMarkerInstanceAvailable() && this.markerInstance?.getElement() || null;
  }
  setLngLat(e) {
    this.isMarkerInstanceAvailable() && this.markerInstance?.setLngLat(e);
  }
  getLngLat() {
    return this.isMarkerInstanceAvailable() ? this.markerInstance?.getLngLat().toArray() || [0, 0] : [0, 0];
  }
  remove() {
    this.markerInstance?.remove();
  }
}
class tI {
  isInstanceAvailable() {
    return this.popupInstance ? !0 : (te.error("Popup instance is not available"), !1);
  }
}
class nI extends tI {
  popupInstance;
  constructor({
    mapInstance: e,
    options: r,
    lngLat: s
  }) {
    super(), this.popupInstance = new gl.Popup(r).addTo(e), s && this.setLngLat(s);
  }
  getLngLat() {
    return this.isInstanceAvailable() ? this.popupInstance.getLngLat().toArray() || [0, 0] : [0, 0];
  }
  setLngLat(e) {
    this.isInstanceAvailable() && this.popupInstance.setLngLat(e);
  }
  setHtml(e) {
    this.isInstanceAvailable() && this.popupInstance.setHTML(e);
  }
  remove() {
    this.isInstanceAvailable() && this.popupInstance.remove();
  }
}
class Xf extends jM {
  gm;
  mapInstance;
  sourceInstance;
  constructor({ gm: e, geoJson: r, sourceId: s }) {
    super(), this.gm = e, this.mapInstance = this.gm.mapAdapter.mapInstance, r ? this.sourceInstance = this.createSource({ geoJson: r, sourceId: s }) : this.sourceInstance = this.mapInstance.getSource(s) || null;
  }
  get id() {
    if (!this.isInstanceAvailable())
      throw new Error("Source instance is not available");
    return this.sourceInstance.id;
  }
  get loaded() {
    return this.mapInstance.isSourceLoaded(this.id);
  }
  createSource({ geoJson: e, sourceId: r }) {
    let s = this.mapInstance.getSource(r);
    return s ? te.warn(`Source "${s.id}" already exists, skipping`) : (this.mapInstance.addSource(r, {
      type: "geojson",
      data: e,
      promoteId: qt
    }), s = this.mapInstance.getSource(r)), s ?? null;
  }
  getGeoJson() {
    if (!this.isInstanceAvailable())
      throw new Error("Source instance is not available");
    return this.sourceInstance.serialize().data;
  }
  getGmGeoJson() {
    if (!this.isInstanceAvailable())
      throw new Error("Source instance is not available");
    const e = {
      type: "FeatureCollection",
      features: []
    };
    return this.gm.features.filteredForEach(
      (s) => s.source.id === this.sourceInstance?.id
    )((s) => {
      ir.includes(s.shape) && e.features.push(s.getGeoJson());
    }), e;
  }
  async setData(e) {
    if (!this.isInstanceAvailable())
      throw new Error("Source instance is not available");
    await this.sourceInstance.setData(e, !0);
  }
  async updateData(e) {
    if (!this.isInstanceAvailable())
      return;
    const r = this.convertUniversalDiffToMlDiff(e);
    await this.sourceInstance.updateData(r, !0);
  }
  convertUniversalDiffToMlDiff(e) {
    return {
      add: e.add?.map(this.sanitizeFeatureForAdd.bind(this)),
      update: e.update?.map(this.convertFeatureToMlUpdateDiff.bind(this)),
      remove: e.remove
    };
  }
  /**
   * Sanitize a feature for addition to the source by removing undefined property values.
   * MapLibre's protobuf encoding does not support undefined values (per MapBox vector tile spec).
   */
  sanitizeFeatureForAdd(e) {
    if (!e.properties)
      return e;
    const r = {};
    for (const [s, u] of Object.entries(e.properties))
      u !== void 0 && (r[s] = u);
    return {
      ...e,
      properties: r
    };
  }
  convertFeatureToMlUpdateDiff(e) {
    const r = [], s = [];
    return Object.entries(e.properties || {}).forEach(([u, l]) => {
      l === void 0 ? s.push(u) : r.push({ key: u, value: l });
    }), {
      id: e.properties?.[qt],
      newGeometry: e.geometry,
      addOrUpdateProperties: r,
      removeProperties: s
    };
  }
  remove() {
    this.isInstanceAvailable() && (this.gm.mapAdapter.eachLayer((e) => {
      e.source === this.sourceInstance.id && this.gm.mapAdapter.removeLayer(e.id);
    }), this.mapInstance.removeSource(this.sourceInstance.id));
  }
}
const rI = [
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "contextmenu",
  "touchstart",
  "touchend",
  "touchcancel"
], ku = (t) => rI.includes(t);
class iI extends KM {
  gm;
  mapType = "maplibre";
  mapInstance;
  constructor(e, r) {
    super(), this.gm = r, this.mapInstance = e;
  }
  getMapInstance() {
    return this.mapInstance;
  }
  isLoaded() {
    return this.mapInstance._loaded;
  }
  getContainer() {
    return this.mapInstance.getContainer();
  }
  getCanvas() {
    return this.mapInstance.getCanvas();
  }
  addControl(e) {
    this.mapInstance.addControl(e);
  }
  removeControl(e) {
    this.mapInstance.removeControl(e);
  }
  async loadImage({ id: e, image: r }) {
    if (!this.mapInstance.hasImage(e)) {
      const s = await this.mapInstance.loadImage(r);
      this.mapInstance.addImage(e, s.data);
    }
  }
  removeImage(e) {
    try {
      this.mapInstance.hasImage(e) && this.mapInstance.removeImage(e);
    } catch {
    }
  }
  getBounds() {
    return this.mapInstance.getBounds().toArray();
  }
  fitBounds(e, r) {
    this.mapInstance.fitBounds(e, r);
  }
  setCursor(e) {
    this.mapInstance.getCanvas().style.cursor = e;
  }
  disableMapInteractions(e) {
    e.forEach((r) => {
      this.mapInstance[r].disable();
    });
  }
  enableMapInteractions(e) {
    e.forEach((r) => {
      this.mapInstance[r].enable();
    });
  }
  setDragPan(e) {
    e ? this.mapInstance.dragPan.enable() : this.mapInstance.dragPan.disable();
  }
  queryFeaturesByScreenCoordinates({
    queryCoordinates: e = void 0,
    sourceNames: r
  }) {
    return wh(
      this.mapInstance.queryRenderedFeatures(e).map((u) => ({
        featureId: u.properties[qt],
        featureSourceName: u.source
      })),
      Wi
    ).map(({ featureId: u, featureSourceName: l }) => u === void 0 || !r.includes(l) ? null : this.gm.features.get(l, u) || null).filter((u) => !!u);
  }
  queryGeoJsonFeatures({
    queryCoordinates: e = void 0,
    sourceNames: r
  }) {
    const s = (l, f) => l?.id === f?.id;
    return wh(
      this.mapInstance.queryRenderedFeatures(e).map((l) => {
        const f = this.convertToGeoJsonImportFeature(l);
        return f ? {
          id: l.properties[qt],
          sourceName: l.source,
          geoJson: f
        } : null;
      }),
      s
    ).filter((l) => !!l && l.id !== void 0 && l.geoJson && r.includes(l.sourceName));
  }
  convertToGeoJsonImportFeature(e) {
    const r = e.properties[qt];
    return r === void 0 || e.geometry.type === "GeometryCollection" ? null : {
      id: r,
      type: "Feature",
      properties: e.properties,
      geometry: e.geometry
    };
  }
  addSource(e, r) {
    return new Xf({ gm: this.gm, sourceId: e, geoJson: r });
  }
  getSource(e) {
    return new Xf({ gm: this.gm, sourceId: e });
  }
  addLayer(e) {
    const r = e.id;
    return new wu({ gm: this.gm, layerId: r, options: e });
  }
  getLayer(e) {
    return this.mapInstance.getLayer(e) ? new wu({ gm: this.gm, layerId: e }) : null;
  }
  removeLayer(e) {
    const r = this.getLayer(e);
    r && r.remove();
  }
  eachLayer(e) {
    this.mapInstance.getStyle().layers.forEach((r) => {
      e(new wu({ gm: this.gm, layerId: r.id }));
    });
  }
  createDomMarker(e, r) {
    return new eI({
      mapInstance: this.mapInstance,
      options: e,
      lngLat: r
    });
  }
  createPopup(e, r) {
    return new nI({
      mapInstance: this.mapInstance,
      options: e,
      lngLat: r
    });
  }
  project(e) {
    const r = this.mapInstance.project(e);
    return [r.x, r.y];
  }
  unproject(e) {
    const r = this.mapInstance.unproject(e);
    return [r.lng, r.lat];
  }
  coordBoundsToScreenBounds(e) {
    const r = new gl.LngLatBounds(e), s = this.project(r.getSouthWest().toArray()), u = this.project(r.getNorthEast().toArray());
    return [s, u];
  }
  fire(e, r) {
    this.mapInstance.fire(e, r);
  }
  on(e, r, s) {
    if (typeof r == "string" && s && ku(e))
      this.mapInstance.on(e, r, s);
    else if (typeof r == "function")
      this.mapInstance.on(e, r);
    else
      throw new Error("Invalid arguments passed to 'on' method");
  }
  once(e, r, s) {
    if (typeof r == "string" && s && ku(e))
      this.mapInstance.once(e, r, s);
    else if (typeof r == "function")
      this.mapInstance.once(e, r);
    else
      throw new Error("Invalid arguments passed to 'once' method.");
  }
  off(e, r, s) {
    if (typeof r == "string" && s && ku(e))
      this.mapInstance.off(e, r, s);
    else if (typeof r == "function")
      this.mapInstance.off(e, r);
    else
      throw new Error("Invalid arguments passed to 'off' method");
  }
}
const sI = (t, e) => new iI(e, t), aI = (t, e) => {
  if (!Array.isArray(t) || !Array.isArray(e))
    return;
  if (e.some((u) => !Wk(u))) {
    te.warn("Wrong partial layer detected for layer styles");
    return;
  }
  const r = kE(t, "type"), s = uE(e, "type");
  if (Object.values(s).some((u) => u > 1))
    throw new Error(
      'Multiple layers for the same shape are detected. Use "useDefaultLayers: false" and define layers manually.'
    );
  return e.forEach((u) => {
    r[u.type] ? SE(r[u.type], u) : r[u.type] = $t(u);
  }), yE(r);
};
class oI {
  gm;
  settings;
  controls;
  layerStyles;
  constructor(e, r) {
    this.gm = e;
    const s = this.getMergedOptions(r);
    this.settings = s.settings, this.controls = s.controls, this.layerStyles = s.layerStyles;
  }
  getMergedOptions(e = {}) {
    const r = Pu();
    return typeof e.settings?.controlsUiEnabledByDefault == "boolean" && (r.settings.controlsUiEnabledByDefault = e.settings.controlsUiEnabledByDefault), UE(r), dE(r, e, aI);
  }
  enableMode(e, r) {
    const s = this.isModeEnabled(e, r), u = this.isModeAvailable(e, r);
    if (u || te.warn(`Unable to enable mode, "${e}:${r}" is not available`), s || !u)
      return;
    const f = this.controls[e][r];
    f ? (f.active = !0, this.fireModeEvent(e, r, "mode_start"), this.fireControlEvent(e, r, "on"), this.fireModeEvent(e, r, "mode_started")) : te.error("Can't find control section for", e, r);
  }
  disableMode(e, r) {
    const s = this.isModeEnabled(e, r), u = this.isModeAvailable(e, r);
    if (!s || !u)
      return;
    const f = this.controls[e][r];
    f ? (f.active = !1, this.fireModeEvent(e, r, "mode_end"), this.fireControlEvent(e, r, "off"), this.fireModeEvent(e, r, "mode_ended")) : te.error("Can't find control section for", e, r);
  }
  syncModeState(e, r) {
    const u = this.controls[e][r], l = this.isModeAvailable(e, r);
    u && (l ? u.active ? this.enableMode(e, r) : this.disableMode(e, r) : (console.log(`Not available mode: ${e}:${r}`), u.active = !1, u.uiEnabled = !1));
  }
  toggleMode(e, r) {
    this.isModeEnabled(e, r) ? this.disableMode(e, r) : this.enableMode(e, r);
  }
  isModeEnabled(e, r) {
    return !!Object.entries(this.gm.actionInstances).find(([s, u]) => s === `${e}__${r}` && u);
  }
  isModeAvailable(e, r) {
    return e === "draw" && Cr(r, Fd) ? !!this.gm.drawClassMap[r] : e === "edit" && Cr(r, Bd) ? !!this.gm.editClassMap[r] : e === "helper" && Cr(r, Gd) ? !!this.gm.helperClassMap[r] : !1;
  }
  getControlOptions({
    modeType: e,
    modeName: r
  }) {
    return e && r && this.controls[e][r] || null;
  }
  fireModeEvent(e, r, s) {
    const u = {
      name: `${ae}:${r}:mode`,
      level: "system",
      actionType: e,
      mode: r,
      action: s
    };
    sc(u) && (Kl(u) ? this.gm.events.fire(`${ae}:${e}`, u) : Qi(u) ? this.gm.events.fire(`${ae}:${e}`, u) : jl(u) ? this.gm.events.fire(`${ae}:${e}`, u) : te.warn("Unknown mode event: ", u));
  }
  fireControlEvent(e, r, s) {
    const u = {
      name: `${ae}:control:switch`,
      level: "system",
      actionType: "control",
      section: e,
      mode: r,
      action: s
    };
    this.gm.events.fire(`${ae}:control`, u);
  }
}
class uI {
  gm;
  marker = null;
  tmpMarker = null;
  snapping = !1;
  oldSnapping = void 0;
  constructor(e) {
    this.gm = e, this.initEventHandlers();
  }
  get snappingHelper() {
    return this.gm.actionInstances.helper__snapping || null;
  }
  initEventHandlers() {
    this.throttledMethods = ci(
      {
        onMouseMove: this.onMouseMove
      },
      this,
      this.gm.options.settings.throttlingDelay
    ), this.eventHandlers = {
      mousemove: this.throttledMethods.onMouseMove.bind(this)
    };
  }
  setSnapping(e) {
    if (e && !this.snappingHelper) {
      te.error("MarkerPointer: snapping is not available");
      return;
    }
    this.snapping = e;
  }
  pauseSnapping() {
    this.oldSnapping !== void 0 && te.error("MarkerPointer: snapping is already paused"), this.oldSnapping = this.snapping, this.setSnapping(!1);
  }
  resumeSnapping() {
    this.oldSnapping === void 0 ? (te.error("MarkerPointer: resumeSnapping is called before pauseSnapping"), this.setSnapping(!0)) : (this.setSnapping(this.oldSnapping), this.oldSnapping = void 0);
  }
  enable({ lngLat: e, customMarker: r, invisibleMarker: s } = {
    lngLat: [0, 0],
    customMarker: void 0,
    invisibleMarker: !1
  }) {
    if (!Hk()) {
      if (r && s)
        throw new Error("MarkerPointer: customMarker and invisibleMarker can't be used together");
      if (this.marker)
        throw new Error("MarkerPointer: marker is already enabled");
      this.gm.events.bus.attachEvents(this.eventHandlers), s ? this.marker = this.createInvisibleMarker(e || [0, 0]) : this.marker = r || this.createMarker(e || [0, 0]), this.gm.getActiveDrawModes().length && this.gm.mapAdapter.setCursor("crosshair");
    }
  }
  disable() {
    this.marker && (this.gm.events.bus.detachEvents(this.eventHandlers), this.marker.remove(), this.marker = null), this.gm.mapAdapter.setCursor("");
  }
  createMarker(e = [0, 0]) {
    return this.gm.mapAdapter.createDomMarker(
      {
        anchor: "center",
        element: this.gm.createSvgMarkerElement("control", { pointerEvents: "none" })
      },
      e
    );
  }
  createInvisibleMarker(e = [0, 0]) {
    const r = document.createElement("div");
    return r.style.width = "0px", r.style.height = "0px", this.gm.mapAdapter.createDomMarker(
      {
        anchor: "center",
        element: r
      },
      e
    );
  }
  onMouseMove(e) {
    if (Ke(e, { warning: !0 }) && this.marker)
      if (this.snapping && this.snappingHelper) {
        const r = [e.point.x, e.point.y], s = this.snappingHelper.getSnappedLngLat(e.lngLat.toArray(), r);
        this.marker.setLngLat(s);
      } else
        this.marker.setLngLat(e.lngLat.toArray());
    return { next: !0 };
  }
  syncTmpMarker(e) {
    this.tmpMarker || (this.tmpMarker = this.createMarker(e)), this.tmpMarker.setLngLat(e);
  }
}
const TI = {
  type: "Feature",
  properties: {
    shape: "polygon"
  },
  geometry: {
    type: "MultiPolygon",
    coordinates: [
      [
        [
          [4, 51.2],
          [5.4, 52.4],
          [6.8, 51.2],
          [4, 51.2]
        ]
      ]
    ]
  }
}, LI = {
  type: "Feature",
  properties: {
    shape: "rectangle"
  },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-0.47, 51.67],
        [1.43, 51.67],
        [1.43, 53.32],
        [-0.47, 53.32],
        [-0.47, 51.67]
      ]
    ]
  }
}, CI = (t) => Mn(t) && t.name === `${ae}:feature:before_create`, NI = (t) => Mn(t) && t.name === `${ae}:feature:before_update`, lI = ["mode_start", "mode_started", "mode_end", "mode_ended"], sc = (t) => Mn(t) && Cr(t.action, lI), cI = (t) => t.length > 0;
function hI(t, e = {}) {
  const r = [];
  if (Rr(t, (u) => {
    r.push(u.coordinates);
  }), r.length < 2)
    throw new Error("Must have at least 2 geometries");
  const s = pM(r[0], ...r.slice(1));
  return s.length === 0 ? null : s.length === 1 ? hr(s[0], e.properties) : Ul(s, e.properties);
}
var fI = hI;
class PI extends es {
  features = [];
  featureData = null;
  eventHandlers = {
    click: this.onMouseClick.bind(this)
  };
  onStartAction() {
  }
  onEndAction() {
    this.features.forEach((e) => {
      e.changeSource({ sourceName: K.main, atomic: !0 });
    }), this.features = [];
  }
  onMouseClick(e) {
    if (!Ke(e))
      return { next: !0 };
    if (this.unselectFeature(e))
      return { next: !0 };
    const s = this.getAllowedFeatureByMouseEvent({ event: e, sourceNames: [K.main] });
    return s && this.isFeatureAllowedToGroup(s) && (s.changeSource({ sourceName: K.temporary, atomic: !0 }), this.features.push(s)), this.features.length > 1 ? (this.groupFeatures(), { next: !0 }) : { next: !0 };
  }
  unselectFeature(e) {
    const r = this.getAllowedFeatureByMouseEvent({
      event: e,
      sourceNames: [K.temporary]
    });
    if (r) {
      const s = this.features.findIndex((u) => u === r);
      return s > -1 && this.features.splice(s, 1), r.changeSource({ sourceName: K.main, atomic: !0 }), !0;
    }
    return !1;
  }
  getAllowedFeatureByMouseEvent({
    event: e,
    sourceNames: r
  }) {
    const s = this.getFeatureByMouseEvent({ event: e, sourceNames: r });
    return s && this.allowedShapeTypes.includes(s.shape) ? s : null;
  }
  isFeatureAllowedToGroup(e) {
    if (!this.allowedShapeTypes.includes(e.shape))
      return !1;
    if (this.features.length === 0)
      return !0;
    const r = e.getGeoJson();
    return this.features.every(
      (s) => bp(s.getGeoJson(), r)
    );
  }
  groupFeatures() {
    if (!this.features.length) {
      te.error("BaseGroupEdit.groupFeatures: no features to group");
      return;
    }
    const e = {
      type: "FeatureCollection",
      features: this.features.map((s) => {
        const u = s.getGeoJson();
        return ["Polygon", "MultiPolygon"].includes(u.geometry.type) ? u : null;
      }).filter((s) => !!s)
    };
    let r = null;
    if (this.mode === "union" ? r = fI(e) : this.mode === "difference" && (r = Pp(e)), r) {
      const s = this.gm.features.createFeature({
        shapeGeoJson: {
          ...r,
          properties: {
            ...r.properties,
            shape: "polygon"
          }
        },
        sourceName: K.main
      });
      this.features.forEach((u) => {
        this.gm.features.delete(u);
      }), s && cI(this.features) && this.fireFeatureUpdatedEvent({
        sourceFeatures: this.features,
        targetFeatures: [s]
      }), this.features = [];
    }
  }
}
class gI {
  mapAdapterInstance = null;
  globalLngLatBounds = this.getGlobalLngLatBounds();
  features;
  loaded = !1;
  destroyed = !1;
  options;
  events;
  control;
  actionInstances = {};
  markerPointer;
  constructor(e, r = {}) {
    this.options = this.initCoreOptions(r), this.events = this.initCoreEvents(), this.features = this.initCoreFeatures(), this.control = this.initCoreControls(), this.markerPointer = this.initMarkerPointer();
    const s = Object.assign(e, { gm: this });
    this.mapAdapterInstance = sI(this, s), this.waitForBaseMap().then(this.init.bind(this)).catch((u) => {
      te.error("Geoman initialization failed:", u), this.destroy();
    });
  }
  get drawClassMap() {
    return Ku;
  }
  get editClassMap() {
    return hl;
  }
  get helperClassMap() {
    return fl;
  }
  get mapAdapter() {
    if (this.mapAdapterInstance)
      return this.mapAdapterInstance;
    throw te.trace("Map adapter is not initialized"), new Error("Map adapter is not initialized");
  }
  initCoreOptions(e = {}) {
    return new oI(this, e);
  }
  initCoreEvents() {
    return new XM(this);
  }
  initCoreFeatures() {
    return new ZM(this);
  }
  initCoreControls() {
    return new uk(this);
  }
  initMarkerPointer() {
    return new uI(this);
  }
  addControls(e = void 0) {
    return new Promise((r) => {
      (async () => {
        e ? this.control.createControls(e) : this.mapAdapter.addControl(this.control), await this.onMapLoad(), r();
      })().then();
    });
  }
  async waitForBaseMap() {
    const e = this.mapAdapter.mapInstance;
    if (!Vk(e)) {
      te.error('Map instance does not have a "once" method', e);
      return;
    }
    return this.mapAdapter.isLoaded() || await tf(
      new Promise((r) => {
        const s = () => r(e);
        e.once("load", s), this.mapAdapter.isLoaded() && (e.off("load", s), r(e));
      }),
      "waitForBaseMap failed"
    ), e;
  }
  async waitForGeomanLoaded() {
    if (this.loaded)
      return this;
    if (this.destroyed)
      return;
    const e = await this.waitForBaseMap();
    if (!e) {
      te.error("Map instance is not available", e);
      return;
    }
    const r = `${ut}:loaded`;
    return await tf(
      new Promise((s) => {
        const u = () => s(this);
        e.once(r, u), this.loaded && (e.off(r, u), s(this));
      }),
      "waitForGeomanLoaded failed"
    ), this;
  }
  async init() {
    this.destroyed || (this.features.init(), !this.destroyed && await this.addControls());
  }
  /**
   * Destroys the Geoman instance and cleans up resources.
   *
   * This method can be called at any point in the lifecycle:
   * - Before initialization completes: cancels pending init and cleans up synchronously
   * - After initialization completes: performs full cleanup including controls
   *
   * For React StrictMode compatibility, this method performs synchronous cleanup
   * of the `gm` reference on the map instance, allowing immediate re-initialization.
   */
  async destroy({ removeSources: e } = { removeSources: !1 }) {
    if (this.destroyed = !0, this.mapAdapterInstance && "gm" in this.mapAdapterInstance.mapInstance && delete this.mapAdapterInstance.mapInstance.gm, this.loaded ? (this.removeControls(), this.mapAdapter.removeImage("default-marker")) : this.events.bus.detachAllEvents(), e)
      for (const r of Object.values(this.features.sources))
        r && r.remove();
  }
  removeControls() {
    this.disableAllModes(), this.mapAdapter.removeControl(this.control);
  }
  async onMapLoad() {
    if (this.loaded || this.destroyed || (await this.mapAdapter.loadImage({
      id: "default-marker",
      image: Lm
    }), this.destroyed))
      return;
    const e = {
      name: `${ae}:control:load`,
      level: "system",
      actionType: "control",
      action: "loaded"
    };
    this.events.fire(`${ae}:control`, e), this.loaded = !0;
  }
  disableAllModes() {
    et(this.actionInstances).forEach((e) => {
      const [r, s] = e.split("__");
      D2(r) && U2(s) && this.options.disableMode(r, s);
    });
  }
  getActiveDrawModes() {
    return et(this.actionInstances).map((e) => {
      const r = this.actionInstances[e];
      return r instanceof yr ? r.mode : null;
    }).filter((e) => e !== null);
  }
  getActiveEditModes() {
    return et(this.actionInstances).map((e) => {
      const r = this.actionInstances[e];
      return r instanceof es ? r.mode : null;
    }).filter((e) => e !== null);
  }
  getActiveHelperModes() {
    return et(this.actionInstances).map((e) => {
      const r = this.actionInstances[e];
      return r instanceof Dr ? r.mode : null;
    }).filter((e) => e !== null);
  }
  getGlobalLngLatBounds() {
    const e = 85.051129;
    return [
      [-179.99999, -e],
      [179.99999, e]
    ];
  }
  setGlobalEventsListener(e = null) {
    this.events.bus.forwarder.globalEventsListener = e;
  }
  createSvgMarkerElement(e, r = void 0) {
    const s = this.options.settings.markerIcons;
    s[e] || te.error(`createMarkerElement: marker type "${e}" not found`);
    const u = document.createElement("div");
    u.classList.add("marker-wrapper"), u.style.lineHeight = "0", u.innerHTML = s[e] || "NO_ICON";
    const l = u.firstChild;
    if (typeof l != "object")
      throw te.error(`createMarkerElement: no icon "${e}" found`), new Error(`No icon "${e}" found`);
    return r && Object.assign(l.style, r), u;
  }
  enableMode(e, r) {
    this.options.enableMode(e, r);
  }
  disableMode(e, r) {
    this.options.disableMode(e, r);
  }
  toggleMode(e, r) {
    this.options.toggleMode(e, r);
  }
  isModeEnabled(e, r) {
    return this.options.isModeEnabled(e, r);
  }
  // helper methods for compatibility with the old API
  // draw (draw:*)
  enableDraw(e) {
    this.options.enableMode("draw", e);
  }
  disableDraw() {
    this.getActiveDrawModes().forEach((e) => this.options.disableMode("draw", e));
  }
  toggleDraw(e) {
    this.options.toggleMode("draw", e);
  }
  drawEnabled(e) {
    return this.options.isModeEnabled("draw", e);
  }
  // drag(edit:drag)
  enableGlobalDragMode() {
    this.options.enableMode("edit", "drag");
  }
  disableGlobalDragMode() {
    this.options.disableMode("edit", "drag");
  }
  toggleGlobalDragMode() {
    this.options.toggleMode("edit", "drag");
  }
  globalDragModeEnabled() {
    return this.options.isModeEnabled("edit", "drag");
  }
  // edit (edit:change)
  enableGlobalEditMode() {
    this.options.enableMode("edit", "change");
  }
  disableGlobalEditMode() {
    this.options.disableMode("edit", "change");
  }
  toggleGlobalEditMode() {
    this.options.toggleMode("edit", "change");
  }
  globalEditModeEnabled() {
    return this.options.isModeEnabled("edit", "change");
  }
  // rotate (edit:rotate)
  enableGlobalRotateMode() {
    this.options.enableMode("edit", "rotate");
  }
  disableGlobalRotateMode() {
    this.options.disableMode("edit", "rotate");
  }
  toggleGlobalRotateMode() {
    this.options.toggleMode("edit", "rotate");
  }
  globalRotateModeEnabled() {
    return this.options.isModeEnabled("edit", "rotate");
  }
  // cut (edit:cut)
  enableGlobalCutMode() {
    this.options.enableMode("edit", "cut");
  }
  disableGlobalCutMode() {
    this.options.disableMode("edit", "cut");
  }
  toggleGlobalCutMode() {
    this.options.toggleMode("edit", "cut");
  }
  globalCutModeEnabled() {
    return this.options.isModeEnabled("edit", "cut");
  }
  // remove (edit:delete)
  enableGlobalRemovalMode() {
    this.options.enableMode("edit", "delete");
  }
  disableGlobalRemovalMode() {
    this.options.disableMode("edit", "delete");
  }
  toggleGlobalRemovalMode() {
    this.options.toggleMode("edit", "delete");
  }
  globalRemovalModeEnabled() {
    return this.options.isModeEnabled("edit", "delete");
  }
}
const OI = async (t, e) => {
  const r = new gI(t, e);
  if (!await r.waitForGeomanLoaded() || r.destroyed)
    throw new Error("Geoman initialization failed");
  return r;
};
export {
  Zl as BaseAction,
  Bl as BaseDomMarker,
  ic as BaseDrag,
  yr as BaseDraw,
  es as BaseEdit,
  PI as BaseGroupEdit,
  Dr as BaseHelper,
  QM as BaseLayer,
  KM as BaseMapAdapter,
  tI as BasePopup,
  jM as BaseSource,
  Fd as DRAW_MODES,
  Bd as EDIT_MODES,
  pk as EXTRA_DRAW_MODES,
  qt as FEATURE_ID_PROPERTY,
  vt as FEATURE_PROPERTY_PREFIX,
  Gs as FeatureData,
  ut as GM_PREFIX,
  gI as Geoman,
  oI as GmOptions,
  Gd as HELPER_MODES,
  at as IS_PRO,
  tc as LineDrawer,
  uI as MarkerPointer,
  ir as SHAPE_NAMES,
  K as SOURCES,
  YM as ShapeMarkersHelper,
  vI as boundsContains,
  Nk as boundsToBBox,
  yI as calculatePerimeter,
  wt as controlIcons,
  _I as convertToLineStringFeatureCollection,
  ci as convertToThrottled,
  OI as createGeomanInstance,
  LI as customShapeRectangle,
  TI as customShapeTriangle,
  av as defaultLayerStyles,
  Ku as drawClassMap,
  ia as eachCoordinateWithPath,
  $l as eachSegmentWithPath,
  hl as editClassMap,
  Ck as findCoordinateWithPath,
  AI as formatArea,
  bI as formatDistance,
  Zu as geoJsonPointToLngLat,
  Ua as getEuclideanDistance,
  Rk as getEuclideanSegmentNearestPoint,
  lu as getGeoJsonCoordinatesCount,
  ep as getGeoJsonFirstPoint,
  uu as getLngLatDiff,
  fl as helperClassMap,
  Cr as includesWithType,
  SI as isActionType,
  wI as isBaseMapEventName,
  F2 as isDrawModeName,
  G2 as isEditModeName,
  Zh as isEqualPosition,
  Pa as isGeoJsonFeatureInPolygon,
  Od as isGmControlEvent,
  Kl as isGmDrawEvent,
  EI as isGmDrawFreehandDrawerEvent,
  rp as isGmDrawLineDrawerEvent,
  np as isGmDrawShapeEvent,
  Qi as isGmEditEvent,
  Mn as isGmEvent,
  CI as isGmFeatureBeforeCreateEvent,
  NI as isGmFeatureBeforeUpdateEvent,
  jl as isGmHelperEvent,
  sc as isGmModeEvent,
  B2 as isHelperModeName,
  Ke as isMapPointerEvent,
  Vk as isMapWithOnceMethod,
  U2 as isModeName,
  Jl as isMultiPolygonFeature,
  cI as isNonEmptyArray,
  xI as isPointerEventName,
  Hl as isPolygonFeature,
  Uk as lngLatToGeoJsonPoint,
  aI as mergeByTypeCustomizer,
  II as moveFeatureData,
  FS as moveGeoJson,
  YS as toMod,
  mI as twoCoordsToLineString,
  et as typedKeys
};
//# sourceMappingURL=maplibre-geoman.es.js.map
